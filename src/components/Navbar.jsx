import useScroll from "../hooks/useScroll"

export default function Navbar(){

    const [scrolled,scrollY]=useScroll();
    return(
        <>
         <nav ref={scrolled} className={scrollY > 0 ? 'darkNav' : 'lightNav'}>


         </nav>
        </>
    )
}