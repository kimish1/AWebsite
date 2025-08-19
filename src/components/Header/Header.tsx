import "./style.css"

const Header = () =>{
    return (
        <div className="header-wrapper">
            <p>HEADER</p>
            <div>
                <ul>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/page-1">1 Сторінка</a></li>
                    <li><a href="/page-2">2 Сторінка</a></li>
                    <li><a href="/page-log-in">Log in</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header