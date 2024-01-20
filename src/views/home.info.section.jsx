import React from "react";

export default function HomeInfoSection() {
    return (
        <div className={"WhyContainer flex items-center justify-between mx-auto p-4"} style={{
            height: "20vh",
            marginTop: "10vh"
        }}>

            <div className={"WhyContent p-4 mx-auto"}>
                <h1><strong>Why Use Tapper ?</strong></h1>
                <p style={{ maxWidth: "40vw" }}>
                    Tapper built to Solve Problems with Saving ADB Commands and Remember the input with the Order,
                    and to find the required Command takes a lot of time or maybe you want to enable / disable an option
                    inside developer Options you need to Open Settings then Search on the Option but Now with Tapper,
                    No Need to do all of this, we have now an Application, CLI that Generates All of this Work for US,
                    We need only to Pick the Option from the App and that's it
                </p>
                <br/>
                <p style={{ maxWidth: "40vw" }}>
                    Another Problem Tapper Solve which is Building Features with a lot of Steps,
                    When we Build a feature with multiple steps and we need to test the final one we need to pass
                    all steps just to find the last one, now in Tapper we have Test Scenario that can enable Commands
                    to be Executed after Each Other like Device Clicks, Double Click, Scroll also Support ADB Commands
                </p>
            </div>

            <div className={"MadeWithContent p-4 mx-auto"}>
                <h1><strong>Made With ♥</strong></h1>
                <ul>
                    <li>Desktop App Built with Swift and SwiftUI</li>
                    <li>Website Built with Reactjs, Javascript</li>
                    <li>CLI Built with NodeJs, Typescript, Npm</li>
                    <li>Website Host By Github Public Pages</li>
                    <li>Windows, Linux Built with Electron App (In Progress)</li>
                </ul>
            </div>

        </div>
    );
}