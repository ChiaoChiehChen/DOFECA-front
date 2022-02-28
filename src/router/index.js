import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'DOFECA'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊 | DOFECA'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入 | DOFECA'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於我們 | DOFECA'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: '最新消息 | DOFECA'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      title: ' 商品 | DOFECA'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '所有產品 | DOFECA'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '購物車 | DOFECA',
      login: true
    }
  },
  // {
  //   path: '/orders',
  //   name: 'Orders',
  //   component: () => import(/* webpackChunkName: "orders" */ '../views/MemberOrders.vue'),
  //   meta: {
  //     title: '訂單 | DOFECA',
  //     login: true
  //   }
  // },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    children: [
      {
        path: 'memberOrders',
        name: 'MemberOrders',
        component: () => import(/* webpackChunkName: "member" */ '../views/MemberOrders.vue'),
        meta: {
          login: true,
          title: '會員訂單 | DOFECA'
        }
      },
      {
        path: 'memberLessons',
        name: 'MemberLessons',
        component: () => import(/* webpackChunkName: "member" */ '../views/MemberLessons.vue'),
        meta: {
          login: true,
          title: '會員課程訂單 | DOFECA'
        }
      }
    ]
  },
  // 管理員
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '管理 | DOFECA'
        }
      },
      {
        path: 'adminproducts',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理 | DOFECA'
        }
      },
      {
        path: 'adminorders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '訂單管理 | DOFECA'
        }
      },
      {
        path: 'adminlessons',
        name: 'AdminLessons',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminLessons.vue'),
        meta: {
          login: true,
          admin: true,
          title: '課程管理 | DOFECA'
        }
      },
      {
        path: 'adminlessonsorders',
        name: 'AdminLessonsOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminLessonsOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '課程訂單管理 | DOFECA'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請先登入'
    })
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
