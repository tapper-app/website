import React from "react";
import ScreenContainerComponent from "../common/screen.container.component";
import ToolbarComponents from "../common/toolbar.components";

export default function NotFoundPageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - Page Not Found"}>
            <ToolbarComponents />
            <h1>Not Found</h1>
        </ScreenContainerComponent>
    );
}
