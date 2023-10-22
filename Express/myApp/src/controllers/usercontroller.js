import { save } from "../services/userservice.js";

async function saveUserController(req, res) {
  const { name, place, mobileNumber } = req.body;

  try {
    return await save(name, mobileNumber, place);
  } catch (error) {
    console.error(error);
  }
}

export {saveUserController};
