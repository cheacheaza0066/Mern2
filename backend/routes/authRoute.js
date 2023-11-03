import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'mern-stack-crud@1234';
const PASSWORD = 'admin1234';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (password === PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1d' });
    return res.send({ token, username });
  } else {
    res.status(400).json({ error: "Password Wrong!!" }); // Corrected the response here
  }
});

export { router as authRoutes };
