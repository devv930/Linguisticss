document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if user has passed a test or has history
    let certData = JSON.parse(localStorage.getItem('certificateData'));
    const history = JSON.parse(localStorage.getItem('userCertificates')) || [];
    let currentDisplayCert = certData;
    
    // Elements
    const inputSection = document.getElementById('input-section');
    const certificateSection = document.getElementById('certificate-section');
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    
    const studentNameInput = document.getElementById('student-name');
    const studentMatricInput = document.getElementById('matric-number');
    
    // Certificate Elements
    const certStudentName = document.getElementById('cert-student-name');
    const certCourseName = document.getElementById('cert-course-name');
    const certLevel = document.getElementById('cert-level');
    const certDate = document.getElementById('cert-date');
    const certId = document.getElementById('cert-id');
    const btnBackHistory = document.getElementById('btn-back-history');

    // Check if name and matric are already stored for pending cert
    // Only auto-display if coming from a test with pending data
    if (certData && certData.passed && certData.studentName && certData.studentMatric) {
        generateCertificate(certData.studentName, certData.studentMatric, certData, false);
    }
    // Otherwise, show the input form (user can generate new cert or view history)

    // Make functions available globally for onclick handlers
    window.handleGenerate = function() {
        const name = studentNameInput.value.trim();
        const matric = studentMatricInput.value.trim();
        
        if (name && matric) {
            // Create certificate data (use existing certData or create new)
            const newCertData = certData || {
                courseTitle: 'Linguistics Exam Preparation Course',
                courseLevel: '100-200 Level',
                date: new Date().toISOString(),
                passed: true
            };
            
            newCertData.studentName = name;
            newCertData.studentMatric = matric;
            newCertData.id = 'CERT-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
            newCertData.date = newCertData.date || new Date().toISOString();
            
            localStorage.setItem('certificateData', JSON.stringify(newCertData));
            
            // Save to history
            addToHistory(newCertData);
            
            generateCertificate(name, matric, newCertData, false);
        } else {
            alert('Please enter both your Full Name and Matric Number.');
        }
    };

    window.showHistory = function() {
        inputSection.style.display = 'none';
        certificateSection.style.display = 'none';
        historySection.style.display = 'block';
        renderHistory();
    };

    window.hideHistory = function() {
        historySection.style.display = 'none';
        certificateSection.style.display = 'none';
        inputSection.style.display = 'block';
        
        // Clear form for new certificate
        if (studentNameInput) studentNameInput.value = '';
        if (studentMatricInput) studentMatricInput.value = '';
    };

    function addToHistory(data) {
        const history = JSON.parse(localStorage.getItem('userCertificates')) || [];
        // Check for duplicates (same course, date, matric)
        const exists = history.some(h => 
            h.courseTitle === data.courseTitle && 
            h.date === data.date && 
            h.studentMatric === data.studentMatric
        );
        
        if (!exists) {
            history.push(data);
            localStorage.setItem('userCertificates', JSON.stringify(history));
        }
    }

    function renderHistory() {
        const history = JSON.parse(localStorage.getItem('userCertificates')) || [];
        historyList.innerHTML = '';
        
        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #666;">No certificates found.</p>';
            return;
        }

        // Sort by date desc
        history.sort((a, b) => new Date(b.date) - new Date(a.date));

        history.forEach(cert => {
            const date = new Date(cert.date).toLocaleDateString();
            const item = document.createElement('div');
            item.className = 'history-item';
            item.style.cssText = 'background: #f9f9f9; padding: 15px; border: 1px solid #eee; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);';
            item.innerHTML = `
                <div>
                    <h4 style="margin: 0 0 5px 0; color: var(--navy); font-family: var(--font-title); font-size: 16px;">${cert.courseTitle}</h4>
                    <p style="margin: 0; font-size: 13px; color: #666;">${cert.studentName} • ${date}</p>
                </div>
                <button class="btn-action" style="padding: 8px 15px; font-size: 12px;" onclick="viewCertificate('${cert.id || ''}')">View</button>
            `;
            // Note: older certs might not have ID if added before this update, but addToHistory adds it.
            // We should ensure ID is present or handle it.
            
            historyList.appendChild(item);
        });
    }

    window.viewCertificate = function(id) {
        const history = JSON.parse(localStorage.getItem('userCertificates')) || [];
        // If id is empty (legacy), we might have issues, but addToHistory adds it.
        // If manually viewing pending cert?
        let cert;
        if (id) {
            cert = history.find(c => c.id === id);
        }
        
        if (cert) {
            generateCertificate(cert.studentName, cert.studentMatric, cert, true);
        }
    };

    window.downloadPDF = function() {
        const element = document.getElementById('certificate-element');
        const opt = {
            margin: 0, 
            filename: `Certificate_${currentDisplayCert.courseTitle.replace(/\s+/g, '_')}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };
        html2pdf().set(opt).from(element).save();
    };

    function generateCertificate(name, matric, data, isHistoryView = false) {
        currentDisplayCert = data; // Update context for download
        
        // Hide input/history, show certificate
        inputSection.style.display = 'none';
        historySection.style.display = 'none';
        certificateSection.style.display = 'block';

        // Show/Hide "Back to History" button
        if (btnBackHistory) {
            btnBackHistory.style.display = isHistoryView ? 'flex' : 'none';
        }

        // Populate Certificate Data
        certStudentName.textContent = name;
        certCourseName.textContent = data.courseTitle;
        certLevel.textContent = data.courseLevel || getLevelFromCode(data.courseTitle);
        
        // Format Date
        const date = new Date(data.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        certDate.textContent = date.toLocaleDateString('en-US', options);

        // Use Matric Number as ID
        certId.textContent = matric;
    }

    function getLevelFromCode(title) {
        if (title.includes('10')) return '100 Level';
        if (title.includes('20')) return '200 Level';
        if (title.includes('30')) return '300 Level';
        if (title.includes('40')) return '400 Level';
        return 'Beginner';
    }
});
