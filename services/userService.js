import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  searchByEmail(email) {
    const isExist = userRepository.getUserByEmail(email);
    if (isExist) {
      return false
    }
    return true
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
