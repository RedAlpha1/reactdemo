export const ClickHandler = () => {
    const clickHandler = (event,count = 1) => {
        console.log("Button Clickedd", count,event)
    }

    return (
        <div>
            <button onClick = {clickHandler}>Subscribe</button>
            <button onClick = {(event) => clickHandler(event,5)}>Subscribe</button>
        </div>
    )
}