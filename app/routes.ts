import { get } from './reqhandlers';
import { create, update, remove, bulkUpdate } from './posthandlers';

function init(app): void {
	app.all('*', (req, res, next): void => {
		console.log(`${req.method} ${req.path}`);
		next();
	});

	app.get('/', get);
	app.get('/:filter', get);

	app.post('/todos', create);
	app.post('/todos/all', bulkUpdate);
	app.post('/todos/:id', update);
	app.delete('/todos/:id', remove);
}

export default init;
