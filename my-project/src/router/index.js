import Vue from 'vue'
import Router from 'vue-router'
import introduce from '../components/contentVueFile/introduce'
import home from '../components/contentVueFile/home'
import employment from '../components/contentVueFile/employment'
import consult from '../components/contentVueFile/consult'

Vue.use(Router)
var routes = [{
  path: '/home',
  component: home
}, {
  path: '/introduce',
  component: introduce
}, {
  path: '/employment',
  component: employment
}, {
  path: '/consult',
  component: consult
}]

export default new Router({
  routes
})
