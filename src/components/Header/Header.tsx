import "./style.css"

const Header = () =>{
    return (
        <div className="header-wrapper">
            <div>
                <ul>
                    <a href="/">
                    <img src="https://placehold.co/100x100"/>
                    </a>
                    <li><a href="/">Home page</a></li>
                    <li><a href="/page-books">Books page</a></li>
                    <li><a href="/page-log-in">Log in</a></li>
                    <li><a href="/page-register">Register</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header