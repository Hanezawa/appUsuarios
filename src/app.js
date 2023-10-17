import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// ROUTES
import personasRoutes from "./routes/personas.route";

const app = express();

// PUERTO.
app.set("port",8080);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/personas",personasRoutes);

export default app;