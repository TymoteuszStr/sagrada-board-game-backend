import { io } from "../../app";


io.on('connection', (socket: any) => {
  console.log(socket.id, 'a user connected');
});

// tutorial:
//https://www.youtube.com/watch?v=ZKEqqIO7n-k&ab_channel=WebDevSimplified