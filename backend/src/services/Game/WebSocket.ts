import { io } from "../../app";

io.on('connection', (socket: any) => {
  console.log(socket, 'a user connected');
});