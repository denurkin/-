import React, { useState } from 'react';
import store from "../store/RootStore"; 
import '../css/List.css';
import { observer } from 'mobx-react-lite';

const List = observer((props: any) => { 
    const [check, setCheck] = useState(false)
    const todo = props.todo;

    return (
        <>
            <ul className='list' key={todo.id} onMouseEnter={() => {setCheck(!check)}}
        onMouseLeave={() => {setCheck(!check)}}>
              <li className='list__number'>{`${todo.number}`}</li>
              <li className='list__type'>{todo.type === "HotWaterAreaMeter" ? <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.89218 0.42C5.89442 0.39678 5.89999 0.366731 5.89999 0.341464C5.89999 0.152976 5.76063 0 5.5889 0C5.51579 0 5.46441 0.0300488 5.44452 0.0385853C4.3883 0.491366 0.299988 4.95669 0.299988 8.87803C0.299988 11.7067 2.38941 14 4.96665 14C7.80059 14 9.63332 11.38 9.63332 8.87803C9.63332 4.71663 5.16486 3.94834 5.89218 0.42Z" fill="#F46B4D"/>
</svg> : <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.89218 0.42C5.89442 0.39678 5.89999 0.366731 5.89999 0.341464C5.89999 0.152976 5.76063 0 5.5889 0C5.51579 0 5.46441 0.0300488 5.44452 0.0385853C4.3883 0.491366 0.299988 4.95669 0.299988 8.87803C0.299988 11.7067 2.38941 14 4.96665 14C7.80059 14 9.63332 11.38 9.63332 8.87803C9.63332 4.71663 5.16486 3.94834 5.89218 0.42Z" fill="#3698FA"/>
</svg>}
{todo.type === "HotWaterAreaMeter" ? <p className='list-__type-text'>"ТПЛ"</p> : <p className='list-__type-text'>'ХВС'</p>}</li>


              <li className='list__date'>{`${todo.date.replaceAll('-', '.').substring(0, 10)}`}</li>
              <li className='list__automatic'>{`${todo.automatic === null ? "да" : "нет"}`}</li>
              <li className='list__value'>{`${todo.values}`}</li>
              <li className='list__address'>{`${todo.address}`}</li>
              <li className='list__description'>{todo.description }</li>

              {check === false ? "" : <button onClick={() => {store.removeTodo(todo.id)
              }} className='list__delete'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33334 6.00002V12H6.00001V6.00002H7.33334Z" fill="#C53030"/>
<path d="M10 6.00002V12H8.66668V6.00002H10Z" fill="#C53030"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.85284 0.666687H11.1472L11.8139 2.66669H14.6667V4.00002H13.3333L12.6667 15.3334H3.33334L2.66668 4.00002H1.33334V2.66669H4.18617L4.85284 0.666687ZM5.59163 2.66669H10.4084L10.1862 2.00002H5.81385L5.59163 2.66669ZM4.00001 4.00002L4.66668 14H11.3333L12 4.00002H4.00001Z" fill="#C53030"/>
</svg></button>}
            </ul>
        </>
    )
})

export default List