<template>
  <div>
    <p> count 当前的值:{{$store.state.count}}</p>
    <button @click="sub">-1</button>
  </div>
</template>
<script>
export default {
  methods: {
    sub() {
      this.$store.state.count--
    }
  }
}
</script>