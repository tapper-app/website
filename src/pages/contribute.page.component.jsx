import React from "react";
import AppFooterComponent from "../common/app.footer.component";
import ToolbarComponents from "../common/toolbar.components";
import ScreenContainerComponent from "../common/screen.container.component";

export default function ContributePageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - Contribution"}>
            <main>
                <ToolbarComponents />
                <div className={"notFoundContent flex items-center justify-between mx-auto"}>
                    <div className={"p-4"} style={{ textAlign: "left" }}>
                        <h1 className={"text-4xl"}><strong>Tapper Contribution</strong></h1>
                        <p className={"text-1xl"} style={{ maxWidth: "40vw" }}>Tapper is eay to contribute, you can share your Skills, Knowledge with others and Help other Developers with Enhancing Tapper More and more</p>
                        <br />
                        <p className={"text-1xl"} style={{ maxWidth: "40vw" }}>Tapper Built with Several Languages, Frameworks, Platforms just to Provide All Android Developers a Tool
                        that can work on Anything, So if you want to Contribute to Tapper Choose the Repository and Continue .</p>
                        <br />
                        <p className={"text-1xl"} style={{ maxWidth: "40vw" }}>
                            Any Contribution is Helpful, Everyone is invited to expand Tapper More and more,
                            You Always can Report a Bug or Requesting a Feature <a href={"https://github.com/tapper-app/tapper-core"} target={"_blank"} className={"toolbar-link"}>Here </a>
                            or Submitting the Change in a Pull Request to the Correct Repository
                        </p>
                        <br />
                        <p className={"text-1xl"} style={{ maxWidth: "40vw" }}>To See what Tapper Missing and What is the Pending Tasks
                        You can visit the Project in the Public Github Organization <a href={"https://github.com/orgs/tapper-app/projects?query=is%3Aopen"} target={"_blank"} className={"toolbar-link"}>Here </a> or in the Open Issues in Core Project</p>
                    </div>
                </div>
                <AppFooterComponent />
            </main>
        </ScreenContainerComponent>
    );
}