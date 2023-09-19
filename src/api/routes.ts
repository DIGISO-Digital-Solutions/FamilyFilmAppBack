import { NextFunction, Router } from 'express';
import authRouter from '../routers/auth.router';
import userRouter from '../routers/user.router';
import movieRouter from '../routers/movie.router';
import groupRouter from '../routers/group.router';
import statusRouter from '../routers/status.router';

const router = Router();

router.use('/', statusRouter)

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.use('/movies', movieRouter);
router.use('/groups', groupRouter);

export default router;