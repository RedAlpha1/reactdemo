import { useState } from "react"

export const Form = () => {
    const [userName, setUserName] = useState('')
    const handleIntent = (event) => {
        event.preventDefault()
        alert(`Hello ${userName}`)
    }
    return(
        <div>
            <h1>UserName</h1>
            <form onSubmit={handleIntent}>
                <input 
                type = 'text'
                value={userName}
                onChange = {(event)=> setUserName(event.target.value)}>
                </input>
                <button type='submit'>Submit</button>
            </form>
          
        </div>
    )
}