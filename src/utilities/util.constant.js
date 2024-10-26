
export const AuthenticatedRouteNames = {
    Dashboard: '/',
    QUOTE: '/admin/qoutes',
    SETTING: '/admin/settings',
    USERS: '/admin/designers',
    PRODUCTS: '/admin/shows/products-of-category/:category/:subcategory',
    DESIGNS: '/admin/shows/designs-of-category/:category',
    SEARCH: '/admin/shows/search-page/:pageno',
    LOGOUT: '/logout',
}

export const UnAuthenticatedRoutesNames = {
    HOME: '/',
    ABOUT: '/home-styler/about',
    SHOP: '/home-styler/category/:category',
    PRODUCTS: '/home-styler/product-category/:prodCategory',
    CONTACT: '/home-styler/contact-us',
    WISHLIST: '/home-styler/wishlist',
    FEEDBACK: '/home-styler/feedback',
    DESIGNERS:'/home-styler/designers',
    GALLERY:'/home-styler/gallery',
    SITEMAP: '/home-styler/sitemap',
    DETAIL: '/home-styler/detail/design/:design',
    LOGIN: '/home-styler/login',
    PRODUCTDETAIL: '/home-styler/detail/product/:product'
}
