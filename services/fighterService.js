import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  search(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  create(fighterDto) {
    const fighter = fighterRepository.create(fighterDto);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  getAll() {
    const fighters = fighterRepository.getAll();
    if (!fighters) {
      return null;
    }
    return fighters;
  }
}
 
const fighterService = new FighterService();

export { fighterService };
