<template>
  <div id="app">
    <router-view />
    <!-- <todo-list :tasksProp="initialTasks" /> -->
  </div>
</template>

<script>
// import TodoList from './components/TodoList.vue'
import initialTasks from './initial-tasks'


export default {
  name: 'App',
  data(){
    return {
      initialTasks
    }
  },
  components: {
    // TodoList
  }
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}


</style>
