<template>
  <div class="">
    <task-item 
      v-for="item in tasks"
      :task="item"
      :key="item.id">
    </task-item>
  </div>
</template>

<script>
import TaskItem from '@/components/Task'

export default {
  name: 'task_list',
  data () {
    return {
      tasks: [{
        id: 1,
        content: 'vue task sistemini kur',
        start_date: new Date(),
        end_date: new Date(),
        status: 'waiting',
        archieved: false
      }, {
        id: 2,
        content: 'vue task sistemini kur 2',
        start_date: new Date(),
        end_date: new Date(),
        status: 'waiting',
        archieved: false
      }]
    }
  },
  components: {
    TaskItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
