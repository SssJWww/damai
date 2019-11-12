<template>
    <div>
        人气热卖
    </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state.shoplist.length === 0) {
      this.$store.dispatch('getList')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>
