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
                <a href="https://www.producthunt.com/posts/tapper-adb-toolkit-desktop-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tapper&#0045;adb&#0045;toolkit&#0045;desktop&#0045;app" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=436756&theme=light" alt="Tapper&#0032;&#0045;&#0032;ADB&#0032;Toolkit&#0032;Desktop&#0032;App - ADB&#0032;Manager&#0032;&#0045;&#0032;Android&#0032;Debug&#0032;Bridge&#0032;Manager&#0032;for&#0032;ADB&#0032;Commands | Product Hunt" style={{ "width":"100px", "height": "20px" }} width="100" height="20" /></a>
                <a style={{ marginLeft: "1em" }} href={"https://github.com/tapper-app"}>
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
