let tareas = require('../models/tareaModel');

// Función para obtener todas las tareas
const obtenerTodasLasTareas = (req, res) => {
    try {
      // Devuelve todas las tareas en el array
      res.json(tareas);
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ mensaje: 'Error al obtener las tareas' });
    }
  };
  
  // Función para obtener una tarea por ID
  const obtenerTareaPorId = (req, res) => {
    const { id } = req.params;
    const tarea = tareas.find((t) => t.id === id);
    if (tarea) {
      res.json(tarea);
    } else {
      // Manejo de errores si la tarea no se encuentra
      res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
  };
  
  // Función para crear una nueva tarea
  const crearTarea = (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const nuevaTarea = {
        id: Date.now().toString(),
        nombre,
        descripcion,
        fechaCreacion: new Date(),
        completada: false,
      };
      tareas.push(nuevaTarea);
      res.status(201).json(nuevaTarea); // 201 Created
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ mensaje: 'Error al crear una tarea' });
    }
  };
  
  // Función para actualizar una tarea existente
  const actualizarTarea = (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion, completada } = req.body;
      const tareaIndex = tareas.findIndex((t) => t.id === id);
      if (tareaIndex !== -1) {
        tareas[tareaIndex] = {
          ...tareas[tareaIndex],
          nombre,
          descripcion,
          completada,
        };
        res.json(tareas[tareaIndex]);
      } else {
        // Manejo de errores si la tarea no se encuentra
        res.status(404).json({ mensaje: 'Tarea no encontrada' });
      }
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ mensaje: 'Error al actualizar una tarea' });
    }
  };
  
  // Función para eliminar una tarea
  const eliminarTarea = (req, res) => {
    try {
      const { id } = req.params;
      tareas = tareas.filter((t) => t.id !== id);
      res.json({ mensaje: 'Tarea eliminada' });
    } catch (error) {
      console.log("🚀 ~ file: tareasController.js:76 ~ eliminarTarea ~ error:", error);
      // Manejo de errores
      res.status(500).json({ mensaje: 'Error al eliminar una tarea' });
    }
  };
  
  module.exports = {
    obtenerTodasLasTareas,
    obtenerTareaPorId,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
  };