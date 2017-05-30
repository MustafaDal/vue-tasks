<template>
  <div class="">
    <div class="card">
      <div class="card-block">
        <task-update v-if="isEditing" :task="task"></task-update>
        <div v-else>
          <p class="card-text">{{task.content}}</p>
          <p class="card-text">
            <small class="text-muted">
              <strong>Başlangiç Tarihi:</strong> {{task.start_date}} 
              <-->
              <strong>Bitiş Tarihi:</strong> {{task.end_date}}
            </small>
          </p>
        </div>
      </div>

      <div class="card-footer text-muted">
        <div class="row">
          <div class="col-3">
            <strong class="card-link pull-md-right"><small>{{task.status}}  <span class="badge badge-default">{{task.id}}</span></small></strong>
          </div>
          <div class="col d-flex justify-content-end">
            <ul class="list-inline">
              <li class="list-inline-item">
                <select v-model="task.status" class="form-control">
                  <option value="checked">Checked</option>
                  <option value="waiting">Waiting</option>
                  <option value="done">Done</option>
                </select>
              </li>
              <li class="list-inline-item"><a @click.prevent="task.archieved = !task.archieved" href="#" class="card-link">{{task.archieved ? 'Arşivden Çıkar' : 'Arşivle'}}</a></li>
              <li class="list-inline-item"><a @click.prevent="update" v-if="isEditing" href="#" class="card-link">Güncelle</a></li>
              <li class="list-inline-item"><a @click.prevent="edit" v-if="!isEditing" href="#" class="card-link">Düzenle</a></li>
              <li class="list-inline-item"><a @click.prevent="cancel" v-if="isEditing" href="#" class="card-link">Vazgeç</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskUpdate from '@/components/TaskUpdate'

export default {
  name: 'TaskItem',
  components: { TaskUpdate },
  data () {
    return {
      isEditing: false,
      cacheTask: {}
    }
  },
  props: {
    task: {
      content: {
        type: String,
        required: true
      },
      start_date: {
        type: Date,
        required: true
      },
      end_date: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      archieved: {
        type: Boolean,
        required: true
      }
    }
  },
  methods: {
    update: function () {
      this.isEditing = false
    },
    edit: function () {
      this.isEditing = true
      Object.assign(this.cacheTask, this.task)
    },
    cancel: function () {
      this.isEditing = false
      Object.assign(this.task, this.cacheTask)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 30px;
}
.card .card-footer .list-inline {
  margin-bottom: 0;
}
</style>
