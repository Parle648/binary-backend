import { FIGHTER } from "../models/fighter.js";
import { fighterService } from "../services/fighterService.js";

const createFighterValid = (req, res, next) => {
  try {
    // TODO: Implement validatior for FIGHTER entity during creation
    const {name, power, defense} = (req.body);
    const isNameExist = fighterService.search({name: name})
    let error = false;
  
    if (req.body.length < 3) {
      error = true;
      res.status(400).json({status: 400, message: 'all fields is require', error})
    }
  
    if (isNameExist) {
      error = true;
      res.status(400).json({status: 400, message: 'this fighter is already exist', error})
    }

    if (power < 1 || power > 100) {
      error = true
      res.status(400).json({status: 400, message: 'power can be from 1 to 100', error: true})
    }
  
    if (typeof power === Number || typeof defense === Number) {
      error = true
      res.status(400).json({status: 400, message: 'power and defense have to be a number', error: true})
    }
  
    if (power < 1 || power > 100) {
      error = true
      res.status(400).json({status: 400, message: 'power can be from 1 to 100', error: true})
    }
  
    if (defense < 1 || defense > 100) {
      error = true
      res.status(400).json({status: 400, message: 'defense can be from 1 to 100', error: true})
    }
  
    if (!error) {
      next()
    }
  } catch (error) {
    throw error
  }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
