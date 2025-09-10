import './style.css';

const Footer = () => {
  return (
        <div className="footer-wrapper">
            <div className="container">
                <p>Subscribe our new offers !</p>
            <div className="footer-nav">
                <a href="/" className="footer-logo">
                    <img src="https://placehold.co/75x75" />
                    <h1>Book Haven</h1>
                </a>
                <ul>
                    <li>
                    <a href="/">Home page</a>
                    </li>
                    <li>
                    <a href="/page-books">Books page</a>
                    </li>
                    <li>
                    <a href="/page-log-in">Log in</a>
                    </li>
                    <li>
                    <a href="/page-register">Register</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
     
  );
};
export default Footer;
