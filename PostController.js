import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      // const { author, title, content, picture } = req.body;
      console.log(req.files)
      const post = await PostService.create(req.body, req.files.picture);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll (req, res) {
    try {
      const posts = await PostService.getAll();
      res.status(200).json(posts);
      // return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne (req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update (req, res) {
    try {
      // const post = req.body;
      // if (!req.body._id) {
      //   return res.status(400).json({ message: 'Bad request. Id required' });
      // }
      // const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      const updatedPost = await PostService.update(req.body);
      return res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete (req, res) {
    try {
      // const { id } = req.params;
      // if (!id) {
      //   return res.status(400).json({ message: 'Bad request. Id required' });
      // }
      // const post = await Post.findByIdAndDelete(id);
      const post = await PostService.delete(req.params.id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController;
