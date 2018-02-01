import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

import { APIService } from '../common/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService extends APIService {
	private resourceUrl = 'api/todo';
	private todos: Todo[] = [
		new Todo('todo 1'),
		new Todo('todo 2', 1, true),
		new Todo('todo 3')
	];

	create(description: string, priority: Number, completed: boolean): Observable<Todo>  {
		//this.todos.push(new Todo(description, priority, completed));
		return this.post(this.resourceUrl, new Todo(description, priority, completed));
	} 

	list(): Observable<Todo[]> {
		return this.get(this.resourceUrl);
	  }

	/*
	  list(): Todo[] {
		return this.todos;
	}
	*/
	
}