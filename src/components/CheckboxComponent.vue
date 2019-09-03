<template>
  <div>
    <ul>
      <li v-for="(item, index) in filterTodoList" :key="index">
        {{ index }}.
        <input type="checkbox" />
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  computed: {
    filterTodoList: function() {
      let filterList = this.$store.state.todoList.filter(item => {
        return (
          this.$store.state.currentFilter === "all" ||
          this.$store.state.currentFilter === item.status
        );
      });
      return filterList;
    }
  }
};
</script>

<style scoped>
</style>