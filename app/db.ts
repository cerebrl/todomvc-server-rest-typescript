import PouchDB from 'pouchdb';
import { Observable } from 'rxjs';

// let userDb = new PouchDB('users');
let todoDb = new PouchDB('todos');

export function getAll$(): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.allDocs({
				descending: true,
				// eslint-disable-next-line @typescript-eslint/camelcase
				include_docs: true
			})
			.then((doc): void => {
				doc.rows.forEach((row) => observer.next(row));
				observer.complete();
			})
			.catch((err): void => observer.error(err));
	});
}
export function getSome$(todos): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.allDocs()
			.then((docs: any): any => {
				const filterDocs = docs.rows
					.filter((x): any => todos.includes(x.id))
					.map((x): any => {
						return {
							id: x.id,
							rev: x.value.rev
						};
					});

				todoDb
					.bulkGet({
						docs: filterDocs
					})
					.then((doc: any): void => {
						const docs = doc.results.map((result): any => result.docs[0].ok);
						observer.next(docs);
						observer.complete();
					})
					.catch((err): void => observer.error(err));
			})
			.catch((err): void => observer.error(err));
	});
}
export function updateSome$(todos): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.bulkDocs(todos)
			.then((result): void => {
				observer.next();
				observer.complete();
			})
			.catch((err): void => observer.error(err));
	});
}
export function get$(id): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.get(id)
			.then((doc): void => {
				observer.next(doc);
				observer.complete();
			})
			.catch((err): void => observer.error(err));
	});
}
export function put$(todo): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.put(todo)
			.then((doc): void => {
				observer.next(doc);
				observer.complete();
			})
			.catch((err): void => observer.error(err));
	});
}
export function remove$(id, rev): Observable<any> {
	return new Observable((observer): void => {
		todoDb
			.remove(id, rev)
			.then((): void => {
				observer.next();
				observer.complete();
			})
			.catch((err): void => observer.error(err));
	});
}
