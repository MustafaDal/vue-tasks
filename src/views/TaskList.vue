<template>
  <div class="">
    <div class="row">
      <div class="col-2">
        <a @click.prevent="editorActive = !editorActive" href="#" class="btn btn-outline-primary">Editörü {{ !editorActive ? 'Göster' : 'Gizle' }}</a>
      </div>
      <div class="col-2">
        <a @click.prevent="filterActive = !filterActive" href="#" class="btn btn-outline-primary">Filtreleri {{ !filterActive ? 'Göster' : 'Gizle' }}</a>
      </div>
      <div class="col">
        <div class="row" v-if="filterActive">
          <div class="col">
            <fieldset class="form-group">
              <legend>Duruma Göre</legend>
              <select v-model="taskFilterOptions.statuFilter" class="form-control">
                <option value="">Statu Select</option>
                <option value="waiting">Waiting</option>
                <option value="checked">Checked</option>
                <option value="done">Done</option>
              </select>
            </fieldset>
          </div>
          <div class="col">
            <fieldset class="form-group">
              <legend>Arşiv Durumunu</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input v-model="taskFilterOptions.showArchieved" class="form-check-input" type="radio" name="dateArchieved" value="">
                  Tümü
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input v-model="taskFilterOptions.showArchieved" class="form-check-input" type="radio" name="dateArchieved" value="false">
                  Arşivde Olmayanlar
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input v-model="taskFilterOptions.showArchieved" class="form-check-input" type="radio" name="dateArchieved" value="true">
                  Arşivdeki Tasklar
                </label>
              </div>
            </fieldset>
          </div>
          <div class="col">
            <fieldset class="form-group">
              <legend>Bitiş Tarihi</legend>
              <div class="form-check">
                <label class="form-check-label">
                <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="">
                  Tümü
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="in-of-date">
                  Güncel Tasklar
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="out-of-date">
                  Günü Geçmiş Tasklar
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="end-of-date">
                  Bugün Son Günü Olan Tasklar
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>

    <hr v-if="editorActive" />

    <task-editor v-if="editorActive"></task-editor>
    
    <hr />

    <div class="row">
      <task-item 
        v-for="task in filteredTasks"
        :task="task"
        :key="task.id"
        class="col-6">
      </task-item>
    </div>
  </div>
</template>

<script>
import TaskEditor from '@/components/TaskEditor'
import TaskItem from '@/components/TaskItem'
import moment from 'moment'

export default {
  name: 'task_list',
  components: {
    TaskEditor,
    TaskItem
  },
  data () {
    return {
      taskFilterOptions: {
        statuFilter: '',
        showArchieved: '',
        dateFilter: ''
      },
      filterActive: false,
      editorActive: false
    }
  },
  created () {
    console.log(this)
    this.$http.get('/api').then(response => {
      this.$store.dispatch('allTasks', response.body.tasks)
    }, response => {
      console.error(response)
    })
  },
  computed: {
    filteredTasks: function () {
      let tasks = this.$store.getters.allTasks
      /*
      taskFilterOptions.showArchieved   -->> true, false                          \\ default false
      taskFilterOptions.statuFilter     -->> '', checked, waiting, done           \\ bos ise tumu
      taskFilterOptions.dateFilter      -->> normal, out-of-date, end-of-date     \\ normal, tarihi gecmemis task
      */
      // filter tasks with archieve
      if (this.taskFilterOptions.showArchieved !== '') {
        tasks = tasks.filter(task => {
          if (this.taskFilterOptions.showArchieved === 'true') {
            return task.archieved
          }
          return !task.archieved
        })
      }
      // filter tasks with status
      tasks = tasks.filter(task => {
        let result = false
        switch (this.taskFilterOptions.statuFilter) {
          case '':
            result = true
            break
          case 'checked':
            result = (task.status === 'checked')
            break
          case 'waiting':
            result = (task.status === 'waiting')
            break
          case 'done':
            result = (task.status === 'done')
            break
          default:
            result = false
        }
        return result
      })
      // filter tasks with date
      tasks = tasks.filter(task => {
        let result = false
        let dateNow = moment(moment().format('DD.MM.YYYY'), 'DD.MM.YYYY')
        let endDate = moment(task.end_date, 'DD.MM.YYYY')
        switch (this.taskFilterOptions.dateFilter) {
          case '':
            result = true
            break
          case 'in-of-date':
            result = (endDate.isSameOrAfter(dateNow))
            break
          case 'end-of-date':
            result = (endDate.isSame(dateNow))
            break
          case 'out-of-date':
            result = (endDate.isBefore(dateNow))
            break
          default:
            result = false
        }
        return result
      })
      return tasks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  fieldset.form-group {
    margin-bottom: 0;
  }
</style>
