/* Frontend-only Access Control
   - Hardcode your pre-generated codes in ACCESS_CODES
   - This is a client-side-only system; used codes are tracked per-browser via localStorage
*/

const ACCESS_STORAGE_KEY = 'linguisticsAccess';
// Pre-generated access codes (provided by user)
const ACCESS_CODES = [
  "CSC-A1F3-B7KD-2026", "CSC-P8ZL-41MX-2026", "CSC-T3KQ-99WA-2026",
  "CSC-J9LM-82PN-2026", "CSC-R5XT-C4QW-2026", "CSC-B2VH-Z7KU-2026",
  "CSC-F8MD-W2PL-2026", "CSC-K6JY-N9XA-2026", "CSC-M0RE-V3ZT-2026",
  "CSC-Q4NG-L8DU-2026", "CSC-S1JP-M5XQ-2026", "CSC-W3BV-Y6KR-2026",
  "CSC-D7XZ-R0CF-2026", "CSC-E9TA-H2MJ-2026", "CSC-G5UC-P1NZ-2026",
  "CSC-H2FW-Q7LV-2026", "CSC-L8QD-K3SW-2026", "CSC-N0RJ-B5XP-2026",
  "CSC-O4SY-Z9VT-2026", "CSC-U1MC-N6HA-2026", "CSC-V9PE-J8KG-2026",
  "CSC-X6ZR-T4YD-2026", "CSC-Y3BT-F0PQ-2026", "CSC-Z5WL-V7RC-2026",
  "CSC-A7NJ-P2MK-2026", "CSC-B9VF-M1XS-2026", "CSC-C8PX-L0QZ-2026",
  "CSC-D4GA-W3VR-2026", "CSC-E2KJ-S9NL-2026", "CSC-F0RQ-H5DY-2026",
  "CSC-G3MH-T8CP-2026", "CSC-H5UN-Y6BZ-2026", "CSC-J7XE-V1LW-2026",
  "CSC-K9TD-N3AF-2026", "CSC-L1PB-K7GX-2026", "CSC-M4FV-M0RC-2026",
  "CSC-N8WY-Q2JP-2026", "CSC-O6ZU-L5TN-2026", "CSC-P0LX-H9VS-2026",
  "CSC-Q2MC-B8DZ-2026", "CSC-R1SG-J4XP-2026", "CSC-S5TE-N6WY-2026",
  "CSC-T8VP-K3LA-2026", "CSC-U3JZ-F7QN-2026", "CSC-V7RL-P0KG-2026",
  "CSC-W9NY-V4BM-2026", "CSC-X0ZF-M2CD-2026", "CSC-Y2DH-T5RA-2026",
  "CSC-Z4LX-W1QS-2026", "CSC-A6PC-R9VN-2026", "CSC-B8UB-J3KX-2026",
  "CSC-C1VM-L8DH-2026", "CSC-D3RA-B0GP-2026", "CSC-E5KS-N4YW-2026",
  "CSC-F7JQ-M6VT-2026", "CSC-G0TY-X9LA-2026", "CSC-H2WL-P8CZ-2026",
  "CSC-J4XK-K1MR-2026", "CSC-K6VC-Q7JS-2026", "CSC-L8NY-F0BP-2026",
  "CSC-M0SG-T3DZ-2026", "CSC-N2RW-V5KX-2026", "CSC-O4HP-M9LA-2026",
  "CSC-P7AJ-N2CQ-2026", "CSC-Q9BZ-K6XV-2026", "CSC-R1CY-J4DZ-2026",
  "CSC-S3LX-P0RW-2026", "CSC-T5VM-W7NY-2026", "CSC-U7QK-F1MB-2026",
  "CSC-V0DJ-R9ZT-2026", "CSC-W2PN-N6XS-2026", "CSC-X4RK-L3AQ-2026",
  "CSC-Y6TM-B5CV-2026", "CSC-Z8UC-H0PZ-2026", "CSC-A0VP-M2LX-2026",
  "CSC-B2WA-Q4GY-2026", "CSC-C4XJ-T7ND-2026", "CSC-D6YC-V8PS-2026",
  "CSC-E8RB-J9MK-2026", "CSC-F0SG-N1ZX-2026", "CSC-G1TZ-K5AL-2026",
  "CSC-H3PM-W3CQ-2026", "CSC-J5NY-F2RV-2026", "CSC-K7LB-P8XD-2026",
  "CSC-L9VF-M6SZ-2026", "CSC-M1RK-N0YP-2026", "CSC-N3XJ-J4WT-2026",
  "CSC-O5UC-L7BR-2026", "CSC-P7WD-Q9SV-2026", "CSC-Q9YE-K3CN-2026",
  "CSC-R1ZG-T5FA-2026", "CSC-S3BA-V8LM-2026", "CSC-T5CD-F0RY-2026",
  "CSC-U7EG-P2XW-2026", "CSC-V9FI-M4ZD-2026", "CSC-W1HK-N6QJ-2026",
  "CSC-X3JL-K8VS-2026", "CSC-Y5MN-B1RX-2026", "CSC-Z7OP-H3CT-2026",
  "CSC-A9QR-W5NL-2026", "CSC-B1TS-V7JD-2026", "CSC-C3UV-F9KP-2026",
  "CSC-D5WX-P0YM-2026", "CSC-E7YZ-M2BR-2026", "CSC-F9AB-N4SZ-2026",
  "CSC-G1CD-J6VX-2026", "CSC-H3EF-L8PY-2026", "CSC-J5GH-Q1TW-2026",
  "CSC-K7IJ-K3DZ-2026", "CSC-L9KL-B5RV-2026", "CSC-M1MN-H7XS-2026",
  "CSC-N3OP-V9ZY-2026", "CSC-O5QR-F1LW-2026", "CSC-P7ST-P3QJ-2026",
  "CSC-Q9UV-M5CZ-2026", "CSC-R1WX-N7AK-2026", "CSC-S3YZ-K9DP-2026",
  "CSC-T5AB-W0RV-2026", "CSC-U7CD-V2YN-2026", "CSC-V9EF-F4JB-2026",
  "CSC-W1GH-P6LK-2026", "CSC-X3IJ-M8QT-2026", "CSC-Y5KL-N0RV-2026",
  "CSC-Z7MN-K2WY-2026", "CSC-A9OP-B4DZ-2026", "CSC-B1QR-H6XP-2026",
  "CSC-C3ST-V8LC-2026", "CSC-D5UV-F0WY-2026", "CSC-E7WX-P2MJ-2026",
  "CSC-F9YZ-M4RQ-2026", "CSC-G1AB-N6TS-2026", "CSC-H3CD-J8VX-2026",
  "CSC-J5EF-L0ZY-2026", "CSC-K7GH-K2LW-2026", "CSC-L9IJ-B4QJ-2026",
  "CSC-M1KL-H6CZ-2026", "CSC-N3MN-V8PX-2026", "CSC-O5OP-F0RW-2026",
  "CSC-P7QR-P2NY-2026", "CSC-Q9ST-M4JB-2026", "CSC-R1UV-N6LK-2026",
  "CSC-S3WX-K8QT-2026", "CSC-T5YZ-B0RV-2026", "CSC-U7AB-H2WY-2026",
  "CSC-V9CD-V4DZ-2026", "CSC-W1EF-F6XP-2026", "CSC-X3GH-P8LC-2026",
  "CSC-Y5IJ-M0WY-2026", "CSC-Z7KL-N2MJ-2026", "CSC-A9MN-K4RQ-2026",
  "CSC-B1OP-B6TS-2026", "CSC-C3QR-H8VX-2026", "CSC-D5ST-V0ZY-2026",
  "CSC-E7UV-F2LW-2026", "CSC-F9WX-P4QJ-2026", "CSC-G1YZ-M6CZ-2026",
  "CSC-H3AB-N8PX-2026", "CSC-J5CD-J0RW-2026", "CSC-K7EF-K2NY-2026",
  "CSC-L9GH-B4JB-2026", "CSC-M1IJ-H6LK-2026", "CSC-N3KL-V8QT-2026",
  "CSC-O5MN-F0RV-2026", "CSC-P7OP-P2WY-2026", "CSC-Q9QR-M4DZ-2026",
  "CSC-R1ST-N6XP-2026", "CSC-S3UV-K8LC-2026", "CSC-T5WX-B0WY-2026",
  "CSC-U7YZ-H2MJ-2026", "CSC-V9AB-V4RQ-2026", "CSC-W1CD-F6TS-2026",
  "CSC-X3EF-P8VX-2026", "CSC-Y5GH-M0ZY-2026", "CSC-Z7IJ-N2LW-2026"
];

