<template>
  <div class="task-editor">
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
      <div class="col-12">
        <button @click.prevent="taskAdd" type="submt" class="btn btn-primary">Kaydet</button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/assets/css/bootstrap-datepicker.css'
import '@/../static/bootstrap-datepicker/js/bootstrap-datepicker.js'

export default {
  name: 'TaskEditor',
  data () {
    return {
      content: '',
      start_date: '',
      end_date: '',
      status: 'waiting',
      archieved: false
    }
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
  },
  methods: {
    taskAdd () {
      this.$store.dispatch('add', {
        id: Math.floor((Math.random() * 100000) + 1),
        content: this.content,
        start_date: this.start_date,
        end_date: this.end_date,
        status: this.status,
        archieved: this.archieved
      })
      // reset data
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
