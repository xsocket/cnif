<template>
    <div id="app">
        <pro-header logo="static/img/logo.png" />
        <router-view></router-view>
    </div>
</template>

<script>
    import ProHeader from './components/pro-header.vue'

    export default {
        name: 'CNIF',
        title: '中国葡萄酒同位素数据银行',
        components: { ProHeader }
    }
</script>

<style lang="less">
</style>
