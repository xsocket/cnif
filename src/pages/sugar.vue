<template>
    <div>
        <Card>
            <div slot="title">
                <Icon type="ios-pulse"></Icon> 不同糖来源
            </div>
            <Table border stripe highlight-row size="small"
                :columns="columns" :data="data"></Table>
        </Card>
        <BackTop></BackTop>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: ' ',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '(D/H)<sub>Ⅰ</sub> (mg/L)',
                        key: 'd1',
                        sortable: true,
                        align: 'right'
                    },
                    {
                        title: '(D/H)<sub>H</sub> (mg/L)',
                        key: 'd2',
                        sortable: true,
                        align: 'right'
                    },
                    {
                        title: 'R',
                        key: 'd3',
                        sortable: true,
                        align: 'right'
                    }
                ],
                data: [
                    {
                        name: '甘蔗糖发酵乙醇',
                        d1: 110.78,
                        d2: 118.45,
                        d3: 2.1385
                    },
                    {
                        name: '甜菜糖发酵乙醇',
                        d1: 91.23,
                        d2: 117.52,
                        d3: 2.5763
                    }
                ]
            }
        }
    }
</script>





