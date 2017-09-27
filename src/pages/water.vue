<template>
    <div>
        <Card>
            <div slot="title">
                <Icon type="ios-flask-outline"></Icon> 酿造用水
            </div>
            <Row :gutter="16">
                <Col :sm="24" :md="12">
                    <h3>不同产区酿造用水的氧同位素</h3>
                    <Table border stripe highlight-row size="small"
                        :columns="columns1" :data="data1"></Table>
                </Col>
                <Col :sm="24" :md="12">
                    <h3>不同葡萄酒中水的氧同位素</h3>
                    <Table border stripe highlight-row size="small"
                        :columns="columns2" :data="data2"></Table>
                </Col>
            </Row>
        </Card>
        <BackTop></BackTop>
    </div>
</template>

<style scoped>
.ivu-table-wrapper {
    margin-bottom: 30px;
}
</style>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '样品原号',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: '岩石/矿物',
                        key: 'type',
                        sortable: true
                    },
                    {
                        title: 'δ<sup>18</sup>O<sub>V-SMOW</sub>(‰)',
                        key: 'norm',
                        sortable: true
                    }
                ],
                data1: [
                    {
                        name: '甘肃',
                        type: '水样',
                        norm: -11.1
                    },
                    {
                        name: '宁夏',
                        type: '水样',
                        norm: -10.1
                    },
                    {
                        name: '北疆',
                        type: '水样',
                        norm: -10.3
                    },
                    {
                        name: '怀来',
                        type: '水样',
                        norm: -9.5
                    },
                    {
                        name: '烟台',
                        type: '水样',
                        norm: -8.6
                    },
                    {
                        name: '昌黎',
                        type: '水样',
                        norm: -8.4
                    }
                ],
                columns2: [
                    {
                        title: '样品',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: '岩石/矿物',
                        key: 'type',
                        sortable: true
                    },
                    {
                        title: 'δ<sup>18</sup>O<sub>V-SMOW</sub>(‰)',
                        key: 'norm',
                        sortable: true
                    }
                ],
                data2: [
                    {
                        name: '纯净水',
                        type: '水样',
                        norm: -8.129
                    },
                    {
                        name: '全汁白葡萄酒',
                        type: '水样',
                        norm: -1.657
                    },
                    {
                        name: '加20%水葡萄酒',
                        type: '水样',
                        norm: -2.936
                    },
                    {
                        name: '加40%水葡萄酒',
                        type: '水样',
                        norm: -4.936
                    },
                    {
                        name: '加50%水葡萄酒',
                        type: '水样',
                        norm: -6.885
                    },
                    {
                        name: '加20%水再补平糖发酵葡萄酒',
                        type: '水样',
                        norm: -4.383
                    },
                    {
                        name: '加40%水再补平糖发酵葡萄酒',
                        type: '水样',
                        norm: -6.8374
                    },
                    {
                        name: '加50%水再补平糖发酵葡萄酒',
                        type: '水样',
                        norm: -7.602
                    }
                ]
            }
        },
        created() {
            console.log("feedback-created.");
        }
    }
</script>