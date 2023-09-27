import express, { Application } from 'express';

import { apiRouter } from './routes';


export class ExpressServer {

  private readonly app: Application = express();


  constructor( private readonly port: number ) {
    this.setMiddlewares();
    this.app.use('/api', apiRouter);
  }


  private setMiddlewares() {
    this.app.use( express.json() );
  }

  run() {
    this.app.listen( this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });
  }

}
