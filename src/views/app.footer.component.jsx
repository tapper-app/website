import React from "react";
import {Link} from "react-router-dom";

export default function AppFooterComponent() {
    return (
        <footer className={"footer p-20 items-center"}>
            <div className={"flex items-center justify-around mx-auto p-4"}>
                <div className={"QuickLinks"}>
                    <p>Quick Links</p>
                    <br />
                    <ul style={{ marginLeft: "1em" }}>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><Link className={"toolbar-link"} to={"/"}>Home</Link></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><Link className={"toolbar-link"} to={"/downloads"}>Downloads</Link></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><Link className={"toolbar-link"} to={"/docs"}>Documentation</Link></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><Link className={"toolbar-link"} to={"/contribute"}>Contribute</Link></li>
                    </ul>
                </div>

                <div className={"Repositories"}>
                    <p>Repositories</p>
                    <br />
                    <ul style={{ marginLeft: "1em" }}>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><a className={"toolbar-link"} href={"https://github.com/tapper-app/tapper-core"} target="_blank">Tapper Core</a></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><a className={"toolbar-link"} href={"https://github.com/tapper-app/desktop-macos"} target="_blank">macOS Application</a></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><a className={"toolbar-link"} href={"https://github.com/tapper-app/website"} target="_blank">Website</a></li>
                    </ul>
                </div>

                <div className={"Issues"}>
                    <p>Customization</p>
                    <br />
                    <ul style={{ marginLeft: "1em" }}>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><a className={"toolbar-link"} href={"https://github.com/tapper-app/tapper-core/issues"} target="_blank">Open Issues</a></li>
                        <li style={{ width: "10em", textAlign: "left", marginLeft: "5em" }}><a className={"toolbar-link"} href={"https://github.com/tapper-app/tapper-core/issues"} target="_blank">Request Features</a></li>
                    </ul>
                </div>
            </div>

            <br/>
            <br/>

            <p>Tapper Maintained by <a href={"https://github.com/Yazan98"} target={"_blank"} style={{
                color: "#71d88d"
            }}>@Yazan Tarifi</a> To Boot Android Development</p>
        </footer>
    );
}