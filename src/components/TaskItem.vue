<template>
  <div v-if="!task.archieved" class="">
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
        <a href="#" class="card-link">{{task.status}}</a>
        <a @click.prevent='task.archieved = !task.archieved' href="#" class="card-link">{{task.archieved ? 'Arşivden Çıkar' : 'Arşivle'}}</a>
        <a v-if='isEditing' href="#" class="card-link">Güncelle</a>
        <a @click.prevent='isEditing = !isEditing' href="#" class="card-link">{{!isEditing ? 'Düzenle' : 'Vazgeç'}}</a>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom: 30px;
}
</style>
