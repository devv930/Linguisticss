document.addEventListener('DOMContentLoaded', () => {
    // Get certificates from userProfile (earned certificates only - 70%+)
    const userCerts = (typeof userProfile !== 'undefined' && userProfile.getCertificates) 
        ? userProfile.getCertificates() 
        : [];
    
    console.log('Certificate page loaded. Existing certificates:', userCerts);
    
    const inputSection = document.getElementById('input-section');
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
    let pendingCertificateData = null;
    
    // Check for pending certificate data from localStorage
    const certificateDataStr = localStorage.getItem('certificateData');
    console.log('Pending certificate data from localStorage:', certificateDataStr);
    
    if (certificateDataStr) {
        try {
            pendingCertificateData = JSON.parse(certificateDataStr);
            console.log('Parsed pending certificate data:', pendingCertificateData);
        } catch (e) {
            console.error('Failed to parse certificate data:', e);
        }
    }
    
    // If there's pending certificate data, show the input form
    if (pendingCertificateData && pendingCertificateData.passed) {
        console.log('Showing certificate claim form');
        showCertificateForm(pendingCertificateData);
    } else {
        // Otherwise, show history view
        console.log('Showing certificate history');
        renderHistory();
    }
    
    // Show certificate claim form
    function showCertificateForm(certData) {
        historySection.style.display = 'none';
        inputSection.style.display = 'block';
        certificateSection.style.display = 'none';
        
        // Clear the input section and add form
        inputSection.innerHTML = `
            <div class="input-card">
                <h2 style="color: #2c3e50; margin-bottom: 10px;">🎉 Certificate Earned!</h2>
                <p style="color: #666; margin-bottom: 30px;">You scored ${certData.score}% on ${certData.courseTitle || 'this course'}. Fill in your details to claim your certificate.</p>
                
                <form id="certificate-claim-form" style="max-width: 500px; margin: 0 auto;">
                    <div style="margin-bottom: 20px;">
                        <label for="student-name" style="display: block; margin-bottom: 8px; color: #333; font-weight: 500;">Full Name *</label>
                        <input type="text" id="student-name" name="student-name" required 
                            placeholder="Enter your full name" 
                            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box;">
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <label for="student-matric" name="student-matric" style="display: block; margin-bottom: 8px; color: #333; font-weight: 500;">Matric Number *</label>
                        <input type="text" id="student-matric" name="student-matric" required 
                            placeholder="Enter your matric number" 
                            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; box-sizing: border-box;">
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button type="submit" style="flex: 1; padding: 12px; background-color: #28a745; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background-color 0.3s;">Claim Certificate</button>
                        <button type="button" onclick="discardCertificate()" style="flex: 1; padding: 12px; background-color: #6c757d; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background-color 0.3s;">Skip for Now</button>
                    </div>
                </form>
                
                <div id="form-message" style="margin-top: 15px; padding: 12px; border-radius: 6px; display: none;"></div>
            </div>
        `;
        
        // Add event listener to form
        const form = document.getElementById('certificate-claim-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                claimCertificate(certData);
            });
        }
    }
    
    // Claim certificate with student details
    function claimCertificate(certData) {
        const studentName = document.getElementById('student-name').value.trim();
        const studentMatric = document.getElementById('student-matric').value.trim();
        const messageEl = document.getElementById('form-message');
        
        console.log('Claiming certificate with name:', studentName, 'matric:', studentMatric);
        
        if (!studentName || !studentMatric) {
            if (messageEl) {
                messageEl.style.display = 'block';
                messageEl.style.background = '#f8d7da';
                messageEl.style.color = '#721c24';
                messageEl.innerHTML = '❌ Please fill in all fields.';
            }
            return;
        }
        
        // Create complete certificate object
        const completeCert = {
            ...certData,
            studentName: studentName,
            studentMatric: studentMatric,
            id: 'CERT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            claimedDate: new Date().toISOString()
        };
        
        console.log('Complete certificate object:', completeCert);
        
        // Add to userProfile
        if (typeof userProfile !== 'undefined' && userProfile.addCertificate) {
            try {
                console.log('Adding certificate to userProfile');
                userProfile.addCertificate(completeCert);
                console.log('Certificate added successfully');
                
                // Clear the pending certificate data from localStorage
                localStorage.removeItem('certificateData');
                
                // Show success message
                if (messageEl) {
                    messageEl.style.display = 'block';
                    messageEl.style.background = '#d4edda';
                    messageEl.style.color = '#155724';
                    messageEl.innerHTML = '✅ Certificate claimed successfully! Redirecting...';
                }
                
                // Show certificate after 2 seconds
                setTimeout(() => {
                    currentDisplayCert = completeCert;
                    // Hide form, show certificate display with back button to history
                    inputSection.style.display = 'none';
                    historySection.style.display = 'none';
                    certificateSection.style.display = 'block';
                    
                    // Show back button to view history
                    if (btnBackHistory) {
                        btnBackHistory.style.display = 'flex';
                    }
                    
                    // Populate certificate display
                    if (certStudentName) certStudentName.textContent = completeCert.studentName || 'Certificate Holder';
                    if (certCourseName) certCourseName.textContent = completeCert.courseTitle || 'Linguistics Course';
                    if (certLevel) certLevel.textContent = completeCert.courseLevel || getLevelFromCode(completeCert.courseTitle);
                    
                    // Format Date
                    const date = new Date(completeCert.date);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    if (certDate) certDate.textContent = date.toLocaleDateString('en-US', options);
                    
                    // Use matric or generate ID
                    if (certId) certId.textContent = completeCert.studentMatric || completeCert.id || 'CERT-' + Date.now();
                }, 2000);
                
            } catch (error) {
                console.error('Error claiming certificate:', error);
                if (messageEl) {
                    messageEl.style.display = 'block';
                    messageEl.style.background = '#f8d7da';
                    messageEl.style.color = '#721c24';
                    messageEl.innerHTML = '❌ Error saving certificate. Please try again.';
                }
            }
        } else {
            console.error('userProfile not available or addCertificate method not found');
        }
    }
    
    // Discard pending certificate
    window.discardCertificate = function() {
        localStorage.removeItem('certificateData');
        historySection.style.display = 'block';
        inputSection.style.display = 'none';
        renderHistory();
    };
    
    // Show certificate display
    function showCertificateDisplay(cert) {
        historySection.style.display = 'none';
        inputSection.style.display = 'none';
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
    }
    
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
        inputSection.style.display = 'none';
        if (btnBackHistory) {
            btnBackHistory.style.display = 'none';
        }
        // Refresh the history list to show any newly added certificates
        renderHistory();
    };
    
    // Alias for HTML onclick handler
    window.showHistory = window.backToHistory;
    
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
