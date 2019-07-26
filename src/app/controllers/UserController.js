import User from '../models/User';

class UserController {
  async index() {
    // const users = ;
    // console.log({ users });
    return User.find().exec();
  }

  show(_, { id }) {
    return User.findById(id);
  }

  store(_, { name, email }) {
    return User.create({ name, email });
  }
}

export default new UserController();