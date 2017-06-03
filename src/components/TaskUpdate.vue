<template>
  <div class="task-update">
    <form class="row">
      <div class="col-7">
        <div class="form-group">
          <label>Açıklama Alanı</label>
          <textarea v-model="cacheTask.content" class="form-control" rows="5"></textarea>
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label>Başlangıç Tarihi</label>
          <input v-model="cacheTask.start_date" data-model="start_date" type="text" class="form-control form-datepicker" placeholder="" />
        </div>
        <div class="form-group">
          <label>Bitiş Tarihi</label>
          <input v-model="cacheTask.end_date" data-model="end_date" type="text" class="form-control form-datepicker" placeholder="" />
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
  props: {
    cacheTask: {
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
  mounted () {
    const cacheTask = this.cacheTask
    $('.form-datepicker').datepicker()
       .on('changeDate', function (e) {
         if ($(this).data('model')) {
           cacheTask[$(this).data('model')] = $(this).val()
         }
       })
  },
  destroyed () {
    $('.form-datepicker').datepicker('destroy')
    $('.datepicker').remove()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
