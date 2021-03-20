<template>
  <div>
    <p> count 当前的值:{{count}}</p>

    <button @click="add">+1</button>
  </div>
</template>
<script>
import { mapState } from vuex
export default {
  methods: {
    add() {
      //   this.$store.state.count++ 不使用直接修改
      this.$store.commit('add')
    },
  }, computed: {
    ...mapState['count']
  }
}
</script>