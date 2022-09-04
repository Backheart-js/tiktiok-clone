// Layout
import { HeaderOnly } from "~/conponents/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import routes from "~/config/routes";

const publicRoutes = [
    {path: routes.home, component: Home},
    {path: routes.following, component: Following},
    {path: routes.profile, component: Profile, layout: HeaderOnly},
    {path: routes.upload, component: Upload, layout: HeaderOnly}
];

const privateRoute = [

];

export {privateRoute, publicRoutes}