const morgan = require("morgan");
const Employee = require("../models/Employee");

const hello = (req, res) => res.send("hello desde el controlador");

const employeesCtrl = {};
employeesCtrl.getEmproyees = async (req, res) => {
  // res.send("OBTENIENDO EMPLEADOS");
  const employees = await Employee.find(); //leemos la base de datos para traer los empleados
  res.json(employees);
};
employeesCtrl.createEmployee = async (req, res) => {
  // console.log(req.body);
  const newEmployee = new Employee(req.body); //lo crea un objeto con id generado por mongo
  console.log(newEmployee);
  //guardarlo en mongo
  await newEmployee.save();

  res.send({ message: "Empleado Creado" });
};
employeesCtrl.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: "Empleyee updated" });
};
employeesCtrl.getEmployee = async (req, res) => {
  console.log(req.params);
  // Employee.findOne({ _id: req.params.id });
  //o tambien
  const employee = await Employee.findById(req.params.id);
  res.send("Obteniendo empleado" + " " + employee);
};
employeesCtrl.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  res.send("eliminado empleado" + " Cn id: " + employee);
  res.json({ status: "Employe deleted" });
};
module.exports = employeesCtrl;
