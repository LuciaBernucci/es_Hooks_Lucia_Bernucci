import { useEffect, useRef, useState } from "react";

export default function useScroll(){
    const [scrollY,setScrollY]=useState(0);
    
    const ref =useRef(null);

    const onScroll = ()=> setScrollY(window.scrollY);

    useEffect (
        ()=>{
            window.addEventListener('scroll',onScroll);
            onScroll();

            return () => window.removeEventListener("scroll", onScroll);
        },[]
    )

    return [ref,scrollY];
}
