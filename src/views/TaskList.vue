<template>
  <div class="">
    <form>
      <div class="form-group">
        <label for="exampleTextarea">Example textarea</label>
        <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Başlangıç Tarihi</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Başlangıç Tarihi" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Bitiş Tarihi</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bitiş Tarihi" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br />

    <task-item 
      v-for="item in tasks"
      :task="item"
      :key="item.id">
    </task-item>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem'

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
        status: 'done',
        archieved: true
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
