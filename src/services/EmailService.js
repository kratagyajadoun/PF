import emailjs from '@emailjs/browser';
import { config } from '../config';

class EmailService {
  /**
   * Sends an enquiry form submission using EmailJS.
   * @param {Object} data - Form data (name, email, subject, message)
   * @returns {Promise<boolean>} - Success status
   */
  async sendEnquiry(data) {
    // Check if configuration is missing
    const { serviceId, templateId, userTemplateId, publicKey } = config.email;
    
    if (!serviceId || !templateId || !publicKey) {
      console.warn('[EmailService] EmailJS configuration missing. Falling back to console log for demo.');
      return this._mockSend(data);
    }

    try {
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        subject: data.subject,
        message: data.message,
        query: data.message, // New variable for template use
        to_email: config.email.user,
      };

      // Create promises for both emails
      const emailPromises = [
        emailjs.send(serviceId, templateId, templateParams, publicKey)
      ];

      // If a second template is provided for the user, send that too
      if (userTemplateId) {
        emailPromises.push(emailjs.send(serviceId, userTemplateId, templateParams, publicKey));
      }

      const results = await Promise.all(emailPromises);

      if (results.every(res => res.status === 200)) {
        console.log('[EmailService] All emails sent successfully');
        return true;
      }
      throw new Error('One or more emails failed to send');
    } catch (error) {
      console.error('[EmailService] EmailJS Error:', error);
      throw error;
    }
  }

  /**
   * Fallback mock for demonstration if keys aren't set yet.
   */
  async _mockSend(data) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('--- MOCK EMAIL SENT ---', data);
    return true;
  }
}

export const emailService = new EmailService();
