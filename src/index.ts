import express from 'express';
import * as gavno from 'request';
import {Request, Response} from 'express';
import helloWorld from '@src/helloWorld';

const app = express();
const {PORT = 3000} = process.env;

app.get('/', (req: Request, res: Response) => {
  gavno.get({url: ''}, () => {});
  res.send({

    message: helloWorld(),
  });
});


app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});
