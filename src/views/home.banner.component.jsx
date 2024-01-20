import React from "react";
import AndroidLogo from '../images/android-logo.png';

export default function HomeBannerComponent() {
    return (
        <div className={"PageContainer"}>
            <div className={"AndroidLogoContainer flex items-center justify-between mx-auto"} style={{
                position: "absolute",
                width: "100vw"
            }}>
               <div className={"FirstImage"}  style={{ marginBottom: "70vh" }}>
                   <img loading="lazy"
                        src={AndroidLogo}
                        alt="Android Logo"
                        style={{
                            objectFit: "contain",
                            width: "150px",
                            height: "150px",
                        }}/>
               </div>

                <div className={"SecondImage"} style={{ marginTop: "70vh" }}>
                    <img loading="lazy"
                         src={AndroidLogo}
                         alt="Android Logo"
                         style={{
                             objectFit: "contain",
                             width: "150px",
                             height: "150px",
                             transform: 'rotate(180deg)',
                         }}/>
                </div>
            </div>

            <div className={"PageHeader flex items-center justify-between mx-auto p-4"}>
                <div className={"TextContent p-4 mx-auto"}>
                    <h5 className={"text-lg md:text-l lg:text-l xl:text-l"}>ADB Interface Manager</h5>
                    <h1 className={"text-lg md:text-xl lg:text-2xl xl:text-3xl"}>Tapper</h1>
                    <h3 className={"Description text-lg md:text-l lg:text-l xl:text-l"}>Execute ADB Commands with User Interface Application</h3>
                    <h3 className={"Description2 text-lg md:text-l lg:text-l xl:text-l"}>Tapper is an Testing Environment, TestScenarios Execution also with ADB Events All of them inside One Desktop Application to Manage all of them</h3>
                    <div className="flex justify-left flex-wrap pt-8">
                        <a
                            href="https://tapperapp.com/downloads"
                            className={"rounded-full text-black bg-white transition duration=300 ease-in-out flex items-start animate-bounce p-5 text-sm pr-8 pl-8"}>
                            Download
                        </a>
                    </div>
                </div>
                <div className={"ImageContent p-4 mx-auto"}>

                </div>
            </div>
        </div>
    );
}