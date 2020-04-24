import Home1 from './components/Home.vue'
import Menu1 from './components/Menu.vue'
import Admin1 from './components/Admin.vue'
import About1 from './components/about/About.vue'
import Login1 from './components/Login.vue'
import Register1 from './components/Register.vue'

// 引入二级路由
import Contact1 from "./components/about/Contact.vue"
import History1 from "./components/about/History.vue"
import Delivery1 from "./components/about/Delivery.vue"
import OrderingGuide1 from "./components/about/OrderingGuide.vue"

// 引入三级路由
import PersonName1 from "./components/about/contact/PersonName.vue"
import PhoneNumber1 from "./components/about/contact/PhoneNumber.vue"

export const routes = [
    {path: '/', name: 'homeLink', components: {
        default: Home1,
        'orderingGuide': OrderingGuide1,
        'delivery': Delivery1,
        'history': History1
    }},
    {path: '/menu', name: 'menuLink', component: Menu1},
    {path: '/admin', name: 'adminLink', component: Admin1},
    {path: '/about', name: 'aboutLink', component: About1, redirect: '/about/contact/phoneNumber', children: [
      {path: '/about/contact', name: 'contactLink', component: Contact1, children: [
        {path: '/about/contact/phoneNumber', name: 'phoneNumberLink', component: PhoneNumber1},
        {path: '/about/contact/personName', name: 'personNameLink', component: PersonName1}
      ]},
      {path: '/about/history', name: 'historyLink', component: History1},
      {path: '/about/delivery', name: 'deliveryLink', component: Delivery1},
      {path: '/about/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide1},
    ]},
    {path: '/login', name: 'loginLink', component: Login1},
    {path: '/register', name: 'registerLink', component: Register1},
    {path: '*', redirect: '/'}
  ]