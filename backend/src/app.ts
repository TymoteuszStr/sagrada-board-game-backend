let express = require('express')
let cors = require('cors')

const app = express();
app.use(cors());

require('./db/mongoose')

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routes/userApi.ts'));
app.use(require('./middlewares/isUserAuthenticated.ts'))





export default app;