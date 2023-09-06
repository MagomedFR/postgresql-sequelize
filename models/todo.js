import Sequelize from "sequelize";
import { sequelize } from "../db.js";

const Todo = sequelize.define("todo", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Todo.sync().then(() => {
  console.log("...created");
});

export default Todo;