import User from '../models/User';

class UserController {
  async index() {
    return User.find().exec();
  }

  show({ id }) {
    return User.findById(id);
  }

  store({ name, email }) {
    return User.create({ name, email });
  }
}

export default new UserController();