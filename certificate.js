document.addEventListener('DOMContentLoaded', () => {
    // Get certificates from userProfile (earned certificates only - 70%+)
    const userCerts = (typeof userProfile !== 'undefined' && userProfile.getCertificates) 
        ? userProfile.getCertificates() 
        : [];
    
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');
    const certificateSection = document.getElementById('certificate-section');
    
    // Certificate Display Elements
    const certStudentName = document.getElementById('cert-student-name');
    const certCourseName = document.getElementById('cert-course-name');
    const certLevel = document.getElementById('cert-level');
    const certDate = document.getElementById('cert-date');
    const certId = document.getElementById('cert-id');
    const btnBackHistory = document.getElementById('btn-back-history');
    
    let currentDisplayCert = null;
    
    // Initialize history view
    renderHistory();
    
    // Render certificates from history
    function renderHistory() {
        historyList.innerHTML = '';
        
        // Get all certificates from userProfile
        const allCerts = (typeof userProfile !== 'undefined' && userProfile.getCertificates) 
            ? userProfile.getCertificates() 
            : [];
        
        if (allCerts.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #999; padding: 30px;">No certificates earned yet. Score 70% or above on a test to earn a certificate.</p>';
            return;
        }
        
        // Sort by date desc
        const sortedCerts = [...allCerts].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        sortedCerts.forEach((cert, index) => {
            const date = new Date(cert.date).toLocaleDateString();
            const score = cert.score || '70%+';
            const item = document.createElement('div');
            item.className = 'history-item';
            item.style.cssText = 'background: #f9f9f9; padding: 15px; border: 1px solid #eee; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); cursor: pointer; transition: all 0.3s ease;';
            item.onmouseover = function() { this.style.background = '#f0f0f0'; this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; };
            item.onmouseout = function() { this.style.background = '#f9f9f9'; this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'; };
            
            item.innerHTML = `
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 5px 0; color: var(--navy); font-family: var(--font-title); font-size: 16px; font-weight: 600;">${cert.courseTitle || 'Linguistics Course'}</h4>
                    <p style="margin: 0; font-size: 13px; color: #666;">
                        ${cert.studentName || 'Certificate Holder'} • ${date} • Score: ${score}
                    </p>
                </div>
                <button class="btn-action" style="padding: 8px 15px; font-size: 12px; margin-left: 10px; white-space: nowrap;">View Certificate</button>
            `;
            
            item.addEventListener('click', () => viewCertificate(index));
            historyList.appendChild(item);
        });
    }
    
    // View a specific certificate
    window.viewCertificate = function(index) {
        const allCerts = (typeof userProfile !== 'undefined' && userProfile.getCertificates) 
            ? userProfile.getCertificates() 
            : [];
        
        const cert = allCerts[index];
        if (!cert) return;
        
        currentDisplayCert = cert;
        
        // Hide history, show certificate
        historySection.style.display = 'none';
        certificateSection.style.display = 'block';
        
        // Show back button
        if (btnBackHistory) {
            btnBackHistory.style.display = 'flex';
        }
        
        // Populate certificate display
        if (certStudentName) certStudentName.textContent = cert.studentName || 'Certificate Holder';
        if (certCourseName) certCourseName.textContent = cert.courseTitle || 'Linguistics Course';
        if (certLevel) certLevel.textContent = cert.courseLevel || getLevelFromCode(cert.courseTitle);
        
        // Format Date
        const date = new Date(cert.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if (certDate) certDate.textContent = date.toLocaleDateString('en-US', options);
        
        // Use matric or generate ID
        if (certId) certId.textContent = cert.studentMatric || cert.id || 'CERT-' + Date.now();
    };
    
    // Back to history
    window.backToHistory = function() {
        historySection.style.display = 'block';
        certificateSection.style.display = 'none';
        if (btnBackHistory) {
            btnBackHistory.style.display = 'none';
        }
    };
    
    // Set back button handler if exists
    if (btnBackHistory) {
        btnBackHistory.addEventListener('click', backToHistory);
    }
    
    // Download PDF
    window.downloadPDF = function() {
        if (!currentDisplayCert) return;
        
        const element = document.getElementById('certificate-element');
        if (!element) return;
        
        const opt = {
            margin: 0, 
            filename: `Certificate_${currentDisplayCert.courseTitle?.replace(/\s+/g, '_') || 'Linguistics'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };
        html2pdf().set(opt).from(element).save();
    };
    
    function getLevelFromCode(title) {
        if (!title) return 'Beginner';
        if (title.includes('10')) return '100 Level';
        if (title.includes('20')) return '200 Level';
        if (title.includes('30')) return '300 Level';
        if (title.includes('40')) return '400 Level';
        return 'Beginner';
    }
});
