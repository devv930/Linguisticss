/**
 * Profile Page Logic
 * Handles profile display, editing, and streak visualization
 */

let currentMonth = new Date();

document.addEventListener('DOMContentLoaded', function() {
    initializeProfile();
    loadNavigation();
});

function initializeProfile() {
    loadProfileData();
    setupEventListeners();
    renderCalendar();
    updateStreakVisualization();
    updateXPBar();
    loadAchievements();
    loadRecentActivity();
    initializeAccessCountdown();
}

function loadProfileData() {
    const profile = userProfile.getUserProfile();
    const streakInfo = userProfile.getStreakInfo();
    const xpInfo = userProfile.getXPForNextLevel();
    const certs = userProfile.getCertificates();
    
    // Update profile display
    document.getElementById('profileName').textContent = profile.name || 'Student';
    
    // Display uploaded image if exists, otherwise show emoji avatar
    const avatarEl = document.getElementById('profileAvatar');
    if(profile.profileImage){
        avatarEl.innerHTML = `<img src="${profile.profileImage}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;" />`;
        avatarEl.style.padding = '0';
    } else {
        avatarEl.textContent = profile.avatar || '👤';
        avatarEl.style.padding = '';
    }
    
    document.getElementById('profileLevel').textContent = `Level ${profile.level}`;
    document.getElementById('totalXP').textContent = profile.totalXP;
    
    if (profile.email) {
        document.getElementById('profileEmail').textContent = profile.email;
    } else {
        document.getElementById('profileEmail').textContent = '';
    }
    
    if (profile.matricNumber) {
        document.getElementById('profileMatric').textContent = `Matric: ${profile.matricNumber}`;
    } else {
        document.getElementById('profileMatric').textContent = '';
    }
    
    if (profile.bio) {
        document.getElementById('profileBio').textContent = profile.bio;
    } else {
        document.getElementById('profileBio').textContent = 'Add a bio to let others know about you!';
    }
    
    // Format join date
    const joinDate = new Date(profile.joinDate);
    const daysActive = Math.floor((new Date() - joinDate) / (1000 * 60 * 60 * 24));
    document.getElementById('joinDate').textContent = `Member for ${daysActive} days (Joined ${joinDate.toLocaleDateString()})`;
    
    // Update streak info
    document.getElementById('currentStreak').textContent = streakInfo.current;
    document.getElementById('longestStreak').textContent = streakInfo.longest;
    document.getElementById('totalCerts').textContent = certs.length;
    
    // Update streak message
    const streakMessage = getStreakMessage(streakInfo.current);
    document.getElementById('streakMessage').textContent = streakMessage;
    
    // Update milestone markers
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
        const days = parseInt(milestone.dataset.days);
        if (streakInfo.current >= days) {
            milestone.classList.add('unlocked');
        } else {
            milestone.classList.remove('unlocked');
        }
    });
}

function getStreakMessage(streak) {
    if (streak === 0) return "🔥 Start your study streak today!";
    if (streak === 1) return "🔥 Great start! Keep it going!";
    if (streak < 7) return `🔥 Amazing! ${streak} day streak! Keep pushing!`;
    if (streak < 14) return `🔥 Incredible! ${streak} day streak! You're on fire!`;
    if (streak < 21) return `🔥 Outstanding! ${streak} day streak! Nearly there!`;
    if (streak < 30) return `🔥 Phenomenal! ${streak} day streak! Almost to the max!`;
    return `🔥 LEGENDARY! ${streak} day streak! You're unstoppable!`;
}

function updateStreakVisualization() {
    const streakInfo = userProfile.getStreakInfo();
    const progressFill = document.getElementById('streakProgressFill');
    const maxStreak = 30;
    const percentage = Math.min((streakInfo.current / maxStreak) * 100, 100);
    progressFill.style.width = percentage + '%';
    progressFill.textContent = streakInfo.current + '/' + maxStreak;
}

function updateXPBar() {
    const xpInfo = userProfile.getXPForNextLevel();
    const percentage = (xpInfo.current / xpInfo.needed) * 100;
    
    document.getElementById('xpFill').style.width = percentage + '%';
    document.getElementById('currentLevelText').textContent = `Level ${userProfile.getUserLevel()}`;
    document.getElementById('xpText').textContent = `${xpInfo.current} / ${xpInfo.needed} XP`;
}

