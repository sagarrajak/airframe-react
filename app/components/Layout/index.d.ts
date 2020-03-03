export default Layout;
declare namespace Layout {
    export { LayoutSidebar as Sidebar };
    export { LayoutNavbar as Navbar };
    export { LayoutContent as Content };
}
import { withPageConfig } from "./withPageConfig";
import { setupPage } from "./setupPage";
export const PageConfigProvider: any;
export const PageConfigConsumer: any;
export { withPageConfig, setupPage };
