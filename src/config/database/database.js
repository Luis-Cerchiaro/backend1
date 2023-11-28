import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroments.js";

export const sequelize = new Sequelize(envs.DB_URL, {
  logging: false,
});

export const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successful connection!!!... 😎");
  } catch (error) {
    console.log(error);
  }
};

export const syncUp = async () => {
  try {
    await sequelize.sync();
    console.log("Synced ok!... 👌");
  } catch (error) {
    console.error(error);
  }
};
