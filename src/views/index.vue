<template>
    <div id="index" class="pro-content" style="padding:20px;">
        <Row :gutter="24">
            <Col :xs="24" :sm="8" :md="6" :lg="5">
                <Card style="background-color:#19be6b">
                    <router-link class="ivu-menu-item" to="/isotope/water">
                        <h1>酿造用水</h1>
                        <Icon type="ios-flask-outline" /> 
                    </router-link>
                    <h5>简要说明</h5>
                </Card>
            </Col>
            <Col :xs="24" :sm="8" :md="6" :lg="5">
                <Card style="background-color:#ff9900">
                    <router-link class="ivu-menu-item" to="/isotope/type">
                        <h1>品种数据</h1>
                        <Icon type="ios-pricetags-outline" /> 
                    </router-link>
                    <h5>简要说明</h5>
                </Card>
            </Col>
            <Col :xs="24" :sm="8" :md="6" :lg="5">
                <Card style="background-color:#2d8cf0">
                    <router-link class="ivu-menu-item" to="/isotope/year">
                        <h1>年份数据</h1>
                        <Icon type="clock" /> 
                    </router-link>
                    <h5>简要说明</h5>
                </Card>
            </Col>
            <Col :xs="24" :sm="8" :md="6" :lg="5">
                <Card style="background-color:#ed3f14">
                    <router-link class="ivu-menu-item" to="/isotope/district">
                        <h1>产区数据</h1>
                        <Icon type="map" /> 
                    </router-link>
                    <h5>简要说明</h5>
                </Card>
            </Col>
            <Col :xs="24" :sm="8" :md="6" :lg="4">
                <Card style="background-color:#00c0ef">
                    <router-link class="ivu-menu-item" to="/isotope/sugar">
                        <h1>不同糖源</h1>
                        <Icon type="ios-pulse" /> 
                    </router-link>
                    <h5>简要说明</h5>
                </Card>
            </Col>
        </Row>
        
    </div>
</template>

<style scope>
#index a {
    color: #FFF;
}
#index h5 {
    margin-top: 5px;
    color: rgba(255,255,255,0.8);
}
#index .ivu-card {
    margin-bottom: 20px;
}
#index .ivu-icon {
    -webkit-transition: all .3s linear;
    -o-transition: all .3s linear;
    transition: all .3s linear;
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 0;
    font-weight: bold;    
    font-size: 40px;
    color: rgba(0,0,0,0.25);
}
#index .ivu-card:hover .ivu-icon {
    font-size: 60px;
}
</style>
