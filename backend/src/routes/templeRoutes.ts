import express from 'express';
import {
  getTemples,
  getTemple,
  createTemple,
  updateTemple,
  deleteTemple,
  addToFavorites,
  removeFromFavorites
} from '../controllers/templeController.js';
import { protect, authorize } from '../middleware/auth.js';
import reviewRoutes from './reviewRoutes.js';

const router = express.Router();

// Re-route into review routes
router.use('/:id/reviews', reviewRoutes);

router.route('/')
  .get(getTemples)
  .post(protect, authorize('admin'), createTemple);

router.route('/:id')
  .get(getTemple)
  .put(protect, authorize('admin'), updateTemple)
  .delete(protect, authorize('admin'), deleteTemple);

router.route('/:id/favorite')
  .post(protect, addToFavorites)
  .delete(protect, removeFromFavorites);

export default router;
