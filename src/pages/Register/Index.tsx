import Page from "../../layout/page";
import "../../App.css"

function Register() {

    return (
        <div>
            <Page>
                <div className="input-group">
                    <label className="label">Name</label>
                    <input autoComplete="off" name="Name" id="Name" className="input" type="name" />
                    <div></div>
                </div>
                <div className="input-group">
                    <label className="label">Email</label>
                    <input autoComplete="off" name="Email" id="Email" className="input" type="email" />
                    <div></div>
                </div>
                <div className="input-group">
                    <label className="label">Password</label>
                    <input autoComplete="off" name="Password" id="Password" className="input" type="password" />
                    <div></div>
                </div>
                <div className="input-group">
                    <label className="label">Confirm password</label>
                    <input autoComplete="off" name="Password" id="Password" className="input" type="password" />
                    <div></div>
                </div>
                <button className="contactButton">
                    Contact
                    <div className="iconButton">
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </button>
            </Page>
        </div>
    )
}

export default Register