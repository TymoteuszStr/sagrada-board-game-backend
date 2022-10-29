let express = require('express')
let cors = require('cors')
const app = express();
app.use(cors());

//websocket 
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
export const io = new Server(server);

require('./db/mongoose')

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/userApi.ts'));
app.use(require('./middlewares/isUserAuthenticated.ts'))
app.use(require('./routes/roomApi.ts'))




export default app;