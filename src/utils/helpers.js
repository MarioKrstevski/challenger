export function uuid() {
    return Math.random()
      .toString(16)
      .slice(2);
  }

 export function saveStatePlugin(store) {
    store.subscribe(function(mutation, state) {
    console.log('im subscribing')
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  });
}

