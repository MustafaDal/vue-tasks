import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/views/TaskList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task_list',
      component: TaskList
    }
  ]
})
