// let arr = fetch('http://showroom.eis24.me/api/v4/test/meters/?limit=20&offset=1')
// .then(response => response.json())
// .then(result => result
// );

import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";

import store from "./store/RootStore"; // Путь к вашему store
import Table from "./component/Table";
import './css//App.css';


const App = observer(() => {

  useEffect(() => {

    store.fetchTodos();

  }, []);

  

  return (
    <div>
      <h1 className="title">Список счетчиков</h1>
      {store.isLoading ? (
        ""
      ) : (
        <Table/>
      )}
    </div>
  );

});

export default App;