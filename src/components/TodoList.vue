<template>
    <div class="todo-list-container">
          Ja sam todo lista
          <h2>Your list</h2>

        
            <h3>from store tasks</h3>
          <ul>
              <li v-for="task of tasks" :key="task.id"  @click="completeTask(task)">
                    {{task.text}}        
                    {{task.id}}   
                    {{task.complete}}       
              </li>
          </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    computed: {
    ...mapState(["tasks"]),
    },
    methods:{
        completeTask(task){
             this.$store.commit("COMPLETE_TASK", {task})
        }
    },
    props: {
        tasksProp: {
            type: Array,
            default: ()=>[]
        }
    }
}
</script>

<style lang="scss" scoped>

    .todo-list-container{

    }

</style>