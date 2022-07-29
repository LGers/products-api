import express from 'express';
import mongoose from 'mongoose';
import router from "./router.js"
import Post from './Post.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.u9gwzwv.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use('/api', router);
// app.post('/', async (req, res) => {
//
//   try {
//     const { author, title, content, picture } = req.body;
//     const post = await Post.create({ author, title, content, picture });
//     res.status(200).json(post);
//   } catch (e) {
//     res.status(500).json(e);
//   }
// });

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
// app.listen(PORT, () => {
//   return console.log('SERVER STARTED ON PORT ' + PORT);
// });