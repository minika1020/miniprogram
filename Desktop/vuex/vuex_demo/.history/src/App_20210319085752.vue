<template>
  <div>
    <my-add></my-add>
    -----------------
    <my-sub></my-sub>

  </div>
</template>

<script>
import Add from './components/add.vue'
import Sub from './components/sub.vue'
import Async from './components/sub.vue'

export default {
  name: 'App',
  components: {
    'my-add': Add,
    'my-sub': Sub
  }
}
</script>

