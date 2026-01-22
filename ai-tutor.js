// Countdown Timer Logic
const countdown = () => {
    // Check for stored launch date
    let storedLaunchDate = localStorage.getItem('aiTutorLaunchDate');
    let launchDate;

    if (storedLaunchDate) {
        launchDate = parseInt(storedLaunchDate, 10);
        
        // If the stored date is in the past, reset it to 6 days from now (optional, but good for UX)
        // For this request, we will stick to "persist across reloads" which implies keeping the original target.
        // However, if the timer runs out, it stays at 0.
    } else {
        // Set launch date to 6 days from now
        const now = new Date();
        launchDate = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000).getTime();
        localStorage.setItem('aiTutorLaunchDate', launchDate.toString());
    }

    const updateTimer = () => {
        const currentTime = new Date().getTime();
        const gap = launchDate - currentTime;

        // If gap is negative (countdown finished), stop at 0
        if (gap < 0) {
            document.getElementById('days').innerText = "00";
            document.getElementById('hours').innerText = "00";
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            return;
        }

        // Time calculations
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        // Update DOM elements with leading zeros
        document.getElementById('days').innerText = textDay < 10 ? '0' + textDay : textDay;
        document.getElementById('hours').innerText = textHour < 10 ? '0' + textHour : textHour;
        document.getElementById('minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
        document.getElementById('seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
    };

    // Update every second
    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid delay
};

// Mobile Menu Logic - handled by navigation.js

// Modal Logic
const initModal = () => {
    const notifyBtn = document.getElementById('notifyBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');

    // Open Modal
    notifyBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        // Reset form state when reopening
        signupForm.style.display = 'flex';
        successMessage.style.display = 'none';
        signupForm.reset();
    });

    // Close Modal
    const close = () => {
        modalOverlay.classList.remove('active');
    };

    closeModal.addEventListener('click', close);

    // Close when clicking outside the modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            close();
        }
    });

    // Handle Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate API call / processing
        const email = document.getElementById('email').value;
        console.log(`Email submitted: ${email}`);

        // Show success message
        signupForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Auto close after 3 seconds
        setTimeout(() => {
            close();
        }, 3000);
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initModal();
    countdown();
    // Menu toggle is now handled by navigation.js
});
