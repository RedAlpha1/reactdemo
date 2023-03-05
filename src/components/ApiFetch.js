import { useEffect, useState } from "react"

export const FetchDetails  = () => {
    const [useDetails, setDetails] = useState([])
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setDetails(data))
     },[])

     return (
       <div>
         <h1>Todo List</h1>
         <ul>
           {useDetails.map((item) => (
             <li key={item.id}>{item.title}</li>
           ))}
         </ul>
       </div>
     );
}