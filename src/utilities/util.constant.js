
export const AuthenticatedRouteNames = {
    Dashboard: '/',
    QUOTE: '/admin/qoutes',
    SETTING: '/admin/settings',
    USERS: '/admin/users',
    //Products
    PRODUCTS: '/admin/shows/products-of-category/:category/:subcategory',
    SEARCH:'/admin/shows/search-page/:pageno',
    //auth
    LOGOUT: '/logout',
}

export const UnAuthenticatedRoutesNames = {
    HOME: '/',
    ABOUT: '/website/about',
    DETAIL: '/website/detail/show/:id',
    LOGIN: '/website/login',
    REGISTER: '/website/register',
    Designs:"/website/:id/designs",
}