function getAccessStorage(){
  try{ return JSON.parse(localStorage.getItem(ACCESS_STORAGE_KEY)) || {} }catch(e){return {}};
}
function saveAccessStorage(obj){ localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(obj)); }
function clearAccessStorage(){ localStorage.removeItem(ACCESS_STORAGE_KEY); }

function isLockPage(){ return location.pathname.endsWith('lock.html') || location.pathname.endsWith('/lock.html'); }

function checkAccessOnLoad(){
  if(isLockPage()){
    // lock page handles its own UI
    bindLockForm();
    return;
  }

  const store = getAccessStorage();
  if(!store || !store.unlocked){
    window.location.href = 'lock.html';
    return;
  }
  // validate expiry
  const now = Date.now();
  if(!store.expiry || store.expiry < now){
    // expired, clear and redirect
    clearAccessStorage();
    window.location.href = 'lock.html';
    return;
  }
  // valid — render small access banner on-page
  try{ renderAccessBanner(store); }catch(e){ /* ignore banner errors */ }
}

function bindLockForm(){
  const form = document.getElementById('unlockForm');
  const nameInput = document.getElementById('studentName');
  const codeInput = document.getElementById('accessCode');
  const btn = document.getElementById('unlockBtn');
  const msg = document.getElementById('messageArea');

  if(!form) return;

  // If already unlocked for this browser, redirect
  const store = getAccessStorage();
  if(store && store.unlocked && store.expiry && store.expiry > Date.now()){
    window.location.href = 'dashboard.html';
    return;
  }

  btn.addEventListener('click', () => handleUnlock(nameInput.value.trim(), codeInput.value.trim().toUpperCase(), msg));
}

