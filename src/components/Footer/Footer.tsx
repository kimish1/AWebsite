import "./style.css"

const Footer = () =>{
    return (
        <div className="footer-wrapper">
            <p>Subscribe our new offers !</p>
            <a href="/">
                <img src="https://placehold.co/75x75"/>
                <h1>Book Haven</h1>
            </a>
            <ul>
                <li><a href="/">Home page</a></li>
                <li><a href="/page-books">Books page</a></li>
                <li><a href="/page-log-in">Log in</a></li>
                <li><a href="/page-register">Register</a></li>
            </ul>
            <div className="line" />
        </div>
    )
}
export default Footer