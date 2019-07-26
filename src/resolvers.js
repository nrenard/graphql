import UserController from './app/controllers/UserController';

export default {
  users: UserController.index,
  user: UserController.show,
  createUser: UserController.store,
}