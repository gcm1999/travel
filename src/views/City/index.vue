<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>

  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input" />
  </div>
</template>
<script>
export default {
  name: "City",
};
</script>
<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl';


.search
    height .72rem
    padding 0 0.1rem
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        border-radius .06rem
        color #666
        padding 0 .1rem
        text-align center


.header
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    position relative
    .back-icon
        position absolute
        top 0
        left 0
        width 0.64rem
        text-align center
        font-size .4rem
        color #fff
</style>