function setupEventListeners() {
    // Edit profile button
    document.getElementById('editProfileBtn').addEventListener('click', openEditModal);
    
    // Edit modal
    document.getElementById('saveEditBtn').addEventListener('click', saveProfile);
    document.getElementById('cancelEditBtn').addEventListener('click', closeEditModal);
    document.getElementById('closeEditModal').addEventListener('click', closeEditModal);
    
    // Avatar edit button
    document.getElementById('avatarEditBtn').addEventListener('click', openAvatarModal);
    document.getElementById('closeAvatarModal').addEventListener('click', closeAvatarModal);
    
    // Avatar options
    document.querySelectorAll('.avatar-option').forEach(btn => {
        btn.addEventListener('click', selectAvatar);
    });
    
    // Calendar navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth.setMonth(currentMonth.getMonth() + 1);
        renderCalendar();
    });
    
    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

function openEditModal() {
    const profile = userProfile.getUserProfile();
    
    document.getElementById('editName').value = profile.name || '';
    document.getElementById('editEmail').value = profile.email || '';
    document.getElementById('editMatric').value = profile.matricNumber || '';
    document.getElementById('editBio').value = profile.bio || '';
    document.getElementById('editAvatar').value = profile.avatar || '';
    
    // Show existing image preview if exists
    const imagePreview = document.getElementById('imagePreview');
    if(profile.profileImage){
        imagePreview.innerHTML = `<img src="${profile.profileImage}" style="width:100%; height:auto;" />`;
    } else {
        imagePreview.innerHTML = '';
    }
    
    document.getElementById('editModal').classList.add('active');
}

function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
}

function saveProfile() {
    const updates = {
        name: document.getElementById('editName').value || 'Student',
        email: document.getElementById('editEmail').value,
        matricNumber: document.getElementById('editMatric').value || '',
        bio: document.getElementById('editBio').value,
        avatar: document.getElementById('editAvatar').value || '👤'
    };
    
    // Handle image upload if file is selected
    const fileInput = document.getElementById('uploadProfileImage');
    if(fileInput && fileInput.files && fileInput.files[0]){
        const file = fileInput.files[0];
        
        // Validate file size (max 5MB)
        if(file.size > 5 * 1024 * 1024){
            alert('Image size must be less than 5MB');
            return;
        }
        
        // Read file and convert to base64
        const reader = new FileReader();
        reader.onload = (e) => {
            updates.profileImage = e.target.result;
            userProfile.updateUserProfile(updates);
            fileInput.value = ''; // Clear file input
            closeEditModal();
            loadProfileData();
        };
        reader.readAsDataURL(file);
    } else {
        userProfile.updateUserProfile(updates);
        fileInput.value = ''; // Clear file input
        closeEditModal();
        loadProfileData();
    }
}

function openAvatarModal() {
    document.getElementById('avatarModal').classList.add('active');
}

function closeAvatarModal() {
    document.getElementById('avatarModal').classList.remove('active');
}

function selectAvatar(e) {
    const emoji = e.target.dataset.emoji;
    const profile = userProfile.getUserProfile();
    userProfile.updateUserProfile({ ...profile, avatar: emoji });
    closeAvatarModal();
    loadProfileData();
}

function renderCalendar() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Update header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('monthYear').textContent = `${monthNames[month]} ${year}`;
    
    // Get study dates
    const streakInfo = userProfile.getStreakInfo();
    const studyDatesSet = new Set(
        streakInfo.studyDates.map(date => new Date(date).toDateString())
    );
    
    // First day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = '';
    
    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day empty';
        calendarDays.appendChild(day);
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        const dateStr = new Date(year, month, day).toDateString();
        if (studyDatesSet.has(dateStr)) {
            dayElement.classList.add('active');
            dayElement.title = 'Study day';
        }
        
        calendarDays.appendChild(dayElement);
    }
    
    // Next month's days
    const totalCells = calendarDays.children.length;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day empty';
        calendarDays.appendChild(dayElement);
    }
}

