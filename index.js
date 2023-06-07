const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Primer server en Express');
});

app.get('/new-route', (req, res) => {
  res.send('Soy una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});
