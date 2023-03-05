export const ChildContainer = (props) => {
 return (
        <div>
            <button onClick = {() => props.greetParent("CHILD 1")}>Details</button>
        </div>
    ) 
}
