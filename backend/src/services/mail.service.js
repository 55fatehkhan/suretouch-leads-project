import nodemailer from 'nodemailer';

export const sendMail = async ({name, email, phone, company, service, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  });
};
