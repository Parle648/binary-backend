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

  create(userDto) {
    const user = userRepository.create(userDto);

    return user ? true : null;
  }

  getAll() {
    const users = userRepository.getAll();
    return users ? users : null
  }

  getSpecific(id) {
    const user = userRepository.getOne({id});

    return user ? user : null;
  }
}

const userService = new UserService();

export { userService };
