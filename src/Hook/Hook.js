import { useEffect } from "react"

const useTitle =(hook)=>{
    useEffect(() => {
        document.title=`ToyGalaxy | ${hook}`;
          
      }, [hook]);
}
export default useTitle;