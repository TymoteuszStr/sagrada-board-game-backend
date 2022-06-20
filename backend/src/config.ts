import dotenv from 'dotenv'
dotenv.config();

export const port = process.env.PORT || 3000;
export const database = process.env.DATABASE || 'mongodb://localhost:27017/sagrada-board-game';


