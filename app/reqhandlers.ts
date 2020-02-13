import { map, toArray } from 'rxjs/operators';
import { getAll$ } from './db';

export function get(req, res): void {
	getAll$()
		.pipe(
			map((row) => {
				return row.doc;
			}),
			toArray()
		)
		.subscribe((model): void => res.json(model), (err: any): void => console.log(err));
}
