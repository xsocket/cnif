<template>
    <div class="pro-content">
        <aside class="pro-sidebar">
            <Menu width="auto" theme="light">
                <router-link class="ivu-menu-item"  tag="li" to="/isotope/water">
                    <Icon type="ios-flask-outline" /> 酿造用水
                </router-link>
                <router-link class="ivu-menu-item"  tag="li" to="/isotope/type">
                    <Icon type="ios-pricetags-outline" /> 品种
                </router-link>
                <router-link class="ivu-menu-item"  tag="li" to="/isotope/year">
                    <Icon type="clock" /> 年份
                </router-link>
                <router-link class="ivu-menu-item"  tag="li" to="/isotope/district">
                    <Icon type="map" /> 产区
                </router-link>
                <router-link class="ivu-menu-item"  tag="li" to="/isotope/sugar">
                    <Icon type="ios-pulse" /> 不同糖来源
                </router-link>
            </Menu>
        </aside>
        <article class="pro-article">
            <router-view></router-view>
        </article>
    </div>
</template>
<style scoped>
.ivu-menu-item {
    border-bottom: 1px dashed #DDD;
}
.pro-sidebar {    
    border-top: 1px dashed #DDD;
}
</style>
