import Server from './class/server';
import rou from './routes/router';
import bodyParser from 'body-parser'
import cors from 'cors';


const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use( cors({ origin: true, credentials: true }));

server.app.use('/', rou);


server.start( () =>{
  console.log(`Servidor corriendo en puerto ${server.port}`);

})
