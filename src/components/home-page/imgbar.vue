<template>
    <div>
        <img src="/img/businessAd.1de8fa80.png" alt="" @click="handclick">
    </div>
</template>
<script>
export default {
  methods: {
    handclick () {
      this.$router.push('/submit')
    }
  }
}
</script>
<style lang="scss" scoped>
div{
    position: relative;
    height: 1.23rem;
    background: white;

    img{
        height: .99rem;
        width: 3.53rem;
        position: relative;
        top: .1rem;
        left: .1rem;
    }
}
</style>
