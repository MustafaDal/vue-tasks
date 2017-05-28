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
          <div class="col">
            <strong class="card-link pull-md-right"><small>{{task.status}} - id: {{task.id}}</small></strong>
          </div>
          <div class="col text-right">
            <a @click.prevent="task.archieved = !task.archieved" href="#" class="card-link">{{task.archieved ? 'Arşivden Çıkar' : 'Arşivle'}}</a>
            <a @click.prevent="update" v-if="isEditing" href="#" class="card-link">Güncelle</a>
            <a @click.prevent="isEditing = !isEditing" href="#" class="card-link">{{!isEditing ? 'Düzenle' : 'Vazgeç'}}</a>
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
      isEditing: false
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
      this.task.content = this.$children[0].$data.content
      this.task.start_date = this.$children[0].$data.start_date
      this.task.end_date = this.$children[0].$data.end_date
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 30px;
}
</style>
