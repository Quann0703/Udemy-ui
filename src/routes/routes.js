import config from '~/config';
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import MyCourses from '~/pages/MyCourses';
import Payment from '~/pages/Payment';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.payment, component: Payment },
    { path: config.routes.myCourses, component: MyCourses },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
