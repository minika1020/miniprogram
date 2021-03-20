<template>
  <div>
    <p>测试异步</p>
  </div>
</template>

<script>
export default {
  methods: {
    tesstAsync() {
      setTimeout(() => {
        console.log('这是定时器输出');
      }, 2000);
    }
  }
}
</script>