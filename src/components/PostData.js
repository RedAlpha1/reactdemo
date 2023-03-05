import { useState } from "react"

export const PostdataForApi = () => {
    
    const[userId,setUserId] = useState('')
    const[title,setTitle]=useState('')
    const[body,setbody] = useState('')
    
    const submitHandler = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        body : JSON.stringify({
            title : title,
            body : body,
            userId : userId
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        },  
    })
    .then((response)=> response.json())  
    .then((json)=> console.log(json))
}

    return (
      <form onSubmit={submitHandler}>
        <div>
          <input 
          type="text"  
          placeholder="User Id"  
          value={userId}
          onChange = {(e) => setUserId(e.target.value)}>
          </input>
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange = {(e) => setTitle(e.target.value)}>
          </input>
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Body" 
          value={body}
          onChange = {(e) => setbody(e.target.value)}>
          </input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
}

