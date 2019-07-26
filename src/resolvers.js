import UserController from './app/controllers/UserController';

export default {
  Query: {
    users: UserController.index,
    user: UserController.show,
  },

  Mutation: {
    createUser: UserController.store
  }
}