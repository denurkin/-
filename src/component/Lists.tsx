import React from 'react';
import store from "../store/RootStore"; // Путь к вашему store
import '../css/List.css';
import { observer } from 'mobx-react-lite';
import List from './List';

const Lists = observer(() => { 
    return (
        <>
          {store.todos.map((todo) => (
<List key={`${todo.id}123`} todo = {todo}/>
          ))}
        </>
    )
})

export default Lists
 