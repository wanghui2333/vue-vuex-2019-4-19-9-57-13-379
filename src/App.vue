<template>
  <div id="app">
    <TitleComponent></TitleComponent>
    <div id="list">
      <CreateFormComponent/>
      <ul>
        <li v-for="(item, index) in filterTodoList" :key="index">
            <CheckboxComponent :item="item" :index="index"></CheckboxComponent>
        </li>
      </ul>
    </div>
    <button @click="statusChange('all')">ALL</button>
    <button @click="statusChange('active')">Active</button>
    <button @click="statusChange('completed')">Completed</button>
    <div>当前的状态为:{{ currentFilter }}</div>
  </div>
</template>

<script>
import CreateFormComponent from "./components/CreateFormComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import TitleComponent from "./components/TitleComponent";

export default {
  name: "app",
  components: {
    CreateFormComponent,
    CheckboxComponent,
    TitleComponent
  },
  data: function() {
    return {
      currentFilter: "active"
    };
  },
  methods: {
    statusChange: function(status) {
      this.currentFilter = status;
    }
  },
  computed: {
    filterTodoList: function() {
      let filterList = this.$store.state.todoList.filter(item => {
        return (
          this.currentFilter === "all" || this.currentFilter === item.status
        );
      });
      return filterList;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.items {
  list-style: none;
  text-align: left;
  line-height: 30px;
}

.items li.completed {
  text-decoration: line-through;
}

.filter a {
  margin: 0 10px;
  line-height: 30px;
}

.filter a.active {
  color: #f60;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
}
</style>
