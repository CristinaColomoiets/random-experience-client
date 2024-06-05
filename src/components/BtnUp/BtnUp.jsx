import { Button } from "react-bootstrap"
import { FaArrowAltCircleUp } from "react-icons/fa";


const BtnUp = ()=>{

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })};

    return(
        <FaArrowAltCircleUp  className="btn-gradient-up" onClick={scrollToTop}/>
    )
}
export default BtnUp