const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../index"); // Importa tu aplicación Express

const { expect } = chai;
chai.use(chaiHttp);

describe("Pruebas para el controlador de tareas", () => {
  beforeEach(() => {});

  it("Debería crear una nueva tarea", async () => {
    const nuevaTarea = {
      nombre: "Tarea de prueba",
      descripcion: "Esta es una tarea de prueba",
    };

    const res = await chai
      .request(app) 
      .post("/api/tareas") 
      .send(nuevaTarea);

    expect(res).to.have.status(201); // 201 Created
    expect(res.body).to.include({ nombre: "Tarea de prueba" });
  });

  it("Debería obtener todas las tareas", async () => {
    const res = await chai
      .request(app) 
      .get("/api/tareas"); 

    expect(res).to.have.status(200); // 200 OK
    expect(res.body).to.be.an("array");
  });

  it("Debería obtener una tarea por ID", async () => {
    const nuevaTarea = {
      nombre: "Tarea de prueba",
      descripcion: "Esta es una tarea de prueba",
    };

    const crearRes = await chai
      .request(app) 
      .post("/api/tareas") 
      .send(nuevaTarea);
    const tareaCreada = crearRes.body;

    const obtenerRes = await chai
      .request(app) 
      .get(`/api/tareas/${tareaCreada.id}`); 

    expect(obtenerRes).to.have.status(200); // 200 OK
    expect(obtenerRes.body).to.include({ id: tareaCreada.id });
  });

  it("Debería actualizar una tarea", async () => {
    const nuevaTarea = {
      nombre: "Tarea de prueba",
      descripcion: "Esta es una tarea de prueba",
    };

    const crearRes = await chai
      .request(app) 
      .post("/api/tareas") 
      .send(nuevaTarea);
    const tareaCreada = crearRes.body;

    const actualizarRes = await chai
      .request(app) 
      .put(`/api/tareas/${tareaCreada.id}`) 
      .send({
        nombre: "Tarea actualizada",
        descripcion: "Descripción actualizada",
      });

    expect(actualizarRes).to.have.status(200); // 200 OK
    expect(actualizarRes.body).to.include({
      nombre: "Tarea actualizada",
      descripcion: "Descripción actualizada",
    });
  });

  it("Debería eliminar una tarea", async () => {
    const nuevaTarea = {
      nombre: "Tarea de prueba",
      descripcion: "Esta es una tarea de prueba",
    };

    const crearRes = await chai
      .request(app) 
      .post("/api/tareas") 
      .send(nuevaTarea);
    const tareaCreada = crearRes.body;

    const eliminarRes = await chai
      .request(app) 
      .delete(`/api/tareas/${tareaCreada.id}`); 

    expect(eliminarRes).to.have.status(200); // 200 OK
    expect(eliminarRes.body).to.include({ mensaje: "Tarea eliminada" });
  });
});
