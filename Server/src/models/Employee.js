const { Schema, model } = require("mongoose");
//usamos los esquemás para interactruar con el
//usamos el validador y que nos guarde cuando lo creamos o actualizado por ultima vez

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false } //´para añadir tiempo de creación y el otro para que no añada subguiones v
);

module.exports = model("Employee", employeeSchema);
