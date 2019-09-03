<template>
  <div>
    <ul>
      <li v-for="(item, index) in filterTodoList" :key="index">
        {{ index }}.
        <input
          type="checkbox"
          @click="changeStatus(item)"
          :checked="item.status === 'completed'"
        />
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
      let filterList = [];
      for (let index = 0; index < this.$store.state.todoList.length; index++) {
        const element = this.$store.state.todoList[index];
        if (this.$store.state.currentFilter === "all" || this.$store.state.currentFilter === element.status) {
          filterList.push({
            content: element.content,
            status: element.status,
            id: element.id
          });
        }
      }
      return filterList;
    }
  },
  methods: {
    changeStatus: function(item) {
      let status = item.status === "active" ? "completed" : "active";
      let index = parseInt(item.id);
      this.$store.state.todoList[index].status = status;
    }
  }
};
</script>

<style scoped>
</style>