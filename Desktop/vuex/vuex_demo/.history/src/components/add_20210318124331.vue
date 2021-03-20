<template>
  <div>
    <!-- <p> count 当前的值:{{count}}</p> -->
    <!-- <p> count 当前的值:{{$store.state.count}}</p> -->
    <p> count 当前的值:{{showNum}}</p>

    <button @click="btnhandle1">+1</button>
    <button @click="btnhandle2">+N</button>
    <button @click="btnhandle3">+N Async</button>
  </div>
</template>
<script>

//第二种方式 获取值,方法
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations(['addN']),
    ...mapActions(['addAsync']),
    btnhandle1() {
      //   this.$store.state.count++ 不使用直接修改
      this.$store.commit('add')
    },
    btnhandle2() {
      //   this.$store.commit('addN', 5)
      this.addN(3)
    },
    btnhandle3() {

      //   this.$store.dispatch('addAsync', 5)
      this.addAsync(5)

    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>