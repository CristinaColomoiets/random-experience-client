import { Container } from "react-bootstrap"
import FAQ from "../../components/FAQ/FAQ"
import './FAQPage.css'

const FAQPage = ()=>{
    return(
        <div className="FAQPage">
            <Container>
                <FAQ />
            </Container>
        </div>
    )
}

export default FAQPage