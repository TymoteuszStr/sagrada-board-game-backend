import mongoose from "mongoose";
import { database } from "../config";

async function connectDB() {
  try {
    await mongoose.connect(database);
    console.log("Connected to database");
  } catch (e) {
    console.error(`Error connecting to database ${e}`);
  }
}

connectDB();

// import mongoose from "mongoose";
// import { database } from "../config";

// interface ConnectOptions extends mongoose.ConnectOptions {
//   useNewUrlParser: boolean;
//   useUnifiedTopology: boolean;
//   serverSelectionTimeoutMS: number;
//   maxPoolSize: number;
// }

// class DatabaseConnection {
//   private static instance: DatabaseConnection;
//   private isConnected: boolean = false;

//   private constructor() {}

//   public static getInstance(): DatabaseConnection {
//     if (!DatabaseConnection.instance) {
//       DatabaseConnection.instance = new DatabaseConnection();
//     }
//     return DatabaseConnection.instance;
//   }

//   private readonly options: ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
//     maxPoolSize: 10,
//   };

//   public async connect(): Promise<void> {
//     if (this.isConnected) {
//       console.log("Already connected to database");
//       return;
//     }

//     try {
//       // Connect to MongoDB
//       await mongoose.connect(database, this.options);
//       this.isConnected = true;
//       console.log("Successfully connected to database");

//       // Handle connection events
//       mongoose.connection.on("error", (error) => {
//         console.error("MongoDB connection error:", error);
//         this.isConnected = false;
//       });

//       mongoose.connection.on("disconnected", () => {
//         console.warn("Disconnected from MongoDB");
//         this.isConnected = false;
//       });

//       // Handle process termination
//       process.on("SIGINT", this.closeConnection.bind(this));
//       process.on("SIGTERM", this.closeConnection.bind(this));
//     } catch (error) {
//       console.error("Error connecting to database:", error);
//       this.isConnected = false;
//       throw error;
//     }
//   }

//   public async closeConnection(): Promise<void> {
//     try {
//       await mongoose.connection.close();
//       this.isConnected = false;
//       console.log("Database connection closed");
//       process.exit(0);
//     } catch (error) {
//       console.error("Error closing database connection:", error);
//       process.exit(1);
//     }
//   }

//   public getConnectionStatus(): boolean {
//     return this.isConnected;
//   }
// }

// // Export singleton instance
// export const dbConnection = DatabaseConnection.getInstance();

// // Usage example:
// // try {
// //   await dbConnection.connect();
// // } catch (error) {
// //   console.error('Failed to connect to database:', error);
// //   process.exit(1);
// // }
