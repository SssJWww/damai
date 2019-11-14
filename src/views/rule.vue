<template>
    <div>
        <header class="h1">
            <router-link to="/city" tag="i" class="iconfont icon-back d1" style="font-size:0.2rem;"></router-link>
            <div class="d2">新手教程</div>
        </header>
        <img src="/img/guide_red.799ad217.jpg" alt="888" style=" width:100%; height:11rem;">
    </div>
</template>
<style lang="scss" scoped>
    .h1{
        width:3.6rem;
        height:0.51rem;
        position:relative;
        .d1{
            position:absolute;
            left:0.08rem;
            height:50%;
            margin-top:0.1rem;
            font-size: 0.21rem;

        }
        .d2{
            font-size: 0.19rem;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 0.8rem;
            height: 0.2rem;
            margin-left: -0.4rem;
            margin-top: -0.1rem;
        }
    }
    img{
        width: 3.6rem;
        height: 11rem;

    }
</style>
