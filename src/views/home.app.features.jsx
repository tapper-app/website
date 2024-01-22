import React from "react";
import {Link} from "react-router-dom";

export default function HomeAppFeatures() {
    return (
        <div className="ImagesContainer pt-8 items-center" style={{ height: '120vh', position: 'relative' }}>
            <div
                className="Background fixed-background items-center"
                style={{
                    clipPath: 'polygon(0 16%, 100% 0%, 100% 77%, 0% 100%)',
                    background: '#1E262C',
                    width: '100%',
                    height: '100vh',
                    bottom: '0',
                    marginTop: '10vh',
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

                    <h1 className={"text-4xl"}>Features</h1>
                    <div className={"flex items-center justify-around mx-auto mt-8"}>
                        <div className="card">
                            <h2 className="card-title">Command Line Interface</h2>
                            <p className="card-content">
                                Tapper Provide an Interface for All Android Debug Bridge Commands That you need
                                In your Android Development Journey, No Need to Save Them in Notes, Search on Internet,
                                Also Tapper Can Execute Testing Scenarios, Monkey Testing, Powered By Npm
                            </p>
                            <Link to={"/docs"} className="card-button">Read More</Link>
                            <br />
                            <br />
                        </div>

                        <div className="card">
                            <h2 className="card-title">Desktop Clients</h2>
                            <p className="card-content">
                                Tapper Provide A User Interface for Using The Commands, no need to open the Terminal,
                                You can Access Everything from a Drop Down Menu with Input Section To Write Your Information,
                                Also You can Create Commands By Registering Your Application Package Name
                            </p>
                            <Link to={"/docs"} className="card-button">Read More</Link>
                            <br />
                            <br />
                        </div>

                        <div className="card">
                            <h2 className="card-title">Test Scenarios</h2>
                            <p className="card-content">
                                No need To Save the Input, or Repeat the Same Steps Again and Again,
                                Tapper Can Save All of your Commands and Execute them When you Need in a Sequence,
                                for Example Tapper Can Pass Your App Flow with Coordinates Clicks Automated
                            </p>
                            <Link to={"/docs"} className="card-button">Read More</Link>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}