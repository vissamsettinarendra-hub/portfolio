import { useRef } from "react";
import { useInView } from "framer-motion";


function useScrollReveal(){

    const ref = useRef(null);

    const isVisible = useInView(ref,{
        once:true,
        amount:0.2
    });


    return {
        ref,
        isVisible
    };

}


export default useScrollReveal;