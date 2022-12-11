import { PORT_WS } from "./config";
import { Server } from "socket.io";
import { createServer } from "http";

let express = require('express')
let cors = require('cors')
const app = express();
app.use(cors());

//websocket 
const httpServer = createServer(app);
export const io = new Server(httpServer, {
    cors: { origin: "*" }
});
httpServer.listen(PORT_WS);


require('./db/mongoose')

app.use(express.json());
app.use(require('./routes/userApi.ts'));
app.use(require('./middlewares/isUserAuthenticated.ts'))
app.use(require('./routes/roomApi.ts'))

require('./routes/webSocket.ts')



export default app;