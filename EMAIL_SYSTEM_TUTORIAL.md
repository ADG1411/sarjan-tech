    <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Proposal Request Confirmation</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 0; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
            .content { padding: 30px; }
            .greeting { font-size: 18px; color: #ff6b35; font-weight: bold; margin-bottom: 20px; }
            .message { margin-bottom: 25px; }
            .highlight-box { background-color: #fff5f2; border-left: 4px solid #ff6b35; padding: 20px; margin: 20px 0; border-radius: 5px; }
            .contact-info { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .contact-info h3 { color: #ff6b35; margin-top: 0; }
            .footer { background-color: #333; color: white; padding: 20px; text-align: center; font-size: 14px; }
            .footer a { color: #ff6b35; text-decoration: none; }
            .button { display: inline-block; background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Sarjan Tech</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Web Development & Software Solutions</p>
            </div>
            
            <div class="content">
              <div class="greeting">Hello ${fullName}! 👋</div>
              
              <div class="message">
                <p>Thank you for your interest in our services! We've received your request for an official proposal and are excited to help bring your project to life.</p>
              </div>

              <div class="highlight-box">
                <h3 style="margin-top: 0; color: #ff6b35;">✅ What happens next?</h3>
                <ul style="margin-bottom: 0;">
                  <li><strong>Within 24 hours:</strong> Our team will review your requirements</li>
                  <li><strong>Within 48 hours:</strong> You'll receive a detailed, customized proposal</li>
                  <li><strong>Ready to start:</strong> We can begin your project as soon as you're ready</li>
                </ul>
              </div>

              <div class="contact-info">
                <h3>📞 Need to discuss your project right away?</h3>
                <p><strong>Email:</strong> <a href="mailto:sarjan.tech.1@gmail.com" style="color: #ff6b35;">sarjan.tech.1@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1234567890" style="color: #ff6b35;">+1 (234) 567-890</a></p>
                <p style="margin-bottom: 0;"><strong>Website:</strong> <a href="https://sarjantech.com" style="color: #ff6b35;">www.sarjantech.com</a></p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://sarjantech.com/portfolio" class="button">🎨 View Our Portfolio</a>
              </div>

              <p style="margin-bottom: 0;">Best regards,<br>
              <strong>The Sarjan Tech Team</strong><br>
              <em>Tirth Goyani & Abhi Gabani</em></p>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">© 2025 Sarjan Tech. All rights reserved.</p>
              <p style="margin: 10px 0 0 0;">
                <a href="https://sarjantech.com">Website</a> | 
                <a href="mailto:sarjan.tech.1@gmail.com">Email</a> | 
                <a href="https://linkedin.com/company/sarjantech">LinkedIn</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #ff6b35; color: white; padding: 20px; border-radius: 5px; text-align: center; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
            .lead-info { background: white; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .urgent { color: #dc3545; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚨 NEW PROPOSAL REQUEST</h2>
              <p style="margin: 0;">Sarjan Tech Website</p>
            </div>
            
            <div class="content">
              <p class="urgent">⏰ URGENT: New lead submitted at ${new Date().toLocaleString()}</p>
              
              <div class="lead-info">
                <h3>👤 Contact Information:</h3>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              </div>

              <div class="lead-info">
                <h3>📋 Next Steps:</h3>
                <ul>
                  <li>Review the lead information</li>
                  <li>Prepare a customized proposal</li>
                  <li>Send proposal within 48 hours</li>
                  <li>Follow up with a phone call if needed</li>
                </ul>
              </div>

              <div style="text-align: center; margin: 20px 0;">
                <p><strong>💡 Tip:</strong> Respond quickly to increase conversion chances!</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

<script>
// Complete Frontend Integration for Sarjan Tech Email System
document.addEventListener('DOMContentLoaded', function() {
  
  // Configuration
  const CONFIG = {
    // Change this to your deployed backend URL in production
    API_URL: 'http://localhost:3000', // For local testing
    // API_URL: 'https://your-render-app.onrender.com', // For production
  };

  // Get form elements
  const form = document.querySelector('form'); // Adjust selector if needed
  const submitButton = form.querySelector('button[type="submit"]');
  const fullNameInput = form.querySelector('input[name="fullName"]'); // Adjust name attributes
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');

  // Store original button text
  const originalButtonText = submitButton.textContent;

  // Form submission handler
  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = {
      fullName: fullNameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim()
    };

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    try {
      // Update button to show loading state
      setLoadingState(true);

      // Send data to backend
      const response = await fetch(`${CONFIG.API_URL}/send-proposal-emails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // Success! Show success message
        showMessage('🎉 Success! Check your email for confirmation.', 'success');
        form.reset(); // Clear the form
        
        // Optional: Track success event (Google Analytics, etc.)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'proposal_request_success', {
            event_category: 'engagement',
            event_label: 'email_sent'
          });
        }
      } else {
        // Server returned an error
        showMessage(`Error: ${result.message}`, 'error');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      
      // Network or other error
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        showMessage('Connection error. Please check your internet and try again.', 'error');
      } else {
        showMessage('Something went wrong. Please try again or contact support.', 'error');
      }
    } finally {
      // Always reset loading state
      setLoadingState(false);
    }
  });

  // Loading state management
  function setLoadingState(isLoading) {
    if (isLoading) {
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <span style="display: inline-flex; align-items: center; gap: 8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 11-6.219-8.56"/>
          </svg>
          Sending...
        </span>
      `;
      submitButton.style.opacity = '0.7';
    } else {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      submitButton.style.opacity = '1';
    }
  }

  // Message display function
  function showMessage(message, type = 'info') {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = message;

    // Message styles
    const styles = {
      padding: '15px 20px',
      borderRadius: '8px',
      marginTop: '15px',
      fontSize: '16px',
      fontWeight: '500',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid'
    };

    // Type-specific styles
    if (type === 'success') {
      Object.assign(styles, {
        backgroundColor: '#d4edda',
        color: '#155724',
        borderColor: '#c3e6cb'
      });
    } else if (type === 'error') {
      Object.assign(styles, {
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderColor: '#f5c6cb'
      });
    } else {
      Object.assign(styles, {
        backgroundColor: '#d1ecf1',
        color: '#0c5460',
        borderColor: '#bee5eb'
      });
    }

    // Apply styles
    Object.assign(messageDiv.style, styles);

    // Insert message after form
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        if (messageDiv.parentNode) {
          messageDiv.style.opacity = '0';
          setTimeout(() => {
            if (messageDiv.parentNode) {
              messageDiv.remove();
            }
          }, 300);
        }
      }, 5000);
    }

    // Smooth scroll to message
    setTimeout(() => {
      messageDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  }

  // Optional: Add real-time validation
  emailInput.addEventListener('blur', function() {
    const email = this.value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.style.borderColor = '#dc3545';
      showMessage('Please enter a valid email address.', 'error');
    } else if (email) {
      this.style.borderColor = '#28a745';
      // Remove error message if email is now valid
      const errorMessage = document.querySelector('.form-message.error');
      if (errorMessage && errorMessage.textContent.includes('email')) {
        errorMessage.remove();
      }
    }
  });

  console.log('✅ Sarjan Tech email system initialized');
});
</script>

<!-- Optional: Add CSS animations -->
<style>
.form-message {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Loading spinner animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

button svg {
  animation: spin 1s linear infinite;
}
</style>