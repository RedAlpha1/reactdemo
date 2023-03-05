import { ChildContainer } from "./ChildContainer.js"
export const ParentContainer = () => {
    const greetHandler = (childRsp) => {
        alert(`Hello Parents ${childRsp}`)
    }
    return <ChildContainer greetParent = {greetHandler}>

    </ChildContainer>
}