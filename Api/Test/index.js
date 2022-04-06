require('./pkg/db')
const api = express();

api.use(express.json());

api.get('/api/portable-computer', portable_computer.getAll);
api.get('/api/portable-computer/:id', portable_computer.getOne);
api.post('/api/portable-computer', portable_computer.create);
api.put('/api/portable-computer/:id', portable_computer.update);
api.patch('/api/portable-computer/:id', portable_computer.updatePartial);
api.delete('/api/portable-computer/:id', portable_computer.remove)