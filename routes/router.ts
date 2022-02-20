import {Router, Request, Response} from 'express'

const rou = Router();

rou.get('/mensajes',(req: Request, res: Response) => {
    res.json({
      ok: true,
      mensaje: 'Todo esta bien!!'
    });
});

rou.post('/mensajes',(req: Request, res: Response) => {

const cuerpo = req.body.cuerpo;
const de     = req.body.de;

    res.json({
      ok: true,
      mensaje: 'POST Listo',
      cuerpo,
      de
    });
});

rou.post('/mensajes/:id',(req: Request, res: Response) => {

const cuerpo = req.body.cuerpo;
const de     = req.body.de;
const id = req.params.id;

    res.json({
      ok: true,
      mensaje: 'POST Listo',
      cuerpo,
      de,
      id
    });
});

export default rou;
