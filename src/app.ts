import { PORT_WS } from "./config";
import { Server } from "socket.io";
import { createServer } from "http";

let express = require("express");
let cors = require("cors");
const app = express();
app.use(cors());

//websocket
const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: { origin: "*" },
});
httpServer.listen(PORT_WS);

require("./db/mongoose");

app.use(express.json());
app.use(require("./routes/userApi.ts"));
app.use(require("./middlewares/isUserAuthenticated.ts"));
app.use(require("./routes/roomApi.ts"));
app.use(require("./routes/gameApi.ts"));

require("./routes/webSocket.ts");

export default app;

// import express, { Express } from "express";
// import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import { PORT_WS } from "./config";

// // Route imports
// import userRoutes from "./routes/userApi";
// import roomRoutes from "./routes/roomApi";
// import { isUserAuthenticated } from "./middlewares/isUserAuthenticated";
// import { initializeWebSocket } from "./routes/webSocket";
// import { connectDatabase } from "./db/mongoose";

// class App {
//   private app: Express;
//   private httpServer;
//   public io: Server;

//   constructor() {
//     this.app = express();
//     this.httpServer = createServer(this.app);
//     this.io = new Server(this.httpServer, {
//       cors: {
//         origin: "*",
//         methods: ["GET", "POST"], // Specify allowed methods
//       },
//     });

//     this.initializeMiddlewares();
//     this.initializeRoutes();
//     this.initializeWebSocket();
//   }

//   private initializeMiddlewares(): void {
//     this.app.use(
//       cors({
//         origin: process.env.CORS_ORIGIN || "*", // Better to specify allowed origins
//         credentials: true,
//       })
//     );
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies
//   }

//   private initializeRoutes(): void {
//     this.app.use("/api/users", userRoutes);
//     this.app.use(isUserAuthenticated); // Authentication middleware
//     this.app.use("/api/rooms", roomRoutes);

//     // Error handling middleware
//     this.app.use(
//       (
//         err: Error,
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//       ) => {
//         console.error(err.stack);
//         res.status(500).send("Something broke!");
//       }
//     );
//   }

//   private initializeWebSocket(): void {
//     initializeWebSocket(this.io);
//   }

//   public async start(): Promise<void> {
//     try {
//       // Connect to database
//       await connectDatabase();

//       // Start server
//       this.httpServer.listen(PORT_WS, () => {
//         console.log(`Server is running on port ${PORT_WS}`);
//       });
//     } catch (error) {
//       console.error("Failed to start server:", error);
//       process.exit(1);
//     }
//   }

//   public getApp(): Express {
//     return this.app;
//   }
// }

// const appInstance = new App();
// export const io = appInstance.io;
// export default appInstance.getApp();

// // Start the server
// if (require.main === module) {
//   appInstance.start();
// }
