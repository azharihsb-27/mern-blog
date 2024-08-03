import express from 'express';
import {
  deleteUser,
  updateUser,
  signout,
} from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.put('/update/:userId', verifyUser, updateUser);
router.delete('/delete/:userId', verifyUser, deleteUser);
router.post('/signout', signout);

export default router;
