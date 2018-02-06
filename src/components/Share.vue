<template>
  <div class="Share">
    <span @click="expand"><i class="fas fa-share"></i></span>
    <span @click="expand"><i class="fab fa-facebook-f"></i></span>
    <span @click="expand"><i class="fab fa-line"></i></span>
    <span @click="expand"><i class="fab fa-instagram"></i></span>
  </div>
</template>

<script>
export default {
  name: 'Share',
  data: function () {
    return {
      isExpand: true
    }
  },
  methods: {
    expand: function () {
      console.log('abc')
    }
  }
}
</script>

<style scoped>
  .Share {
    display: flex;
  }
  .Share i {
    font-size: 21px;
    margin: 10px;
  }
  .hide {
    opacity: 0;
  }
</style>
