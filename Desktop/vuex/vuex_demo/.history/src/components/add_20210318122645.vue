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
import { mapMutation } from 'vuex'
export default {
  methods: {
    ...mapMutation(['addN']),
    btnhandle1() {
      //   this.$store.state.count++ 不使用直接修改
      this.$store.commit('add')
    },
    btnhandle2() {
      //   this.$store.commit('addN', 5)
      this.addN(3)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>