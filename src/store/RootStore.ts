import { types, flow } from "mobx-state-tree";

import axios from "axios";


const Todo = types.model("Todo", {

  id: types.string,

  number: types.number,

  type: types.string,

  date: types.string,

  automatic: types.union(types.boolean, types.null),

  values: types.number,

  description: types.string,

  address: types.string,


});


const TodoStore = types

  .model("TodoStore", {

    todos: types.array(Todo),

    isLoading: types.boolean,

    pagination: 1,
  })

  .actions((self) => {

    const fetchTodos = flow(function* fetchTodos() {

      self.isLoading = true;

      try {

        const response = yield axios.get(`http://showroom.eis24.me/api/v4/test/meters/?limit=20&offset=${self.pagination*20}`);    

        const todos = yield Promise.all(response.data.results.map(fetchTodoWithAddress));

        self.todos.replace(todos);

      } catch (error) {

        console.error("Failed to fetch todos:", error);

      } finally {

        self.isLoading = false;

      }

    });

    const fetchTodoWithAddress = flow(function* (todo, id) {      
          
      try {

        const addressResponse = yield axios.get(`http://showroom.eis24.me/api/v4/test/areas/?id=${todo.area.id}`);        

        const address = `${addressResponse.data.results[0].house.address} ${addressResponse.data.results[0].str_number_full}` || 'Unknown address';
          
        

        return {

          id: todo.id,

          number: id + 1,

          type: todo._type[0],

          date: todo.installation_date,

          automatic: todo.is_automatic,

          values: todo.initial_values[0],

          description: todo.description,

          address: address,

        };

      } catch (error) {

        console.error(`Failed to fetch address for todo ${todo.id}:`, error);

        return {

          id: todo.id,

          number: id + 1,

          type: todo._type[0],

          date: todo.installation_date,

          automatic: todo.is_automatic,

          values: todo.initial_values[0],

          description: todo.description,

          address: 'Unknown address',


        };

      }

    });

    const paginationIncrement = () => {

      self.pagination += 1

      fetchTodos()

    };

    const paginationDecrement = () => {

      self.pagination -= 1

      fetchTodos()

    };

    const removeTodo = flow(function* (id) {

      try {

        yield axios.delete(`http://showroom.eis24.me/api/v4/test/meters/${id}/`);

      } catch (error) {

        console.error("Failed to delete todo on server", error);

      } finally {
        store.fetchTodos()

      }

    })


    return { fetchTodos, paginationIncrement, paginationDecrement ,removeTodo};

  });

const store = TodoStore.create({

  todos: [],

  isLoading: false,

});

export default store;

