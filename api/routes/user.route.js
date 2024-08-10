import express from 'express';
import {
  deleteUser,
  updateUser,
  signout,
  getUsers,
  getUser,
} from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();

router.put('/update/:userId', verifyUser, updateUser);
router.delete('/delete/:userId', verifyUser, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyUser, getUsers);
router.get('/:userId', getUser);

export default router;
