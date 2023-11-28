import User from "./users.model.js";

export class UserService {
  static async findAll() {
    return await User.findAll({
      where: {
        status: "available",
      },
    });
  }

  static async findUser(id) {
    return await User.findUser({
      where: {
        id,
        status: "available",
      },
    });
  }

  static async update(user, data) {
    return await user.update(data);
  }

  static async create(data) {
    return await User.create(data);
  }

  static async delete(user) {
    return await user.update({ status: "disabled" });
  }
}
