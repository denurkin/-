

import React from "react";
import { observer } from "mobx-react-lite";
import { values, observable, action } from "mobx";







const App = (props: any) => {

  console.log(1);
  let id = 1;
const randomId = () => ++id;



  return (  
  <div>
    <button onClick={e => props.store.addTodo(randomId(), "New Task")}>
      Add Task
    </button>
    {values(props.store.todos).map((todo: any) => (
      <div key={todo.id}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => todo.toggle()}
        />
        <input
          type="text"
          value={todo.name}
          onChange={e => todo.setName(e.target.value)}
        />
      </div>
    ))}
  </div>)
}



export default App



// fetch('http://showroom.eis24.me/api/v4/test/meters/?limit=20&offset=1')
// .then(response => response.json())
// .then(result => console.log(result)
// );