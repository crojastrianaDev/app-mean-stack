const { Router } = require("express");

const router = Router();
const employeesCtrl = require("../controllers/employees.controllers");

//crud
//create -  read - update - delete
// router.get("/hello", (req, res) => res.send("Hola desde node y express"));
router.get("/hello", employeesCtrl.deleteEmployee);

//primerro llegara api/employees
router.get("/", employeesCtrl.getEmproyees);
router.post("/", employeesCtrl.createEmployee);
router.get("/:id", employeesCtrl.getEmployee);
router.put("/:id", employeesCtrl.updateEmployee);
router.delete("/:id", employeesCtrl.deleteEmployee);

//ya podemos crear rutas para que el servidor nos responda
module.exports = router;
