import React from "react";
import ScreenContainerComponent from "../common/screen.container.component";
import ToolbarComponents from "../common/toolbar.components";
import AppFooterComponent from "../views/app.footer.component";

export default function NotFoundPageComponent() {
    return (
        <ScreenContainerComponent title={"Tapper - Page Not Found"}>
           <main>
               <ToolbarComponents />
               <div className={"notFoundContent flex items-center justify-between mx-auto"}>
                   <div className={"p-4 mx-auto"} style={{ textAlign: "center" }}>
                       <h1><strong>Content Not Found</strong></h1>
                       <h1>The Page You are searching for Not Found, Try Another Link Please ...</h1>
                   </div>
               </div>
               <AppFooterComponent />
           </main>
        </ScreenContainerComponent>
    );
}
