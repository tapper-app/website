import React from "react";
import {Link} from "react-router-dom";
import GitHubIcon from "../images/github.icon";
import Logo from "../images/logo.png";

export default function ToolbarComponents() {
    return (
        <div className={"ToolbarContainer flex justify-between mx-auto p-4"}>
            <div className={"AppLogo"}>
                <img src={Logo} width={"50px"} height={"50px"} alt={"Tapper Logo"} />
            </div>
            <div className={"Links flex"}>
                <Link to={"/"} className={"mr-6 toolbar-link"}>Home</Link>
                <Link to={"/downloads"} className={"mr-6 toolbar-link"}>Downloads</Link>
                <a href={"https://docs.tapperapp.com"} target={"_blank"} className={"mr-6 toolbar-link"}>Docs</a>
                <Link to={"/contribute"} className={"mr-6 toolbar-link"}>Contribute</Link>
                <a href={"https://github.com/tapper-app"}>
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
