<template>
  <div>
    <button @click="statusChange('all')">ALL</button>
    <button @click="statusChange('active')">Active</button>
    <button @click="statusChange('completed')">Completed</button>
    <div>当前的状态为:{{ $store.state.currentFilter }}</div>
  </div>
</template>

<script>
export default {
  name: "BottomComponent",
  data: function () {
    return {
      title: "Jquery To Do List",
      msg: "Simple Todo List with adding and filter by diff status."
    }
  },
  methods: {
    statusChange: function(status) {
      this.$store.state.currentFilter = status;
    }
  },
};
</script>

<style scoped>
</style>