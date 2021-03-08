import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/Button'
import Container from '@/components/Container'
import TableIndex from '@/components/TableIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/container',
      name: 'container',
      component: Container
    },
    {
      path: '/table',
      name: 'table',
      component: TableIndex
    }
  ]
})
