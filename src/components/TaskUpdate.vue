<template>
  <div class="task-update">
    <form class="row">
      <div class="col-7">
        <div class="form-group">
          <label>Açıklama Alanı</label>
          <textarea v-model="content" class="form-control" rows="5"></textarea>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label>Başlangıç Tarihi</label>
          <input v-model="start_date" data-model="start_date" type="text" class="form-control datepicker" placeholder="" />
        </div>
        <div class="form-group">
          <label>Bitiş Tarihi</label>
          <input v-model="end_date" data-model="end_date" type="text" class="form-control datepicker" placeholder="" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/assets/css/bootstrap-datepicker.css'
import '@/../static/bootstrap-datepicker/js/bootstrap-datepicker.js'

export default {
  name: 'TaskUpdate',
  data () {
    return {
      content: '',
      start_date: '',
      end_date: ''
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
      }
    }
  },
  created () {
    this.content = this.task.content
    this.start_date = this.task.start_date
    this.end_date = this.task.end_date
  },
  mounted () {
    const self = this
    $('.datepicker').datepicker()
      .on('changeDate', function (e) {
        if ($(this).data('model')) {
          self[$(this).data('model')] = $(this).val()
        }
      })
  },
  destroyed () {
    $('.datepicker').datepicker('destroy')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
