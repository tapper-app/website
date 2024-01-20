import React from "react";
import ScreenContainerComponent from "../common/screen.container.component";
import ToolbarComponents from "../common/toolbar.components";
import HomeBannerComponent from "../views/home.banner.component";

export default function HomePageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - ADB Interface Manager"}>
            <ToolbarComponents />
            <HomeBannerComponent />
        </ScreenContainerComponent>
    );
}
