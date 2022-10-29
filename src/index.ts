import app from './app'
import { port } from './config'


try {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
} catch (e) {
  console.error(`Cannot run the server: ${e}`);
}
