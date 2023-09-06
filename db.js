import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "rootroot", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));