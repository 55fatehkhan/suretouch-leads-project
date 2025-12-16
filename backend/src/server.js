import app from './app.js';

const PORT = process.env.PORT || 3000;

// Commented fir vercel
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Exported fir vercel
export default app;