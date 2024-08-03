const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your_jwt_secret'; // Thay bằng secret của bạn

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // Thay bằng URL của ứng dụng React của bạn
  credentials: true
}));

mongoose.connect('mongodb+srv://beeteam:Eifv717uVRKncVr4@cluster0.krrlw8f.mongodb.net/BeeMoney?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Tạo schema và model cho người dùng
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Route đăng ký
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.status(201).send('User registered');
});

// Route đăng nhập
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).send('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.send('Logged in');
});

// Route bảo vệ (yêu cầu xác thực)
app.get('/protected', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send('Not authenticated');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.send(`Welcome user ${decoded.userId}`);
  } catch (error) {
    res.status(401).send('Invalid token');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
