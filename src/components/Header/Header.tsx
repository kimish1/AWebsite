import "./style.css"

const Header = () =>{
    return (
        <div className="header-wrapper">
            <div>
                <ul>
                    <li><a href="/">Home page</a></li>
                    <li><a href="/page-books">Books page</a></li>
                    <li><a href="/page-book">Book page</a></li>
                    <li><a href="/page-log-in">Log in</a></li>
                    <li><a href="/page-register">Register</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header