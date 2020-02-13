import { mergeMap } from 'rxjs/operators';
import { get$, getSome$, updateSome$, put$ } from './db';
import { Observable } from 'rxjs';

let userId = '131d51ee-5888-4474-b96c-3cf44119fb36';

export function create(req, res): void {
	let newTodo = {
		_id: Date.now().toString(),
		title: req.body.title,
		completed: false,
		owner: userId
	};

	put$(newTodo)
		.pipe(
			mergeMap(
				(doc: any): Observable<any> => {
					return get$(doc.id);
				}
			)
		)
		.subscribe(
			(todo): void => {
				res.send(todo);
			},
			(err: any): void => console.log(err)
		);
}
export function update(req, res): void {
	get$(req.params.id)
		.pipe(
			mergeMap(
				(doc): Observable<any> => {
					if (req.query.type === 'EDIT_TODO') {
						return put$({
							_id: doc._id,
							_rev: doc._rev,
							title: req.body.title,
							completed: doc.completed,
							owner: doc.owner
						});
					} else if (req.query.type === 'COMPLETE_TODO') {
						return put$({
							_id: doc._id,
							_rev: doc._rev,
							title: doc.title,
							completed: !doc.completed,
							owner: doc.owner
						});
					}
				}
			)
		)
		.subscribe(
			(): void => {
				res.send('success');
			},
			(err: any): void => console.log(err)
		);
}
export function remove(req, res): void {
	get$(req.params.id)
		.pipe(
			mergeMap(
				(doc: any): Observable<any> => {
					doc._deleted = true;
					return put$(doc);
				}
			)
		)
		.subscribe(
			(): void => {
				res.send('success');
			},
			(err: any): void => console.log(err)
		);
}
export function bulkUpdate(req, res): void {
	getSome$(req.body)
		.pipe(
			mergeMap(
				(docs): Observable<void> => {
					const editType = req.query.type;
					if (editType === 'COMPLETE_ALL') {
						docs = docs.map((doc): any => {
							doc.completed = true;
							return doc;
						});
					} else if (editType === 'UNCOMPLETE_ALL') {
						docs = docs.map((doc): any => {
							doc.completed = false;
							return doc;
						});
					} else if (editType === 'CLEAR_ALL') {
						docs = docs.map((doc): any => {
							doc._deleted = true;
							return doc;
						});
					}
					return updateSome$(docs);
				}
			)
		)
		.subscribe(
			(): void => {
				res.send('success');
			},
			(err: any): void => console.log(err)
		);
}
