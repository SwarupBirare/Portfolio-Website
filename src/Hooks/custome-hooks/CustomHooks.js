import { useEffect } from "react";
const  useTitle=(record)=>{
    useEffect(()=>{
        document.title='Record ${record}'
    });
}
export default useTitle;