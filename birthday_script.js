/* Extracted CSS from original single-file version (dark + premium + flip + fireworks) */
:root{--bg:#0f1221;--card:#111217;--gold:#d4af37;--soft:#2b2e3a;--accent:#f6e7b4}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 20% 20%, #101224 0%, var(--bg) 40%);font-family:Inter,system-ui,Segoe UI,Roboto,'Helvetica Neue',Arial;color:var(--accent)}
.stage{width:100%;max-width:980px;padding:32px;display:grid;grid-template-columns:1fr 420px;gap:24px;align-items:center}
.card-wrap{perspective:1400px;display:flex;align-items:center;justify-content:center}
.card{width:380px;height:240px;position:relative;transform-style:preserve-3d;transition:transform 1.1s cubic-bezier(.2,.9,.3,1);cursor:pointer}
.card.opened{transform:rotateY(-180deg)}
.face{position:absolute;inset:0;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(2,2,10,0.6);display:flex;align-items:center;justify-content:center}
.front{background:linear-gradient(135deg,#14131a 0%, #1b1727 100%);border:3px solid rgba(212,175,55,0.07)}
.front .label{font-size:20px;color:var(--gold);text-align:center}
.back{transform:rotateY(180deg);background:linear-gradient(180deg,rgba(212,175,55,0.12),rgba(212,175,55,0.03));border:2px solid rgba(212,175,55,0.18);display:flex;flex-direction:column;gap:8px;padding:18px}
.back h2{margin:0;font-size:20px;color:var(--gold)}
.back p{margin:0;color:#efe6c8}
.diary{background:linear-gradient(180deg,#0b0b0f, #12121b);border-radius:12px;padding:18px;box-shadow:0 8px 30px rgba(0,0,0,0.6);min-height:320px;color:#f3e9d6;display:flex;flex-direction:column;gap:12px;transform-origin:left center;transform:rotateY(90deg);opacity:0;transition:transform .9s cubic-bezier(.2,.9,.3,1),opacity .6s}
.diary.open{transform:rotateY(0);opacity:1}
.diary .title{display:flex;align-items:center;gap:10px}
.diary h3{margin:0;color:var(--gold)}
.lines{background:linear-gradient(transparent 0, rgba(255,255,255,0.02) 1px);background-size:100% 36px;padding:14px;border-radius:8px;flex:1;overflow:auto}
.compliment{margin:10px 0;padding:10px;border-left:4px solid rgba(212,175,55,0.18);}
.controls{display:flex;flex-direction:column;gap:12px;padding:14px}
.controls label{font-size:13px;color:#ddd}
.file{display:flex;gap:8px;align-items:center}
input[type=file]{background:transparent;color:var(--accent)}
.small{font-size:13px;color:#bbb}
.popup{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
.popup .message{z-index:40;position:relative;padding:28px 38px;border-radius:12px;background:linear-gradient(180deg,rgba(13,12,16,0.9),rgba(20,18,26,0.9));border:2px solid rgba(212,175,55,0.12);box-shadow:0 12px 40px rgba(2,4,10,0.6);color:var(--gold);font-size:36px;letter-spacing:1px;transform:scale(0.92);opacity:0;transition:transform .45s,opacity .45s}
.popup.show .message{transform:scale(1);opacity:1}
@media (max-width:980px){.stage{grid-template-columns:1fr;align-items:stretch}.card{margin:0 auto}}
