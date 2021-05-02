import express from 'express';

const router = express.Router();

router.get('/api/users/signup', (req, res) => {
    res.send('Signup!');
});

export { router as signupRouter };