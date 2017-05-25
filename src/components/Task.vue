<template>
  <div class="">
    <div class="card">
      <div class="card-block">
        <p class="card-text">{{task.content}}</p>
        <p class="card-text">
          <small class="text-muted">{{task.start_date}} {{task.end_date}}</small>
        </p>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="card-link">{{task.status}}</a>
        <a href="#" class="card-link">{{task.archieved}}</a>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
