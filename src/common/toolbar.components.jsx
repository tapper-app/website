import React from "react";
import {Link} from "react-router-dom";
import GitHubIcon from "../images/github.icon";

export default function ToolbarComponents() {
    return (
        <div className={"ToolbarContainer flex justify-between mx-auto p-4"}>
            <div className={"AppLogo"}>

            </div>
            <div className={"Links flex"}>
                <Link to={"/"} className={"mr-6 toolbar-link"}>Home</Link>
                <Link to={"/downloads"} className={"mr-6 toolbar-link"}>Downloads</Link>
                <Link to={"/docs"} className={"mr-6 toolbar-link"}>Docs</Link>
                <Link to={"/contribute"} className={"mr-6 toolbar-link"}>Contribute</Link>
                <a href={"https://github.com/tapper-app"}>
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
