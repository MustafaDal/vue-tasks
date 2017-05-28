<template>
  <div class="">
    <div class="row">
      <div class="col-2">
        <a @click.prevent="editorActive = true" v-if="!editorActive" href="#" class="btn btn-outline-primary">Editürü Göster</a>
        <a @click.prevent="editorActive = false" v-if="editorActive" href="#" class="btn btn-outline-primary">Editürü Gizle</a>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <select v-model="taskFilterOptions.statuFilter" class="form-control">
              <option value="">All of Them</option>
              <option value="checked">Checked</option>
              <option value="waiting">Waiting</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div class="col">
            <label class="form-check-label">
            <input v-model="taskFilterOptions.showArchieved" class="form-check-input" type="checkbox" value="">
              Arşivde Olanları Göster
            </label>
          </div>
          <div class="col">
            <label class="form-check-label">
            <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="">
              Güncel Tasklar
            </label>
          </div>
          <div class="col">
            <label class="form-check-label">
            <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="out-of-date">
              Günü Geçmiş Tasklar
            </label>
          </div>
          <div class="col">
            <label class="form-check-label">
            <input v-model="taskFilterOptions.dateFilter" class="form-check-input" type="radio" name="dateFilter" value="end-of-date">
              Bugün Son Günü Olan Tasklar
            </label>
          </div>
        </div>
      </div>
    </div>

    <hr v-if="editorActive" />

    <task-editor v-if="editorActive" @taskAdd="add"></task-editor>
    
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
import moment from 'moment'
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
      taskFilterOptions: {
        statuFilter: '',
        showArchieved: false,
        dateFilter: ''
      },
      editorActive: false,
      tasks: [{
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        start_date: '15.05.2017',
        end_date: '28.05.2017',
        status: 'waiting',
        archieved: false
      }, {
        id: 2,
        content: 'Nunc ac justo quis neque consectetur dignissim ut laoreet nulla.',
        start_date: '24.05.2017',
        end_date: '30.05.2017',
        status: 'done',
        archieved: false
      }, {
        id: 3,
        content: 'Proin molestie sem quis mauris auctor tempus.',
        start_date: '20.05.2017',
        end_date: '27.05.2017',
        status: 'checked',
        archieved: false
      }, {
        id: 4,
        content: 'Quisque mollis magna ac mi feugiat, non ullamcorper mi consectetur.',
        start_date: '27.05.2017',
        end_date: '27.05.2017',
        status: 'done',
        archieved: true
      }]
    }
  },
  computed: {
    filteredTasks: function () {
      let tasks = this.$data.tasks
      /*
      taskFilterOptions.showArchieved   -->> true, false                          \\ default false
      taskFilterOptions.statuFilter     -->> '', checked, waiting, done           \\ bos ise tumu
      taskFilterOptions.dateFilter      -->> normal, out-of-date, end-of-date     \\ normal, tarihi gecmemis task
      */
      // filter tasks with archieve
      tasks = tasks.filter(task => {
        if (this.taskFilterOptions.showArchieved) {
          return task.archieved
        }
        return !task.archieved
      })
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
  },
  methods: {
    add: function (task) {
      this.tasks.unshift(task)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
