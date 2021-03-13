const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    manager_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
  )

module.exports = Employee;
