import React from "react";
import {Link} from "react-router-dom";

export default function HomeRepositoriesComponent() {
    return (
        <div className="ImagesContainer pt-8 items-center p-8" style={{ height: '80vh', position: 'relative' }}>
            <br />
            <h1 className={"text-4xl"}>Repositories</h1>
            <p className={"text-1xl"}>Tapper is an Opensource Project and you can Access the Source code by the Following Repositories</p>

            <div className="container pt-8" style={{ width: "70%" }}>
                <div className="grid grid-cols-3">
                    <div className="col-span-1 p-4">
                        <div className="card2">
                            <h2 className="card-title">Tapper Core</h2>
                            <p className="card-content2">
                                The Source Code of All Tapper Commands in Tapper CLI Built With Typescript
                            </p>
                            <a href={"https://github.com/tapper-app/tapper-core"} target="_blank" className="card-button">Explore</a>
                            <br />
                        </div>
                    </div>

                    <div className="col-span-1 p-4 mr-2">
                        <div className="card2">
                            <h2 className="card-title">macOS Client</h2>
                            <p className="card-content2">
                                The Source Code of Tapper macOS Client Built With Swift, SwiftUI
                            </p>
                            <a href={"https://github.com/tapper-app/desktop-macos"} target="_blank" className="card-button">Explore</a>
                            <br />
                        </div>
                    </div>

                    <div className="col-span-1 p-4 mr-4">
                        <div className="card2">
                            <h2 className="card-title">Website</h2>
                            <p className="card-content2">
                                The Source Code of the Website Built With React.js, Typescript
                            </p>
                            <a href={"https://github.com/tapper-app/website"} target="_blank" className="card-button">Explore</a>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}