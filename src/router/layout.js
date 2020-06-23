const layout = [
    {
        path: '/layout/home',
        name: '首页',
        icon:'shouye icon-shouye',
        component: () => import('../views/Home')
    },
    {
        path: '/layout/icon',
        name: '图标',
        icon:'图标 icon-tubiao1',
        component: () => import('../views/Icon')
    },
    {
        name: '图表',
        icon:'图表 icon-tubiao',
        children:[
            {
                path:'/layout/charts/bar',
                name:'柱状图',
                component: () => import('../views/Charts/Bar')
            }, {
                path:'/layout/charts/line',
                name:'折线图',
                component: () => import('../views/Charts/Line')
            }
        ]
    },
    {
        name: '文档',
        icon:'文档 icon-ziyuan',
        children:[
            {
                path:'/layout/docs/drag',
                name:'拖拽',
                component:() =>import('../views/Docs/Drag')
            },
            {
                path:'/layout/docs/xlsx',
                name:'解析xlsx',
                component: () =>import('../views/Docs/Xlsx')
            }
        ]
    },
    {
        name: '游戏',
        icon:'游戏 icon-youxi-yuanshijituantubiao',
        children:[
            {
                path:'/layout/game/greedysnake',
                name:"贪吃 🐍",
                component: ()=>import('../views/Game/GreedySnake')
            }
        ]
    },
    {
      path:'/layout/personal',
      name:'个人中心',
      icon:'shouye icon-shouye',
      component: () => import ('../views/Personal')  
    }
]

export default layout