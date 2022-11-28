import dotenv from 'dotenv'
dotenv.config();

export const CLIENT_URI_LOCAL = 'http://localhost:5173/'
export const CLIENT_URI_NETWORK = 'http://192.168.0.38:5173/'
export const DATABASE_URI = 'mongodb://localhost:27017/sagrada-board-game';
export const port = process.env.PORT || 3000;
export const database = process.env.DATABASE || DATABASE_URI
export const PORT_WS = 3333;
export const ALLOWED_ORIGINS = {
    origin: [CLIENT_URI_LOCAL, CLIENT_URI_NETWORK]
}

