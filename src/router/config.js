import layout from './layout'

let LayoutData = []
// 多维数据变一纬数组 ==》递归
layout.forEach(_forEach)
function _forEach(data) {
    if (data.children) {
        data.children.forEach(_forEach)
    } else {
        delete data.flag;
        LayoutData.push(data)
    }
}

const routes = [
    {
        path: "/login",
        component: () => import("../views/Login"),
    },
    {
        path: '/layout',
        component: () => import('../views/Layout'),
        children: [
            {
                path: '',
                redirect: LayoutData[0].path,
            },
            ...LayoutData
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('../views/Found')
    }
]

export default routes