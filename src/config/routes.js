const routes = {
    home: '/',
    cart: '/cart',
    payment: '/payment',
    profile: '/profile',
    search: '/search',
    course: '/course/:slug',
    me: '/me',
    watch: '/watch/:slug',
    myCourses: {
        path: '/me',
        learning: 'learning',
        lists: 'lists',
        wishlist: 'wishlist',
        archived: 'archived',
        tools: 'learning-tools',
    },
};
export default routes;
