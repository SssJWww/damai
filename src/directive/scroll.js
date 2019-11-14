import Vue from 'vue'
Vue.directive('scroll', {
  inserted (el, bind) {
    window.onscroll = function () {
      console.log(el, bind.value)
      // console.log('scroll', document.documentElement.scrollTop || document.body.scrollTop)
      if ((document.documentElement.scrollTop || document.body.scrollTop) >= 100) {
        bind.value.handleScroll(true)
      } else {
        bind.value.handleScroll(false)
      }
    }
  }
})
