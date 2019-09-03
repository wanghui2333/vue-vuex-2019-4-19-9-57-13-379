<template>
  <div>
    <input type="text" v-model="inputtingText" />
    <button @click="addTodoList">Add</button>
  </div>
</template>

<script>
export default {
  name: "CreateFormComponent",
    data: function() {
      return {
        inputtingText: null
      };
    },
  methods: {
    addTodoList: function() {
      let data = {
        content: this.inputtingText,
        id: this.$store.state.index,
        status: "active"
      }
      this.$store.state.index++;
      this.$store.commit('addNewData', data);
    }
  }
};
</script>

<style scoped>
</style>