const navItems = [
    {
        title: 'HÀNG MỚI VỀ',
        id: 1,
    },
    {
        title: 'HÀNG BÁN CHẠY',
        id: 2,
    },
    {
        title: 'SẢN PHẨM',
        id: 3,
        children: [
            { title: 'Đầm', id: 4 },
            { title: 'Áo', id: 5 },
            { title: 'Áo sơ mi', id: 6 },
            { title: 'Áo kiểu', id: 7 },
            { title: 'Jumpsuit', id: 8 },
            { title: 'Chân váy', id: 9 },
            { title: 'Quần', id: 10 },
            { title: 'Homewear', id: 11 },
        ],
    },
    {
        title: 'UNIQUE COLLECTION',
        id: 12,
    },
    {
        title: 'BỘ SƯU TẬP',
        id: 13,
    },
    {
        title: 'PHỤ KIỆN',
        id: 14,
        subItems: [
            { title: 'Túi sách', id: 15 },
            { title: 'Giày', id: 16 },
            { title: 'Cài Áo', id: 17 },
        ],
    },
    {
        title: 'HOMEWEAR',
        id: 18,
    },
    {
        title: 'ĐỒ LÓT',
        id: 19,
    },
    {
        title: 'LADY ME',
        id: 20,
    },
    {
        title: 'SALE',
        id: 21,
        subItems: [
            { title: 'Sale 30%', id: 22 },
            { title: 'Sale 70%', id: 23 },
            { title: 'Sale 70% Áo Sơ Mi', id: 24 },
            { title: 'Sale 70% Áo Kiểu', id: 25 },
            { title: 'Sale 70% Đầm', id: 26 },
            { title: 'Sale 70% Quần', id: 27 },
            { title: 'Sale 70% Chân váy', id: 28 },
            { title: 'Sale 70% Áo Vest, Blazer', id: 29 },
        ],
    },
];
const submain = subItems.title.split(' ').join('');
const routes = {
    home: '/',
    login: '/login',
    signup: '/signup',
    account: '/account',
    cart: '/cart',
    ...navItems.reduce((result, item) => {
        result[item.title.toLowerCase()] = `/${item.title.toLowerCase()}`;
        if (item.children && item.children.length > 0) {
            item.children.forEach((child) => {
                result[child.title.toLowerCase()] = `/${item.title.toLowerCase()}/${child.title.toLowerCase()}`;
            });
        }
        if (item.subItems && item.subItems.length > 0) {
            item.subItems.forEach((subItems) => {
                result[submain.toLowerCase()] = `/${item.title.toLowerCase()}/${submain.toLowerCase()}`;
            });
        }
        return result;
    }, {}),
};

export default routes;
