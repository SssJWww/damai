<template>
    <div class="box">
        <input type="text" class="suoSou" placeholder="输入商品名称或输入宝贝标题">
        <span class="daoHang iconfont icon-viewlist"></span>
        <span class="FD iconfont icon-search"></span>
    </div>
</template>
<style lang="scss" scoped>
.box{
    height: .52rem;
    background: #ff4040;
    line-height: .49rem;
    position: relative;
}
    .suoSou{
        height: 0.38rem;
        width: 3.08rem;
        border-radius:1.2rem;
        outline:none;
        border: 0;
       margin-left: 0.1rem;
       padding-left: .4rem;
       font-size: 16px;
       background-color: white ;

    }
    .daoHang{
        font-size: 0.26rem;
        display: block;
        position: absolute;
        top:0rem;
        right: 0.18rem;
        color: white
    }
    .FD{
        position: absolute;
        top: 0rem;
        left: 0.2rem;
        font-size: .2rem
    }
</style>
