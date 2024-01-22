import React from "react";
import {Link} from "react-router-dom";
import Windows from '../images/website_windows.png';
import Linux from '../images/website_linux.png';
import Mac from '../images/website_mac.png';

export default function DownloadsListContent() {
    return (
        <div className="ImagesContainer pt-8 items-center" style={{ height: '140vh', position: 'relative' }}>
            <div
                className="Background fixed-background items-center"
                style={{
                    clipPath: 'polygon(0 16%, 100% 0%, 100% 77%, 0% 100%)',
                    background: '#1E262C',
                    width: '100%',
                    height: '120vh',
                    bottom: '0',
                    marginTop: '10vh',
                    marginBottom: '10vh',
                    overflow: 'hidden',
                    position: 'absolute',
                }}
            >
                <div
                    className="TextContainer"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#ffffff',
                        textAlign: 'center',
                        padding: '20px',
                        zIndex: '1',
                    }}>

                    <h1 className={"text-4xl"}>Download Application</h1>
                    <div className={"flex items-center justify-around mx-auto mt-8"}>
                        <div className="card" style={{ textAlign: "center" }}>
                            <img src={Mac} width={"100"} height={"100"} alt={"Macos Logo"} className={"mx-auto"} />
                            <br />
                            <h2 className="card-title">macOS Application</h2>
                            <p className="card-content">
                                Tapper macOS Application Has UI Application with Widget for Shortcuts Available from
                                macOS Sonoma, <strong>Older Versions Coming Soon</strong>
                            </p>
                            <a href={"https://github.com/tapper-app/desktop-macos/releases"} target={"_blank"} className="card-button">Download</a>
                            <br />
                            <br />
                        </div>

                        <div className="card">
                            <img src={Windows} width={"100"} height={"100"} alt={"Macos Logo"} className={"mx-auto"} />
                            <br />
                            <h2 className="card-title">Windows Application</h2>
                            <p className="card-content">
                                <strong>Coming Soon, Still Under Development</strong>
                            </p>
                            {/*<Link to={"/docs"} className="card-button">Read More</Link>*/}
                            <br />
                            <br />
                        </div>

                        <div className="card">
                            <img src={Linux} width={"100"} height={"100"} alt={"Macos Logo"} className={"mx-auto"} />
                            <br />
                            <h2 className="card-title">Linux Application</h2>
                            <p className="card-content">
                                <strong>Coming Soon, Still Under Development</strong>
                            </p>
                            {/*<Link to={"/docs"} className="card-button">Read More</Link>*/}
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}