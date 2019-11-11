<template>
    <div>
        商城
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  mounted () {
    Axios({
      url: '/api/index/indexBanner',
      methods: 'post'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
