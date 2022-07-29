import Post from './Post.js';
import fileService from './fileService.js';
class PostService {
  create(post, picture) {
    const fileName = fileService.saveFile(picture)
    return Post.create({ ...post, picture: fileName })
  }

  async getAll() {
    return Post.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Bad request. Id required');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('Bad request. Id required');
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Bad request. Id required');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
