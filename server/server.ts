import * as express from 'express';
import { Application } from 'express';
import { authenticateUser } from './auth.route';
import { GetAllProducts } from './product.route';

const app: Application = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({origin: true}));

app.route('/api/auth').post(authenticateUser);
app.route('/api/products').get(GetAllProducts);

app.listen(9000, () => {
  console.log('HTTP Rest API running at http://localhost:9000');
})