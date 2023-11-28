import { UserService } from "./users.service.js";

export const findAllUsers = async (req, res) => {
  try {
    const users = await UserService.findAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Things went south! 😵"
    });
  }
};
export const createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await UserService.create({ name, email, password, role });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Things went south! 😵"
    });
  }
};
export const findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.findUser(id);

    if (!user){
      return res.status(404).json({
        status: 'error',
        message: 'user not found'
      })
    }

    return res.status(200).json(user)

  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Things went south! 😵"
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Things went south! 😵"
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Things went south! 😵"
    });
  }
};