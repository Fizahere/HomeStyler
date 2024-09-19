
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
    ABOUT: '/HomeStyler/about',
    SHOP:'/HomeStyler/category/:category',
    // DETAIL: '/HomeStyler/detail/design/:design',
    LOGIN: '/HomeStyler/login',
    REGISTER: '/HomeStyler/register',
}
