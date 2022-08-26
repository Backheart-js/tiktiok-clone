// Layout
import { HeaderOnly } from "~/conponents/Layout";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/@:nickname', component: Profile, layout: HeaderOnly},
    {path: '/upload', component: Upload, layout: HeaderOnly}
];

const privateRoute = [

];

export {privateRoute, publicRoutes}