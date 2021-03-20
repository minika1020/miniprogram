<template>
  <div>
    <!-- <p> count 当前的值:{{count}}</p> -->
    <p> count 当前的值:{{$store.state.count}}</p>

    <button @click="btnhandle1">+1</button>
    <button @click="btnhandle2">+N</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    btnhandle1() {
      //   this.$store.state.count++ 不使用直接修改
      this.$store.commit('add')
    },
    btnhandle2() {
      this.$store.commit('addN', 5)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>