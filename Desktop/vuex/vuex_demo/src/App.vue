<template>
  <div>
    <my-add></my-add>
    -----------------
    <my-sub></my-sub>
    ----------------
    <my-async></my-async>

  </div>
</template>

<script>
import Add from './components/add.vue'
import Sub from './components/sub.vue'
import Async from './components/async-await'

export default {
  name: 'App',
  components: {
    'my-add': Add,
    'my-sub': Sub,
    'my-async': Async
  }
}
</script>

