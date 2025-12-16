import { Router } from 'express';
import contactRoutes from './contact.routes.js';

const router = Router();

router.use('/contact', contactRoutes);

export default router;
