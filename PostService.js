import Post from './Post.js';
import fileService from './fileService.js';
class PostService {
  create(post, picture) {
    // const { author, title, content, picture } = req.body;
    // return Post.create(post);
    const fileName = fileService.saveFile(picture)
    return Post.create({ ...post, picture: fileName })
    // const createdPost = Post.create(post);
    // return createdPost
    // res.status(200).json(createdPost);
  }

  async getAll() {
    // try {
    //   const posts = await Post.find();
    return Post.find();
    // } catch (e) {
    //   res.status(500).json(e);
    // }
  }

  async getOne(id) {
    // try {
    //   const { id } = req.params;
    if (!id) {
      throw new Error('Bad request. Id required');
      // return res.status(400).json({ message: 'Bad request. Id required' });
    }
    const post = await Post.findById(id);
    return post;
    // } catch (e) {
    //   res.status(500).json(e);
    // }
  }

  async update(post) {
    // try {
    //   const post = req.body;
    if (!post._id) {
      throw new Error('Bad request. Id required');
      // return res.status(400).json({ message: 'Bad request. Id required' });
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    console.log(updatedPost)
    return updatedPost;
    // return res.status(204).json(updatedPost);
    // } catch (e) {
    //   res.status(500).json(e);
    // }
  }

  async delete(id) {
    // try {
    //   const { id } = req.params;
    if (!id) {
      throw new Error('Bad request. Id required');
      // return res.status(400).json({ message: 'Bad request. Id required' });
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
    // return res.status(204).json(post);
    // } catch (e) {
    //   res.status(500).json(e);
    // }
  }
}

export default new PostService();