function loadAchievements() {
    const earnedBadges = userProfile.getEarnedBadges();
    const achievementsGrid = document.getElementById('achievementsGrid');
    
    // Define all badges (matching dashboard.js)
    const BADGES = {
        firstStep: { name: 'First Step', icon: '👣', desc: 'Start your first course' },
        explorer: { name: 'Explorer', icon: '🗺️', desc: 'Start 5 different courses' },
        masterExplorer: { name: 'Master Explorer', icon: '🌍', desc: 'Start all courses' },
        completionist: { name: 'Completionist', icon: '✅', desc: 'Complete your first course' },
        scholar: { name: 'Scholar', icon: '🎓', desc: 'Complete 3 courses' },
        masterScholar: { name: 'Master Scholar', icon: '👨‍🎓', desc: 'Complete all courses' },
        perfectScore: { name: 'Perfect Score', icon: '💯', desc: 'Score 100% on a test' },
        certified: { name: 'Certified', icon: '🏆', desc: 'Earn your first certificate' },
        multiCertified: { name: 'Multi-Certified', icon: '🎖️', desc: 'Earn 3 certificates' },
        streakMaster: { name: 'Streak Master', icon: '🔥', desc: 'Maintain 7-day study streak' }
    };
    
    achievementsGrid.innerHTML = '';
    
    for (const badgeId in BADGES) {
        const badge = BADGES[badgeId];
        const isEarned = earnedBadges.includes(badgeId);
        
        const badgeElement = document.createElement('div');
        badgeElement.className = `achievement-badge ${!isEarned ? 'locked' : ''}`;
        badgeElement.innerHTML = `
            <div class="achievement-icon">${badge.icon}</div>
            <p class="achievement-name">${badge.name}</p>
            <p style="font-size: 0.7rem; color: #7f8c8d; margin: 0;">${isEarned ? '✓ Earned' : 'Locked'}</p>
        `;
        badgeElement.title = badge.desc;
        achievementsGrid.appendChild(badgeElement);
    }
}

function loadRecentActivity() {
    const profile = userProfile.getUserProfile();
    const streakInfo = userProfile.getStreakInfo();
    const certs = userProfile.getCertificates();
    const activityList = document.getElementById('activityList');
    
    const activities = [];
    
    // Join activity
    activities.push({
        icon: '🎯',
        title: 'Joined Linguistics Learning',
        time: new Date(profile.joinDate).toLocaleDateString()
    });
    
    // Most recent certificate
    if (certs.length > 0) {
        const lastCert = certs[certs.length - 1];
        activities.push({
            icon: '🏆',
            title: `Earned certificate for ${lastCert.courseTitle}`,
            time: new Date(lastCert.earnedDate).toLocaleDateString()
        });
    }
    
    // Current streak milestone
    if (streakInfo.current >= 7) {
        activities.push({
            icon: '🔥',
            title: `Achieved ${streakInfo.current}-day study streak!`,
            time: 'Active'
        });
    }
    
    // Render activities
    activityList.innerHTML = '';
    if (activities.length === 0) {
        activityList.innerHTML = '<p style="color: #7f8c8d; text-align: center;">Your activity will appear here.</p>';
        return;
    }
    
    activities.forEach(activity => {
        const activityElement = document.createElement('div');
        activityElement.className = 'activity-item';
        activityElement.innerHTML = `
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <p class="activity-title">${activity.title}</p>
                <p class="activity-time">${activity.time}</p>
            </div>
        `;
        activityList.appendChild(activityElement);
    });
}

// Access countdown: reads `linguisticsAccess` and shows days/time remaining
let _accessInterval = null;
function initializeAccessCountdown(){
    updateAccessCountdown();
    if(_accessInterval) clearInterval(_accessInterval);
    _accessInterval = setInterval(updateAccessCountdown, 1000);
    window.addEventListener('beforeunload', ()=>{ if(_accessInterval) clearInterval(_accessInterval); });
        // Ensure renew UI listeners are set
        setupRenewUI();
}

// Ensure countdown updates even if storage or other scripts initialize slightly later
setTimeout(()=>{ try{ updateAccessCountdown(); }catch(e){} }, 500);
setTimeout(()=>{ try{ updateAccessCountdown(); }catch(e){} }, 2000);

