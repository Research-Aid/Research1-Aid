// =============================================
// Najar & Co — Google Apps Script (Updated)
// Extensions > Apps Script > Paste > Deploy
// =============================================

// ── Folder name in your Google Drive ──
var DRIVE_FOLDER_NAME = 'ResrchAid Orders';
var APP_VERSION = 'RA-2026-04-21-1';

function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) ? String(e.parameter.action) : '';
  if (action === 'listExpertApplications') {
    return listExpertApplications();
  }
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', version: APP_VERSION }))
    .setMimeType(ContentService.MimeType.JSON);
}

function listExpertApplications() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('EXPERT_APPLICATION');
    if (!sheet || sheet.getLastRow() < 2) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', version: APP_VERSION, data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var values = sheet.getDataRange().getValues();
    var rows = [];
    for (var i = 1; i < values.length; i++) {
      var r = values[i];
      rows.push({
        timestamp:            r[0] || '',
        applicationId:        r[1] || '',
        fullName:             r[2] || '',
        name:                 r[2] || '',
        email:                r[3] || '',
        phone:                r[4] || '',
        cityState:            r[5] || '',
        qualification:        r[6] || '',
        experienceYears:      r[7] || '',
        branch:               r[8] || '',
        availability:         r[9] || '',
        subjects:             r[10] || '',
        tools:                r[11] || '',
        academicProfile:      r[12] || '',
        statement:            r[13] || '',
        linkedin:             r[14] || '',
        portfolio:            r[15] || '',
        resumeUrl:            r[16] || '',
        photoUrl:             r[17] || '',
        signatureUrl:         r[18] || '',
        instituteIdUrl:       r[19] || '',
        qualificationDocUrl:  r[20] || '',
        status:               r[21] || 'Applied',
        adminNote:            r[22] || ''
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', version: APP_VERSION, data: rows }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err), version: APP_VERSION }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function safeJsonParse(raw) {
  if (!raw) return {};
  try { return JSON.parse(raw); } catch (e1) {}
  try {
    var cleaned = String(raw).trim();
    if (cleaned[0] === '"' && cleaned[cleaned.length - 1] === '"') {
      cleaned = cleaned.slice(1, -1).replace(/\\"/g, '"');
    }
    return JSON.parse(cleaned);
  } catch (e2) {
    return { _parseError: true, _raw: String(raw).slice(0, 300) };
  }
}

function doPost(e) {
  var ss   = SpreadsheetApp.getActiveSpreadsheet();
  var data = safeJsonParse(e && e.postData ? e.postData.contents : '');
  if (data._parseError) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid JSON payload', version: APP_VERSION }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  var type = data.type || 'ORDER';

  // ── Handle file upload separately ──
  if (type === 'FILE_UPLOAD') {
    return handleFileUpload(data);
  }

  var sheet = ss.getSheetByName(type) || ss.insertSheet(type);

  // ── Create headers on first row ──
  if (sheet.getLastRow() === 0) {
    if (type === 'ORDER') {
      sheet.appendRow([
        'Timestamp','Order ID','Name','Email','WhatsApp',
        'Service','Subject / Discipline','University',
        'Deadline','Requirements','File Link',
        'UTR / Transaction ID','Amount Paid (₹)',
        'Payment Status','Admin Notes','Delivery Status'
      ]);
      formatHeader(sheet, 1, 16, '#4f46e5');
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1,  160);
      sheet.setColumnWidth(2,  140);
      sheet.setColumnWidth(3,  140);
      sheet.setColumnWidth(6,  220);
      sheet.setColumnWidth(10, 260);
      sheet.setColumnWidth(11, 200);
      sheet.setColumnWidth(14, 130);
      sheet.setColumnWidth(15, 180);
      sheet.setColumnWidth(16, 140);
    }
    else if (type === 'FEEDBACK') {
      sheet.appendRow(['Timestamp','Name','Contact','Service','Rating','Message','Recommend']);
      formatHeader(sheet, 1, 7, '#06b6d4');
      sheet.setFrozenRows(1);
    }
    else if (type === 'GRIEVANCE') {
      sheet.appendRow(['Timestamp','Name','Contact','Order ID','Issue Type','Message','Expected Resolution','Status']);
      formatHeader(sheet, 1, 8, '#ef4444');
      sheet.setFrozenRows(1);
    }
    else if (type === 'SUGGESTION') {
      sheet.appendRow(['Timestamp','Name','Email','Category','Message','Status']);
      formatHeader(sheet, 1, 6, '#10b981');
      sheet.setFrozenRows(1);
    }
    else if (type === 'EXPERT_APPLICATION') {
      sheet.appendRow([
        'Timestamp','Application ID','Full Name','Email','Phone','City/State',
        'Qualification','Experience (Years)','Branch','Availability','Subjects',
        'Tools','Academic Profile','Statement','LinkedIn','Portfolio',
        'Resume URL','Photo URL','Signature URL','Institute ID URL','Qualification Proof URL',
        'Status','Admin Note'
      ]);
      formatHeader(sheet, 1, 23, '#7c3aed');
      sheet.setFrozenRows(1);
    }
  }

  // ── Append data ──
  var now = new Date();

  if (type === 'ORDER') {
    var newRow = sheet.getLastRow() + 1;
    sheet.appendRow([
      now,
      data.orderId      || '',
      data.name         || '',
      data.email        || '',
      data.phone        || '',
      data.service      || '',
      data.subject      || '',
      data.university   || '',
      data.deadline     || '',
      data.requirements || '',
      data.fileLink     || '',
      data.refNo        || '',
      data.amountPaid   || '',
      'PENDING ⏳',
      '',
      'NOT STARTED'
    ]);
    sheet.getRange(newRow, 1, 1, 16).setBackground('#fef9c3');
    sheet.getRange(newRow, 2).setFontWeight('bold');
  }

  else if (type === 'FEEDBACK') {
    var stars = '';
    for (var i = 0; i < parseInt(data.rating || 0); i++) stars += '★';
    sheet.appendRow([now, data.name||'', data.contact||'', data.service||'', stars, data.message||'', data.recommend||'']);
  }

  else if (type === 'GRIEVANCE') {
    var gRow = sheet.getLastRow() + 1;
    sheet.appendRow([now, data.name||'', data.contact||'', data.orderId||'', data.issueType||'', data.message||'', data.resolution||'', 'OPEN 🔴']);
    sheet.getRange(gRow, 1, 1, 8).setBackground('#fee2e2');
    sheet.getRange(gRow, 8).setFontWeight('bold');
  }

  else if (type === 'SUGGESTION') {
    sheet.appendRow([now, data.name||'Anonymous', data.email||'', data.category||'', data.message||'', 'NEW 💡']);
  }

  else if (type === 'EXPERT_APPLICATION') {
    var eRow = sheet.getLastRow() + 1;
    var fullName = data.fullName || data.name || '';
    var subjects = data.subjects || data.specialization || '';
    var resumeUrl = data.resumeUrl || '';
    var photoUrl = data.photoUrl || '';
    var signatureUrl = data.signatureUrl || '';
    var instituteIdUrl = data.instituteIdUrl || '';
    var qualificationDocUrl = data.qualificationDocUrl || '';

    sheet.appendRow([
      now,
      data.applicationId      || '',
      fullName,
      data.email              || '',
      data.phone              || '',
      data.cityState          || '',
      data.qualification      || '',
      data.experienceYears    || '',
      data.branch             || '',
      data.availability       || '',
      subjects,
      data.tools              || '',
      data.academicProfile    || '',
      data.statement          || '',
      data.linkedin           || '',
      data.portfolio          || '',
      resumeUrl,
      photoUrl,
      signatureUrl,
      instituteIdUrl,
      qualificationDocUrl,
      data.status             || 'Applied',
      data.adminNote          || ''
    ]);
    sheet.getRange(eRow, 1, 1, 23).setBackground('#f5f3ff');
    sheet.getRange(eRow, 2).setFontWeight('bold');
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success', version: APP_VERSION }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── File upload handler: saves to Google Drive, returns file URL ──
function handleFileUpload(data) {
  try {
    var folder = getOrCreateFolder(DRIVE_FOLDER_NAME);

    // Sub-folder per order ID
    var subFolderName = (data.orderId || 'unknown') + ' — ' + (data.name || 'client');
    var subFolder = getOrCreateFolder(subFolderName, folder);

    var fileData    = data.fileData;   // base64 string
    var fileName    = data.fileName || 'upload';
    var mimeType    = data.mimeType || 'application/octet-stream';

    var decoded  = Utilities.base64Decode(fileData);
    var blob     = Utilities.newBlob(decoded, mimeType, fileName);
    var file     = subFolder.createFile(blob);

    // Make file viewable by anyone with the link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var fileUrl = file.getUrl();

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', fileUrl: fileUrl, version: APP_VERSION }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString(), version: APP_VERSION }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Helper: get or create a Drive folder ──
function getOrCreateFolder(name, parent) {
  var search = parent
    ? parent.getFoldersByName(name)
    : DriveApp.getFoldersByName(name);
  if (search.hasNext()) return search.next();
  return parent ? parent.createFolder(name) : DriveApp.createFolder(name);
}

// ── Helper: style header row ──
function formatHeader(sheet, startCol, numCols, color) {
  sheet.getRange(1, startCol, 1, numCols)
       .setBackground(color)
       .setFontColor('#ffffff')
       .setFontWeight('bold')
       .setHorizontalAlignment('center');
}
