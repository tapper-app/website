import React from "react";
import ScreenContainerComponent from "../common/screen.container.component";
import ToolbarComponents from "../common/toolbar.components";
import AppFooterComponent from "../views/app.footer.component";
import DownloadsListContent from "../views/downloads.list.content";

export default function DownloadsPageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - Downloads"}>
            <main>
                <ToolbarComponents />
                <DownloadsListContent />
                <AppFooterComponent />
            </main>
        </ScreenContainerComponent>
    );
}