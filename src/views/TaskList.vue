<template>
  <div class="">
    <a @click.prevent="editorActive = true" v-if="!editorActive" href="#" class="btn btn-outline-primary">Editürü Göster</a>
    <a @click.prevent="editorActive = false" v-if="editorActive" href="#" class="btn btn-outline-primary">Editürü Gizle</a>
    <hr v-if="editorActive" />

    <task-editor v-if="editorActive"></task-editor>
    
    <hr />

    <div class="row">
      <task-item 
        v-for="item in tasks"
        :task="item"
        :key="item.id"
        class="col-6">
      </task-item>
    </div>
  </div>
</template>

<script>
import TaskEditor from '@/components/TaskEditor'
import TaskItem from '@/components/TaskItem'

export default {
  name: 'task_list',
  components: {
    TaskEditor,
    TaskItem
  },
  data () {
    return {
      editorActive: false,
      tasks: [{
        id: 1,
        content: 'vue task sistemini kur',
        start_date: new Date().toLocaleDateString(),
        end_date: new Date().toLocaleDateString(),
        status: 'waiting',
        archieved: false
      }, {
        id: 2,
        content: 'vue task sistemini kur 2',
        start_date: new Date().toLocaleDateString(),
        end_date: new Date().toLocaleDateString(),
        status: 'done',
        archieved: true
      }, {
        id: 3,
        content: 'vue task sistemini kur 3',
        start_date: new Date().toLocaleDateString(),
        end_date: new Date().toLocaleDateString(),
        status: 'waiting',
        archieved: false
      }, {
        id: 4,
        content: 'vue task sistemini kur 4',
        start_date: new Date().toLocaleDateString(),
        end_date: new Date().toLocaleDateString(),
        status: 'done',
        archieved: true
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
