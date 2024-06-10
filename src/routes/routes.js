import config from '~/config';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Payment from '~/pages/Payment';
import Profile from '~/pages/Profile';
import CourseDetail from '~/pages/CourseDetail';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import Me from '~/pages/Me';
import Tab from '~/pages/Me/Study/Tab';
import TagSetting from '~/pages/Setting/Tab';
import Watch from '~/pages/Watch';
import Setting from '~/pages/Setting';
// import Register from '~/pages/Register';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.course, component: CourseDetail },
    { path: config.routes.search, component: Search },

    // { path: config.routes.register, component: Register, layout: null },
];
const privateRoutes = [
    {
        path: config.routes.myCourses.path,
        component: Me,
        children: [
            { path: config.routes.myCourses.learning, component: Tab },
            { path: config.routes.myCourses.lists, component: Tab },
            { path: config.routes.myCourses.archived, component: Tab },
            { path: config.routes.myCourses.wishlist, component: Tab },
            { path: config.routes.myCourses.tools, component: Tab },
        ],
    },

    {
        path: config.routes.setting.path,
        component: Setting,
        children: [
            { path: config.routes.setting.personal, component: TagSetting },
            { path: config.routes.setting.security, component: TagSetting },
            { path: config.routes.setting.notifications, component: TagSetting },
        ],
    },
    { path: config.routes.watch, component: Watch, layout: null },
    { path: config.routes.payment, component: Payment, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
