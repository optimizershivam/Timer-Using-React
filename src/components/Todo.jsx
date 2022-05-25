import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [newtodo,setnewtodo] = useState("")
    // console.log('newtodo:', newtodo)
    const [page,setpage] = useState(1)
    console.log('page:', page)
    
    
    const [todos, settodos] = useState([])
    const saveinfo = () => {
        fetch(`http://localhost:8080/todos`,{
           method:"POST",
           headers: {
               "content-type":"application/json"
           },
           body:JSON.stringify({
               text: newtodo,
               iscompleted:false,

           }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            settodos([...todos,data])
            setnewtodo("");

        })
        
    };
   
   
    useEffect(() => {
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=6`)
        .then((res) => res.json())
        .then((data)=>{settodos(data)})

    },[page])


    return (
        <div>

            Todo
            <div>
            <div>
                <input value={newtodo} onChange={(e) => setnewtodo(e.target.value)} placeholder='Enter your Todo' />
                <button disabled={!newtodo} onClick={saveinfo}> Add</button>

            </div>
            {todos.map((todo) =>(
                <div key={todo.id}>{todo.text}</div>
            ))}
            </div>
            <br />
            <button disabled={page<=1} onClick={() => setpage(page-1)}>{"<"}</button>
            <button onClick={ () =>setpage(page+1)}>{">"}</button>

        </div>
    )
}

export default Todo