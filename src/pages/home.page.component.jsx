import React from "react";
import ScreenContainerComponent from "../common/screen.container.component";
import ToolbarComponents from "../common/toolbar.components";
import HomeBannerComponent from "../views/home.banner.component";
import HomeInfoSection from "../views/home.info.section";
import HomeAppFeatures from "../views/home.app.features";
import HomeRepositoriesComponent from "../views/home.repositories.component";
import AppFooterComponent from "../views/app.footer.component";

export default function HomePageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - ADB Interface Manager"}>
            <ToolbarComponents />
            <main>
                <HomeBannerComponent />
                <HomeInfoSection />
                <HomeAppFeatures />
                <HomeRepositoriesComponent />
                <AppFooterComponent />
            </main>
        </ScreenContainerComponent>
    );
}
