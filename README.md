[index.html](https://github.com/user-attachments/files/26954286/index.html)
# Research1-Aid<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Research Aid – Academic Research Assistance Services</title>
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  <style>
    :root {
      --primary: #4f46e5;
      --primary-dark: #3730a3;
      --secondary: #06b6d4;
      --accent: #f59e0b;
      --success: #10b981;
      --danger: #ef4444;
      --dark: #0f172a;
      --text: #1e293b;
      --muted: #64748b;
      --bg: #f8fafc;
      --card: #ffffff;
      --border: #e2e8f0;
      --radius: 16px;
      --shadow: 0 4px 24px rgba(79,70,229,0.10);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: var(--text); }

    /* ── ANNOUNCEMENT ── */
    .announcement {
      background: linear-gradient(90deg, #4f46e5, #0891b2);
      color: #fff; overflow: hidden; white-space: nowrap;
      padding: 0; font-size: .88rem; font-weight: 500;
      position: relative; z-index: 101;
    }
    .announcement-track {
      display: inline-flex; align-items: center; gap: 0;
      animation: ticker 28s linear infinite;
    }
    .announcement:hover .announcement-track { animation-play-state: paused; }
    .announcement-item {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 48px;
      border-right: 1px solid rgba(255,255,255,.2);
    }
    .announcement-item .tag {
      background: #fbbf24; color: #1e1b4b;
      padding: 2px 10px; border-radius: 50px;
      font-size: .75rem; font-weight: 800; letter-spacing: .4px;
    }
    .announcement-item .tag.nit {
      background: #10b981; color: #fff;
      animation: pulse-tag 1.4s ease-in-out infinite;
    }
    @keyframes pulse-tag {
      0%,100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .announcement strong { color: #fde68a; }

    /* ── NAV ── */
    nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0 5%;
      display: flex; align-items: center; justify-content: space-between;
      height: 64px;
    }
    .nav-logo { font-size: 1.35rem; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; text-decoration: none; }
    .nav-logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 20px; list-style: none; }
    .nav-links a { text-decoration: none; color: var(--muted); font-size: .88rem; font-weight: 500; transition: color .2s; }
    .nav-links a:hover { color: var(--primary); }
    .nav-cta {
      background: var(--primary); color: #fff; border: none;
      padding: 9px 22px; border-radius: 50px; font-size: .88rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
      text-decoration: none; display: inline-block;
    }
    .nav-cta:hover { background: var(--primary-dark); }
    .nav-contact {
      color: var(--primary); border: 2px solid var(--primary);
      padding: 7px 18px; border-radius: 50px; font-size: .88rem;
      font-weight: 700; cursor: pointer; transition: background .2s, color .2s;
      text-decoration: none; display: inline-block;
    }
    .nav-contact:hover { background: var(--primary); color: #fff; }
    .hamburger { display: none; font-size: 1.5rem; cursor: pointer; color: var(--primary); background: none; border: none; }

    /* ── HERO ── */
    .hero {
      background: linear-gradient(135deg, #4f46e5 0%, #0891b2 100%);
      padding: 90px 5% 80px; text-align: center; color: #fff;
      position: relative; overflow: hidden;
    }
    .hero::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .hero-badge {
      display: inline-block; background: rgba(255,255,255,.18);
      border: 1px solid rgba(255,255,255,.35);
      padding: 5px 16px; border-radius: 50px; font-size: .8rem;
      font-weight: 700; margin-bottom: 20px; letter-spacing: .5px;
    }
    .hero h1 { font-size: clamp(1.9rem, 5vw, 3.2rem); font-weight: 900; line-height: 1.15; margin-bottom: 16px; }
    .hero p { font-size: 1.05rem; opacity: .9; max-width: 580px; margin: 0 auto 32px; line-height: 1.7; }
    .hero-legal {
      display: inline-block; background: rgba(245,158,11,.2); border: 1px solid rgba(245,158,11,.5);
      color: #fde68a; padding: 6px 16px; border-radius: 8px; font-size: .8rem;
      margin-bottom: 28px; line-height: 1.5;
    }
    .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-white {
      background: #fff; color: var(--primary); border: none;
      padding: 13px 32px; border-radius: 50px; font-size: .98rem;
      font-weight: 700; cursor: pointer; transition: transform .2s, box-shadow .2s;
      box-shadow: 0 4px 20px rgba(0,0,0,.18);
    }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.22); }
    .btn-outline-white {
      background: transparent; color: #fff; border: 2px solid rgba(255,255,255,.7);
      padding: 13px 32px; border-radius: 50px; font-size: .98rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .btn-outline-white:hover { background: rgba(255,255,255,.12); }
    .hero-stats { display: flex; gap: 40px; justify-content: center; margin-top: 52px; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-num { font-size: 2rem; font-weight: 900; }
    .stat-label { font-size: .8rem; opacity: .72; margin-top: 2px; }

    /* ── SECTION ── */
    .section { padding: 72px 5%; }
    .section-alt { background: #f1f5f9; }
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-tag {
      display: inline-block; background: #ede9fe; color: var(--primary);
      padding: 4px 14px; border-radius: 50px; font-size: .76rem;
      font-weight: 700; letter-spacing: .6px; text-transform: uppercase; margin-bottom: 12px;
    }
    .section-header h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 800; color: var(--dark); margin-bottom: 12px; }
    .section-header p { color: var(--muted); max-width: 540px; margin: 0 auto; line-height: 1.7; }

    /* ── SERVICES ── */
    .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 22px; }
    .service-card {
      background: var(--card); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 26px 22px;
      transition: transform .25s, box-shadow .25s;
      position: relative; overflow: hidden;
      display: flex; flex-direction: column;
    }
    .service-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: var(--card-accent, var(--primary));
    }
    .service-card:hover { transform: translateY(-6px); box-shadow: 0 14px 44px rgba(79,70,229,.13); }
    .service-icon { font-size: 2.2rem; margin-bottom: 12px; }
    .service-card h3 { font-size: 1rem; font-weight: 800; margin-bottom: 4px; color: var(--dark); }
    .service-legal { font-size: .74rem; color: var(--success); font-weight: 600; margin-bottom: 8px; }
    .service-card p { color: var(--muted); font-size: .88rem; line-height: 1.6; margin-bottom: 14px; flex: 1; }
    .price-tag {
      display: inline-flex; align-items: center; gap: 4px;
      background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0;
      padding: 5px 12px; border-radius: 50px; font-weight: 700; font-size: .86rem;
      margin-bottom: 14px;
    }
    .service-btn {
      display: block; width: 100%;
      background: var(--primary); color: #fff; border: none;
      padding: 11px; border-radius: 10px; font-size: .9rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
      text-align: center; position: relative; z-index: 2;
    }
    .service-btn:hover { background: var(--primary-dark); }
    .service-card { pointer-events: none; }
    .service-card .service-btn { pointer-events: auto; }
    .popular-badge {
      position: absolute; top: 14px; right: 14px;
      background: var(--accent); color: #fff;
      padding: 3px 10px; border-radius: 50px; font-size: .7rem; font-weight: 700;
    }

    /* ── HOW IT WORKS ── */
    .steps { display: flex; gap: 0; justify-content: center; flex-wrap: wrap; }
    .step { text-align: center; flex: 1; min-width: 160px; padding: 0 16px; position: relative; }
    .step:not(:last-child)::after {
      content: '→'; position: absolute; right: -10px; top: 22px;
      font-size: 1.3rem; color: var(--border);
    }
    .step-num {
      width: 52px; height: 52px; border-radius: 50%;
      background: var(--primary); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; font-weight: 800; margin: 0 auto 12px;
    }
    .step h4 { font-size: .95rem; font-weight: 700; margin-bottom: 6px; }
    .step p { color: var(--muted); font-size: .85rem; line-height: 1.5; }

    /* ── PAYMENT ── */
    .payment-portal {
      max-width: 580px; margin: 0 auto;
      background: var(--card); border: 1.5px solid var(--border);
      border-radius: var(--radius); overflow: hidden;
      box-shadow: var(--shadow);
    }
    .payment-header {
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      padding: 28px 32px; color: #fff; text-align: center;
    }
    .payment-header h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 6px; }
    .payment-header p { opacity: .85; font-size: .9rem; }
    .payment-body { padding: 28px 32px; }
    .upi-box {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
      border: 2px dashed var(--secondary); border-radius: 14px;
      padding: 20px; text-align: center; margin-bottom: 20px;
    }
    .upi-label { font-size: .8rem; color: var(--muted); font-weight: 600; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px; }
    .upi-value { font-size: 1.4rem; font-weight: 900; color: var(--primary); letter-spacing: .5px; margin-bottom: 4px; }
    .upi-phone { font-size: .9rem; color: var(--muted); }
    .copy-upi-btn {
      display: inline-flex; align-items: center; gap: 6px; margin-top: 10px;
      background: var(--primary); color: #fff; border: none;
      padding: 8px 20px; border-radius: 50px; font-size: .85rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .copy-upi-btn:hover { background: var(--primary-dark); }
    .upi-apps { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px; }
    .upi-app-btn {
      display: flex; align-items: center; gap: 6px;
      padding: 8px 16px; border: 1.5px solid var(--border);
      border-radius: 50px; background: var(--card);
      font-size: .85rem; font-weight: 600; cursor: pointer;
      transition: all .2s; text-decoration: none; color: var(--text);
    }
    .upi-app-btn:hover { border-color: var(--primary); color: var(--primary); background: #ede9fe; }
    .payment-steps-list { list-style: none; }
    .payment-steps-list li {
      display: flex; align-items: flex-start; gap: 12px;
      padding: 10px 0; border-bottom: 1px solid var(--border); font-size: .88rem;
    }
    .payment-steps-list li:last-child { border: none; }
    .payment-steps-list .step-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

    /* ── FILE SUBMISSION ── */
    .file-portal {
      max-width: 640px; margin: 0 auto;
      background: var(--card); border: 1.5px solid var(--border);
      border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow);
    }
    .file-portal-header {
      background: linear-gradient(135deg, #059669, #06b6d4);
      padding: 24px 32px; color: #fff; text-align: center;
    }
    .file-portal-header h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 4px; }
    .file-portal-header p { opacity: .85; font-size: .88rem; }
    .file-portal-body { padding: 28px 32px; }
    .file-method {
      background: var(--bg); border: 1.5px solid var(--border);
      border-radius: 12px; padding: 18px 20px; margin-bottom: 14px;
      display: flex; align-items: flex-start; gap: 14px;
    }
    .file-method-icon { font-size: 1.8rem; flex-shrink: 0; }
    .file-method h4 { font-size: .95rem; font-weight: 700; margin-bottom: 4px; }
    .file-method p { font-size: .85rem; color: var(--muted); line-height: 1.5; }
    .file-method a {
      display: inline-block; margin-top: 8px;
      background: var(--primary); color: #fff;
      padding: 7px 18px; border-radius: 8px; font-size: .83rem;
      font-weight: 700; text-decoration: none; transition: background .2s;
    }
    .file-method a:hover { background: var(--primary-dark); }
    .file-note {
      background: #fefce8; border: 1px solid #fde047;
      border-radius: 10px; padding: 12px 16px;
      font-size: .83rem; color: #854d0e; line-height: 1.6; margin-top: 16px;
    }

    /* ── ORDER FORM ── */
    .order-section { background: linear-gradient(135deg, #f0f4ff 0%, #e0f7fa 100%); }
    .order-form-card {
      max-width: 700px; margin: 0 auto;
      background: var(--card); border-radius: var(--radius);
      padding: 40px; box-shadow: var(--shadow); border: 1px solid var(--border);
    }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group.full { grid-column: 1 / -1; }
    label { font-size: .86rem; font-weight: 700; color: var(--text); }
    input, select, textarea {
      padding: 10px 14px; border: 1.5px solid var(--border);
      border-radius: 10px; font-size: .93rem; color: var(--text);
      background: var(--bg); transition: border-color .2s, box-shadow .2s;
      font-family: inherit;
    }
    input:focus, select:focus, textarea:focus {
      outline: none; border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(79,70,229,.1);
    }
    textarea { resize: vertical; min-height: 88px; }
    .submit-btn {
      width: 100%; padding: 13px; background: var(--primary); color: #fff;
      border: none; border-radius: 12px; font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background .2s, transform .15s; margin-top: 6px;
    }
    .submit-btn:hover { background: var(--primary-dark); transform: translateY(-1px); }
    .submit-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; }
    .form-note { font-size: .8rem; color: var(--muted); text-align: center; margin-top: 10px; line-height: 1.6; }
    .pay-reminder {
      background: #f0fdf4; border: 1.5px solid #86efac;
      border-radius: 10px; padding: 14px 16px;
      font-size: .85rem; color: #14532d; margin-bottom: 18px; line-height: 1.6;
    }

    /* ── PRICING ── */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 22px; }
    .pricing-card {
      background: var(--card); border: 1.5px solid var(--border);
      border-radius: var(--radius); padding: 30px 24px; text-align: center;
      transition: transform .25s, box-shadow .25s;
    }
    .pricing-card.featured { border-color: var(--primary); background: #f5f3ff; transform: scale(1.03); }
    .pricing-card:hover { transform: translateY(-5px); box-shadow: var(--shadow); }
    .pricing-card.featured:hover { transform: scale(1.03) translateY(-5px); }
    .pricing-icon { font-size: 2.4rem; margin-bottom: 14px; }
    .pricing-card h3 { font-size: 1rem; font-weight: 800; margin-bottom: 8px; color: var(--dark); }
    .pricing-amount { font-size: 2rem; font-weight: 900; color: var(--primary); }
    .pricing-amount sub { font-size: .95rem; font-weight: 600; }
    .pricing-per { color: var(--muted); font-size: .83rem; margin-bottom: 18px; }
    .pricing-features { list-style: none; text-align: left; }
    .pricing-features li {
      padding: 5px 0; font-size: .86rem; color: var(--text);
      display: flex; gap: 8px; align-items: center;
    }
    .pricing-features li::before { content: '✓'; color: var(--success); font-weight: 900; flex-shrink: 0; }
    .pricing-cta {
      display: block; width: 100%; margin-top: 20px;
      padding: 11px; background: var(--primary); color: #fff;
      border: none; border-radius: 10px; font-weight: 700;
      font-size: .92rem; cursor: pointer; transition: background .2s;
    }
    .pricing-cta:hover { background: var(--primary-dark); }

    /* ── TRACK ── */
    .track-box {
      max-width: 500px; margin: 0 auto;
      background: var(--card); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 32px; text-align: center;
    }
    .track-input-row { display: flex; gap: 10px; }
    .track-input-row input { flex: 1; }
    .track-btn {
      padding: 10px 20px; background: var(--primary); color: #fff;
      border: none; border-radius: 10px; font-weight: 700; cursor: pointer;
    }
    .track-result { margin-top: 20px; text-align: left; display: none; }
    .track-step { display: flex; gap: 14px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--border); }
    .track-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--success); flex-shrink: 0; margin-top: 5px; }
    .track-dot.pending { background: var(--border); }

    /* ── TABS (Feedback) ── */
    .tabs { display: flex; gap: 4px; background: #f1f5f9; border-radius: 12px; padding: 4px; margin-bottom: 28px; }
    .tab-btn {
      flex: 1; padding: 9px 12px; border: none; background: transparent;
      border-radius: 9px; font-size: .86rem; font-weight: 600;
      color: var(--muted); cursor: pointer; transition: all .2s;
    }
    .tab-btn.active { background: var(--card); color: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,.08); }
    .tab-pane { display: none; }
    .tab-pane.active { display: block; }
    .radio-group { display: flex; gap: 14px; flex-wrap: wrap; }
    .radio-label { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: .88rem; font-weight: 500; }
    .rating-stars { display: flex; gap: 6px; font-size: 1.8rem; cursor: pointer; }
    .rating-stars span { transition: transform .15s; color: #cbd5e1; }
    .rating-stars span:hover, .rating-stars span.lit { color: var(--accent); transform: scale(1.2); }

    /* ── FAQ ── */
    .faq-list { max-width: 720px; margin: 0 auto; }
    .faq-item { background: var(--card); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 10px; overflow: hidden; }
    .faq-question {
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 20px; cursor: pointer; font-weight: 600; font-size: .93rem; transition: background .2s;
    }
    .faq-question:hover { background: #f8fafc; }
    .faq-icon { font-size: 1.2rem; color: var(--primary); transition: transform .25s; flex-shrink: 0; margin-left: 12px; }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height .35s ease; padding: 0 20px; }
    .faq-answer p { padding-bottom: 16px; color: var(--muted); line-height: 1.7; font-size: .9rem; }
    .faq-item.open .faq-icon { transform: rotate(45deg); }
    .faq-item.open .faq-answer { max-height: 300px; }

    /* ── FOOTER ── */
    footer { background: var(--dark); color: rgba(255,255,255,.72); padding: 52px 5% 24px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 36px; margin-bottom: 36px; }
    .footer-brand .logo { font-size: 1.4rem; font-weight: 900; color: #fff; display: block; margin-bottom: 10px; }
    .footer-brand .logo span { color: var(--accent); }
    .footer-brand p { font-size: .87rem; line-height: 1.7; }
    .footer-col h4 { color: #fff; font-weight: 700; margin-bottom: 12px; font-size: .92rem; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 8px; }
    .footer-col ul li a { color: rgba(255,255,255,.55); text-decoration: none; font-size: .86rem; transition: color .2s; }
    .footer-col ul li a:hover { color: #fff; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,.1); padding-top: 20px; text-align: center; font-size: .82rem; }

    /* ── TOAST ── */
    .toast {
      position: fixed; bottom: 88px; right: 24px; z-index: 9999;
      background: var(--dark); color: #fff; padding: 13px 20px;
      border-radius: 12px; font-size: .9rem; font-weight: 500;
      box-shadow: 0 8px 32px rgba(0,0,0,.28); display: none;
      align-items: center; gap: 10px; max-width: 320px;
    }
    .toast.show { display: flex; animation: slideUp .3s ease; }
    @keyframes slideUp { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

    /* ── MODALS ── */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(15,23,42,.55);
      backdrop-filter: blur(4px); z-index: 200;
      display: none; align-items: center; justify-content: center; padding: 20px;
    }
    .modal-overlay.open { display: flex; }
    .modal {
      background: var(--card); border-radius: var(--radius);
      padding: 32px; max-width: 460px; width: 100%;
      box-shadow: 0 24px 64px rgba(0,0,0,.28); animation: popIn .25s ease;
      max-height: 90vh; overflow-y: auto;
    }
    @keyframes popIn { from { transform: scale(.94); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .modal-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
    .modal-header h3 { font-size: 1.2rem; font-weight: 800; }
    .modal-close { background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--muted); line-height: 1; }
    .modal p { color: var(--muted); font-size: .88rem; margin-bottom: 16px; line-height: 1.6; }
    .modal-actions { display: flex; flex-direction: column; gap: 10px; }
    .modal-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 12px; border: none; border-radius: 10px;
      font-size: .93rem; font-weight: 700; cursor: pointer; transition: opacity .2s;
      text-decoration: none;
    }
    .modal-btn:hover { opacity: .88; }
    .modal-btn { background: var(--border); color: var(--text); }
    .modal-btn.primary { background: var(--primary); color: #fff; }
    .modal-btn.green { background: #25d366; color: #fff; }
    .modal-btn.teal { background: var(--secondary); color: #fff; }
    .svc-step-dot {
      width: 30px; height: 30px; border-radius: 50%;
      background: var(--border); color: var(--muted);
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: .85rem; flex-shrink: 0; transition: background .3s, color .3s;
    }
    .svc-step-dot.active { background: var(--primary); color: #fff; }
    .svc-step-dot.done { background: var(--success); color: #fff; }
    .svc-step-line { flex: 1; height: 2px; background: var(--border); align-self: center; transition: background .3s; }
    .svc-step-line.done { background: var(--success); }
    .upi-modal-box {
      background: #ede9fe; border-radius: 12px; padding: 16px;
      text-align: center; margin-bottom: 12px;
    }
    .upi-modal-box .upi-id { font-size: 1.15rem; font-weight: 900; color: var(--primary); letter-spacing: .5px; }
    .upi-modal-box .upi-phone-small { font-size: .82rem; color: var(--muted); margin-top: 4px; }

    /* ── FLOATING BUTTONS ── */
    .whatsapp-float {
      position: fixed; bottom: 24px; left: 24px; z-index: 150;
      background: #25d366; color: #fff; border: none;
      width: 54px; height: 54px; border-radius: 50%;
      font-size: 1.5rem; cursor: pointer;
      box-shadow: 0 4px 18px rgba(37,211,102,.45);
      display: flex; align-items: center; justify-content: center;
      transition: transform .2s;
      animation: waPulse 2.4s ease-in-out infinite;
    }
    @keyframes waPulse {
      0%,100% { box-shadow: 0 4px 18px rgba(37,211,102,.45); }
      50%      { box-shadow: 0 4px 28px rgba(37,211,102,.85), 0 0 0 10px rgba(37,211,102,.12); }
    }
    .whatsapp-float:hover { transform: scale(1.1); animation: none; box-shadow: 0 6px 24px rgba(37,211,102,.6); }
    .back-to-top {
      position: fixed; bottom: 24px; right: 24px; z-index: 150;
      background: var(--primary); color: #fff; border: none;
      width: 46px; height: 46px; border-radius: 50%;
      font-size: 1.2rem; cursor: pointer;
      box-shadow: 0 4px 16px rgba(79,70,229,.35);
      display: none; align-items: center; justify-content: center;
      transition: transform .2s, opacity .3s;
    }
    .back-to-top.visible { display: flex; }
    .back-to-top:hover { transform: translateY(-3px); }

    /* ── LEGAL DISCLAIMER ── */
    .legal-banner {
      background: #fefce8; border-top: 2px solid #fde047; border-bottom: 2px solid #fde047;
      padding: 14px 5%; text-align: center; font-size: .84rem; color: #713f12; line-height: 1.7;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: block; }
      .nav-contact, .nav-cta { display: none; }
      .form-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .steps { flex-direction: column; align-items: center; }
      .step:not(:last-child)::after { content: none; }
      .payment-body, .file-portal-body, .order-form-card { padding: 22px 18px; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
      .hero-stats { gap: 22px; }
      .upi-apps { gap: 8px; }
    }

    /* ── AUTH MODAL ── */
    .auth-overlay {
      display: none; position: fixed; inset: 0; z-index: 2000;
      background: rgba(15,23,42,.6); backdrop-filter: blur(4px);
      align-items: center; justify-content: center;
    }
    .auth-overlay.open { display: flex; }
    .auth-card {
      background: #fff; border-radius: 20px; width: min(440px, 94vw);
      padding: 36px 32px; position: relative;
      box-shadow: 0 24px 64px rgba(0,0,0,.18);
      animation: authPop .28s cubic-bezier(.34,1.56,.64,1);
    }
    @keyframes authPop { from { transform: scale(.88); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .auth-close {
      position: absolute; top: 14px; right: 18px;
      font-size: 1.4rem; cursor: pointer; color: var(--muted);
      background: none; border: none; line-height: 1;
    }
    .auth-logo { text-align: center; margin-bottom: 6px; font-size: 1.3rem; font-weight: 900; color: var(--primary); }
    .auth-logo span { color: var(--accent); }
    .auth-tabs { display: flex; border-bottom: 2px solid var(--border); margin-bottom: 24px; }
    .auth-tab {
      flex: 1; padding: 10px; text-align: center; font-weight: 700;
      font-size: .92rem; cursor: pointer; color: var(--muted);
      border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all .2s;
    }
    .auth-tab.active { color: var(--primary); border-bottom-color: var(--primary); }
    .auth-pane { display: none; }
    .auth-pane.active { display: block; }
    .auth-field { margin-bottom: 16px; }
    .auth-field label { display: block; font-size: .82rem; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
    .auth-field input {
      width: 100%; padding: 10px 14px; border: 1.5px solid var(--border);
      border-radius: 10px; font-size: .92rem; outline: none; transition: border-color .2s;
      box-sizing: border-box;
    }
    .auth-field input:focus { border-color: var(--primary); }
    .auth-submit {
      width: 100%; padding: 12px; background: var(--primary); color: #fff;
      border: none; border-radius: 50px; font-size: 1rem; font-weight: 700;
      cursor: pointer; transition: background .2s; margin-top: 4px;
    }
    .auth-submit:hover { background: var(--primary-dark); }
    .auth-divider { text-align: center; color: var(--muted); font-size: .8rem; margin: 14px 0; }
    .auth-google {
      width: 100%; padding: 11px; background: #fff; color: #3c4043;
      border: 1.5px solid var(--border); border-radius: 50px; font-size: .92rem;
      font-weight: 600; cursor: pointer; display: flex; align-items: center;
      justify-content: center; gap: 10px; transition: box-shadow .2s;
    }
    .auth-google:hover { box-shadow: 0 2px 8px rgba(0,0,0,.12); }
    .auth-err { color: #dc2626; font-size: .82rem; margin-top: 8px; text-align: center; display: none; }
    .auth-err.show { display: block; }

    /* ── NAV USER ── */
    .nav-user-btn {
      display: flex; align-items: center; gap: 8px;
      background: none; border: 2px solid var(--primary);
      padding: 6px 14px; border-radius: 50px; cursor: pointer;
      font-size: .86rem; font-weight: 700; color: var(--primary);
      transition: background .2s, color .2s; text-decoration: none;
    }
    .nav-user-btn:hover { background: var(--primary); color: #fff; }
    .nav-avatar {
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--primary); color: #fff;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: .8rem; font-weight: 800;
    }
    .nav-login-btn {
      background: var(--primary); color: #fff; border: none;
      padding: 8px 20px; border-radius: 50px; font-size: .86rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .nav-login-btn:hover { background: var(--primary-dark); }

    /* ── DASHBOARD PANEL ── */
    .dashboard-overlay {
      display: none; position: fixed; inset: 0; z-index: 1900;
      background: rgba(15,23,42,.45); backdrop-filter: blur(3px);
    }
    .dashboard-overlay.open { display: block; }
    .dashboard-panel {
      position: fixed; top: 0; right: -110%; bottom: 0; width: min(500px, 100vw);
      background: #f8fafc; z-index: 1950; overflow-y: auto;
      transition: right .35s cubic-bezier(.4,0,.2,1);
      box-shadow: -8px 0 40px rgba(0,0,0,.14);
    }
    .dashboard-panel.open { right: 0; }
    .dash-header {
      background: linear-gradient(135deg,#4f46e5,#0891b2);
      color: #fff; padding: 28px 24px 20px;
      display: flex; align-items: center; justify-content: space-between;
    }
    .dash-header h2 { margin: 0; font-size: 1.1rem; }
    .dash-close {
      background: rgba(255,255,255,.2); border: none; color: #fff;
      width: 32px; height: 32px; border-radius: 50%; font-size: 1.1rem;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
    }
    .dash-user-info { display: flex; align-items: center; gap: 14px; margin-bottom: 6px; }
    .dash-avatar {
      width: 52px; height: 52px; border-radius: 50%;
      background: rgba(255,255,255,.25); border: 3px solid rgba(255,255,255,.5);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; font-weight: 800;
    }
    .dash-name { font-size: 1rem; font-weight: 800; }
    .dash-email { font-size: .8rem; opacity: .8; margin-top: 2px; }
    .dash-tabs { display: flex; background: #fff; border-bottom: 2px solid var(--border); }
    .dash-tab {
      flex: 1; padding: 13px 8px; text-align: center; font-size: .86rem;
      font-weight: 700; cursor: pointer; color: var(--muted);
      border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all .2s;
    }
    .dash-tab.active { color: var(--primary); border-bottom-color: var(--primary); }
    .dash-pane { display: none; padding: 20px 16px; }
    .dash-pane.active { display: block; }
    .order-card {
      background: #fff; border-radius: 14px; padding: 16px;
      margin-bottom: 14px; border: 1.5px solid var(--border);
      box-shadow: 0 2px 8px rgba(0,0,0,.05);
    }
    .order-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
    .order-id { font-size: .78rem; color: var(--muted); font-weight: 600; }
    .status-badge {
      padding: 3px 12px; border-radius: 50px; font-size: .74rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: .4px;
    }
    .status-badge.pending    { background: #fef9c3; color: #854d0e; }
    .status-badge.confirmed  { background: #dbeafe; color: #1e40af; }
    .status-badge.progress   { background: #ede9fe; color: #5b21b6; }
    .status-badge.review     { background: #ffedd5; color: #9a3412; }
    .status-badge.delivered  { background: #dcfce7; color: #166534; }
    .order-service { font-size: .95rem; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
    .order-meta { display: flex; gap: 16px; flex-wrap: wrap; font-size: .78rem; color: var(--muted); }
    .dash-empty { text-align: center; padding: 40px 20px; color: var(--muted); font-size: .9rem; }
    .dash-empty .empty-icon { font-size: 2.5rem; margin-bottom: 10px; }
    .dash-logout {
      width: calc(100% - 32px); margin: 8px 16px 24px; padding: 11px;
      background: #fee2e2; color: #dc2626; border: none; border-radius: 10px;
      font-size: .9rem; font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .dash-logout:hover { background: #fecaca; }
    .profile-field { margin-bottom: 14px; }
    .profile-field label { font-size: .8rem; font-weight: 700; color: var(--muted); display: block; margin-bottom: 4px; }
    .profile-field .pval { font-size: .95rem; font-weight: 600; color: var(--dark); padding: 9px 12px; background: #fff; border-radius: 10px; border: 1.5px solid var(--border); }
    .nit-discount-badge {
      background: linear-gradient(135deg,#10b981,#059669);
      color: #fff; border-radius: 10px; padding: 12px 14px;
      font-size: .85rem; font-weight: 700; margin-bottom: 16px;
      display: flex; align-items: center; gap: 8px;
    }

    /* ── ORDER CONFIRMATION MODAL ── */
    .confirm-overlay {
      display: none; position: fixed; inset: 0; z-index: 3000;
      background: rgba(15,23,42,.7); backdrop-filter: blur(6px);
      align-items: center; justify-content: center;
    }
    .confirm-overlay.open { display: flex; }
    .confirm-card {
      background: #fff; border-radius: 24px; width: min(480px, 94vw);
      padding: 0; overflow: hidden; position: relative;
      box-shadow: 0 32px 80px rgba(0,0,0,.22);
      animation: authPop .32s cubic-bezier(.34,1.56,.64,1);
    }
    .confirm-header {
      background: linear-gradient(135deg,#10b981,#059669);
      padding: 32px 28px 24px; text-align: center; color: #fff;
    }
    .confirm-tick {
      width: 64px; height: 64px; background: rgba(255,255,255,.25);
      border-radius: 50%; display: flex; align-items: center;
      justify-content: center; font-size: 2rem; margin: 0 auto 14px;
      border: 3px solid rgba(255,255,255,.5);
      animation: tickPop .5s .2s cubic-bezier(.34,1.56,.64,1) both;
    }
    @keyframes tickPop { from { transform: scale(0); opacity:0; } to { transform: scale(1); opacity:1; } }
    .confirm-header h2 { margin: 0 0 4px; font-size: 1.4rem; }
    .confirm-header p  { margin: 0; opacity: .85; font-size: .9rem; }
    .confirm-body { padding: 24px 28px; }
    .confirm-order-id {
      background: #f0fdf4; border: 2px dashed #86efac;
      border-radius: 12px; padding: 14px 18px; text-align: center;
      margin-bottom: 20px; cursor: pointer; transition: background .2s;
    }
    .confirm-order-id:hover { background: #dcfce7; }
    .confirm-order-id .label { font-size: .75rem; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: .5px; }
    .confirm-order-id .value { font-size: 1.4rem; font-weight: 900; color: #166534; font-family: monospace; margin-top: 2px; }
    .confirm-order-id .hint  { font-size: .75rem; color: #6b7280; margin-top: 4px; }
    .confirm-details { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
    .confirm-detail { background: #f8fafc; border-radius: 10px; padding: 10px 12px; }
    .confirm-detail .dl { font-size: .72rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: .4px; }
    .confirm-detail .dv { font-size: .88rem; font-weight: 700; color: #1e293b; margin-top: 2px; word-break: break-word; }
    .confirm-steps { background: #eff6ff; border-radius: 12px; padding: 14px 16px; margin-bottom: 20px; }
    .confirm-steps p { margin: 0 0 8px; font-size: .82rem; font-weight: 800; color: #1e40af; }
    .confirm-steps ul { margin: 0; padding-left: 18px; font-size: .82rem; color: #1e40af; line-height: 1.7; }
    .confirm-actions { display: flex; gap: 10px; flex-wrap: wrap; }
    .confirm-wa {
      flex: 1; background: #25d366; color: #fff; border: none;
      padding: 12px; border-radius: 50px; font-size: .9rem;
      font-weight: 700; cursor: pointer; display: flex;
      align-items: center; justify-content: center; gap: 8px;
      transition: background .2s;
    }
    .confirm-wa:hover { background: #128c7e; }
    .confirm-done {
      flex: 1; background: var(--primary); color: #fff; border: none;
      padding: 12px; border-radius: 50px; font-size: .9rem;
      font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .confirm-done:hover { background: var(--primary-dark); }

    /* ── ADMIN PANEL ── */
    .admin-order-row {
      background: var(--card); border: 1px solid var(--border);
      border-radius: 10px; padding: 12px 14px; margin-bottom: 10px;
      font-size: .84rem;
    }
    .admin-order-row .ao-id   { font-family: monospace; font-weight: 800; color: var(--primary); font-size: .9rem; }
    .admin-order-row .ao-name { font-weight: 700; color: var(--dark); }
    .admin-order-row .ao-svc  { color: var(--muted); font-size: .8rem; margin-top: 2px; }
    .admin-order-row .ao-meta { display:flex; gap: 10px; flex-wrap:wrap; margin-top:6px; font-size:.78rem; color:var(--muted); }
    .ao-status {
      display:inline-block; padding:2px 10px; border-radius:50px;
      font-size:.72rem; font-weight:800; text-transform:uppercase; letter-spacing:.4px;
    }
    .ao-status.pending    { background:#fef3c7; color:#92400e; }
    .ao-status.confirmed  { background:#dbeafe; color:#1e40af; }
    .ao-status.progress   { background:#ede9fe; color:#5b21b6; }
    .ao-status.review     { background:#f3e8ff; color:#7c3aed; }
    .ao-status.delivered  { background:#d1fae5; color:#065f46; }
    .admin-status-select {
      padding: 4px 8px; border: 1.5px solid var(--border); border-radius: 8px;
      font-size: .78rem; font-weight: 600; cursor: pointer; background: var(--card);
      margin-top: 6px;
    }

    /* ── EXPERT APPLY ── */
    .expert-apply-card {
      max-width: 980px; margin: 0 auto;
      background: var(--card); border: 1px solid var(--border);
      border-radius: var(--radius); box-shadow: var(--shadow);
      padding: 24px;
    }
    .expert-note {
      background: #eff6ff; border: 1px solid #bfdbfe; color: #1e3a8a;
      border-radius: 10px; padding: 12px 14px; font-size: .85rem; margin-bottom: 16px;
    }
    .file-field {
      border: 1.5px dashed var(--border); border-radius: 10px; padding: 10px 12px;
      background: #f8fafc;
    }
    .file-field label { display:block; font-size:.82rem; font-weight:700; margin-bottom:6px; color:var(--dark); }
    .file-field input[type='file'] { width:100%; font-size:.82rem; }
    .expert-status-chip {
      display:inline-block; border-radius:50px; padding:4px 10px; font-size:.74rem; font-weight:800;
      text-transform:uppercase; letter-spacing:.4px;
    }
    .expert-status-chip.applied { background:#fef3c7; color:#92400e; }
    .expert-status-chip.shortlisted { background:#dbeafe; color:#1e40af; }
    .expert-status-chip.qualified { background:#d1fae5; color:#065f46; }
    .expert-status-chip.not-qualified { background:#fee2e2; color:#991b1b; }
    .hiring-banner {
      max-width: 980px; margin: 0 auto 20px;
      background: linear-gradient(135deg, #0f172a, #1e3a8a);
      color: #fff; border-radius: 16px; padding: 22px 24px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 12px; flex-wrap: wrap; box-shadow: 0 10px 28px rgba(15,23,42,.25);
    }
    .hiring-banner .hb-title { font-size: 1.35rem; font-weight: 900; line-height: 1.2; }
    .hiring-banner .hb-sub { font-size: .98rem; opacity: .9; margin-top: 4px; }
    .hiring-banner .hb-btn {
      background: #22c55e; color: #052e16; border: none;
      border-radius: 999px; padding: 12px 20px; font-size: .92rem;
      font-weight: 800; cursor: pointer; transition: transform .2s, filter .2s;
      animation: hbPulse 1.8s ease-in-out infinite;
    }
    .hiring-banner .hb-btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
    @keyframes hbPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,.38); }
      60% { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
    }
    @media (max-width: 768px) {
      .hiring-banner { padding: 18px; }
      .hiring-banner .hb-title { font-size: 1.08rem; }
      .hiring-banner .hb-sub { font-size: .86rem; }
      .hiring-banner .hb-btn { width: 100%; }
    }
    .team-grid { display:grid; grid-template-columns: repeat(auto-fill,minmax(230px,1fr)); gap:16px; max-width:980px; margin:0 auto; }
    .team-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:14px; box-shadow:var(--shadow); }
    .team-photo { width:68px; height:68px; border-radius:50%; object-fit:cover; border:3px solid #e2e8f0; }
    .team-head { display:flex; align-items:center; gap:12px; margin-bottom:8px; }
    .team-name { font-size:.95rem; font-weight:800; color:var(--dark); }
    .team-role { font-size:.78rem; color:var(--muted); font-weight:600; }
    .team-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }
    .team-tag { font-size:.72rem; font-weight:700; padding:4px 8px; border-radius:999px; background:#eef2ff; color:#3730a3; }

    .expert-top-banner {
      background: linear-gradient(90deg, #022c22, #065f46);
      color: #ecfdf5; display:flex; align-items:center; justify-content:center;
      gap:10px; flex-wrap:wrap; padding:10px 14px; font-size:.86rem;
      border-bottom: 1px solid rgba(255,255,255,.12);
    }
    .expert-top-banner .etb-btn {
      border: 1px solid rgba(255,255,255,.3); color:#ecfdf5; background:transparent;
      border-radius:999px; padding:5px 11px; font-size:.78rem; font-weight:700; cursor:pointer;
    }
    .expert-top-banner .etb-btn.primary { background:#22c55e; color:#052e16; border-color:#22c55e; }
    .nav-expert-btn {
      border:1.5px solid var(--primary); color:var(--primary); background:#fff;
      border-radius:999px; padding:8px 12px; font-size:.82rem; font-weight:700; cursor:pointer;
      margin-left:8px;
    }
    .expert-panel {
      position: fixed; right: -540px; top: 0; width: min(540px, 100%); height: 100vh;
      background: #fff; z-index: 401; box-shadow: -8px 0 24px rgba(0,0,0,.2);
      transition: right .3s ease; overflow-y: auto;
    }
    .expert-panel.open { right: 0; }
    .expert-overlay {
      position: fixed; inset: 0; background: rgba(2,6,23,.5); z-index: 400; display:none;
    }
    .expert-overlay.open { display:block; }
    .expert-header { padding:16px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; }
    .expert-tabs { display:flex; gap:8px; padding:12px 12px 0; flex-wrap:wrap; }
    .expert-tab { padding:6px 10px; border:1px solid var(--border); border-radius:999px; font-size:.78rem; font-weight:700; cursor:pointer; }
    .expert-tab.active { background:var(--primary); color:#fff; border-color:var(--primary); }
    .expert-pane { display:none; padding:12px; }
    .expert-pane.active { display:block; }
    .assignment-card { background:#fff; border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:10px; }
  </style>
</head>
<body>

<div class="expert-top-banner">
  <strong>🎓 We Are Hiring Research Experts</strong>
  <span>Join our expert panel for assignment-based academic support work.</span>
  <button class="etb-btn primary" onclick="scrollToSection('experts-apply')">Apply Now</button>
  <button class="etb-btn" onclick="openHiringInfoModal()">More Info</button>
</div>

<!-- Announcement Ticker -->
<div class="announcement" title="Hover to pause">
  <div class="announcement-track">
    <!-- set 1 -->
    <span class="announcement-item">
      <span class="tag">✅ Legal Safe</span>
      Services are provided as academic assistance and guidance only.
    </span>
    <span class="announcement-item">
      🎉 <strong>First Similarity Check FREE</strong> on orders above ₹500 &nbsp;·&nbsp; Limited offer!
    </span>
    <span class="announcement-item">
      <span class="tag">💬 WhatsApp</span>
      Quick quotes &amp; order confirmation on <strong>our secure support line</strong>
    </span>
    <span class="announcement-item">
      <span class="tag">📌 Pricing</span>
      All rates are tentative &nbsp;·&nbsp; Contact team for final quote confirmation
    </span>
    <!-- set 2 — duplicate for seamless loop -->
    <span class="announcement-item">
      <span class="tag">✅ Legal Safe</span>
      Services are provided as academic assistance and guidance only.
    </span>
    <span class="announcement-item">
      🎉 <strong>First Similarity Check FREE</strong> on orders above ₹500 &nbsp;·&nbsp; Limited offer!
    </span>
    <span class="announcement-item">
      <span class="tag">💬 WhatsApp</span>
      Quick quotes &amp; order confirmation on <strong>our secure support line</strong>
    </span>
    <span class="announcement-item">
      <span class="tag">📌 Pricing</span>
      All rates are tentative &nbsp;·&nbsp; Contact team for final quote confirmation
    </span>
  </div>
</div>

<!-- Nav -->
<nav id="topNav">
  <a href="#home" class="nav-logo">Research <span>Aid</span></a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#services">Services</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#payment">Payment</a></li>
    <li><a href="#submit-files">Submit Files</a></li>
    <li><a href="#order">Order</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#experts-apply">Experts</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#feedback">Feedback</a></li>
  </ul>
  <a href="mailto:najarzain5@gmail.com" class="nav-contact">Contact Us</a>
  <a href="#order" class="nav-cta">Get Started</a>
  <button class="nav-expert-btn" onclick="openExpertLoginPanel()">👨‍🏫 Expert Login</button>
  <!-- Auth button — toggles between Login and user avatar -->
  <button class="nav-login-btn" id="navLoginBtn" onclick="openAuthModal()">🔐 Login</button>
  <button class="nav-user-btn" id="navUserBtn" style="display:none" onclick="openDashboard()">
    <span class="nav-avatar" id="navAvatar">?</span>
    <span id="navUserName">My Account</span>
  </button>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">☰</button>
</nav>

<!-- Hero -->
<section class="hero" id="home">
  <div class="hero-badge">✦ Trusted by 500+ Research Scholars across India</div>
  <h1>Professional Academic<br>Assistance Services</h1>
  <p>Expert guidance and assistance for plagiarism checks, thesis writing, AI humanization, research papers & more — at student-friendly prices.</p>
  <div class="hero-legal">
    ⚖️ All services are provided as <strong>academic guidance & assistance only</strong>. Final work must be reviewed, verified, and submitted by the scholar.
  </div>
  <div class="hero-btns">
    <button class="btn-white" onclick="scrollToSection('order')">Place an Order</button>
    <button class="btn-outline-white" onclick="scrollToSection('services')">View Services</button>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="stat-num">500+</div><div class="stat-label">Scholars Assisted & Growing</div></div>
    <div class="stat"><div class="stat-num">₹50</div><div class="stat-label">Similarity Check</div></div>
    <div class="stat"><div class="stat-num">24h</div><div class="stat-label">Avg Turnaround</div></div>
    <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Confidential Workflow</div></div>
  </div>
</section>

<!-- Legal Banner -->
<div class="legal-banner">
  ⚠️ <strong>Disclaimer:</strong> Research Aid and Co provides academic assistance, guidance, and reference material only. All services are meant for learning and reference purposes. Scholars are responsible for how they use the material. We do not promote academic dishonesty.
</div>

<!-- Services -->
<section class="section" id="services">
  <div class="section-header">
    <div class="section-tag">Our Services</div>
    <h2>Comprehensive Academic Assistance</h2>
    <p>Expert support services tailored for PhD scholars, postgraduates, and researchers across India.</p>
    <p style="margin-top:8px;font-size:.86rem;color:var(--muted)">💬 All rates are <strong>tentative</strong>. Final quote is confirmed after discussing scope with our team.</p>
  </div>
  <div class="services-grid">

    <div class="service-card" style="--card-accent:#4f46e5">
      <div class="service-icon">🔍</div>
      <h3>Similarity / Plagiarism Check Assistance</h3>
      <div class="service-legal">✦ Report & Guidance Service</div>
      <p>Turnitin / iThenticate similarity report with detailed analysis, percentage breakdown per chapter, and reduction guidance.</p>
      <div class="price-tag">₹50 / file</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Similarity / Plagiarism Check Assistance','₹50 per file','50','🔍')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#06b6d4">
      <div class="popular-badge">Popular</div>
      <div class="service-icon">📝</div>
      <h3>Assistance in Thesis Writing</h3>
      <div class="service-legal">✦ Reference & Guidance Support</div>
      <p>Expert guidance and reference material for all chapters — introduction, literature review, methodology, results & conclusion.</p>
      <div class="price-tag">₹6,000 – ₹40,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Assistance in Thesis Writing','₹6,000 – ₹40,000 (discuss on WhatsApp)','6000','📝')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#f59e0b">
      <div class="service-icon">🤖</div>
      <h3>AI Humanizer Assistance</h3>
      <div class="service-legal">✦ Text Enhancement Service</div>
      <p>Transforms AI-generated text into natural, human-like academic writing. Reduces AI detection flags in GPTZero & Turnitin.</p>
      <div class="price-tag">₹100 / 800 words <span style="font-size:.75em;opacity:.75">(negotiable)</span></div>
      <button class="service-btn" type="button" onclick="openServiceModal('AI Humanizer Assistance','₹100 per 800 words (negotiable)','100','🤖')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#10b981">
      <div class="service-icon">✏️</div>
      <h3>Proofreading & Editing Assistance</h3>
      <div class="service-legal">✦ Language Enhancement Service</div>
      <p>Grammar, syntax, clarity, and flow corrections. APA/MLA/Chicago formatting guidance included.</p>
      <div class="price-tag">₹500 – ₹3,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Proofreading & Editing Assistance','₹500 – ₹3,000','500','✏️')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#8b5cf6">
      <div class="service-icon">📄</div>
      <h3>Assistance in Research Paper Writing</h3>
      <div class="service-legal">✦ Reference Draft Support</div>
      <p>Reference drafts and guidance for Scopus, Web of Science, and UGC-listed journal submissions with proper citation format.</p>
      <div class="price-tag">₹2,500 – ₹12,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Assistance in Research Paper Writing','₹2,500 – ₹12,000','2500','📄')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#ec4899">
      <div class="service-icon">📚</div>
      <h3>Assistance in Literature Review</h3>
      <div class="service-legal">✦ Research Synthesis Support</div>
      <p>Comprehensive literature synthesis with 50–150 recent sources, thematic analysis, and research gap identification guidance.</p>
      <div class="price-tag">₹1,500 – ₹8,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Assistance in Literature Review','₹1,500 – ₹8,000','1500','📚')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#f97316">
      <div class="service-icon">📊</div>
      <h3>Statistical Analysis Assistance</h3>
      <div class="service-legal">✦ Data Interpretation Support</div>
      <p>SPSS, R, Python data analysis guidance — descriptive statistics, regression, ANOVA, SEM with interpretation support.</p>
      <div class="price-tag">₹2,000 – ₹10,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Statistical Analysis Assistance','₹2,000 – ₹10,000','2000','📊')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#14b8a6">
      <div class="service-icon">📋</div>
      <h3>Assistance in Synopsis / Proposal Writing</h3>
      <div class="service-legal">✦ Research Proposal Support</div>
      <p>Guidance on research synopsis and project proposals for PhD admission, funding applications, and university submissions.</p>
      <div class="price-tag">₹1,200 – ₹5,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Assistance in Synopsis / Proposal Writing','₹1,200 – ₹5,000','1200','📋')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#6366f1">
      <div class="service-icon">🌐</div>
      <h3>Academic Translation Assistance</h3>
      <div class="service-legal">✦ Language Translation Support</div>
      <p>Academic translation between Hindi, English, Urdu, and regional languages. Technical and domain vocabulary maintained.</p>
      <div class="price-tag">₹300 – ₹2,000</div>
      <button class="service-btn" type="button" onclick="openServiceModal('Academic Translation Assistance','₹300 – ₹2,000','300','🌐')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#0ea5e9">
      <div class="service-icon">📜</div>
      <h3>Patent Assistance (Idea to Filing)</h3>
      <div class="service-legal">✦ Patent Drafting & Filing Support</div>
      <p>Patentability search, idea documentation, provisional/complete specification drafting, and filing support at nominal charges.</p>
      <div class="price-tag">₹1,500 onwards <span style="font-size:.75em;opacity:.75">(negotiable)</span></div>
      <button class="service-btn" type="button" onclick="openServiceModal('Patent Assistance (Idea to Filing)','₹1,500 onwards (negotiable)','1500','📜')">Get Assistance →</button>
    </div>

    <div class="service-card" style="--card-accent:#22c55e">
      <div class="service-icon">💡</div>
      <h3>Idea Upload & Monetization Assistance</h3>
      <div class="service-legal">✦ Idea Review & Commercialization Support</div>
      <p>Upload your idea, get expert evaluation, and receive support for pitching, licensing, and monetization opportunities.</p>
      <div class="price-tag">₹999 screening fee <span style="font-size:.75em;opacity:.75">(adjustable)</span></div>
      <button class="service-btn" type="button" onclick="openServiceModal('Idea Upload & Monetization Assistance','₹999 screening fee (adjustable)','999','💡')">Get Assistance →</button>
    </div>

  </div>
  <p style="max-width:980px;margin:14px auto 0;font-size:.84rem;color:var(--muted)">⚠️ <strong>Rate update notice:</strong> confirm final price with the team before payment. Rates vary by scope, urgency, and complexity.</p>
</section>

<!-- Pricing -->
<section class="section section-alt" id="pricing">
  <div class="section-header">
    <div class="section-tag">Transparent Pricing</div>
    <h2>Simple, Honest Pricing</h2>
    <p>No hidden charges. All prices in INR. Pay only for what you need.</p>
    <p style="margin-top:8px;font-size:.86rem;color:var(--muted)">📌 Prices shown are tentative starting prices. Please contact team for final confirmation.</p>
  </div>
  <div class="pricing-grid">
    <div class="pricing-card">
      <div class="pricing-icon">🔍</div>
      <h3>Similarity Check Assistance</h3>
      <div class="pricing-amount"><sub>₹</sub>50</div>
      <div class="pricing-per">per file</div>
      <ul class="pricing-features">
        <li>Turnitin / iThenticate report</li>
        <li>Similarity % per chapter</li>
        <li>Reduction tips included</li>
        <li>PDF report in 2–4 hours</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Similarity / Plagiarism Check Assistance','₹50/file','50','🔍')">Order Now</button>
    </div>
    <div class="pricing-card featured">
      <div class="popular-badge">Best Value</div>
      <div class="pricing-icon">📝</div>
      <h3>Thesis Writing Assistance</h3>
      <div class="pricing-amount"><sub>₹</sub>6,000</div>
      <div class="pricing-per">starting (chapter-wise)</div>
      <ul class="pricing-features">
        <li>Full / partial thesis guidance</li>
        <li>100% original reference draft</li>
        <li>Unlimited revisions (7 days)</li>
        <li>Similarity report included</li>
        <li>PhD-expert assistants</li>
        <li>2 weeks – 2 months delivery</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Assistance in Thesis Writing','₹6,000–₹40,000','6000','📝')">Order Now</button>
    </div>
    <div class="pricing-card">
      <div class="pricing-icon">🤖</div>
      <h3>AI Humanizer Assistance</h3>
      <div class="pricing-amount"><sub>₹</sub>100</div>
      <div class="pricing-per">per 800 words (negotiable)</div>
      <ul class="pricing-features">
        <li>Reduces AI detection flags</li>
        <li>Maintains original meaning</li>
        <li>Same-day delivery</li>
        <li>Any subject / domain</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('AI Humanizer Assistance','₹100 per 800 words (negotiable)','100','🤖')">Order Now</button>
    </div>
    <div class="pricing-card">
      <div class="pricing-icon">📄</div>
      <h3>Research Paper Assistance</h3>
      <div class="pricing-amount"><sub>₹</sub>2,500</div>
      <div class="pricing-per">starting price</div>
      <ul class="pricing-features">
        <li>Journal-ready reference draft</li>
        <li>Scopus / UGC journal guidance</li>
        <li>Proper citations & references</li>
        <li>Abstract + full paper</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Assistance in Research Paper Writing','₹2,500–₹12,000','2500','📄')">Order Now</button>
    </div>
    <div class="pricing-card">
      <div class="pricing-icon">📜</div>
      <h3>Patent Assistance</h3>
      <div class="pricing-amount"><sub>₹</sub>1,500</div>
      <div class="pricing-per">onwards (negotiable)</div>
      <ul class="pricing-features">
        <li>Patentability search support</li>
        <li>Provisional/complete drafting</li>
        <li>Filing support end-to-end</li>
        <li>Nominal charges per assignment</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Patent Assistance (Idea to Filing)','₹1,500 onwards (negotiable)','1500','📜')">Order Now</button>
    </div>
    <div class="pricing-card">
      <div class="pricing-icon">💡</div>
      <h3>Upload Idea & Get Paid</h3>
      <div class="pricing-amount"><sub>₹</sub>999</div>
      <div class="pricing-per">screening fee (adjustable)</div>
      <ul class="pricing-features">
        <li>Confidential idea submission</li>
        <li>Commercial potential review</li>
        <li>Pitch and licensing guidance</li>
        <li>Monetization pathway support</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Idea Upload & Monetization Assistance','₹999 screening fee (adjustable)','999','💡')">Order Now</button>
    </div>
    <div class="pricing-card featured">
      <div class="popular-badge">Combo Package</div>
      <div class="pricing-icon">🎯</div>
      <h3>Research Smart Pack (1 Month)</h3>
      <div class="pricing-amount"><sub>₹</sub>999</div>
      <div class="pricing-per">for 1 month access</div>
      <ul class="pricing-features">
        <li>Plagiarism check assistance</li>
        <li>AI detection support</li>
        <li>Statistical analysis assistance</li>
        <li>Synopsis assistance</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('Research Smart Pack (1 Month)','₹999 / month (tentative)','999','🎯')">Order Now</button>
    </div>
    <div class="pricing-card">
      <div class="pricing-icon">🏆</div>
      <h3>All Services Premium (6 Months)</h3>
      <div class="pricing-amount"><sub>₹</sub>50,000</div>
      <div class="pricing-per">tentative package price</div>
      <ul class="pricing-features">
        <li>Access to all listed services</li>
        <li>Priority expert assignment</li>
        <li>Dedicated account support</li>
        <li>Valid for 6 months</li>
      </ul>
      <button class="pricing-cta" onclick="openServiceModal('All Services Premium (6 Months)','₹50,000 (tentative)','50000','🏆')">Order Now</button>
    </div>
  </div>
  <p style="max-width:980px;margin:14px auto 0;font-size:.84rem;color:var(--muted)">ℹ️ All rates are tentative starting estimates. Please contact team to confirm final pricing.</p>
</section>

<!-- How It Works -->
<section class="section" id="how">
  <div class="section-header">
    <div class="section-tag">Process</div>
    <h2>How It Works</h2>
    <p>Simple 5-step process to get your assistance delivered professionally.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <h4>Choose Service</h4>
      <p>Select the assistance you need from our services list.</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <h4>Pay via UPI</h4>
      <p>Pay to our UPI ID and note your transaction ID (UTR).</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <h4>Submit Files</h4>
      <p>Upload your documents via our file portal or WhatsApp.</p>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <h4>We Work</h4>
      <p>Our experts begin work after payment & file confirmation.</p>
    </div>
    <div class="step">
      <div class="step-num">5</div>
      <h4>Receive Delivery</h4>
      <p>Get your work delivered via email or WhatsApp.</p>
    </div>
  </div>
</section>

<!-- Payment Portal -->
<section class="section section-alt" id="payment">
  <div class="section-header">
    <div class="section-tag">Payment Portal</div>
    <h2>Pay via UPI</h2>
    <p>Fast, secure, instant payment using any UPI app. No extra charges.</p>
  </div>
  <div class="payment-portal">
    <div class="payment-header">
      <div style="font-size:2.2rem;margin-bottom:8px">💳</div>
      <h3>Direct UPI Payment</h3>
      <p>Use any UPI app — GPay, PhonePe, Paytm, BHIM, or your bank app</p>
    </div>
    <div class="payment-body">
      <div class="upi-box">
        <div class="upi-label">UPI ID</div>
        <div class="upi-value">9018620566@slc</div>
        <div class="upi-phone">📞 Mobile: Hidden for privacy (use call/WhatsApp buttons below)</div>
        <button class="copy-upi-btn" onclick="copyUpi()">📋 Copy UPI ID</button>
      </div>

      <p style="text-align:center;font-size:.85rem;color:var(--muted);margin-bottom:14px;font-weight:600;">Open your preferred UPI app:</p>
      <div class="upi-apps">
        <a class="upi-app-btn" href="gpay://upi/pay?pa=9018620566@slc&pn=ResearchAidAndCo" onclick="openUpiApp('GPay')">💚 GPay</a>
        <a class="upi-app-btn" href="phonepe://pay?pa=9018620566@slc&pn=ResearchAidAndCo" onclick="openUpiApp('PhonePe')">💜 PhonePe</a>
        <a class="upi-app-btn" href="paytmmp://pay?pa=9018620566@slc&pn=ResearchAidAndCo" onclick="openUpiApp('Paytm')">🔵 Paytm</a>
        <a class="upi-app-btn" href="upi://pay?pa=9018620566@slc&pn=ResearchAidAndCo" onclick="openUpiApp('BHIM')">🇮🇳 BHIM</a>
      </div>

      <ul class="payment-steps-list">
        <li><span class="step-icon">1️⃣</span><span>Open any UPI app and search by UPI ID shown above</span></li>
        <li><span class="step-icon">2️⃣</span><span>Enter the exact amount for your service</span></li>
        <li><span class="step-icon">3️⃣</span><span>Complete payment and <strong>note the 12-digit UTR / Transaction ID</strong></span></li>
        <li><span class="step-icon">4️⃣</span><span>Fill the order form below with your UTR number</span></li>
        <li><span class="step-icon">5️⃣</span><span>Upload your files via the File Submission Portal</span></li>
        <li><span class="step-icon">✅</span><span>We confirm and begin work within <strong>2 hours</strong></span></li>
      </ul>
      <button class="submit-btn" onclick="scrollToSection('order')" style="margin-top:20px">📝 Fill Order Form</button>
    </div>
  </div>
</section>

<!-- File Submission Portal -->
<section class="section" id="submit-files">
  <div class="section-header">
    <div class="section-tag">File Submission</div>
    <h2>Submit Your Files</h2>
    <p>After payment, submit your documents using any method below.</p>
  </div>
  <div class="file-portal">
    <div class="file-portal-header">
      <div style="font-size:2rem;margin-bottom:6px">📁</div>
      <h3>File Submission Portal</h3>
      <p>Choose the most convenient method to send us your files</p>
    </div>
    <div class="file-portal-body">

      <div class="file-method">
        <div class="file-method-icon">💬</div>
        <div>
          <h4>WhatsApp (Fastest)</h4>
          <p>Send your files directly on WhatsApp along with your Order ID and service name. Files up to 64MB accepted.</p>
          <a href="https://wa.me/919018620566?text=Hello! I have paid and want to submit my files. My Order ID is:" target="_blank">Send on WhatsApp</a>
        </div>
      </div>

      <div class="file-method">
        <div class="file-method-icon">📧</div>
        <div>
          <h4>Email Submission</h4>
          <p>Email your files to us with subject line: <strong>[Order ID] – [Service Name]</strong>. Large files up to 25MB via email.</p>
          <a href="mailto:najarandco.services@gmail.com?subject=Order Submission">Send via Email</a>
        </div>
      </div>

      <div class="file-method">
        <div class="file-method-icon">☁️</div>
        <div>
          <h4>Google Drive (Recommended for large files)</h4>
          <p>Upload your file(s) to Google Drive, set sharing to <strong>"Anyone with the link can view"</strong>, then paste the link in the order form below. Best for thesis, datasets, ZIP files.</p>
          <a href="https://drive.google.com/drive/my-drive" target="_blank" onclick="showToast('Opening Google Drive — upload your file, then copy the share link and paste it in the order form.','☁️',5000)">Open My Google Drive ↗</a>
        </div>
      </div>

      <div class="file-note" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-top:14px;font-size:.87rem;color:#166534">
        💡 <strong>How to share a Google Drive link:</strong> Upload file → Right-click → Share → Change to "Anyone with the link" → Copy link → Paste in order form below.
      </div>

      <div class="file-note">
        📌 <strong>Important:</strong> Always mention your <strong>Order ID</strong> and <strong>UTR / Transaction ID</strong> when submitting files. This helps us match your payment and begin work without delay. Accepted formats: PDF, DOC, DOCX, XLS, XLSX, PPT, TXT, ZIP.
      </div>
    </div>
  </div>
</section>

<!-- Order Form -->
<section class="section order-section" id="order">
  <div class="section-header">
    <div class="section-tag">Place Order</div>
    <h2>Place Your Order</h2>
    <p>Fill in the details below. We'll confirm within 2 hours via WhatsApp.</p>
  </div>
  <div class="order-form-card">
    <div class="pay-reminder">
      💡 <strong>Flow:</strong> Fill assignment details first, then make payment at the end and enter UTR/Transaction ID in the final payment fields.
    </div>
    <form id="orderForm" onsubmit="submitOrder(event)">
      <div class="form-grid">
        <div class="form-group">
          <label for="fullName">Full Name *</label>
          <input type="text" id="fullName" placeholder="Your full name" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" placeholder="your@email.com" required />
        </div>
        <div class="form-group">
          <label for="phone">WhatsApp Number *</label>
          <input type="tel" id="phone" placeholder="+91 XXXXXXXXXX" required />
        </div>
        <div class="form-group">
          <label for="service">Service Required *</label>
          <select id="service" required>
            <option value="">-- Select a Service --</option>
            <option value="Similarity / Plagiarism Check – ₹50/file">Similarity / Plagiarism Check – ₹50/file</option>
            <option value="Assistance in Thesis Writing – ₹6,000–₹40,000">Assistance in Thesis Writing – ₹6,000–₹40,000</option>
            <option value="AI Humanizer Assistance – ₹100 per 800 words (negotiable)">AI Humanizer Assistance – ₹100 per 800 words (negotiable)</option>
            <option value="Proofreading & Editing Assistance – ₹500–₹3,000">Proofreading & Editing Assistance – ₹500–₹3,000</option>
            <option value="Assistance in Research Paper Writing – ₹2,500–₹12,000">Assistance in Research Paper Writing – ₹2,500–₹12,000</option>
            <option value="Assistance in Literature Review – ₹1,500–₹8,000">Assistance in Literature Review – ₹1,500–₹8,000</option>
            <option value="Statistical Analysis Assistance – ₹2,000–₹10,000">Statistical Analysis Assistance – ₹2,000–₹10,000</option>
            <option value="Assistance in Synopsis / Proposal Writing – ₹1,200–₹5,000">Assistance in Synopsis / Proposal Writing – ₹1,200–₹5,000</option>
            <option value="Academic Translation Assistance – ₹300–₹2,000">Academic Translation Assistance – ₹300–₹2,000</option>
            <option value="Patent Assistance (Idea to Filing) – ₹1,500 onwards (negotiable)">Patent Assistance (Idea to Filing) – ₹1,500 onwards (negotiable)</option>
            <option value="Idea Upload & Monetization Assistance – ₹999 screening fee (adjustable)">Idea Upload & Monetization Assistance – ₹999 screening fee (adjustable)</option>
            <option value="Research Smart Pack (1 Month) – ₹999 (tentative)">Research Smart Pack (1 Month) – ₹999 (tentative)</option>
            <option value="All Services Premium (6 Months) – ₹50,000 (tentative)">All Services Premium (6 Months) – ₹50,000 (tentative)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="subject">Subject / Discipline *</label>
          <input type="text" id="subject" placeholder="e.g., Computer Science, History" required />
        </div>
        <div class="form-group">
          <label for="deadline">Deadline *</label>
          <input type="date" id="deadline" required />
        </div>
        <div class="form-group full">
          <label for="university">University / Institution</label>
          <input type="text" id="university" placeholder="e.g., Delhi University, BHU, IIT Bombay" />
        </div>
        <div class="form-group full">
          <label for="requirements">Requirements / Details *</label>
          <textarea id="requirements" placeholder="Describe your requirements, word count, chapter details, guidelines, citation style (APA/MLA), etc." required></textarea>
        </div>
        <div class="form-group full">
          <label for="fileLink">Upload File / Google Drive Link (Optional)</label>
          <div id="mainFileUploadBox" style="border:2px dashed var(--border);border-radius:10px;padding:16px;text-align:center;cursor:pointer;transition:border-color .2s;margin-bottom:8px" onclick="document.getElementById('mainFileInput').click()" ondragover="event.preventDefault();this.style.borderColor='var(--primary)'" ondragleave="this.style.borderColor='var(--border)'" ondrop="mainHandleDrop(event)">
            <div style="font-size:1.8rem">📎</div>
            <div style="font-size:.9rem;color:var(--muted);margin-top:4px">Click or drag & drop your file here</div>
            <div style="font-size:.8rem;color:var(--muted);margin-top:2px">PDF, DOC, DOCX, XLS, XLSX, PPT, ZIP — max 20MB</div>
            <input type="file" id="mainFileInput" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar" style="display:none" onchange="mainFileSelected(this)" />
          </div>
          <div id="mainFileStatus" style="font-size:.83rem;color:var(--success);display:none;margin-bottom:6px"></div>
          <input type="text" id="fileLink" placeholder="Or paste Google Drive / OneDrive link here" />
        </div>
        <div class="form-group full">
          <label for="refNo">UPI Transaction ID / UTR Number <span style="color:var(--danger)">*</span></label>
          <input type="text" id="refNo" placeholder="12-digit UTR e.g. 419312345678" required />
          <small style="color:var(--muted);font-size:.79rem;margin-top:3px">📌 After filling assignment details, pay to <strong>9018620566@slc</strong> and enter UTR here.</small>
        </div>
        <div class="form-group full">
          <label for="amountPaid">Amount Paid (₹) *</label>
          <input type="number" id="amountPaid" placeholder="e.g. 50" required min="1" />
        </div>
      </div>
      <button type="submit" class="submit-btn" id="orderSubmitBtn">🚀 Submit Order</button>
      <p class="form-note">By submitting this form you confirm that the information is accurate and payment has been made. We will contact you on WhatsApp within 2 hours to confirm your order and begin work.</p>
    </form>
  </div>
</section>

<!-- Track Order -->
<section class="section" id="track">
  <div class="section-header">
    <div class="section-tag">Track Order</div>
    <h2>Track Your Order</h2>
    <p>Enter your Order ID to check the current status of your work.</p>
  </div>
  <div class="track-box">
    <div class="track-input-row">
      <input type="text" id="trackId" placeholder="e.g., SA-2024-1234" />
      <button class="track-btn" onclick="trackOrder()">Track</button>
    </div>
    <div class="track-result" id="trackResult"></div>
    <p style="color:var(--muted);font-size:.83rem;margin-top:14px">No Order ID? <a href="#order" style="color:var(--primary);font-weight:700">Place an order first</a> or contact us on WhatsApp.</p>
  </div>
</section>

<!-- FAQ -->
<section class="section" id="faq">
  <div class="section-header">
    <div class="section-tag">FAQ</div>
    <h2>Frequently Asked Questions</h2>
  </div>
  <div class="faq-list">
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">How do I pay and place an order? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>Pay via UPI to <strong>9018620566@slc</strong>. Note your 12-digit UTR/Transaction ID. Then fill the order form with the UTR and upload your files via WhatsApp or our file portal. We confirm within 2 hours.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">Is confidentiality guaranteed? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>Absolutely. Your documents and personal information are kept strictly confidential. We never share, publish, or reuse any client content. All interactions are 100% private.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">What is the turnaround time? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>Similarity checks: 2–4 hours. AI Humanizer: same day. Proofreading: 1–2 days. A thesis chapter: 5–10 days. Full thesis: 3–8 weeks. Research paper: 5–15 days. Express delivery available.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">Do you provide revisions? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>Yes! Unlimited free revisions within 7 days of delivery for writing services. For similarity check and AI humanizer, revision is provided if the output doesn't meet stated requirements.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">Which similarity checker do you use? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>We use Turnitin and iThenticate — the same tools used by most universities and journals. You receive the full similarity report in PDF format.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">What is your refund policy? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>If work has not started: full refund. Once work begins: 50% refund. After delivery: no refund, but free revisions are provided. Disputes are handled within 48 hours.</p></div>
    </div>
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFaq(this)">Are these services legal and ethical? <span class="faq-icon">+</span></div>
      <div class="faq-answer"><p>Our services provide academic assistance, guidance, and reference material. Similar to a tutor or writing coach. Scholars are responsible for how they use the material. We encourage scholars to review, learn from, and properly attribute the reference work provided.</p></div>
    </div>
  </div>
</section>

<!-- Team -->
<section class="section section-alt" id="team">
  <div class="section-header">
    <div class="section-tag">Our Team</div>
    <h2>Specialized Experts Panel</h2>
    <p>Qualified experts from multiple domains. Team is scalable — new qualified experts appear here automatically.</p>
  </div>
  <div class="team-grid" id="publicTeamGrid">
    <div class="team-card"><div class="team-head"><img class="team-photo" src="https://ui-avatars.com/api/?name=Research+Expert&background=e2e8f0&color=334155" alt="Expert" /><div><div class="team-name">Loading experts...</div><div class="team-role">Please wait</div></div></div><div style="font-size:.82rem;color:var(--muted)">Fetching qualified expert profiles.</div></div>
  </div>
</section>

<!-- Expert Registration -->
<section class="section" id="experts-apply">
  <div class="section-header">
    <div class="section-tag">Careers</div>
    <h2>Apply as Subject Expert</h2>
    <p>We onboard experts across Engineering, Science, Humanities and allied disciplines. Apply with your specialization and documents.</p>
  </div>
  <div class="hiring-banner">
    <div>
      <div class="hb-title">🚀 We Are Hiring Subject Experts</div>
      <div class="hb-sub">Negotiable salary as per assignment complexity, specialization, and delivery quality.</div>
    </div>
    <button class="hb-btn" type="button" onclick="document.getElementById('expertApplyForm').scrollIntoView({behavior:'smooth',block:'start'});showToast('Fill the form below to apply as expert.','🧠');">Apply Now</button>
  </div>
  <div class="expert-apply-card">
    <div class="expert-note">
      🛡 Only verified experts are onboarded. Selection is based on qualification, specialization, sample quality, and interview.
      <br>Already registered? Use <strong>Login</strong> to check your expert application status.
    </div>
    <form id="expertApplyForm" onsubmit="submitExpertApplication(event)">
      <div class="form-grid">
        <div class="form-group"><label for="exFullName">Full Name *</label><input type="text" id="exFullName" required placeholder="Your full legal name" /></div>
        <div class="form-group"><label for="exEmail">Email *</label><input type="email" id="exEmail" required placeholder="you@example.com" /></div>
        <div class="form-group"><label for="exPassword">Expert Login Password *</label><input type="password" id="exPassword" minlength="6" required placeholder="Create password (min 6 chars)" /></div>
        <div class="form-group"><label for="exPassword2">Confirm Password *</label><input type="password" id="exPassword2" minlength="6" required placeholder="Re-enter password" /></div>
        <div class="form-group"><label for="exPhone">WhatsApp Number *</label><input type="tel" id="exPhone" required placeholder="+91 XXXXXXXXXX" /></div>
        <div class="form-group"><label for="exCity">City / State *</label><input type="text" id="exCity" required placeholder="City, State" /></div>

        <div class="form-group"><label for="exQualification">Highest Qualification *</label><input type="text" id="exQualification" required placeholder="e.g. M.Tech, PhD, NET" /></div>
        <div class="form-group"><label for="exExperience">Experience (Years) *</label><input type="number" id="exExperience" min="0" max="40" required placeholder="e.g. 4" /></div>
        <div class="form-group"><label for="exBranch">Primary Branch *</label>
          <select id="exBranch" required>
            <option value="">-- Select Branch --</option>
            <option>Civil Engineering</option><option>Mechanical Engineering</option><option>Electrical Engineering</option>
            <option>Electronics & Communication</option><option>Computer Science / IT</option><option>Chemical Engineering</option>
            <option>Biotechnology</option><option>Mathematics</option><option>Physics</option><option>Chemistry</option>
            <option>Biological Sciences</option><option>Management</option><option>Humanities / Social Sciences</option>
            <option>Statistics / Data Science</option><option>Other</option>
          </select>
        </div>
        <div class="form-group"><label for="exAvailability">Availability *</label>
          <select id="exAvailability" required>
            <option value="">-- Select --</option>
            <option>Part-time</option><option>Full-time</option><option>Freelance / Project Basis</option>
          </select>
        </div>

        <div class="form-group full"><label for="exSubjects">Subjects / Specialization *</label><textarea id="exSubjects" required placeholder="List detailed specialization. Example: Structural Analysis, RCC Design, ETABS, STAAD, Geotechnical Engineering"></textarea></div>
        <div class="form-group full"><label for="exTools">Software / Tools Expertise</label><textarea id="exTools" placeholder="SPSS, MATLAB, ANSYS, ETABS, Python, R, Turnitin, etc."></textarea></div>
        <div class="form-group full"><label for="exAcademic">Academic Profile *</label><textarea id="exAcademic" required placeholder="University, degree, passing year, current designation, publications (if any)"></textarea></div>
        <div class="form-group full"><label for="exStatement">Why should we onboard you? *</label><textarea id="exStatement" required placeholder="Brief statement on your quality, turnaround, and domain strength"></textarea></div>

        <div class="form-group"><label for="exLinkedin">LinkedIn (optional)</label><input type="url" id="exLinkedin" placeholder="https://linkedin.com/in/..." /></div>
        <div class="form-group"><label for="exPortfolio">Portfolio / Google Drive (optional)</label><input type="url" id="exPortfolio" placeholder="Portfolio or sample links" /></div>

        <div class="form-group full">
          <label style="font-weight:700">Required Document Uploads *</label>
          <div class="form-grid">
            <div class="file-field"><label for="exResume">Resume / CV (PDF/DOC) *</label><input type="file" id="exResume" accept=".pdf,.doc,.docx" required /></div>
            <div class="file-field"><label for="exPhoto">Passport Photo *</label><input type="file" id="exPhoto" accept=".jpg,.jpeg,.png" required /></div>
            <div class="file-field"><label for="exSignature">Signature Image *</label><input type="file" id="exSignature" accept=".jpg,.jpeg,.png" required /></div>
            <div class="file-field"><label for="exInstituteId">Institute/Company ID *</label><input type="file" id="exInstituteId" accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div class="file-field"><label for="exQualificationDoc">Qualification Proof *</label><input type="file" id="exQualificationDoc" accept=".pdf,.jpg,.jpeg,.png" required /></div>
          </div>
          <small style="color:var(--muted);font-size:.79rem">Each file max 20MB. If upload fails, submit with Google Drive links in Portfolio field.</small>
        </div>

        <div class="form-group full">
          <label><input type="checkbox" id="exConsent" required style="margin-right:8px" /> I confirm all submitted information and documents are genuine and verifiable.</label>
        </div>
      </div>
      <button type="submit" class="submit-btn" id="expertSubmitBtn">📩 Submit Expert Application</button>
      <p class="form-note">Use this email + password later in <strong>Expert Login</strong>. Access is enabled once admin marks you as <strong>Qualified</strong>.</p>
    </form>
  </div>
</section>

<!-- Feedback & Grievance -->
<section class="section section-alt" id="feedback">
  <div class="section-header">
    <div class="section-tag">Your Voice Matters</div>
    <h2>Feedback, Grievance & Suggestions</h2>
    <p>We take all feedback seriously. Every submission is reviewed personally.</p>
  </div>
  <div style="max-width:640px;margin:0 auto">
    <div class="tabs">
      <button class="tab-btn active" onclick="switchTab('fb-feedback',this)">💬 Feedback</button>
      <button class="tab-btn" onclick="switchTab('fb-grievance',this)">⚠️ Grievance</button>
      <button class="tab-btn" onclick="switchTab('fb-suggestion',this)">💡 Suggestion</button>
    </div>

    <!-- Feedback -->
    <div class="tab-pane active" id="fb-feedback">
      <form onsubmit="submitFeedback(event)">
        <div class="form-grid">
          <div class="form-group"><label>Your Name</label><input type="text" id="fbName" placeholder="Full name" /></div>
          <div class="form-group"><label>Email / WhatsApp</label><input type="text" id="fbContact" placeholder="Contact info" /></div>
          <div class="form-group">
            <label>Service Used</label>
            <select id="fbService">
              <option>-- Select --</option>
              <option>Similarity Check Assistance</option>
              <option>Assistance in Thesis Writing</option>
              <option>AI Humanizer Assistance</option>
              <option>Assistance in Research Paper Writing</option>
              <option>Assistance in Literature Review</option>
              <option>Statistical Analysis Assistance</option>
              <option>Patent Assistance (Idea to Filing)</option>
              <option>Idea Upload & Monetization Assistance</option>
              <option>Research Smart Pack (1 Month)</option>
              <option>All Services Premium (6 Months)</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Rate Your Experience</label>
            <div class="rating-stars" id="ratingStars">
              <span onclick="setRating(1)">★</span><span onclick="setRating(2)">★</span>
              <span onclick="setRating(3)">★</span><span onclick="setRating(4)">★</span>
              <span onclick="setRating(5)">★</span>
            </div>
          </div>
          <div class="form-group full"><label>Your Feedback</label><textarea id="fbMessage" placeholder="Share your experience..."></textarea></div>
          <div class="form-group full">
            <label>Would you recommend us?</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="rec" /> Yes, definitely!</label>
              <label class="radio-label"><input type="radio" name="rec" /> Maybe</label>
              <label class="radio-label"><input type="radio" name="rec" /> No</label>
            </div>
          </div>
        </div>
        <button type="submit" class="submit-btn">Submit Feedback</button>
      </form>
    </div>

    <!-- Grievance -->
    <div class="tab-pane" id="fb-grievance">
      <form onsubmit="submitGrievance(event)">
        <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:13px 16px;margin-bottom:18px;font-size:.86rem;color:#991b1b;">
          ⚠️ Grievances are addressed within <strong>48 hours</strong>. Provide your Order ID for faster resolution.
        </div>
        <div class="form-grid">
          <div class="form-group"><label>Your Name *</label><input type="text" id="grName" placeholder="Full name" required /></div>
          <div class="form-group"><label>Contact (Email/WhatsApp) *</label><input type="text" id="grContact" placeholder="Your contact" required /></div>
          <div class="form-group"><label>Order ID *</label><input type="text" id="grOrderId" placeholder="e.g. SA-2024-1234" required /></div>
          <div class="form-group">
            <label>Issue Type *</label>
            <select id="grIssueType" required>
              <option value="">-- Select --</option>
              <option>Delayed Delivery</option>
              <option>Quality Not as Expected</option>
              <option>Payment Issue</option>
              <option>High Similarity in Delivered Work</option>
              <option>Miscommunication</option>
              <option>Refund Request</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group full"><label>Describe Your Issue *</label><textarea id="grMessage" placeholder="Describe the issue in detail..." required></textarea></div>
          <div class="form-group full">
            <label>Expected Resolution</label>
            <div class="radio-group">
              <label class="radio-label"><input type="radio" name="res" /> Redo the Work</label>
              <label class="radio-label"><input type="radio" name="res" /> Partial Refund</label>
              <label class="radio-label"><input type="radio" name="res" /> Full Refund</label>
              <label class="radio-label"><input type="radio" name="res" /> Apology & Explanation</label>
            </div>
          </div>
        </div>
        <button type="submit" class="submit-btn" style="background:var(--danger)">🚨 Submit Grievance</button>
      </form>
    </div>

    <!-- Suggestion -->
    <div class="tab-pane" id="fb-suggestion">
      <form onsubmit="submitSuggestion(event)">
        <div class="form-grid">
          <div class="form-group"><label>Name (Optional)</label><input type="text" id="sgName" placeholder="Anonymous is fine" /></div>
          <div class="form-group"><label>Email (Optional)</label><input type="email" id="sgEmail" placeholder="For follow-up" /></div>
          <div class="form-group full">
            <label>Category</label>
            <select id="sgCategory">
              <option>New Service Idea</option>
              <option>Pricing Feedback</option>
              <option>Website Improvement</option>
              <option>Process Improvement</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group full"><label>Your Suggestion *</label><textarea id="sgMessage" placeholder="How can we serve you better?" required></textarea></div>
        </div>
        <button type="submit" class="submit-btn" style="background:var(--success)">💡 Submit Suggestion</button>
      </form>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <span class="logo">Research <span>Aid</span></span>
      <p>Professional academic assistance services for PhD scholars, postgraduate students, and researchers across India. Confidential, affordable, and reliable. | <strong style="color:#fff">Research Aid</strong></p>
      <p style="margin-top:10px;font-size:.82rem;opacity:.6">⚖️ Services provided for academic guidance and reference purposes only.</p>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="#services">Similarity Check</a></li>
        <li><a href="#services">Thesis Assistance</a></li>
        <li><a href="#services">AI Humanizer</a></li>
        <li><a href="#services">Research Papers</a></li>
        <li><a href="#services">Literature Review</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">🏠 Home</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#payment">Payment</a></li>
        <li><a href="#submit-files">Submit Files</a></li>
        <li><a href="#track">Track Order</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#feedback">Grievance</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="tel:+919018620566">📱 Call Now</a></li>
        <li><a href="https://wa.me/919018620566">💬 WhatsApp Chat</a></li>
        <li><a href="mailto:najarzain5@gmail.com">📧 Email Us</a></li>
        <li><a href="#">⏰ Mon–Sat, 9AM–9PM</a></li>
        <li><a href="#">📍 India</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Research Aid and Co. | Research Aid – All rights reserved. | Academic Assistance Services | Confidential & Reliable</p>
  </div>
</footer>

<!-- Toast -->
<div class="toast" id="toast">
  <span id="toastIcon">✅</span>
  <span id="toastMsg">Done!</span>
</div>

<!-- Order Quick Modal removed — replaced by paywall service modal -->

<!-- Paywall Service Modal (3 Steps) -->
<div class="modal-overlay" id="serviceModal">
  <div class="modal" style="max-width:520px;width:94%">
    <div class="modal-header">
      <h3 id="svcModalTitle">Get Assistance</h3>
      <button class="modal-close" onclick="closeServiceModal()">×</button>
    </div>

    <!-- Step indicator -->
    <div id="svcSteps" style="display:flex;gap:0;margin-bottom:22px">
      <div class="svc-step-dot active" id="dot1">1</div>
      <div class="svc-step-line" id="line12"></div>
      <div class="svc-step-dot" id="dot2">2</div>
      <div class="svc-step-line" id="line23"></div>
      <div class="svc-step-dot" id="dot3">3</div>
    </div>

    <!-- STEP 1: Pay via UPI -->
    <div id="svcStep1">
      <p style="font-size:.93rem;color:var(--muted);margin-bottom:14px">Pay the amount below via UPI, then proceed to the next step with your transaction reference number.</p>
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;text-align:center">
        <div style="font-size:2rem;margin-bottom:6px">💳</div>
        <div style="font-size:1.05rem;font-weight:700;color:var(--primary)" id="svcPrice">₹—</div>
        <div style="font-size:.85rem;color:var(--muted);margin-top:4px" id="svcServiceLabel">—</div>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAfABkAMBIgACEQEDEQH/xAAxAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBBwEBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAtUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4VV7Xkfl9lA8x7bbXvI5ccMpais5SiupFipLe09BSoAAAAAAAAAAAAAAAAGM0f2j6+iymZ+9rFVHkR9r3Oeua6sX2e2HnDKBTWdLtppM5LJ0o4+YAAAAAAAAAAAAAAAADNTLiJvrl9BY+zNR9X8mYWb2iK0FVqJlrRcxsfFK00e5lzIYZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkdVULVVC1VVqHCAWyqtQA8RyWfD6qZ53AK4sVSLZU2wIRNc64tVULVVC1c+gAAAAAAqrWqMtauR1VV2Zzc5TXGQo9/mSbpMZtjO6LIRDY4/d5Mk6D81/QzK3eX1B80FTVlpi73MGprJ2nPzT9RrKU0FLI9llhv0DGk92pC1qrDqWlrVWoAAAAAAqrWqKuqtexjdMtSh2WN1hFyV+Mj2+di9g8Zpo+359PNjXUtORtXxF1m6q1Nfg9diyRtsFKN/X5/2dMzohfZnV5Qk5nd1RAte3EtLWqtQAAAAABVWo/OZ2yGNa+MYfcPJk/Uv0d6XZYomzvUIr7GHeEep5/Dau4xF/m7kuMvt/JS8a/cn59tMjHNJ5jakh4T9IrzMtZ2MbB3ngj2vz6AAAAAACETarwIlZd9zO1VzQF/5gaI9spcHe9pNQZCP84mkxehoSK2gqtdl4R9sMtqCm1NdAJ1pZYc/Qa35VF7+f7/JlhpclwNFVWdYaoAAAAAAD59HLrFgFDZZK3LOzpIZsJma0pVZztXFpUwPp+g03vJnT7L2ph9TQwDZ4j1+mn5htpmFJ0/KXpoMd33p+d6djT9HwPjakS49xSxy9nWFxZQJ4AAAAAAiyuZgpnyEcNH3oC0+SMsaG7/PZZppWN/RT8v0N/nSs0WZ1pbUPizPnuVNM3b5q4K/19jnOFq6k6adhDWU74cqbaYM0n31ozHytPyJAAAAAAAFVaxT823dT2LjK6jGlnpaK7GZr7kmX+RtDjkf07PF7yk5kpb7GC81GKuCnvsx2G48WhC6Yq2Iug48jN3lviThz42BqauVoTqAAAAAAABBnczE21vmRpcH9NxnIPAuqmZ5Pi85GlydH6LnRcIhmYvnmfodh+ejTY/5YHv5tsScrjO3xU39Z4IdrKyp6mR+hrKin9G4hWEs+gAAAAAAQ5gyukzdqds9oc8Xnfh3MH9+aEre2x9mW0UeUZ266Z0puXXkb8GA68uhuJuU4Goz97iDS3/5X+jHHFWtUbzh34FHd0kUibetimqQ5gAAAAAArbKCUehrIJRebrXn57w3GcKPvo/hR/oeMuSHa5eeaH5+eaI0n59r4hm+nDSGf1NxEMJH2uPPcbtalJdfduZjM7r0Yrva60/NtfLkH3xiLc1H0AAAAAABXHKZ+f7Qn1uVtS2sc5dlLR87o4z893Ps2m2xGnWAzOU/Uawxl78oy1jVVsaCBHqzUd+lIX9DErDX+bEZxa4QsNr+eWRq8nqsGfpMqqtQAAAAABU21UZ+/ylqVP6Fk7c7wEAzs+06EnllbEsYsm3MhaeM6a2lk2ZpgVcDOagzzVTCFWefpUyp9+V8SZzLPOevpdyMzoyFU21UaoAAAAAACqta0p9V+d9D1Ot6gk6KPlS6xGx9nix+4subfE68qbn3hj9Iy9tlz9BzdFpTGWfmWStJls8fp+Xp7cyl5oLUiU/bKmt6eKs6aLh5JubpbovJwAAAAAACCea6NLIXPO6Inxu+XJO2zNefLKk1xRzLG3M/DvPhX6fMwTaVeeqzT/chsjP8AS9qz539jvdfmV+efdvmyy71UE6z6/cHDNab8/P07vVWoAAAAAA8e6okd/wA/nGm65QanlidwYbQROhpusTIl1YVvwucBu/z4m+dhlzauAx2oys8srXESDQ5OZbki5zVgecZqc4bbqqivuqrPF/qnMl/QAAAAAAVVrVFX241RPtcJpiNpszrzJaKBIK+zm9jB7XL1pdQdV1IGQ/Q/zou2a1ZQbvF7kz3L1PMlJ9bE/OtJX7gwPy79kPrd+jGw7qiN7lJeoOkvz6AAAAAAFVa1RV8q+1Kq74iBsvz/APQCnrrKgNNW+RFr7qgNHnLSGa+LBpDzqA7Yz39NZMpvJpYFBniz335frjpFl4svJPW+M/W66CQNcrCzRpIAAAAAA59BVLUVS1FVafRx+dwAgTxzrbYVPuzHB3FZ4thU2XQVXy2FT0shHg2wq7QFfYBFlDl1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcT71qfpaqrkXSs8lr8pZxNU/stflXCNEprg5/Kz6TJdFbnvpUSCT2pOZfqiwPXqJELn5S+S9VfktfsKaAAAAAAAAAAAAAAAAAAPn0Pn0AAPn0AAAAAAAAAAAAARYvXyeJ3PocOvLqfYsyGdvv0Q+rwdPfj2R+nXgdfcf6JMLue/cf2TQAAAAAAAAAAAAAAAAAAAAAAfPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8QAAv/aAAwDAQACAAMAAAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADB7INGEAAAAAAAAAAAAAAAAAAvapzzz6AAAAAAAAAAAAAAAAAALDmxRhaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAMIAEEMAEMIAIAAAAAAAAAUc84Qk8kYogsso808soAAAAAAU8gs8M4IssAkkMMUQ8oAAAAAAQ8wAUA4wY8AI4Igo48oAAAAAAEIYgowI8UwAIE0UQM8AAAAAAAAkMMIYgoc0wQ80wwAkgAAAAAAA4Ikcks4cIYU8EsgA8AAAAAAAQcwc4IQUMUQYckU4IAAAAAAAAU8sYc8Mc0sgsw8wwIcAAAAAAAAs88QYA0U8soMo488MAAAAAAAEIwkAE84EMYA48gQ44gAAAAAAEgIMg44wAggocoIUYgIAAAAAAQcIY4wsE0A44owYs8MAAAAAAAEowQI0MwcMM4Y08YEoAAAAAAAEsUgIAgEoUkkUEkU0MgAAAAAAEsMgY8csU8oIUksYsAgAAAAAAU8IooEQgQ4os4EgwwEoAAAAAAU08sk8ogIsMkk0k8YgAAAAAAAAAAQAAAQwgwgQwwgAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAcAUMcsAoMcEIAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAk08Q8AwMYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8QAAv/aAAwDAQACAAMAAAAQ88888888888888888888888888888888888888888888888888888888888zpwdx778888888888888888882OXnIlm888888888888888888osSxmKR88888888888888888888888888888888888888884088w488884408888888888c04MwgMQUI0YI4w4s8888888sMY4coosIMg48s8AscU8888888w4EUwY0AAkIYM8o00888888888w444YQgA0goQ0MMc88888888YsQ0sEIEoM0IYMcgAU888888ssEs8AI88MAkQssUcw88888884kIUUQccwA8cMM4A888888888sMAYEAYQ8sYA8og4oA888888884UA4kIwUAs0M0kAoU8888888oAYkIQ4AcEUkA8kU44c8888888o8AYg844YQc80QIsAc8888884Yw44EwQYcoMk4sEcEc888888oUssMcAEw0cw8YI80wU8888888o8AYUQYUggwc0w8AAU888888ssswcAIQ0Ao0kc8EMMc8888888w0s0gUccwowcAMYUAU88888840c40EIA8QMsAUggsc88888888888c8scss8scs8cs888888888888888888888888888888888844wwo0swI4U00o08c88888888sM8McsM88scc8csM888888888888woEQg0Awo8o88888888888888888888888c888888888888888888888888888888888//8QAMREAAgICAQEEBgsBAAAAAAAAAQMCBAURABITFCExQEFRcZGxIiM2QlBScnSQocHx/9oACAECAQE/APxuvjL9mHWpEjH2kiO/dviKrVZCsp6iNuhuMh4EE8sQWnNGK6MGw7IbXGA+PGJZYuvghEtlkiIa0YjfkfZrj8VkK8DNleQiPMgiWvhyvWfZn0JWZy5Zx12rHqciUY+3wI/r0PvNS/UrKjdNZiwBryGx8OWU5Fd7G95cGwDoCEx7xxf2gf8AtR8xyn9UjNPh4MDnaP6RscpZi+qTAep4kPGMiZa5jYwjhnzDQgzmds/L465UZRTWeh2Ti6DBobB+j6HG/iXK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" alt="UPI QR Code" style="width:180px;height:180px;object-fit:contain;display:block;margin:10px auto;border-radius:8px;border:1px solid var(--border)" />
        <div style="font-size:.82rem;color:var(--muted);margin-bottom:2px">Account holder: MR Sufare Rashid</div>
        <div style="margin:8px 0;font-size:.97rem;font-weight:700;letter-spacing:.5px">UPI ID: <span style="color:var(--primary);user-select:all">9018620566@slc</span></div>
        <button class="modal-btn primary" onclick="copyUpi()" style="margin:4px auto;display:block">📋 Copy UPI ID</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px">
        <button class="modal-btn teal" style="font-size:.8rem;padding:8px 14px" onclick="openUpiApp('GPay')">GPay</button>
        <button class="modal-btn teal" style="font-size:.8rem;padding:8px 14px" onclick="openUpiApp('PhonePe')">PhonePe</button>
        <button class="modal-btn teal" style="font-size:.8rem;padding:8px 14px" onclick="openUpiApp('Paytm')">Paytm</button>
        <button class="modal-btn teal" style="font-size:.8rem;padding:8px 14px" onclick="openUpiApp('BHIM')">BHIM</button>
      </div>
      <button class="modal-btn green" style="width:100%;font-size:1rem" onclick="svcGoStep(2)">I've Paid → Enter UTR</button>
    </div>

    <!-- STEP 2: Verify UTR -->
    <div id="svcStep2" style="display:none">
      <p style="font-size:.93rem;color:var(--muted);margin-bottom:14px">Enter the 12-digit UTR / Transaction Reference Number from your payment app to verify your payment.</p>
      <label style="font-size:.88rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">UTR / Transaction ID *</label>
      <input id="svcUtr" type="text" placeholder="e.g. 012345678901" maxlength="30"
        style="width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:.97rem;margin-bottom:14px;outline:none"
        oninput="this.style.borderColor='var(--primary)'" />
      <label style="font-size:.88rem;font-weight:600;color:var(--text);display:block;margin-bottom:6px">Amount Paid (₹) *</label>
      <input id="svcAmtPaid" type="number" placeholder="Enter amount you paid" min="0"
        style="width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:.97rem;margin-bottom:18px;outline:none"
        oninput="this.style.borderColor='var(--primary)'" />
      <div style="display:flex;gap:10px">
        <button class="modal-btn" style="flex:1" onclick="svcGoStep(1)">← Back</button>
        <button class="modal-btn green" style="flex:2" onclick="svcVerifyUtr()">Verify & Continue →</button>
      </div>
    </div>

    <!-- STEP 3: Order Form -->
    <div id="svcStep3" style="display:none">
      <p style="font-size:.88rem;color:var(--success);font-weight:600;margin-bottom:14px">✅ Payment recorded! Fill in your details to complete the order.</p>
      <form id="svcOrderForm" onsubmit="svcSubmitOrder(event)" style="display:flex;flex-direction:column;gap:10px">
        <input type="text" id="svcName" placeholder="Full Name *" required
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />
        <input type="email" id="svcEmail" placeholder="Email Address *" required
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />
        <input type="tel" id="svcPhone" placeholder="WhatsApp Number *" required
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />
        <input type="text" id="svcSubject" placeholder="Subject / Discipline (e.g. Computer Science)"
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />
        <input type="text" id="svcUniversity" placeholder="University / Institute"
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />
        <label style="font-size:.85rem;font-weight:600;color:var(--muted);margin-bottom:-6px;display:block">Deadline Date</label>
        <input type="date" id="svcDeadline"
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none;color:var(--muted)" />
        <textarea id="svcRequirements" rows="3" placeholder="Requirements / Instructions"
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;resize:vertical;outline:none;font-family:inherit"></textarea>
        <input type="url" id="svcFileLink" placeholder="Google Drive / Dropbox file link (optional)"
          style="padding:10px 13px;border:1.5px solid var(--border);border-radius:9px;font-size:.93rem;outline:none" />

        <!-- File Upload -->
        <div id="svcFileUploadBox" style="border:2px dashed var(--border);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:border-color .2s" onclick="document.getElementById('svcFileInput').click()" ondragover="event.preventDefault();this.style.borderColor='var(--primary)'" ondragleave="this.style.borderColor='var(--border)'" ondrop="svcHandleDrop(event)">
          <div style="font-size:1.6rem">📎</div>
          <div style="font-size:.88rem;color:var(--muted);margin-top:4px">Click or drag & drop your file here</div>
          <div style="font-size:.78rem;color:var(--muted);margin-top:2px">PDF, DOC, DOCX, XLS, XLSX, PPT, ZIP — max 20MB</div>
          <input type="file" id="svcFileInput" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar" style="display:none" onchange="svcFileSelected(this)" />
        </div>
        <div id="svcFileStatus" style="font-size:.83rem;color:var(--success);display:none;margin-top:2px"></div>
        <button type="submit" id="svcSubmitBtn" class="modal-btn green" style="width:100%;font-size:1rem;margin-top:4px">🚀 Place Order</button>
      </form>
    </div>
  </div>
</div>

<!-- Order Confirmation Modal -->
<div class="confirm-overlay" id="confirmOverlay">
  <div class="confirm-card">
    <div class="confirm-header">
      <div class="confirm-tick">✅</div>
      <h2>Order Placed Successfully!</h2>
      <p>We'll confirm on WhatsApp within 2 hours.</p>
    </div>
    <div class="confirm-body">
      <div class="confirm-order-id" onclick="copyOrderId()" title="Click to copy">
        <div class="label">Your Order ID</div>
        <div class="value" id="confirmOrderId">—</div>
        <div class="hint">📋 Click to copy — save this for tracking</div>
      </div>
      <div class="confirm-details">
        <div class="confirm-detail"><div class="dl">Service</div><div class="dv" id="confirmService">—</div></div>
        <div class="confirm-detail"><div class="dl">Amount Paid</div><div class="dv" id="confirmAmount">—</div></div>
        <div class="confirm-detail"><div class="dl">Name</div><div class="dv" id="confirmName">—</div></div>
        <div class="confirm-detail"><div class="dl">Deadline</div><div class="dv" id="confirmDeadline">—</div></div>
      </div>
      <div class="confirm-steps">
        <p>📌 What happens next?</p>
        <ul>
          <li>We verify your payment within 1–2 hours</li>
          <li>Our expert is assigned to your order</li>
          <li>You receive updates on WhatsApp</li>
          <li>Delivered before your deadline</li>
        </ul>
      </div>
      <div class="confirm-actions">
        <button class="confirm-wa" onclick="notifyOnWhatsApp()">💬 Notify on WhatsApp</button>
        <button class="confirm-done" onclick="closeConfirmModal()">Done ✓</button>
      </div>
    </div>
  </div>
</div>

<!-- WhatsApp Float -->
<button class="whatsapp-float" onclick="openWhatsApp()" title="Chat on WhatsApp">💬</button>

<!-- Back to Top -->
<button class="back-to-top" id="backToTop" onclick="scrollToSection('home')" title="Back to Top">↑</button>

<script>
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbz0sBylOKZnuFRZdMbfNdtr5JrSf1EE8RX6ef94TJJVMdfarvm4TC64o8B3Kqhjgr4o/exec';
  emailjs.init('ntjRszAyP7FaoFO1A');

  // ── UTILS ──
  function scrollToSection(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }

  function showToast(msg, icon = '✅', duration = 3800) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    document.getElementById('toastIcon').textContent = icon;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), duration);
  }

  // ── NAV MENU ──
  function toggleMenu() {
    const links = document.getElementById('navLinks');
    const open = links.style.display === 'flex';
    links.style.cssText = open ? '' :
      'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:#fff;padding:20px 5%;border-bottom:1px solid var(--border);gap:14px;z-index:99;box-shadow:0 8px 24px rgba(0,0,0,.1)';
  }

  // ── BACK TO TOP ──
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  // ── FAQ ──
  function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // ── TABS ──
  function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
  }

  // ── RATING ──
  let currentRating = 0;
  function setRating(n) {
    currentRating = n;
    document.querySelectorAll('#ratingStars span').forEach((s, i) => {
      s.classList.toggle('lit', i < n);
    });
  }

  // ── UPI COPY ──
  function copyUpi() {
    navigator.clipboard.writeText('9018620566@slc')
      .then(() => showToast('UPI ID copied! Open your payment app.', '📋'))
      .catch(() => showToast('UPI: 9018620566@slc', '📋'));
  }

  function openUpiApp(app) {
    showToast(`Opening ${app}... If it doesn't open, copy the UPI ID manually.`, '📱');
  }

  document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('open'); });
  });

  // ── WHATSAPP ──
  function openWhatsApp() {
    const msg = encodeURIComponent("Hello Research Aid and Co! I need academic assistance. Please guide me on services and pricing.");
    window.open('https://wa.me/919018620566?text=' + msg, '_blank');
    showToast('Opening WhatsApp...', '💬');
  }

  // ── ORDER CONFIRMATION HELPERS ──
  let _lastOrder = {};

  function showConfirmModal(order) {
    _lastOrder = order;
    document.getElementById('confirmOrderId').textContent  = order.orderId  || '—';
    document.getElementById('confirmService').textContent  = (order.service || '—').split('–')[0].trim();
    document.getElementById('confirmAmount').textContent   = '₹' + (order.amountPaid || '—');
    document.getElementById('confirmName').textContent     = order.name     || '—';
    document.getElementById('confirmDeadline').textContent = order.deadline || '—';
    document.getElementById('confirmOverlay').classList.add('open');
  }

  function closeConfirmModal() {
    document.getElementById('confirmOverlay').classList.remove('open');
  }

  function copyOrderId() {
    const id = _lastOrder.orderId || '';
    navigator.clipboard.writeText(id).then(() => {
      showToast('Order ID copied: ' + id, '📋');
    }).catch(() => showToast('Order ID: ' + id, '📋', 5000));
  }

  function notifyOnWhatsApp() {
    const o = _lastOrder;
    const msg = encodeURIComponent(
      `Hello! I have placed an order on Research Aid.\n\n` +
      `*Order ID:* ${o.orderId}\n` +
      `*Service:* ${o.service}\n` +
      `*Name:* ${o.name}\n` +
      `*Amount Paid:* ₹${o.amountPaid}\n` +
      `*UTR/Ref:* ${o.refNo}\n` +
      `*Deadline:* ${o.deadline}\n\n` +
      `Please confirm my order. Thank you!`
    );
    window.open('https://wa.me/919018620566?text=' + msg, '_blank');
  }

  // ── ADMIN EMAIL NOTIFICATION ──
  // ⚠️ Create a new EmailJS template with these variables:
  //    {{order_id}}, {{client_name}}, {{client_email}}, {{client_phone}},
  //    {{service}}, {{amount_paid}}, {{ref_no}}, {{deadline}},
  //    {{university}}, {{requirements}}, {{file_link}}
  //    Set the "To Email" in the template to: najarzain5@gmail.com
  const ADMIN_TEMPLATE_ID = 'template_oh8jcxn';

  function sendAdminNotification(order) {
    emailjs.send('service_xgx967g', ADMIN_TEMPLATE_ID, {
      order_id:     order.orderId,
      client_name:  order.name,
      client_email: order.email,
      client_phone: order.phone,
      service:      order.service,
      amount_paid:  order.amountPaid,
      ref_no:       order.refNo,
      deadline:     order.deadline,
      university:   order.university  || '—',
      requirements: order.requirements || '—',
      file_link:    order.fileLink    || 'None'
    }).catch(() => {});
  }

  // ── ORDER FORM ──
  async function submitOrder(e) {
    e.preventDefault();
    const btn = document.getElementById('orderSubmitBtn');
    btn.textContent = '⏳ Submitting...';
    btn.disabled = true;

    const name    = document.getElementById('fullName').value;
    const orderId = 'SA-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random()*9000)+1000);

    // Upload file to Drive first if selected
    let fileLink = document.getElementById('fileLink').value;
    if (_mainSelectedFile) {
      btn.textContent = '☁️ Uploading file...';
      const driveUrl = await uploadFileToDrive(_mainSelectedFile, orderId, name);
      if (driveUrl) {
        fileLink = driveUrl;
        showToast('File uploaded to Drive!', '☁️', 3000);
      } else {
        showToast('File upload failed — order will still be placed.', '⚠️', 3500);
      }
    }

    btn.textContent = '⏳ Placing order...';

    const payload = {
      type:        'ORDER',
      orderId,
      name,
      email:       document.getElementById('email').value,
      phone:       document.getElementById('phone').value,
      service:     document.getElementById('service').value,
      subject:     document.getElementById('subject').value,
      university:  document.getElementById('university').value,
      deadline:    document.getElementById('deadline').value,
      requirements:document.getElementById('requirements').value,
      fileLink:    fileLink,
      refNo:       document.getElementById('refNo').value,
      amountPaid:  document.getElementById('amountPaid').value
    };

    fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) })
      .then(r => r.json())
      .catch(() => {})
      .finally(() => {
        // Save to Firestore
        const uid = (typeof auth !== 'undefined' && auth.currentUser) ? auth.currentUser.uid : null;
        if (typeof db !== 'undefined') {
          db.collection('orders').doc(orderId).set({
            ...payload, uid: uid || '', status: 'Pending',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }).catch(() => {});
        }
        // Email to client
        emailjs.send('service_xgx967g', 'template_zp83lus', {
          to_name:     name,
          to_email:    payload.email,
          order_id:    orderId,
          service:     payload.service,
          amount_paid: payload.amountPaid
        }).catch(() => {});
        // Email to admin
        sendAdminNotification(payload);
        // Show confirmation modal
        showConfirmModal(payload);
        e.target.reset();
        _mainSelectedFile = null;
        document.getElementById('mainFileStatus').style.display = 'none';
        document.getElementById('mainFileUploadBox').style.borderColor = 'var(--border)';
        btn.textContent = '🚀 Submit Order';
        btn.disabled = false;
      });
  }

  // ── FEEDBACK ──
  function submitFeedback(e) {
    e.preventDefault();
    const payload = {
      type:    'FEEDBACK',
      name:    document.getElementById('fbName').value || '',
      contact: document.getElementById('fbContact').value || '',
      service: document.getElementById('fbService').value || '',
      rating:  currentRating,
      message: document.getElementById('fbMessage').value || ''
    };
    // Google Sheets (backup)
    fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) }).catch(() => {});
    // Firestore
    if (typeof db !== 'undefined') {
      db.collection('feedback').add({
        ...payload,
        uid: auth?.currentUser?.uid || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }
    showToast('Thank you for your feedback! 💙');
    e.target.reset(); setRating(0);
  }

  // ── GRIEVANCE ──
  function submitGrievance(e) {
    e.preventDefault();
    const payload = {
      type:      'GRIEVANCE',
      name:      document.getElementById('grName').value || '',
      contact:   document.getElementById('grContact').value || '',
      orderId:   document.getElementById('grOrderId').value || '',
      issueType: document.getElementById('grIssueType').value || '',
      message:   document.getElementById('grMessage').value || ''
    };
    // Google Sheets (backup)
    fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) }).catch(() => {});
    // Firestore
    if (typeof db !== 'undefined') {
      db.collection('grievances').add({
        ...payload,
        uid: auth?.currentUser?.uid || '',
        status: 'Open',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }
    showToast('Grievance submitted! We resolve within 48 hours.', '⚠️');
    e.target.reset();
  }

  // ── SUGGESTION ──
  function submitSuggestion(e) {
    e.preventDefault();
    const payload = {
      type:     'SUGGESTION',
      name:     document.getElementById('sgName').value || 'Anonymous',
      email:    document.getElementById('sgEmail').value || '',
      category: document.getElementById('sgCategory').value || '',
      message:  document.getElementById('sgMessage').value || ''
    };
    // Google Sheets (backup)
    fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) }).catch(() => {});
    // Firestore
    if (typeof db !== 'undefined') {
      db.collection('suggestions').add({
        ...payload,
        uid: auth?.currentUser?.uid || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }
    showToast('Suggestion received! Thank you. 💡');
    e.target.reset();
  }

  // ── EXPERT APPLICATION ──
  async function submitExpertApplication(e) {
    e.preventDefault();
    const btn = document.getElementById('expertSubmitBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Uploading documents...';

    const get = id => document.getElementById(id);
    const val = id => (get(id)?.value || '').trim();
    const file = id => get(id)?.files?.[0] || null;

    const fullName = val('exFullName');
    const expertEmail = val('exEmail');
    const expertPassword = get('exPassword')?.value || '';
    const expertPassword2 = get('exPassword2')?.value || '';
    if (fullName.length < 2) {
      showToast('Please enter valid full name.', '❌');
      btn.disabled = false;
      btn.textContent = '📩 Submit Expert Application';
      return;
    }
    if (expertPassword.length < 6) {
      showToast('Password must be at least 6 characters.', '❌');
      btn.disabled = false;
      btn.textContent = '📩 Submit Expert Application';
      return;
    }
    if (expertPassword !== expertPassword2) {
      showToast('Password and confirm password do not match.', '❌');
      btn.disabled = false;
      btn.textContent = '📩 Submit Expert Application';
      return;
    }

    // Ensure expert login credentials exist in Firebase Auth
    try {
      if (!auth.currentUser) {
        try {
          await auth.createUserWithEmailAndPassword(expertEmail, expertPassword);
        } catch (err) {
          if (err.code === 'auth/email-already-in-use') {
            await auth.signInWithEmailAndPassword(expertEmail, expertPassword);
          } else {
            throw err;
          }
        }
      } else if ((auth.currentUser.email || '').toLowerCase() !== expertEmail.toLowerCase()) {
        showToast('Login mismatch. Please use same account as expert email.', '❌');
        btn.disabled = false;
        btn.textContent = '📩 Submit Expert Application';
        return;
      }

      const uid = auth.currentUser?.uid;
      if (uid) {
        await db.collection('users').doc(uid).set({
          name: fullName,
          email: expertEmail,
          phone: val('exPhone'),
          role: 'expert-applicant',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      }
    } catch (authErr) {
      showToast('Could not create expert login. ' + friendlyAuthError(authErr.code), '❌', 4500);
      btn.disabled = false;
      btn.textContent = '📩 Submit Expert Application';
      return;
    }
    const applicationId = 'EX-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 90000) + 10000);

    const requiredFiles = [
      { key: 'resumeUrl', name: 'Resume', input: 'exResume' },
      { key: 'photoUrl', name: 'Photo', input: 'exPhoto' },
      { key: 'signatureUrl', name: 'Signature', input: 'exSignature' },
      { key: 'instituteIdUrl', name: 'Institute ID', input: 'exInstituteId' },
      { key: 'qualificationDocUrl', name: 'Qualification Proof', input: 'exQualificationDoc' }
    ];

    const fileUrls = {};
    for (const item of requiredFiles) {
      const f = file(item.input);
      if (!f) {
        showToast(item.name + ' is required.', '❌');
        btn.disabled = false;
        btn.textContent = '📩 Submit Expert Application';
        return;
      }
      btn.textContent = '⏳ Uploading ' + item.name + '...';
      const url = await uploadFileToDrive(f, applicationId, fullName);
      if (!url) {
        showToast(item.name + ' upload failed. Please retry.', '❌', 4200);
        btn.disabled = false;
        btn.textContent = '📩 Submit Expert Application';
        return;
      }
      fileUrls[item.key] = url;
    }

    btn.textContent = '⏳ Submitting application...';

    const payload = {
      type: 'EXPERT_APPLICATION',
      applicationId,
      fullName,
      name: fullName,
      email: expertEmail,
      phone: val('exPhone'),
      cityState: val('exCity'),
      qualification: val('exQualification'),
      experienceYears: val('exExperience'),
      branch: val('exBranch'),
      availability: val('exAvailability'),
      subjects: val('exSubjects'),
      tools: val('exTools'),
      academicProfile: val('exAcademic'),
      statement: val('exStatement'),
      linkedin: val('exLinkedin'),
      portfolio: val('exPortfolio'),
      loginEmail: expertEmail,
      status: 'Applied',
      ...fileUrls
    };

    try {
      await fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) });
    } catch (_) {}

    if (typeof db !== 'undefined') {
      db.collection('expertApplications').doc(applicationId).set({
        ...payload,
        uid: auth?.currentUser?.uid || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(() => {});
    }

    showToast('Application submitted successfully! We will contact you after screening.', '✅', 5200);
    e.target.reset();
    btn.disabled = false;
    btn.textContent = '📩 Submit Expert Application';
  }

  // ── TRACK ──
  async function trackOrder() {
    const id  = document.getElementById('trackId').value.trim().toUpperCase();
    const box = document.getElementById('trackResult');
    if (!id) { showToast('Please enter an Order ID.', '❌'); return; }

    box.style.display = 'block';
    box.innerHTML = '<p style="text-align:center;padding:18px;color:var(--muted)">⏳ Looking up your order…</p>';

    try {
      // Query by orderId field
      const snap = await db.collection('orders').where('orderId', '==', id).limit(1).get();
      if (snap.empty) {
        box.innerHTML = `<p style="color:var(--danger);font-weight:700;padding:14px 0">❌ No order found with ID <strong>${id}</strong>.<br><span style="font-weight:400;font-size:.88rem;color:var(--muted)">Check the ID in your confirmation email or WhatsApp message.</span></p>`;
        return;
      }

      const o = snap.docs[0].data();
      const statusMap = {
        'Pending':       { step: 1, color: '#f59e0b', label: 'Pending — Payment Verification' },
        'Confirmed':     { step: 2, color: '#3b82f6', label: 'Confirmed — Work Starting Soon' },
        'In Progress':   { step: 2, color: '#6366f1', label: 'In Progress — Expert Working' },
        'Under Review':  { step: 3, color: '#8b5cf6', label: 'Under Quality Review' },
        'Delivered':     { step: 4, color: '#10b981', label: 'Delivered ✓' },
      };
      const s = statusMap[o.status] || { step: 1, color: '#f59e0b', label: o.status || 'Pending' };

      const steps = [
        { label: 'Order Received',  desc: 'Payment confirmed and order registered.' },
        { label: 'Work In Progress', desc: 'Our expert is working on your document.' },
        { label: 'Quality Review',  desc: 'Document under review before delivery.' },
        { label: 'Delivered',       desc: 'Sent to your email & WhatsApp.' },
      ];

      const stepsHTML = steps.map((st, i) => {
        const done    = (i + 1) < s.step;
        const active  = (i + 1) === s.step;
        const pending = (i + 1) > s.step;
        const dotCls  = done ? '' : (active ? 'style="background:'+s.color+'"' : 'class="track-dot pending"');
        return `<div class="track-step">
          <div class="track-dot" ${done ? '' : dotCls}></div>
          <div>
            <strong style="${active ? 'color:'+s.color : ''}">${st.label}${active ? ' ◀' : ''}</strong><br>
            <span style="font-size:.8rem;color:var(--muted)">${active ? '<strong style="color:'+s.color+'">'+s.label+'</strong>' : (done ? '✓ Done' : 'Pending')}</span>
          </div>
        </div>`;
      }).join('');

      const ts = o.timestamp?.seconds ? new Date(o.timestamp.seconds * 1000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '—';

      box.innerHTML = `
        <div style="background:#f8fafc;border-radius:12px;padding:14px 16px;margin-bottom:16px;border:1px solid var(--border)">
          <div style="font-size:.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">Order ID</div>
          <div style="font-family:monospace;font-size:1.1rem;font-weight:800;color:var(--dark)">${o.orderId}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
            <div><div style="font-size:.72rem;color:var(--muted)">Service</div><div style="font-size:.86rem;font-weight:700">${o.service || '—'}</div></div>
            <div><div style="font-size:.72rem;color:var(--muted)">Status</div><div style="font-size:.86rem;font-weight:800;color:${s.color}">${o.status || 'Pending'}</div></div>
            <div><div style="font-size:.72rem;color:var(--muted)">Amount Paid</div><div style="font-size:.86rem;font-weight:700">₹${o.amountPaid || '—'}</div></div>
            <div><div style="font-size:.72rem;color:var(--muted)">Order Date</div><div style="font-size:.86rem;font-weight:700">${ts}</div></div>
          </div>
        </div>
        ${stepsHTML}`;
    } catch(err) {
      box.innerHTML = '<p style="color:var(--danger);padding:14px 0">⚠️ Could not fetch order. Please try again or contact us on WhatsApp.</p>';
      console.error(err);
    }
  }

  // ── FILE UPLOAD HELPERS ──
  const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20MB

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function uploadFileToDrive(file, orderId, name) {
    if (file.size > MAX_FILE_BYTES) {
      showToast('File too large. Max 20MB. Use Google Drive link instead.', '❌', 4000);
      return null;
    }

    try {
      const b64 = await fileToBase64(file);
      const payload = {
        type: 'FILE_UPLOAD',
        orderId: orderId || '',
        name: name || '',
        fileName: file.name,
        mimeType: file.type || 'application/octet-stream',
        fileData: b64
      };

      const send = async (asJson) => {
        const res = await fetch(SHEET_URL, {
          method: 'POST',
          headers: asJson ? { 'Content-Type': 'application/json' } : undefined,
          body: JSON.stringify(payload)
        });
        const text = await res.text();
        let json = {};
        try { json = JSON.parse(text); } catch (_) {}
        if (json.status === 'success' && json.fileUrl) return { ok: true, url: json.fileUrl };
        if (json.status === 'success' && !json.fileUrl) {
          return { ok: false, msg: 'Apps Script returned success but no fileUrl. Redeploy latest appsscript.js web app.' };
        }
        return { ok: false, msg: json.message || text || 'Unknown upload error' };
      };

      let attempt = await send(false);
      if (!attempt.ok) attempt = await send(true);
      if (attempt.ok) return attempt.url;

      const msg = String(attempt.msg).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
      showToast('Upload failed: ' + msg, '❌', 4500);
      console.error('Apps Script upload failed:', attempt.msg);
      return null;
    } catch (e) {
      console.error('Upload error:', e);
      showToast('Upload failed. Check Apps Script deployment access.', '❌', 4500);
      return null;
    }
  }

  // Paywall modal file
  let _svcSelectedFile = null;
  function svcFileSelected(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) { showToast('File too large. Max 20MB.','❌'); input.value=''; return; }
    _svcSelectedFile = file;
    const box = document.getElementById('svcFileStatus');
    box.style.display = 'block';
    box.textContent = '📎 ' + file.name + ' (' + (file.size/1024/1024).toFixed(2) + ' MB) — ready to upload';
    document.getElementById('svcFileUploadBox').style.borderColor = 'var(--success)';
  }
  function svcHandleDrop(e) {
    e.preventDefault();
    document.getElementById('svcFileUploadBox').style.borderColor = 'var(--border)';
    const file = e.dataTransfer.files[0];
    if (file) { document.getElementById('svcFileInput').files; _svcSelectedFile = file; svcFileSelected({ files: [file] }); }
  }

  // Main order form file
  let _mainSelectedFile = null;
  function mainFileSelected(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) { showToast('File too large. Max 20MB.','❌'); input.value=''; return; }
    _mainSelectedFile = file;
    const box = document.getElementById('mainFileStatus');
    box.style.display = 'block';
    box.textContent = '📎 ' + file.name + ' (' + (file.size/1024/1024).toFixed(2) + ' MB) — ready to upload';
    document.getElementById('mainFileUploadBox').style.borderColor = 'var(--success)';
  }
  function mainHandleDrop(e) {
    e.preventDefault();
    document.getElementById('mainFileUploadBox').style.borderColor = 'var(--border)';
    const file = e.dataTransfer.files[0];
    if (file) { _mainSelectedFile = file; mainFileSelected({ files: [file] }); }
  }

  // ── SERVICE PAYWALL MODAL ──
  let _svcService = '', _svcPrice = '', _svcMin = 0, _svcEmoji = '📚';

  function openServiceModal(service, price, minAmount, emoji) {
    _svcService = service;
    _svcPrice   = price;
    _svcMin     = parseFloat(minAmount) || 0;
    _svcEmoji   = emoji || '📚';
    document.getElementById('svcModalTitle').textContent = _svcEmoji + ' ' + service;
    document.getElementById('svcPrice').textContent = price;
    document.getElementById('svcServiceLabel').textContent  = service;
    svcGoStep(1);
    document.getElementById('serviceModal').classList.add('open');
  }

  function closeServiceModal() {
    document.getElementById('serviceModal').classList.remove('open');
  }

  function svcGoStep(n) {
    [1,2,3].forEach(i => {
      document.getElementById('svcStep'+i).style.display = (i === n) ? 'block' : 'none';
    });
    // auto-focus relevant field
    setTimeout(() => {
      if (n === 2) document.getElementById('svcUtr')?.focus();
      if (n === 3) document.getElementById('svcName')?.focus();
    }, 80);
    // update step dots
    ['dot1','dot2','dot3'].forEach((id, idx) => {
      const dot = document.getElementById(id);
      dot.classList.remove('active','done');
      if (idx + 1 < n)  dot.classList.add('done');
      if (idx + 1 === n) dot.classList.add('active');
    });
    ['line12','line23'].forEach((id, idx) => {
      const line = document.getElementById(id);
      line.classList.toggle('done', n > idx + 1);
    });
  }

  function svcVerifyUtr() {
    const utr = document.getElementById('svcUtr').value.trim();
    const amt = document.getElementById('svcAmtPaid').value.trim();
    if (!utr) { showToast('Please enter your UTR / Transaction ID.', '❌'); return; }
    if (!amt || parseFloat(amt) <= 0) { showToast('Please enter the amount you paid.', '❌'); return; }
    svcGoStep(3);
  }

  async function svcSubmitOrder(e) {
    e.preventDefault();
    const btn = document.getElementById('svcSubmitBtn');
    btn.textContent = '⏳ Submitting...';
    btn.disabled = true;

    const name    = document.getElementById('svcName').value.trim();
    const orderId = 'SA-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random()*9000)+1000);

    // Upload file to Drive first if one was selected
    let fileLink = document.getElementById('svcFileLink').value;
    if (_svcSelectedFile) {
      btn.textContent = '☁️ Uploading file...';
      const driveUrl = await uploadFileToDrive(_svcSelectedFile, orderId, name);
      if (driveUrl) {
        fileLink = driveUrl;
        showToast('File uploaded to Drive!', '☁️', 3000);
      } else {
        showToast('File upload failed — order will still be placed.', '⚠️', 3500);
      }
    }

    btn.textContent = '⏳ Placing order...';

    const payload = {
      type:         'ORDER',
      orderId,
      name,
      email:        document.getElementById('svcEmail').value,
      phone:        document.getElementById('svcPhone').value,
      service:      _svcService,
      subject:      document.getElementById('svcSubject').value,
      university:   document.getElementById('svcUniversity').value,
      deadline:     document.getElementById('svcDeadline').value,
      requirements: document.getElementById('svcRequirements').value,
      fileLink,
      refNo:        document.getElementById('svcUtr').value,
      amountPaid:   document.getElementById('svcAmtPaid').value
    };

    fetch(SHEET_URL, { method: 'POST', body: JSON.stringify(payload) })
      .catch(() => {})
      .finally(() => {
        // Save to Firestore (linked to logged-in user if any)
        const uid = (typeof auth !== 'undefined' && auth.currentUser) ? auth.currentUser.uid : null;
        if (typeof db !== 'undefined') {
          db.collection('orders').doc(orderId).set({
            ...payload, uid: uid || '', status: 'Pending',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          }).catch(() => {});
        }
        // Email to client
        emailjs.send('service_xgx967g', 'template_zp83lus', {
          to_name:     name,
          to_email:    payload.email,
          order_id:    orderId,
          service:     _svcService,
          amount_paid: payload.amountPaid
        }).catch(() => {});
        // Email to admin
        sendAdminNotification(payload);
        // Show confirmation modal
        closeServiceModal();
        showConfirmModal(payload);
        document.getElementById('svcOrderForm').reset();
        document.getElementById('svcUtr').value = '';
        document.getElementById('svcAmtPaid').value = '';
        _svcSelectedFile = null;
        document.getElementById('svcFileStatus').style.display = 'none';
        document.getElementById('svcFileUploadBox').style.borderColor = 'var(--border)';
        btn.textContent = '🚀 Place Order';
        btn.disabled = false;
      });
  }

  // ── SCROLL ANIMATIONS ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.service-card, .pricing-card, .step, .file-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .55s ease, transform .55s ease';
    observer.observe(el);
  });
</script>
<!-- ══════════════════════════════════════
     FIREBASE SDK (compat)
══════════════════════════════════════ -->
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>

<script>
/* ══════════════════════════════════════════════════
   ⚠️  PASTE YOUR FIREBASE CONFIG HERE
   Go to: console.firebase.google.com
   → Your Project → Project Settings → Your Apps → Config
══════════════════════════════════════════════════ */
const firebaseConfig = {
  apiKey:            "AIzaSyAa7zpe5ooyMs4_hgzKTdFBTwBycPGcXOI",
  authDomain:        "research-aid-ff2eb.firebaseapp.com",
  projectId:         "research-aid-ff2eb",
  storageBucket:     "research-aid-ff2eb.firebasestorage.app",
  messagingSenderId: "301229801288",
  appId:             "1:301229801288:web:fb148d7942d8e901513d7d",
  measurementId:     "G-E899JK0CVQ"
};

firebase.initializeApp(firebaseConfig);
const auth    = firebase.auth();
const db      = firebase.firestore();

// ── AUTH STATE LISTENER ──────────────────────────
auth.onAuthStateChanged(async user => {
  const loginBtn = document.getElementById('navLoginBtn');
  const userBtn  = document.getElementById('navUserBtn');
  const avatar   = document.getElementById('navAvatar');
  const uname    = document.getElementById('navUserName');

  if (user) {
    // Fetch profile from Firestore
    const snap = await db.collection('users').doc(user.uid).get();
    const prof = snap.exists ? snap.data() : {};
    const displayName = prof.name || user.displayName || user.email.split('@')[0];
    const initial     = displayName.charAt(0).toUpperCase();

    loginBtn.style.display = 'none';
    userBtn.style.display  = 'flex';
    avatar.textContent     = initial;
    uname.textContent      = displayName.split(' ')[0];

    // Show admin tabs for admin email
    const isAdmin = user.email === 'najarzain5@gmail.com';
    const adminTab = document.getElementById('adminTab');
    const expertAdminTab = document.getElementById('expertAdminTab');
    const adminChatTab = document.getElementById('adminChatTab');
    if (adminTab) adminTab.style.display = isAdmin ? 'block' : 'none';
    if (expertAdminTab) expertAdminTab.style.display = isAdmin ? 'block' : 'none';
    if (adminChatTab) adminChatTab.style.display = isAdmin ? 'block' : 'none';

    // Auto-fill order forms
    autoFillForms(user, prof);
  } else {
    loginBtn.style.display = '';
    userBtn.style.display  = 'none';
    const adminTab = document.getElementById('adminTab');
    const expertAdminTab = document.getElementById('expertAdminTab');
    const expertTab = document.getElementById('expertTab');
    const adminChatTab = document.getElementById('adminChatTab');
    if (adminTab) adminTab.style.display = 'none';
    if (expertAdminTab) expertAdminTab.style.display = 'none';
    if (expertTab) expertTab.style.display = 'none';
    if (adminChatTab) adminChatTab.style.display = 'none';
  }
});

// Public team section
loadPublicExperts();

// ── AUTO-FILL FORMS ──────────────────────────────
function autoFillForms(user, prof) {
  const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
  set('fullName',    prof.name  || user.displayName || '');
  set('email',       user.email || '');
  set('phone',       prof.phone || '');
  set('university',  prof.college || '');
  set('svcName',     prof.name  || user.displayName || '');
  set('svcEmail',    user.email || '');
  set('svcPhone',    prof.phone || '');
  set('svcUniversity', prof.college || '');
  set('exFullName',  prof.name  || user.displayName || '');
  set('exEmail',     user.email || '');
  set('exPhone',     prof.phone || '');
}

// ── AUTH MODAL ────────────────────────────────────
function openAuthModal()  { document.getElementById('authOverlay').classList.add('open'); }
function closeAuthModal() { document.getElementById('authOverlay').classList.remove('open'); }

function switchAuthTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active',  tab === 'login');
  document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
  document.getElementById('paneLogin').classList.toggle('active', tab === 'login');
  document.getElementById('paneSignup').classList.toggle('active',tab === 'signup');
}

function showAuthErr(pane, msg) {
  const el = document.getElementById(pane + 'Err');
  el.textContent = msg; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 5000);
}

async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPassword').value;
  if (!email || !pass) return showAuthErr('login','Please fill in both fields.');
  try {
    await auth.signInWithEmailAndPassword(email, pass);
    closeAuthModal();
    showToast('Welcome back! 👋', '✅');
  } catch(e) {
    showAuthErr('login', friendlyAuthError(e.code));
  }
}

async function doSignup() {
  const name    = document.getElementById('signupName').value.trim();
  const email   = document.getElementById('signupEmail').value.trim();
  const phone   = document.getElementById('signupPhone').value.trim();
  const college = document.getElementById('signupCollege').value.trim();
  const pass    = document.getElementById('signupPassword').value;
  if (!name || !email || !pass) return showAuthErr('signup','Name, email and password are required.');
  if (pass.length < 6) return showAuthErr('signup','Password must be at least 6 characters.');
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: name });
    await db.collection('users').doc(cred.user.uid).set({
      name, email, phone, college,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    closeAuthModal();
    showToast(`Account created! Welcome, ${name.split(' ')[0]} 🎉`, '✅', 4000);
  } catch(e) {
    showAuthErr('signup', friendlyAuthError(e.code));
  }
}

async function doGoogleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const cred = await auth.signInWithPopup(provider);
    const user = cred.user;
    // Save profile if new user
    const snap = await db.collection('users').doc(user.uid).get();
    if (!snap.exists) {
      await db.collection('users').doc(user.uid).set({
        name:  user.displayName || '',
        email: user.email || '',
        phone: '', college: '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    closeAuthModal();
    showToast(`Welcome, ${(user.displayName||'').split(' ')[0] || 'Scholar'}! 👋`, '✅');
  } catch(e) {
    showAuthErr('login', friendlyAuthError(e.code));
  }
}

async function doResetPassword() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) return showAuthErr('login','Enter your email above first.');
  try {
    await auth.sendPasswordResetEmail(email);
    showToast('Reset link sent to your email!', '📧', 4000);
  } catch(e) {
    showAuthErr('login', friendlyAuthError(e.code));
  }
}

async function doLogout() {
  await auth.signOut();
  closeDashboard();
  showToast('Logged out successfully.', '👋');
}

function friendlyAuthError(code) {
  const map = {
    'auth/user-not-found':       'No account found with this email.',
    'auth/wrong-password':       'Incorrect password.',
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/invalid-email':        'Please enter a valid email address.',
    'auth/weak-password':        'Password must be at least 6 characters.',
    'auth/too-many-requests':    'Too many attempts. Please wait and try again.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}

function normText(v, fallback = 'Not provided') {
  const t = (v === null || v === undefined) ? '' : String(v).trim();
  return t ? t : fallback;
}

function normalizeExpertRecord(d, id = '') {
  const email = normText(d?.email, '');
  const fromEmail = email ? email.split('@')[0].replace(/[._-]/g, ' ') : '';
  const fullName = normText(d?.fullName || d?.name || fromEmail, 'Unnamed Expert');
  return {
    ...d,
    id,
    fullName,
    name: normText(d?.name || fullName, fullName),
    email: normText(email, 'Not provided'),
    phone: normText(d?.phone, 'Not provided'),
    branch: normText(d?.branch, 'General'),
    qualification: normText(d?.qualification, 'Not provided'),
    subjects: normText(d?.subjects || d?.specialization, 'Not provided'),
    availability: normText(d?.availability, 'Project Basis'),
    status: normText(d?.status, 'Applied'),
    applicationId: normText(d?.applicationId, id || 'N/A'),
    avgRating: Number(d?.avgRating || 0),
    totalRatings: Number(d?.totalRatings || 0)
  };
}

function normalizeOrderRecord(o, id = '') {
  return {
    ...o,
    id,
    orderId: normText(o?.orderId, id || 'N/A'),
    name: normText(o?.name, 'Client'),
    email: normText(o?.email, 'Not provided'),
    phone: normText(o?.phone, 'Not provided'),
    service: normText(o?.service, 'General assignment'),
    subject: normText(o?.subject, 'Not provided'),
    university: normText(o?.university, 'Not provided'),
    deadline: normText(o?.deadline, 'Not specified'),
    requirements: normText(o?.requirements, 'No details shared'),
    amountPaid: normText(o?.amountPaid, '0'),
    status: normText(o?.status, 'Pending'),
    progress: normText(o?.progress, 'Not Assigned'),
    assignedExpertName: normText(o?.assignedExpertName, 'Not Assigned'),
    assignedExpertId: normText(o?.assignedExpertId, ''),
    expertRating: normText(o?.expertRating, 'N/A'),
    adminExpertRating: normText(o?.adminExpertRating, 'N/A')
  };
}

// ── DASHBOARD ─────────────────────────────────────
async function openDashboard() {
  const user = auth.currentUser;
  if (!user) return openAuthModal();

  document.getElementById('dashOverlay').classList.add('open');
  document.getElementById('dashPanel').classList.add('open');

  // Load profile
  const snap = await db.collection('users').doc(user.uid).get();
  const prof = snap.exists ? snap.data() : {};
  const name = prof.name || user.displayName || user.email;
  const init = name.charAt(0).toUpperCase();

  document.getElementById('dashAvatar').textContent = init;
  document.getElementById('dashName').textContent   = name;
  document.getElementById('dashEmail').textContent  = user.email;
  document.getElementById('pName').textContent    = name;
  document.getElementById('pEmail').textContent   = user.email;
  document.getElementById('pPhone').textContent   = prof.phone   || 'Not set';
  document.getElementById('pCollege').textContent = prof.college || 'Not set';
  document.getElementById('pSince').textContent   = prof.createdAt
    ? new Date(prof.createdAt.seconds * 1000).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})
    : 'N/A';

  // Load orders + expert profile
  loadDashOrders(user.uid);
  loadExpertProfile(user.email);
}

function closeDashboard() {
  document.getElementById('dashOverlay').classList.remove('open');
  document.getElementById('dashPanel').classList.remove('open');
}

function switchDashTab(tab, el) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dash-pane').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('dp' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
  if (tab === 'files') loadDashFiles(auth.currentUser?.uid);
  if (tab === 'chat') loadUserChat();
  if (tab === 'admin') loadAdminOrders();
  if (tab === 'adminchat') loadAdminChatInbox();
  if (tab === 'expertsadmin') { loadExpertApplications(); loadWorkingExperts(); }
}

async function loadDashOrders(uid) {
  const listEl    = document.getElementById('ordersList');
  const loadingEl = document.getElementById('ordersLoading');
  const emptyEl   = document.getElementById('ordersEmpty');
  loadingEl.style.display = 'block';
  listEl.innerHTML = ''; emptyEl.style.display = 'none';

  try {
    const snap = await db.collection('orders')
      .where('uid', '==', uid)
      .orderBy('timestamp', 'desc')
      .limit(20)
      .get();

    loadingEl.style.display = 'none';
    if (snap.empty) { emptyEl.style.display = 'block'; return; }

    snap.forEach(doc => {
      const o = normalizeOrderRecord(doc.data(), doc.id);
      const statusClass = {
        'Pending':'pending','Confirmed':'confirmed','In Progress':'progress',
        'Quality Review':'review','Delivered':'delivered'
      }[o.status] || 'pending';
      const date = o.timestamp
        ? new Date(o.timestamp.seconds*1000).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})
        : '—';
      listEl.innerHTML += `
        <div class="order-card">
          <div class="order-card-header">
            <div class="order-id">${o.orderId}</div>
            <span class="status-badge ${statusClass}">${o.status}</span>
          </div>
          <div class="order-service">${o.service}</div>
          <div class="order-meta">
            <span>📅 ${date}</span>
            <span>💰 ₹${o.amountPaid}</span>
            <span>👩‍🏫 ${o.assignedExpertName}</span>
            ${o.fileLink ? `<a href="${o.fileLink}" target="_blank" style="color:var(--primary);font-weight:700">📎 File</a>` : ''}
          </div>
          ${o.assignedExpertId ? `
            <div style="margin-top:10px;padding:10px;border:1px solid var(--border);border-radius:10px;background:#f8fafc">
              <div style="font-size:.8rem;font-weight:700;color:var(--dark);margin-bottom:6px">Rate Your Expert</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
                <select id="rate-${doc.id}" class="admin-status-select" style="margin-top:0">
                  <option value="">Select Rating</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="1">⭐</option>
                </select>
                <input id="review-${doc.id}" type="text" placeholder="Optional review" style="flex:1;min-width:160px;padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.8rem" />
                <button type="button" class="admin-status-select" style="margin-top:0" onclick="submitExpertRating('${doc.id}','${o.assignedExpertId || ''}')">Submit Rating</button>
              </div>
            </div>
          ` : ''}
        </div>`;
    });
  } catch(e) {
    loadingEl.textContent = 'Failed to load orders. Please try again.';
  }
}

async function loadDashFiles(uid) {
  if (!uid) return;
  const listEl    = document.getElementById('filesList');
  const loadingEl = document.getElementById('filesLoading');
  const emptyEl   = document.getElementById('filesEmpty');
  loadingEl.style.display = 'block';
  listEl.innerHTML = ''; emptyEl.style.display = 'none';

  try {
    const snap = await db.collection('orders')
      .where('uid', '==', uid)
      .limit(200)
      .get();

    loadingEl.style.display = 'none';
    if (snap.empty) { emptyEl.style.display = 'block'; return; }

    const docs = snap.docs
      .map(d => normalizeOrderRecord(d.data(), d.id))
      .filter(o => !!o.fileLink)
      .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0))
      .slice(0, 20);

    if (!docs.length) { emptyEl.style.display = 'block'; return; }

    docs.forEach(o => {
      listEl.innerHTML += `
        <div class="order-card" style="display:flex;align-items:center;gap:12px">
          <div style="font-size:1.6rem">📄</div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:.9rem;color:var(--dark)">${o.service}</div>
            <div style="font-size:.78rem;color:var(--muted)">${o.orderId}</div>
          </div>
          <a href="${o.fileLink}" target="_blank"
             style="background:var(--primary);color:#fff;padding:6px 14px;border-radius:50px;font-size:.8rem;font-weight:700;text-decoration:none">
            Open ↗
          </a>
        </div>`;
    });
  } catch(e) {
    loadingEl.textContent = 'Could not load files.';
  }
}

async function sendUserChatMessage() {
  const user = auth.currentUser;
  const input = document.getElementById('userChatInput');
  const text = (input?.value || '').trim();
  if (!user) return openAuthModal();
  if (!text) return;
  try {
    await db.collection('supportChats').add({
      uid: user.uid,
      senderRole: 'user',
      senderName: user.displayName || user.email || 'User',
      senderEmail: user.email || '',
      text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    input.value = '';
    loadUserChat();
  } catch (_) {
    showToast('Could not send message.', '❌');
  }
}

async function loadUserChat() {
  const user = auth.currentUser;
  const box = document.getElementById('userChatList');
  if (!box) return;
  if (!user) { box.textContent = 'Please login to use chat.'; return; }
  try {
    const snap = await db.collection('supportChats').limit(600).get();
    const chats = snap.docs
      .map(d => d.data())
      .filter(m => m.uid === user.uid)
      .sort((a,b) => (a.timestamp?.seconds||0) - (b.timestamp?.seconds||0));
    if (!chats.length) {
      box.innerHTML = '<p style="color:var(--muted)">No messages yet. Start a conversation with admin.</p>';
      return;
    }
    box.innerHTML = chats.map(m => {
      const mine = m.senderRole === 'user';
      return `<div style="margin:6px 0;display:flex;${mine?'justify-content:flex-end':'justify-content:flex-start'}">
        <div style="max-width:82%;padding:8px 10px;border-radius:10px;background:${mine?'#dbeafe':'#e2e8f0'};font-size:.82rem;color:#0f172a">
          <div style="font-weight:700;font-size:.74rem;opacity:.75">${mine?'You':'Admin'}</div>
          <div>${normText(m.text,'')}</div>
        </div>
      </div>`;
    }).join('');
    box.scrollTop = box.scrollHeight;
  } catch (_) {
    box.textContent = 'Could not load chat.';
  }
}

async function loadAdminChatInbox() {
  const box = document.getElementById('adminChatInbox');
  if (!box) return;
  try {
    const snap = await db.collection('supportChats').limit(1000).get();
    const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a,b)=> (b.timestamp?.seconds||0)-(a.timestamp?.seconds||0));
    if (!rows.length) { box.textContent = 'No chat messages yet.'; return; }

    const grouped = {};
    rows.forEach(r => { if (!grouped[r.uid]) grouped[r.uid] = []; grouped[r.uid].push(r); });

    box.innerHTML = Object.keys(grouped).map(uid => {
      const convo = grouped[uid].sort((a,b)=> (a.timestamp?.seconds||0)-(b.timestamp?.seconds||0));
      const latest = convo[convo.length-1] || {};
      const userLabel = latest.senderEmail || latest.senderName || uid;
      const thread = convo.slice(-8).map(m => `<div style="font-size:.78rem;margin:3px 0;color:#0f172a"><strong>${m.senderRole==='admin'?'Admin':'User'}:</strong> ${normText(m.text,'')}</div>`).join('');
      return `<div class="assignment-card">
        <div style="font-weight:800;color:var(--dark)">${userLabel}</div>
        <div style="font-size:.78rem;color:var(--muted);margin-top:4px">UID: ${uid}</div>
        <div style="margin-top:8px;padding:8px;border:1px solid var(--border);border-radius:8px;background:#f8fafc">${thread}</div>
        <div style="display:flex;gap:8px;margin-top:8px">
          <input id="adminChatReply-${uid}" type="text" placeholder="Reply to this user" style="flex:1;padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.8rem" />
          <button class="admin-status-select" type="button" style="margin-top:0" onclick="adminReplyChat('${uid}','${(latest.senderEmail||'').replace(/'/g,'')}')">Send</button>
        </div>
      </div>`;
    }).join('');
  } catch (_) {
    box.textContent = 'Could not load admin chat inbox.';
  }
}

async function adminReplyChat(uid, userEmail) {
  const inp = document.getElementById('adminChatReply-' + uid);
  const text = (inp?.value || '').trim();
  if (!text) return;
  const admin = auth.currentUser;
  try {
    await db.collection('supportChats').add({
      uid,
      senderRole: 'admin',
      senderName: admin?.email || 'Admin',
      senderEmail: admin?.email || '',
      targetEmail: userEmail || '',
      text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    inp.value = '';
    loadAdminChatInbox();
  } catch (_) {
    showToast('Could not send admin reply.', '❌');
  }
}

// ── ADMIN PANEL ──────────────────────────────────
async function loadAdminOrders() {
  const list   = document.getElementById('adminOrdersList');
  const filter = document.getElementById('adminFilterStatus')?.value || '';
  list.innerHTML = '<p style="text-align:center;padding:20px;color:var(--muted)">⏳ Loading…</p>';

  try {
    // Index-free query: fetch docs, then sort/filter client-side.
    // This works even when timestamp indexes are missing.
    const all = await db.collection('orders').limit(300).get();
    let docs = all.docs;
    if (filter) docs = docs.filter(d => (d.data().status || 'Pending') === filter);
    docs = docs.sort((a, b) => {
      const at = a.data().timestamp?.seconds || 0;
      const bt = b.data().timestamp?.seconds || 0;
      return bt - at;
    });
    const snap = { empty: docs.length === 0, docs };

    if (snap.empty) {
      list.innerHTML = '<p style="text-align:center;padding:20px;color:var(--muted)">No orders found.</p>';
      return;
    }

    const statusCls = {
      'Pending':'pending','Confirmed':'confirmed',
      'In Progress':'progress','Under Review':'review','Delivered':'delivered'
    };

    list.innerHTML = snap.docs.map(doc => {
      const o   = normalizeOrderRecord(doc.data(), doc.id);
      const ts  = o.timestamp?.seconds
        ? new Date(o.timestamp.seconds * 1000).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
        : '—';
      const cls = statusCls[o.status] || 'pending';
      return `<div class="admin-order-row">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px">
          <div>
            <div class="ao-id">${o.orderId}</div>
            <div class="ao-name">${o.name}</div>
            <div class="ao-svc">${o.service}</div>
          </div>
          <span class="ao-status ${cls}">${o.status}</span>
        </div>
        <div class="ao-meta">
          <span>📧 ${o.email}</span>
          <span>📱 ${o.phone}</span>
          <span>🏫 ${o.university}</span>
          <span>📆 Deadline: ${o.deadline}</span>
          <span>👩‍🏫 Expert: ${o.assignedExpertName}</span>
          <span>📌 Progress: ${o.progress}</span>
          <span>⭐ Rating: ${o.expertRating}</span>
          <span>₹${o.amountPaid}</span>
          <span>🗓 ${ts}</span>
          ${o.fileLink ? `<a href="${o.fileLink}" target="_blank" style="color:var(--primary);font-weight:700">📎 File</a>` : ''}
        </div>
        <div style="font-size:.8rem;color:var(--muted);margin-top:6px"><strong>Requirements:</strong> ${o.requirements}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
          <div>
            <label style="font-size:.76rem;font-weight:700;color:var(--muted)">Move Assignment To Expert</label>
            <select class="admin-status-select" data-order-id="${doc.id}" onchange="assignOrderToExpert('${doc.id}', this.value)" style="width:100%;margin-top:4px">
              <option value="">-- Select Qualified Expert --</option>
            </select>
          </div>
          <div>
            <label style="font-size:.76rem;font-weight:700;color:var(--muted)">Assignment Progress</label>
            <select class="admin-status-select" onchange="updateOrderProgress('${doc.id}', this.value)" style="width:100%;margin-top:4px">
              ${['Not Assigned','Assigned','In Progress','Draft Ready','Under Review','Delivered','Cancelled'].map(p => `<option value="${p}" ${(o.progress||'Not Assigned')===p?'selected':''}>${p}</option>`).join('')}
            </select>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap">
          <input type="text" id="msg-${doc.id}" placeholder="Message to expert/client" style="flex:1;min-width:220px;padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.8rem" />
          <select id="admin-rate-${doc.id}" class="admin-status-select" style="margin-top:0">
            <option value="">Admin Rating</option><option value="5">⭐⭐⭐⭐⭐</option><option value="4">⭐⭐⭐⭐</option><option value="3">⭐⭐⭐</option><option value="2">⭐⭐</option><option value="1">⭐</option>
          </select>
          <button class="admin-status-select" type="button" onclick="saveAdminExpertRating('${doc.id}')">Save Rating</button>
          <button class="admin-status-select" type="button" onclick="saveOrderMessage('${doc.id}')">Save Message</button>
          <button class="admin-status-select" type="button" onclick="cancelAssignment('${doc.id}')" style="background:#fee2e2;color:#991b1b;border-color:#fecaca">Cancel Assignment</button>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px">
          <label style="font-size:.78rem;font-weight:600;color:var(--muted)">Update Status:</label>
          <select class="admin-status-select" onchange="updateOrderStatus('${doc.id}', this.value, this)">
            ${['Pending','Confirmed','In Progress','Under Review','Delivered'].map(s =>
              `<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`
            ).join('')}
          </select>
        </div>
      </div>`;
    }).join('');

    await hydrateQualifiedExpertsDropdowns();
  } catch(err) {
    console.error('Admin load error:', err);
    list.innerHTML = `<div style="padding:14px">
      <p style="color:var(--danger);font-weight:700">⚠️ Could not load orders.</p>
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px">Error: ${err.message}</p>
      <p style="font-size:.82rem;color:var(--muted);margin-top:6px">This is usually a <strong>Firestore rules</strong> issue. Make sure logged-in users can read <code>orders</code>.</p>
    </div>`;
  }
}

async function loadExpertProfile(email) {
  const expertTab = document.getElementById('expertTab');
  if (!expertTab || !email) return;
  try {
    const snap = await db.collection('expertApplications').where('email', '==', email).limit(10).get();
    if (snap.empty) {
      expertTab.style.display = 'none';
      return;
    }
    const docs = snap.docs
      .map(d => normalizeExpertRecord(d.data(), d.id))
      .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
    const app = docs[0] || normalizeExpertRecord({}, '');
    const displayName = app.fullName;
    expertTab.style.display = 'block';
    document.getElementById('exPId').textContent = app.applicationId;
    const status = app.status;
    document.getElementById('exPStatus').innerHTML = `<span class="expert-status-chip ${String(status).toLowerCase().replace(/\s+/g, '-')}">${status}</span>`;
    document.getElementById('exPSubjects').textContent = app.subjects;
    document.getElementById('exPBranch').textContent = app.branch;
    document.getElementById('exPNote').textContent = app.adminNote || 'No note yet.';
    document.getElementById('expName').textContent = displayName;
  } catch (_) {
    expertTab.style.display = 'none';
  }
}

async function loadExpertApplications() {
  const list   = document.getElementById('expertApplicationsList');
  const filter = document.getElementById('expertFilterStatus')?.value || '';
  list.innerHTML = '<p style="text-align:center;padding:20px;color:var(--muted)">⏳ Loading…</p>';

  try {
    const all = await db.collection('expertApplications').limit(400).get();
    let docs = all.docs.map(d => ({ id: d.id, record: normalizeExpertRecord(d.data(), d.id) }));
    if (filter) docs = docs.filter(d => d.record.status === filter);
    docs = docs.sort((a, b) => (b.record.timestamp?.seconds || 0) - (a.record.timestamp?.seconds || 0));

    if (!docs.length) {
      list.innerHTML = '<p style="text-align:center;padding:20px;color:var(--muted)">No expert applications found.</p>';
      return;
    }

    list.innerHTML = docs.map(({ id, record: d }) => {
      const status = d.status;
      const chip = String(status).toLowerCase().replace(/\s+/g, '-');
      const ts = d.timestamp?.seconds
        ? new Date(d.timestamp.seconds * 1000).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
        : '—';
      const displayName = d.fullName;
      return `<div class="admin-order-row">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;flex-wrap:wrap">
          <div>
            <div class="ao-id">${d.applicationId}</div>
            <div class="ao-name">${displayName}</div>
            <div class="ao-svc">${d.branch} • ${d.qualification} • ⭐ ${d.avgRating || '0.0'} (${d.totalRatings || 0})</div>
          </div>
          <span class="expert-status-chip ${chip}">${status}</span>
        </div>
        <div class="ao-meta">
          <span>📧 ${d.email}</span>
          <span>📱 ${d.phone}</span>
          <span>🗓 ${ts}</span>
          ${d.resumeUrl ? `<a href="${d.resumeUrl}" target="_blank" style="color:var(--primary);font-weight:700">CV</a>` : ''}
          ${d.photoUrl ? `<a href="${d.photoUrl}" target="_blank" style="color:var(--primary);font-weight:700">Photo</a>` : ''}
          ${d.signatureUrl ? `<a href="${d.signatureUrl}" target="_blank" style="color:var(--primary);font-weight:700">Signature</a>` : ''}
          ${d.instituteIdUrl ? `<a href="${d.instituteIdUrl}" target="_blank" style="color:var(--primary);font-weight:700">ID</a>` : ''}
          ${d.qualificationDocUrl ? `<a href="${d.qualificationDocUrl}" target="_blank" style="color:var(--primary);font-weight:700">Degree</a>` : ''}
        </div>
        <div style="font-size:.8rem;color:var(--muted);margin-top:6px"><strong>Subjects:</strong> ${d.subjects}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap">
          <label style="font-size:.78rem;font-weight:600;color:var(--muted)">Update Status:</label>
          <select class="admin-status-select" onchange="updateExpertStatus('${id}', this.value, this)">
            ${['Applied', 'Shortlisted', 'Qualified', 'Not Qualified'].map(s => `<option value="${s}" ${status===s?'selected':''}>${s}</option>`).join('')}
          </select>
          <input type="text" placeholder="Admin note" value="${(d.adminNote || '').replace(/"/g, '&quot;')}" onblur="updateExpertNote('${id}', this.value)" style="flex:1;min-width:180px;padding:6px 10px;border:1px solid var(--border);border-radius:8px;font-size:.8rem" />
        </div>
      </div>`;
    }).join('');
  } catch (err) {
    list.innerHTML = `<p style="color:var(--danger);padding:14px">⚠️ Could not load expert applications. ${err.message}</p>`;
  }
}

async function updateExpertStatus(docId, newStatus, selectEl) {
  try {
    await db.collection('expertApplications').doc(docId).update({ status: newStatus });
    const chip = selectEl.closest('.admin-order-row').querySelector('.expert-status-chip');
    chip.className = 'expert-status-chip ' + String(newStatus).toLowerCase().replace(/\s+/g, '-');
    chip.textContent = newStatus;
    showToast('Expert status updated.', '✅');
  } catch (_) {
    showToast('Failed to update expert status.', '❌');
  }
}

async function updateExpertNote(docId, note) {
  try {
    await db.collection('expertApplications').doc(docId).update({ adminNote: note || '' });
  } catch (_) {}
}

async function normalizeExpertRecords() {
  try {
    const snap = await db.collection('expertApplications').limit(1000).get();
    if (snap.empty) return showToast('No expert records to normalize.', 'ℹ️');

    let updated = 0;
    const batch = db.batch();

    snap.docs.forEach(doc => {
      const d = doc.data() || {};
      const n = normalizeExpertRecord(d, doc.id);

      const patch = {};
      if (!d.fullName) patch.fullName = n.fullName;
      if (!d.name) patch.name = n.name;
      if (!d.subjects && n.subjects !== 'Not provided') patch.subjects = n.subjects;
      if (!d.status) patch.status = n.status;
      if (!d.applicationId) patch.applicationId = n.applicationId;
      if (!d.branch) patch.branch = n.branch;
      if (!d.qualification) patch.qualification = n.qualification;
      if (!d.phone) patch.phone = n.phone;
      if (!d.email) patch.email = n.email;
      if (!d.availability) patch.availability = n.availability;

      if (Object.keys(patch).length) {
        batch.update(doc.ref, patch);
        updated++;
      }
    });

    if (!updated) return showToast('Records are already normalized.', '✅');
    await batch.commit();
    showToast(`Normalized ${updated} expert record(s).`, '✅');
    loadExpertApplications();
    loadWorkingExperts();
    loadPublicExperts();
  } catch (e) {
    showToast('Normalization failed.', '❌');
  }
}

async function getQualifiedExperts() {
  const snap = await db.collection('expertApplications').limit(500).get();
  return snap.docs
    .map(d => normalizeExpertRecord(d.data(), d.id))
    .filter(e => (e.status || '') === 'Qualified');
}

async function hydrateQualifiedExpertsDropdowns() {
  const experts = await getQualifiedExperts();
  const selects = document.querySelectorAll('select[data-order-id]');
  selects.forEach(sel => {
    const existing = sel.value;
    sel.innerHTML = '<option value="">-- Select Qualified Expert --</option>' +
      experts.map(e => `<option value="${e.id}">${e.fullName} (${e.branch})</option>`).join('');
    if (existing) sel.value = existing;
  });
}

async function assignOrderToExpert(orderDocId, expertDocId) {
  if (!expertDocId) return;
  try {
    const ex = await db.collection('expertApplications').doc(expertDocId).get();
    const e = normalizeExpertRecord(ex.exists ? ex.data() : {}, expertDocId);
    await db.collection('orders').doc(orderDocId).update({
      assignedExpertId: expertDocId,
      assignedExpertName: e.fullName,
      assignedExpertEmail: e.email,
      progress: 'Assigned',
      assignedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    showToast('Assignment moved to expert successfully.', '✅');
    loadAdminOrders();
  } catch (err) {
    showToast('Could not assign expert.', '❌');
  }
}

async function updateOrderProgress(orderDocId, progress) {
  try {
    await db.collection('orders').doc(orderDocId).update({ progress });
    showToast('Progress updated.', '✅');
  } catch (_) {
    showToast('Failed to update progress.', '❌');
  }
}

async function saveOrderMessage(orderDocId) {
  const msgEl = document.getElementById('msg-' + orderDocId);
  const msg = (msgEl?.value || '').trim();
  if (!msg) return showToast('Type a message first.', '⚠️');
  try {
    await db.collection('orders').doc(orderDocId).update({ adminMessage: msg, messageUpdatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    showToast('Message saved.', '✅');
  } catch (_) {
    showToast('Could not save message.', '❌');
  }
}

async function saveAdminExpertRating(orderDocId) {
  const rating = Number(document.getElementById('admin-rate-' + orderDocId)?.value || 0);
  if (!rating) return showToast('Select admin rating first.', '⚠️');
  try {
    const orderSnap = await db.collection('orders').doc(orderDocId).get();
    const order = orderSnap.exists ? orderSnap.data() : {};
    await db.collection('orders').doc(orderDocId).update({ adminExpertRating: rating });
    if (order.assignedExpertId) await recalculateExpertRating(order.assignedExpertId);
    showToast('Admin rating saved.', '✅');
  } catch (_) {
    showToast('Failed to save admin rating.', '❌');
  }
}

async function cancelAssignment(orderDocId) {
  try {
    await db.collection('orders').doc(orderDocId).update({
      assignedExpertId: '',
      assignedExpertName: '',
      assignedExpertEmail: '',
      progress: 'Cancelled'
    });
    showToast('Assignment cancelled.', '⚠️');
    loadAdminOrders();
  } catch (_) {
    showToast('Could not cancel assignment.', '❌');
  }
}

function openHiringInfoModal() { document.getElementById('hiringInfoOverlay')?.classList.add('open'); }
function closeHiringInfoModal() { document.getElementById('hiringInfoOverlay')?.classList.remove('open'); }

function openExpertLoginPanel() {
  document.getElementById('expertOverlay')?.classList.add('open');
  document.getElementById('expertPanel')?.classList.add('open');
}
function closeExpertLoginPanel() {
  document.getElementById('expertOverlay')?.classList.remove('open');
  document.getElementById('expertPanel')?.classList.remove('open');
}

function switchExpertTab(tab, el) {
  document.querySelectorAll('.expert-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.expert-pane').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const pane = document.getElementById('ep' + tab.charAt(0).toUpperCase() + tab.slice(1));
  if (pane) pane.classList.add('active');
}

let _expertDocId = '';

async function expertLogin() {
  const email = (document.getElementById('expertLoginEmail')?.value || '').trim();
  const pass = document.getElementById('expertLoginPassword')?.value || '';
  if (!email || !pass) return showToast('Enter expert email and password.', '❌');

  try {
    await auth.signInWithEmailAndPassword(email, pass);
    const snap = await db.collection('expertApplications').where('email', '==', email).limit(10).get();
    const docs = snap.docs.map(d => normalizeExpertRecord(d.data(), d.id));
    const expert = docs.find(d => d.status === 'Qualified');
    if (!expert) {
      showToast('Expert account not qualified yet.', '⚠️');
      return;
    }

    _expertDocId = expert.id;
    document.getElementById('expertLoginBox').style.display = 'none';
    document.getElementById('expertWorkspace').style.display = 'block';
    document.getElementById('expName').textContent = expert.fullName || 'Expert';
    document.getElementById('expStatus').textContent = expert.status || 'Qualified';
    await loadExpertAssignments();
    await loadExpertHistory();
    await loadExpertPaymentHistory();
  } catch (e) {
    showToast('Expert login failed.', '❌');
  }
}

async function loadExpertAssignments() {
  const box = document.getElementById('expertAssignmentsList');
  if (!box || !_expertDocId) return;
  const snap = await db.collection('orders').where('assignedExpertId', '==', _expertDocId).limit(300).get();
  const items = snap.docs.map(d => normalizeOrderRecord(d.data(), d.id))
    .filter(o => !['Delivered', 'Cancelled'].includes(o.progress || ''))
    .sort((a, b) => (b.assignedAt?.seconds || 0) - (a.assignedAt?.seconds || 0));
  if (!items.length) {
    box.innerHTML = '<p style="color:var(--muted)">No active assignments assigned.</p>';
    return;
  }
  box.innerHTML = items.map(o => `
    <div class="assignment-card">
      <div style="font-weight:800;color:var(--dark)">${o.orderId} • ${o.service}</div>
      <div style="font-size:.8rem;color:var(--muted);margin-top:4px">Assigned: ${o.assignedAt?.seconds ? new Date(o.assignedAt.seconds*1000).toLocaleDateString('en-IN') : '—'} • Deadline: ${o.deadline} • Progress: ${o.progress}</div>
      <div style="font-size:.82rem;color:var(--dark);margin-top:8px"><strong>Title/Subject:</strong> ${o.subject}</div>
      <div style="font-size:.82rem;color:var(--dark);margin-top:4px"><strong>Brief:</strong> ${o.requirements}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <select class="admin-status-select" onchange="expertUpdateProgress('${o.id}', this.value)" style="margin-top:0">
          ${['Assigned','In Progress','Draft Ready','Under Review','Completed'].map(p => `<option value="${p}" ${(o.progress||'Assigned')===p?'selected':''}>${p}</option>`).join('')}
        </select>
        <button class="admin-status-select" type="button" onclick="denyExpertAssignment('${o.id}')" style="margin-top:0;background:#fee2e2;color:#991b1b;border-color:#fecaca">Deny Assignment</button>
      </div>
    </div>`).join('');
}

async function loadExpertHistory() {
  const box = document.getElementById('expertHistoryList');
  if (!box || !_expertDocId) return;
  const snap = await db.collection('orders').where('assignedExpertId', '==', _expertDocId).limit(400).get();
  const items = snap.docs.map(d => normalizeOrderRecord(d.data(), d.id))
    .filter(o => ['Delivered', 'Cancelled', 'Completed'].includes(o.progress || '') || (o.status === 'Delivered'))
    .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
  if (!items.length) {
    box.innerHTML = '<p style="color:var(--muted)">No previous assignments yet.</p>';
    return;
  }
  box.innerHTML = items.map(o => `
    <div class="assignment-card">
      <div style="font-weight:800;color:var(--dark)">${o.orderId} • ${o.service}</div>
      <div style="font-size:.8rem;color:var(--muted);margin-top:4px">Completion: ${o.progress || o.status}</div>
      <div style="font-size:.82rem;color:var(--dark);margin-top:6px">⭐ User Rating: ${o.expertRating} | ⭐ Admin Rating: ${o.adminExpertRating}</div>
    </div>`).join('');
}

async function expertUpdateProgress(orderDocId, progress) {
  try {
    await db.collection('orders').doc(orderDocId).update({ progress });
    if (progress === 'Completed') {
      await db.collection('orders').doc(orderDocId).update({ completionTime: firebase.firestore.FieldValue.serverTimestamp() });
    }
    showToast('Assignment progress updated.', '✅');
    loadExpertAssignments();
  } catch (_) {
    showToast('Could not update progress.', '❌');
  }
}

async function denyExpertAssignment(orderDocId) {
  try {
    await db.collection('orders').doc(orderDocId).update({
      progress: 'Assignment Denied by Expert',
      assignedExpertId: '',
      assignedExpertName: '',
      assignedExpertEmail: ''
    });
    showToast('Assignment denied and returned to admin queue.', '⚠️');
    loadExpertAssignments();
  } catch (_) {
    showToast('Could not deny assignment.', '❌');
  }
}

async function submitPaymentDemand() {
  const assignId = (document.getElementById('payAssignId')?.value || '').trim();
  const amount = Number(document.getElementById('payAmount')?.value || 0);
  const note = (document.getElementById('payNote')?.value || '').trim();
  if (!_expertDocId) return showToast('Login as expert first.', '❌');
  if (!assignId || amount <= 0) return showToast('Enter assignment ID and amount.', '⚠️');
  try {
    await db.collection('expertPaymentDemands').add({
      expertId: _expertDocId,
      assignmentId: assignId,
      amount,
      note,
      status: 'Requested',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    showToast('Payment demand submitted to admin.', '✅');
    document.getElementById('payAssignId').value = '';
    document.getElementById('payAmount').value = '';
    document.getElementById('payNote').value = '';
    loadExpertPaymentHistory();
  } catch (_) {
    showToast('Could not submit payment demand.', '❌');
  }
}

async function loadExpertPaymentHistory() {
  const box = document.getElementById('expertPaymentHistory');
  if (!box || !_expertDocId) return;
  const snap = await db.collection('expertPaymentDemands').where('expertId', '==', _expertDocId).limit(200).get();
  const items = snap.docs.map(d => d.data()).sort((a,b)=> (b.timestamp?.seconds||0)-(a.timestamp?.seconds||0));
  if (!items.length) { box.textContent = 'No payment requests yet.'; return; }
  box.innerHTML = items.map(i => `<div style="padding:6px 0;border-bottom:1px dashed var(--border)">#${i.assignmentId} • ₹${i.amount} • ${i.status || 'Requested'}</div>`).join('');
}

async function loadWorkingExperts() {
  const box = document.getElementById('workingExpertsList');
  if (!box) return;
  try {
    const experts = await getQualifiedExperts();
    if (!experts.length) {
      box.textContent = 'No qualified experts yet.';
      return;
    }
    box.innerHTML = experts.map(e => `<div style="padding:6px 0;border-bottom:1px dashed var(--border)"><strong>${e.fullName}</strong> • ${e.branch} • ${e.email} • ${e.phone}</div>`).join('');
  } catch (e) {
    box.textContent = 'Could not load working experts.';
  }
}

async function loadPublicExperts() {
  const grid = document.getElementById('publicTeamGrid');
  if (!grid) return;
  try {
    const snap = await db.collection('expertApplications').limit(500).get();
    const experts = snap.docs
      .map(d => normalizeExpertRecord(d.data(), d.id))
      .filter(e => (e.status || '') === 'Qualified')
      .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0))
      .slice(0, 24);

    if (!experts.length) {
      grid.innerHTML = '<div class="team-card"><div class="team-name">Experts will be listed here soon</div><div style="font-size:.82rem;color:var(--muted);margin-top:6px">We are actively onboarding subject specialists.</div></div>';
      return;
    }

    grid.innerHTML = experts.map(e => {
      const tags = String(e.subjects).split(',').map(t => t.trim()).filter(Boolean).slice(0, 4);
      const displayName = e.fullName;
      const photo = e.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=e2e8f0&color=334155`;
      return `<div class="team-card">
        <div class="team-head">
          <img class="team-photo" src="${photo}" alt="${displayName}" />
          <div>
            <div class="team-name">${displayName}</div>
            <div class="team-role">${e.branch} • ${e.qualification}</div>
          </div>
        </div>
        <div style="font-size:.82rem;color:var(--muted)">${e.experienceYears || '0'}+ years • ${e.availability} • ⭐ ${e.avgRating || '0.0'} (${e.totalRatings || 0})</div>
        <div class="team-tags">${tags.map(t => `<span class="team-tag">${t}</span>`).join('')}</div>
      </div>`;
    }).join('');
  } catch (_) {
    grid.innerHTML = '<div class="team-card"><div class="team-name">Could not load experts</div><div style="font-size:.82rem;color:var(--muted);margin-top:6px">Try again later.</div></div>';
  }
}

async function submitExpertRating(orderDocId, expertId) {
  if (!expertId) return showToast('Expert not assigned for this order.', '⚠️');
  const user = auth.currentUser;
  if (!user) return showToast('Please login first.', '❌');
  const rating = parseInt(document.getElementById('rate-' + orderDocId)?.value || '', 10);
  const review = (document.getElementById('review-' + orderDocId)?.value || '').trim();
  if (!rating || rating < 1 || rating > 5) return showToast('Please select rating first.', '⚠️');

  try {
    const ratingId = orderDocId + '_' + user.uid;
    await db.collection('expertRatings').doc(ratingId).set({
      orderId: orderDocId,
      expertId,
      uid: user.uid,
      rating,
      review,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    await db.collection('orders').doc(orderDocId).update({
      expertRating: rating,
      expertReview: review
    });

    await recalculateExpertRating(expertId);
    showToast('Thanks! Expert rating submitted.', '✅');
  } catch (e) {
    showToast('Could not submit rating.', '❌');
  }
}

async function recalculateExpertRating(expertId) {
  const snap = await db.collection('expertRatings').where('expertId', '==', expertId).limit(500).get();
  let total = 0;
  snap.forEach(d => { total += Number(d.data().rating || 0); });
  const count = snap.size;
  const avg = count ? (total / count) : 0;
  await db.collection('expertApplications').doc(expertId).update({
    avgRating: Number(avg.toFixed(2)),
    totalRatings: count
  });
}

async function updateOrderStatus(docId, newStatus, selectEl) {
  try {
    await db.collection('orders').doc(docId).update({ status: newStatus });
    showToast(`Status updated to "${newStatus}"`, '✅');
    // refresh colours
    const row = selectEl.closest('.admin-order-row');
    const badge = row.querySelector('.ao-status');
    const cls = { 'Pending':'pending','Confirmed':'confirmed','In Progress':'progress','Under Review':'review','Delivered':'delivered' };
    badge.className = 'ao-status ' + (cls[newStatus] || 'pending');
    badge.textContent = newStatus;
  } catch(e) {
    showToast('Failed to update status', '❌');
  }
}
</script>
<!-- ══════════════════════════════════════
     AUTH MODAL
══════════════════════════════════════ -->
<div class="auth-overlay" id="authOverlay" onclick="if(event.target===this)closeAuthModal()">
  <div class="auth-card">
    <button class="auth-close" onclick="closeAuthModal()">✕</button>
    <div class="auth-logo">Research <span>Aid</span></div>
    <p style="text-align:center;font-size:.82rem;color:var(--muted);margin-bottom:18px">Your research, your account.</p>

    <div class="auth-tabs">
      <div class="auth-tab active" id="tabLogin" onclick="switchAuthTab('login')">Login</div>
      <div class="auth-tab" id="tabSignup" onclick="switchAuthTab('signup')">Sign Up</div>
    </div>

    <!-- LOGIN -->
    <div class="auth-pane active" id="paneLogin">
      <div class="auth-field"><label>Email Address</label><input type="email" id="loginEmail" placeholder="your@email.com" /></div>
      <div class="auth-field"><label>Password</label><input type="password" id="loginPassword" placeholder="••••••••" /></div>
      <p id="loginErr" class="auth-err"></p>
      <button class="auth-submit" onclick="doLogin()">Login to My Account</button>
      <div class="auth-divider">— or —</div>
      <button class="auth-google" onclick="doGoogleSignIn()">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="G"> Continue with Google
      </button>
      <p style="text-align:center;font-size:.8rem;color:var(--muted);margin-top:14px">
        Forgot password? <a href="#" onclick="doResetPassword();return false" style="color:var(--primary);font-weight:700">Reset it</a>
      </p>
    </div>

    <!-- SIGN UP -->
    <div class="auth-pane" id="paneSignup">
      <div class="auth-field"><label>Full Name *</label><input type="text" id="signupName" placeholder="Your full name" /></div>
      <div class="auth-field"><label>Email Address *</label><input type="email" id="signupEmail" placeholder="your@email.com" /></div>
      <div class="auth-field"><label>WhatsApp Number</label><input type="tel" id="signupPhone" placeholder="+91 XXXXXXXXXX" /></div>
      <div class="auth-field">
        <label>College / University</label>
        <input type="text" id="signupCollege" placeholder="e.g. Delhi University, IIT Bombay" />
      </div>
      <div class="auth-field"><label>Password *</label><input type="password" id="signupPassword" placeholder="Min 6 characters" /></div>
      <p id="signupErr" class="auth-err"></p>
      <button class="auth-submit" onclick="doSignup()">Create My Account</button>
      <div class="auth-divider">— or —</div>
      <button class="auth-google" onclick="doGoogleSignIn()">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="G"> Continue with Google
      </button>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════
     DASHBOARD PANEL
══════════════════════════════════════ -->
<div class="dashboard-overlay" id="dashOverlay" onclick="closeDashboard()"></div>
<div class="dashboard-panel" id="dashPanel">
  <div class="dash-header">
    <div>
      <div class="dash-user-info">
        <div class="dash-avatar" id="dashAvatar">?</div>
        <div>
          <div class="dash-name" id="dashName">—</div>
          <div class="dash-email" id="dashEmail">—</div>
        </div>
      </div>
    </div>
    <button class="dash-close" onclick="closeDashboard()">✕</button>
  </div>

  <div class="dash-tabs">
    <div class="dash-tab active" onclick="switchDashTab('orders',this)">📦 My Orders</div>
    <div class="dash-tab" onclick="switchDashTab('files',this)">📁 My Files</div>
    <div class="dash-tab" onclick="switchDashTab('chat',this)">💬 Chat</div>
    <div class="dash-tab" onclick="switchDashTab('profile',this)">👤 Profile</div>
    <div class="dash-tab" id="expertTab" style="display:none" onclick="switchDashTab('expert',this)">🧠 Expert</div>
    <div class="dash-tab" id="adminTab" style="display:none;color:#ef4444" onclick="switchDashTab('admin',this)">🛡 Admin</div>
    <div class="dash-tab" id="adminChatTab" style="display:none;color:#ef4444" onclick="switchDashTab('adminchat',this)">📨 Admin Chat</div>
    <div class="dash-tab" id="expertAdminTab" style="display:none;color:#ef4444" onclick="switchDashTab('expertsadmin',this)">👩‍🏫 Experts</div>
  </div>

  <!-- ORDERS TAB -->
  <div class="dash-pane active" id="dpOrders">
    <div id="ordersLoading" style="text-align:center;padding:30px;color:var(--muted);font-size:.9rem">⏳ Loading your orders…</div>
    <div id="ordersList"></div>
    <div class="dash-empty" id="ordersEmpty" style="display:none">
      <div class="empty-icon">📭</div>
      <p>No orders yet.<br>Place your first order and it'll appear here!</p>
      <button class="auth-submit" style="margin-top:12px" onclick="closeDashboard();scrollToSection('order')">Place an Order →</button>
    </div>
  </div>

  <!-- FILES TAB -->
  <div class="dash-pane" id="dpFiles">
    <div id="filesLoading" style="text-align:center;padding:30px;color:var(--muted);font-size:.9rem">⏳ Loading your files…</div>
    <div id="filesList"></div>
    <div class="dash-empty" id="filesEmpty" style="display:none">
      <div class="empty-icon">📂</div>
      <p>No files uploaded yet.</p>
    </div>
  </div>

  <!-- USER CHAT TAB -->
  <div class="dash-pane" id="dpChat">
    <div id="userChatList" style="max-height:340px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:10px;background:#f8fafc;margin-bottom:10px">Loading chat...</div>
    <div style="display:flex;gap:8px;align-items:flex-end">
      <textarea id="userChatInput" placeholder="Type your message to admin..." style="flex:1;min-height:42px;max-height:110px;padding:8px 10px;border:1px solid var(--border);border-radius:8px"></textarea>
      <button class="admin-status-select" type="button" onclick="sendUserChatMessage()" style="margin-top:0">Send</button>
    </div>
  </div>

  <!-- PROFILE TAB -->
  <div class="dash-pane" id="dpProfile">
    <div class="profile-field"><label>Full Name</label><div class="pval" id="pName">—</div></div>
    <div class="profile-field"><label>Email</label><div class="pval" id="pEmail">—</div></div>
    <div class="profile-field"><label>WhatsApp</label><div class="pval" id="pPhone">—</div></div>
    <div class="profile-field"><label>College / University</label><div class="pval" id="pCollege">—</div></div>
    <div class="profile-field"><label>Member Since</label><div class="pval" id="pSince">—</div></div>
  </div>

  <!-- EXPERT TAB -->
  <div class="dash-pane" id="dpExpert">
    <div class="profile-field"><label>Application ID</label><div class="pval" id="exPId">—</div></div>
    <div class="profile-field"><label>Status</label><div class="pval" id="exPStatus">—</div></div>
    <div class="profile-field"><label>Specialization</label><div class="pval" id="exPSubjects">—</div></div>
    <div class="profile-field"><label>Branch</label><div class="pval" id="exPBranch">—</div></div>
    <div class="profile-field"><label>Admin Note</label><div class="pval" id="exPNote">No note yet.</div></div>
    <div class="expert-note" style="margin-top:12px">Assignments are moved to experts only by admin after manual screening and approval.</div>
  </div>

  <button class="dash-logout" onclick="doLogout()">🚪 Logout</button>

  <!-- ADMIN TAB -->
  <div class="dash-pane" id="dpAdmin" style="display:none">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <div style="font-size:.95rem;font-weight:800;color:var(--dark)">🛡 All Orders</div>
      <select id="adminFilterStatus" onchange="loadAdminOrders()" style="padding:6px 10px;border:1.5px solid var(--border);border-radius:8px;font-size:.82rem;font-weight:600">
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="In Progress">In Progress</option>
        <option value="Under Review">Under Review</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>
    <div id="adminOrdersList"><p style="text-align:center;padding:20px;color:var(--muted)">⏳ Loading…</p></div>
  </div>

  <!-- ADMIN CHAT TAB -->
  <div class="dash-pane" id="dpAdminchat" style="display:none">
    <div id="adminChatInbox">Loading chat inbox...</div>
  </div>

  <!-- EXPERT ADMIN TAB -->
  <div class="dash-pane" id="dpExpertsadmin" style="display:none">
    <div style="margin-bottom:14px;border:1px solid var(--border);border-radius:10px;padding:12px;background:#f8fafc">
      <div style="font-size:.9rem;font-weight:800;color:var(--dark);margin-bottom:8px">✅ Working Experts (Qualified)</div>
      <div id="workingExpertsList" style="font-size:.82rem;color:var(--muted)">Loading qualified experts...</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">
      <div style="font-size:.95rem;font-weight:800;color:var(--dark)">👩‍🏫 Expert Applications</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="admin-status-select" type="button" onclick="normalizeExpertRecords()" style="margin-top:0">Normalize Legacy Records</button>
        <select id="expertFilterStatus" onchange="loadExpertApplications()" style="padding:6px 10px;border:1.5px solid var(--border);border-radius:8px;font-size:.82rem;font-weight:600">
          <option value="">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Qualified">Qualified</option>
          <option value="Not Qualified">Not Qualified</option>
        </select>
      </div>
    </div>
    <div id="expertApplicationsList"><p style="text-align:center;padding:20px;color:var(--muted)">⏳ Loading…</p></div>
  </div>
</div>

<!-- Hiring Info Modal -->
<div class="auth-overlay" id="hiringInfoOverlay" onclick="if(event.target===this)closeHiringInfoModal()">
  <div class="auth-card" style="max-width:760px">
    <button class="auth-close" onclick="closeHiringInfoModal()">✕</button>
    <div class="auth-logo">Research <span>Aid</span></div>
    <p style="text-align:center;font-size:.82rem;color:var(--muted);margin-bottom:16px">Hiring Information</p>
    <div style="font-size:.86rem;line-height:1.55;color:var(--dark)">
      <p><strong>Who can apply:</strong> Subject experts from Engineering, Science, Management, Humanities, Statistics, and allied domains with proven academic/work expertise.</p>
      <p><strong>Type of work:</strong> Assignment support, research assistance, synopsis support, statistical interpretation, editing, and specialist domain tasks.</p>
      <p><strong>How you get paid:</strong> Payment is assignment-based and released after admin validation of quality, timeliness, and delivery stage.</p>
      <p><strong>Confidentiality:</strong> Client personal details are hidden from experts. You receive only task-safe assignment briefs.</p>
    </div>
    <button class="submit-btn" style="margin-top:10px" onclick="closeHiringInfoModal();scrollToSection('experts-apply')">Apply Now</button>
  </div>
</div>

<!-- Separate Expert Panel -->
<div class="expert-overlay" id="expertOverlay" onclick="closeExpertLoginPanel()"></div>
<aside class="expert-panel" id="expertPanel">
  <div class="expert-header">
    <div style="font-weight:800;color:var(--dark)">👨‍🏫 Expert Workspace</div>
    <button class="dash-close" onclick="closeExpertLoginPanel()">✕</button>
  </div>

  <div id="expertLoginBox" style="padding:14px">
    <div class="form-group"><label>Expert Email</label><input type="email" id="expertLoginEmail" placeholder="Registered expert email" /></div>
    <div class="form-group"><label>Password</label><input type="password" id="expertLoginPassword" placeholder="Your password" /></div>
    <button class="submit-btn" type="button" onclick="expertLogin()">Login as Expert</button>
    <p style="font-size:.78rem;color:var(--muted);margin-top:8px">Only <strong>Qualified</strong> experts can access assignments.</p>
  </div>

  <div id="expertWorkspace" style="display:none">
    <div style="padding:0 12px 10px;font-size:.82rem;color:var(--muted)">
      <strong id="expName">Expert</strong> • Status: <span id="expStatus">—</span>
    </div>
    <div class="expert-tabs">
      <div class="expert-tab active" onclick="switchExpertTab('active',this)">Active Assignments</div>
      <div class="expert-tab" onclick="switchExpertTab('history',this)">Previous Work</div>
      <div class="expert-tab" onclick="switchExpertTab('payments',this)">Payment Demand</div>
    </div>

    <div class="expert-pane active" id="epActive">
      <div id="expertAssignmentsList">Loading...</div>
    </div>
    <div class="expert-pane" id="epHistory">
      <div id="expertHistoryList">Loading...</div>
    </div>
    <div class="expert-pane" id="epPayments">
      <div class="form-group"><label>Assignment ID</label><input type="text" id="payAssignId" placeholder="e.g. SA-2026-1234" /></div>
      <div class="form-group"><label>Amount Requested (₹)</label><input type="number" id="payAmount" min="1" /></div>
      <div class="form-group"><label>Note</label><textarea id="payNote" placeholder="Reason / milestone completed"></textarea></div>
      <button class="submit-btn" type="button" onclick="submitPaymentDemand()">Send Payment Request</button>
      <div id="expertPaymentHistory" style="margin-top:10px;font-size:.82rem;color:var(--muted)"></div>
    </div>
  </div>
</aside>

</body>
</html>
