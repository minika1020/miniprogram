<template>
  <div>
    <p>测试异步</p>
  </div>
</template>

<script>
export default {
  methods: {
    async tesstAsync() {
      await new Promise((resove, reject) => {
        setTimeout(() => {
          resove(console.log('这是定时器输出'))

        }, 2000);
      })
      console.log('这不是定时器输出');

    },

  }, created() {
    // alert()
    this.tesstAsync()
  },
}
</script>