function handleUnlock(studentName, code, msgEl){
  msgEl.innerHTML = '';
  if(!studentName){ showMessage(msgEl, 'Please enter your name.', 'error'); return; }
  if(!code){ showMessage(msgEl, 'Please enter an access code.', 'error'); return; }

  if(!isValidFormat(code)){
    showMessage(msgEl, 'Code format invalid.', 'error');
    return;
  }

  // verify code exists in allowed list
  if(!ACCESS_CODES.includes(code)){
    showMessage(msgEl, 'Invalid code.', 'error');
    return;
  }

  // load used codes mapping from storage root (per-browser)
  const storage = getAccessStorage();
  storage.usedCodes = storage.usedCodes || {};

  const now = Date.now();
  const existing = storage.usedCodes[code];

  if(existing){
    // if existing and not expired and deviceId belongs to another device -> deny
    if(existing.expiry && existing.expiry > now){
      // code in use
      showMessage(msgEl, 'This code is already activated on another device.', 'error');
      return;
    }
    // otherwise it's expired or available; allow re-use
  }

  // Activate code for this device
  const deviceId = crypto && crypto.randomUUID ? crypto.randomUUID() : ('dev-' + Math.random().toString(36).slice(2));
  const expiry = now + 30 * 24 * 60 * 60 * 1000; // 30 days

  storage.unlocked = true;
  storage.deviceId = deviceId;
  storage.code = code;
  storage.studentName = studentName;
  storage.expiry = expiry;
  storage.usedCodes[code] = { deviceId, expiry, studentName };

  saveAccessStorage(storage);
  showMessage(msgEl, 'Access granted — redirecting...', 'success');
  setTimeout(()=> window.location.href='dashboard.html', 800);
}

function showMessage(el, text, type){
  if(!el) return; 
  el.innerHTML = `<div class="${type === 'error' ? 'error' : 'success'}">${text}</div>`;
}

function isValidFormat(code){
  // simple pattern: ABC-XXXX-XXXX-YYYY  (letters/digits and dashes)
  const re = /^[A-Z]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i;
  return re.test(code);
}

// Public helper: revoke access (clears storage)
function revokeAccess(){ clearAccessStorage(); window.location.href='lock.html'; }

// Auto-check when loaded
(function(){
  try{ checkAccessOnLoad(); }catch(e){ console.error('Access control error', e); }
})();

// Render a small non-intrusive banner showing unlocked student and days remaining
function renderAccessBanner(store){
  if(!store || !store.unlocked) return;
  const now = Date.now();
  const expiry = store.expiry || now;
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysLeft = Math.ceil((expiry - now) / msPerDay);

  // Create banner container
  const existing = document.getElementById('accessBanner');
  if(existing) return;

  const banner = document.createElement('div');
  banner.id = 'accessBanner';
  banner.style.position = 'fixed';
  banner.style.right = '12px';
  banner.style.top = '12px';
  banner.style.zIndex = '9999';
  banner.style.background = 'rgba(52,152,219,0.95)';
  banner.style.color = 'white';
  banner.style.padding = '10px 14px';
  banner.style.borderRadius = '8px';
  banner.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
  banner.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial';
  banner.style.fontSize = '13px';
  banner.style.display = 'flex';
  banner.style.alignItems = 'center';
  banner.style.gap = '10px';

  const nameSpan = document.createElement('span');
  nameSpan.textContent = store.studentName ? (`Signed in: ${store.studentName}`) : 'Signed in';

  const daysSpan = document.createElement('span');
  daysSpan.style.opacity = '0.95';
  daysSpan.style.fontWeight = '600';
  daysSpan.textContent = `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`;

  const actions = document.createElement('div');
  actions.style.display = 'flex';
  actions.style.gap = '8px';

  const revokeBtn = document.createElement('button');
  revokeBtn.textContent = 'Revoke';
  revokeBtn.style.background = 'transparent';
  revokeBtn.style.border = '1px solid rgba(255,255,255,0.85)';
  revokeBtn.style.color = 'white';
  revokeBtn.style.padding = '6px 8px';
  revokeBtn.style.borderRadius = '6px';
  revokeBtn.style.cursor = 'pointer';
  revokeBtn.style.fontSize = '12px';
  revokeBtn.addEventListener('click', ()=>{
    if(confirm('Revoke access for this browser?')) revokeAccess();
  });

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.title = 'Dismiss';
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.color = 'white';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '14px';
  closeBtn.addEventListener('click', ()=>{
    banner.remove();
  });

  actions.appendChild(revokeBtn);
  actions.appendChild(closeBtn);

  banner.appendChild(nameSpan);
  banner.appendChild(daysSpan);
  banner.appendChild(actions);

  document.addEventListener('DOMContentLoaded', ()=>{
    document.body.appendChild(banner);
  });
  // If DOM already loaded, append immediately
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    if(!document.getElementById('accessBanner')) document.body.appendChild(banner);
  }
}
