import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/views/TaskList'
import TaskItem from '@/components/Task'

Vue.component(TaskItem)

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