function updateAccessCountdown(){
    try{
        const raw = localStorage.getItem('linguisticsAccess');
        if(!raw){
            document.getElementById('accessDays').textContent = 'Locked';
            document.getElementById('accessCountdown').textContent = 'No active access';
            return;
        }
        const store = JSON.parse(raw);
        if(!store || !store.unlocked || !store.expiry){
            document.getElementById('accessDays').textContent = 'Locked';
            document.getElementById('accessCountdown').textContent = 'No active access';
            return;
        }

        const now = Date.now();
        const expiry = Number(store.expiry) || now;
        if(expiry <= now){
            document.getElementById('accessDays').textContent = 'Expired';
            document.getElementById('accessCountdown').textContent = 'Please renew access';
            return;
        }

        const diff = expiry - now;
        const days = Math.floor(diff / (24*60*60*1000));
        const hours = Math.floor((diff % (24*60*60*1000)) / (60*60*1000));
        const minutes = Math.floor((diff % (60*60*1000)) / (60*1000));
        const seconds = Math.floor((diff % (60*1000)) / 1000);

        const daysEl = document.getElementById('accessDays'); if(daysEl) daysEl.textContent = `${days} day${days!==1?'s':''} left`;
        const cdEl = document.getElementById('accessCountdown'); if(cdEl) cdEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} (H:M:S)`;

        // Show code and device info (if present)
        const codeEl = document.getElementById('accessCode');
        const devEl = document.getElementById('accessDevice');
        if(codeEl) codeEl.textContent = store.code ? `Code: ${store.code}` : 'Code: —';
        if(devEl) devEl.textContent = store.deviceId ? `Device: ${store.deviceId}` : 'Device: —';

        // Update renew price display (₦500 per month)
        const priceEl = document.getElementById('renewPrice');
        const monthsSel = document.getElementById('renewMonths');
        if(monthsSel && priceEl){
            const months = Number(monthsSel.value || 3);
            const total = months * 500; // 500 NGN per month
            priceEl.textContent = `₦${total}`;
        }

    }catch(e){
        document.getElementById('accessDays').textContent = 'Locked';
        document.getElementById('accessCountdown').textContent = 'Error reading access';
    }
}

function pad(n){ return (n<10? '0':'') + n; }

// Renew button: open WhatsApp with prefilled message including code, deviceId, months and total
// Setup renew UI listeners safely
function setupRenewUI(){
    const monthsSel = document.getElementById('renewMonths');
    const priceEl = document.getElementById('renewPrice');
    const renewBtn = document.getElementById('renewBtn');

    if(monthsSel && priceEl){
        monthsSel.addEventListener('change', ()=>{
            const months = Number(monthsSel.value || 3);
            priceEl.textContent = `₦${months * 500}`;
        });
        // initialize
        priceEl.textContent = `₦${Number(monthsSel.value||3) * 500}`;
    }

    if(!renewBtn) return;

    renewBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        try{
            const raw = localStorage.getItem('linguisticsAccess');
            const store = raw ? JSON.parse(raw) : {};
            const profile = (typeof userProfile !== 'undefined' && userProfile.getUserProfile) ? userProfile.getUserProfile() : {};
            const studentName = (store.studentName || profile.name || 'Student');
            const code = store.code || 'N/A';
            const deviceId = store.deviceId || 'N/A';
            const months = Number((document.getElementById('renewMonths') || { value: '3' }).value || 3);
            const total = months * 500;

            const message = `Hello, I want to renew my access.\nName: ${studentName}\nCode: ${code}\nDevice: ${deviceId}\nDuration: ${months} months\nAmount: ₦${total} (₦500/month)\nPlease advise payment steps.`;
            const url = `https://wa.me/234907435093?text=${encodeURIComponent(message)}`;
            // Try open in new tab; fallback to location assign
            const w = window.open(url, '_blank');
            if(!w) window.location.href = url;
        }catch(e){
            alert('Unable to open WhatsApp link.');
        }
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    setupRenewUI();
});

function loadNavigation() {
    // This will be called by navigation.js
    if (typeof initializeNavigation === 'function') {
        initializeNavigation();
    }
}
