import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('Hello from User');
});

export default userRouter;