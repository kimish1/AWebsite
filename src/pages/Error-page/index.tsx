/*import { useState } from "react";*/
import Page from "../../layout/page";
import "../../App.css";
import "./style.css"

function ErrorPage() {
    return (
        <Page>
            <div>
                <h1 className="h1-error">404</h1>
                <p className="p-error">Ви не туди зайшли</p>
                <a href="/" className="a-error">На головну</a>
                <div className="CatAndBanana">
                    <video className="CatAndBananaVideo" src="../../../public/CatAndBanana.mp4" autoPlay loop muted></video>
                </div>
            </div>
        </Page>
    );
}

export default ErrorPage;
