export const Name = (props) => {
    return (
    <div>
    <h1>Hello {props.name} and your surname is {props.surname}</h1>
    {props.children}
  </div>
    )
   
}
