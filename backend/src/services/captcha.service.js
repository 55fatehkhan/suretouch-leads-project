import fetch from 'node-fetch';

export const verifyCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: 'POST' }
  );

  const data = await response.json();
  return data.success === true;
};
