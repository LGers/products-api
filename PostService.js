import Post from './Post.js';
import fileService from './fileService.js';
class PostService {
  create(post, picture) {
    const fileName = fileService.saveFile(picture)
    return Post.create({ ...post, picture: fileName })
  }

  getAll() {
    return Post.find();
  }

  getOne(id) {
    if (!id) {
      throw new Error('Bad request. Id required');
    }
    return Post.findById(id);
  }

  update(post) {
    if (!post._id) {
      throw new Error('Bad request. Id required');
    }
    return Post.findByIdAndUpdate(post._id, post, { new: true });
  }

  delete(id) {
    if (!id) {
      throw new Error('Bad request. Id required');
    }
    return Post.findByIdAndDelete(id);
  }
}

export default new PostService();
