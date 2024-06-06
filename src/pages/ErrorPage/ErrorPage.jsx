import "./ErrorPage.css"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const ErrorPage = () => {

    return (
        <div className="error-page">
            <article className="error">
                <img src='https://st3.depositphotos.com/8615356/13839/v/450/depositphotos_138392822-stock-illustration-page-not-found-error-404.jpg' alt="Error 404" />
                <div>
                    <h1 className='h1-primary'>That's not a good experience 😢</h1>
                    <p>Just click below to see better ones.</p>
                    <Link to="/">
                        <Button>
                            Home Page
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default ErrorPage