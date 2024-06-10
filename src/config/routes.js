const routes = {
    home: '/',
    cart: '/cart',
    payment: '/payment',
    profile: '/profile',
    search: '/search',
    course: '/courses/:slug',
    login: '/login',
    register: '/register',
    me: '/me',
    watch: '/watch',
    myCourses: {
        path: '/me',
        learning: 'learning',
        lists: 'lists',
        wishlist: 'wishlist',
        archived: 'archived',
        tools: 'learning-tools',
    },
    setting: {
        path: '/setting',
        personal: 'personal',
        security: 'security',
        notifications: 'notifications',
    },
};
export default routes;
