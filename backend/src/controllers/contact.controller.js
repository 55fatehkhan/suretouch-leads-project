import { verifyCaptcha } from '../services/captcha.service.js';
import { sendMail } from '../services/mail.service.js';

export const submitContactForm = async (req, res) => {
  try {
    const {name, email, phone, company, service, message } = req.body;
    
    if (!name || !email || !message || !phone || !company || !service) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    /*const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return res.status(400).json({ message: 'Invalid captcha' });
    }*/

    await sendMail({name, email, phone, company, service, message });

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.log(err);
    
    res.status(500).json({ message: err.message });
  }
};
