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
      this.$store.commit('addNewData', this.inputtingText);
    }
  }
};
</script>

<style scoped>
</style>