import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Product from '../views/ProductPage.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/CatergoryPage.vue'
import Confirmation from '../views/ConfirmationPage.vue'
import Favourite from '../views/FavouritePage.vue'
import Contact from '../views/ContactPage.vue';
import AboutUs from '../views/AboutUs.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/HomePageVue",
    name: "HomePageVue",
    component: Home
  },
  {
    path: "/ProductPageVue/:id",
    name: "ProductPageVue",
    component: Product
  },
  {
    path: "/CheckoutVue",
    name: "CheckoutVue",
    component: Checkout
  },
  {
    path: "/CategoryPageVue",
    name: "CatergoryPage",
    component: Category
  },
  {
    path: "/ConfirmationPageVue",
    name: "ConfirmationPageVue",
    component: Confirmation
  },
  {
    path: "/FavouritePageVue",
    name: "FavouritePageVue",
    component: Favourite
  },
  {
    path: "/ContactPageVue",
    name: "ContactPageVue",
    component: Contact
  },
  {
    path: "/AboutUsVue",
    name: "AboutUsVue",
    component: AboutUs
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
