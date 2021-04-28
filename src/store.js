import Vuex from "vuex";
import Vue from "vue";
import initialTasks from './initial-tasks'
import { saveStatePlugin } from "./utils/helpers";


Vue.use(Vuex);

const tasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;


export default new Vuex.Store({
    plugins: [saveStatePlugin],
    state: {
      tasks,
    },
    getters: {
      
    },
    mutations: {
      COMPLETE_TASK(state, { task }){
          task.complete = true
      }
    },
  });
  