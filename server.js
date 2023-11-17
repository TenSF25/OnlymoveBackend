import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

//Models
import { TaskList } from "./Models/taskList.js";
import { Outfit } from "./Models/outfits.js";
import { MethodStudy } from "./Models/methodStudy.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors("*"));

mongoose.connect(process.env.DB);

//Tareas
function Tasks() {
  app.post("/task", async (req, res) => {
    try {
      const { title, statusTask, date, description } = req.body;
      await TaskList.create({
        title: title,
        statusTask: statusTask,
        date: date,
        description: description,
      });
      res.status(201).json({ mensaje: "Nueva tarea pendiente creada" });
    } catch {
      res
        .status(404)
        .json({ mensaje: "Ha habido un error, al crear la tarea" });
    }
  });

  app.get("/task", async (req, res) => {
    try {
      const tasks = await TaskList.find();
      res.status(200).json(tasks);
    } catch {
      res
        .status(404)
        .json({ mensaje: "Ha habido un error, al recolectar las tareas" });
    }
  });

  app.delete("/task/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await TaskList.findByIdAndDelete(id);
      res
        .status(200)
        .json({ mensaje: "Se ha eliminado la tarea correctamente!" });
    } catch {
      res.status(404).json({ mensaje: "No se ha podido eliminado la tarea!" });
    }
  });

  app.put("/task/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { title, statusTask, date, description } = req.body;

      await TaskList.findByIdAndUpdate(id, {
        title: title,
        statusTask: statusTask,
        date: date,
        description: description,
      });
      res
        .status(200)
        .json({ mensaje: "Se ha editado la tarea correctamente!" });
    } catch {
      res.status(404).json({ mensaje: "No se ha podido editar la tarea!" });
    }
  });
}
Tasks();

//Outfits
function Outfits() {
  app.post("/outfit", async (req, res) => {
    try {
      const { image_outfit, name, typeClothe, clean } = req.body;
      await Outfit.create({
        image_outfit: image_outfit,
        name: name,
        typeClothe: typeClothe,
        clean: clean,
      });
      res.status(201).json({ mensaje: "Se ha guardado la ropa" });
    } catch {
      res
        .status(404)
        .json({ mensaje: "Ha habido un error al intentar guardar la ropa!" });
    }
  });

  app.get("/outfit", async (req, res) => {
    try {
      const outfit = await Outfit.find();
      res.status(200).json(outfit);
    } catch (error) {
      res
        .status(404)
        .json({ mensaje: "Ha habido un error al obtener la ropa!" });
    }
  });

  app.delete("/outfit/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Outfit.findByIdAndDelete(id);
      res.status(200).json({ mensaje: "Se ha eliminado del inventario!" });
    } catch {
      res.status(404).json({ mensaje: "Ha habido un error!" });
    }
  });

  app.put("/outfit/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { image_outfit, name, typeClothe, clean } = req.body;

      await Outfit.findByIdAndUpdate(id, {
        image_outfit: image_outfit,
        name: name,
        typeClothe: typeClothe,
        clean: clean,
      });
      res.status(200).json({ mensaje: "Se ha actualizado el inventario!" });
    } catch {
      res.status(200).json({ mensaje: "Ha habido un error!" });
    }
  });
}
Outfits();

function MethodsStudy() {
  app.post("/method", async (req, res) => {
    try {
      const { subject, theme, description, image_study } = req.body;
      await MethodStudy.create({
        subject: subject,
        theme: theme,
        description: description,
        image_study: image_study,
      });
      res.status(201).json({ mensaje: "Se ha creado una nueva carta" });
    } catch {
      res.status(404).json({ mensaje: "Ha habido un error!" });
    }
  });

  app.get("/method", async (req, res) => {
    try {
      const methods = await MethodStudy.find();
      res.status(200).json(methods);
    } catch (error) {
      res.status(404).json({ mensaje: "Ha habido un error!" });
    }
  });

  app.delete("/method/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await MethodStudy.findByIdAndDelete(id);
      res.status(200).json({ mensaje: "Se ha eliminado correctamente!" });
    } catch {
      res.status(404).json({ mensaje: "Ha habido un error!" });
    }
  });

  app.put("/method/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { subject, theme, description, image_study } = req.body;

      await MethodStudy.findByIdAndUpdate(id, {
        subject: subject,
        theme: theme,
        description: description,
        image_study: image_study,
      });

      res.status(200).json({ mensaje: "Se ha modificado correctamente!" });
    } catch (error) {
      res.status(404).json({ mensaje: "Ha habido un error!" });
    }
  });
}
MethodsStudy();

app.listen(PORT, () => {
  console.log(`Aplicación escuchando en https://localhost:${PORT}`);
});
