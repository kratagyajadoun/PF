export const config = {
  email: {
    user: import.meta.env.VITE_EMAIL_USER || 'test@gmail.com',
    pass: import.meta.env.VITE_EMAIL_PASS || 'abc123@',
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    userTemplateId: import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
  social: {
    github: 'https://github.com/kratagyajadoun/',
    linkedin: 'https://www.linkedin.com/in/kratagya07/',
    leetcode: 'https://leetcode.com/u/lurker07/',
  },
  // Add other public config here
};
