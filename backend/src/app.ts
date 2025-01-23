import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import path from "path";
import dotenv from "dotenv";
const cors = require("cors");
const app = express();

dotenv.config();

const PORT = Number(process.env.PORT) ?? 8000;
const HOST = process.env.HOST ?? "127.0.0.1";

// Enable CORS for all origins (or customize for specific domains)
app.use(cors()); // This will allow all domains to access your server

// Serve static files from the 'public' directory
app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/api", routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(err.status || 500).json({
        error: true,
        message: err.message || "Internal Server Error",
    });
});

app.listen(PORT, HOST, (err) => {
    console.log(
        `Listening on http://${HOST}:${PORT} \nError:${err ? err : "None"}`
    );
});
