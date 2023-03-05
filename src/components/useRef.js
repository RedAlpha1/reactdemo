import { useEffect, useRef } from "react"

export const FocusInput = () => {
    const focusInputFiled = useRef(null) 
useEffect(() => {
      // focus on Input Field
      focusInputFiled.current.focus();
    }, []);

 return (
   <div>
     <input ref={focusInputFiled} type="text" />
   </div>
 );
}