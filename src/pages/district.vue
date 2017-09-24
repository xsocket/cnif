<template>
    <div>
        <Card>
            <div slot="title">
                <Icon type="map"></Icon> 产区
            </div>
            <div slot="extra" style="margin-top:-8px;">
                <Select v-model="filterCity" placeholder="选择产区"
                    multiple style="width:250px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="filterYear" placeholder="选择年份" 
                    multiple style="width:250px">
                    <Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="filterType" placeholder="选择品种" 
                    multiple style="width:250px">
                    <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <Table border stripe highlight-row size="small"
                :row-class-name="rowClassName"
                :columns="columns" :data="data"></Table>
        </Card>
        <BackTop></BackTop>
    </div>
</template>
<script>
    export default {
        methods: {
            rowClassName (row, index) {
                if(this.filterType.length>0 && this.filterType.indexOf(row.type) >= 0) {
                    return '';
                }
                if(this.filterYear.length>0 && this.filterYear.indexOf(row.year) >= 0) {
                    return '';
                }
                if(this.filterCity.length>0 && this.filterCity.indexOf(row.city) >= 0) {
                    return '';
                }
                if(this.filterType<=0&&this.filterYear<=0&&this.filterCity<=0) {
                    return '';
                }
                return 'hide';
            }
        },
        data () {
            return {
                cityList: [
                    {
                        value: '河北怀来',
                        label: '河北怀来'
                    },
                    {
                        value: '河北昌黎',
                        label: '河北昌黎'
                    },
                    {
                        value: '宁夏',
                        label: '宁夏'
                    },
                    {
                        value: '烟台',
                        label: '烟台'
                    },
                    {
                        value: '新疆',
                        label: '新疆'
                    }
                ],
                yearList: [
                    {
                        value: '2010',
                        label: '2010年'
                    },
                    {
                        value: '2011',
                        label: '2011年'
                    },
                    {
                        value: '2012',
                        label: '2012年'
                    },
                    {
                        value: '2013',
                        label: '2013年'
                    },
                    {
                        value: '2014',
                        label: '2014年'
                    }
                ],
                typeList: [
                    {
                        value: '霞多丽',
                        label: '霞多丽'
                    },
                    {
                        value: '赤霞珠',
                        label: '赤霞珠'
                    },
                    {
                        value: '佳丽酿',
                        label: '佳丽酿'
                    },
                    {
                        value: '美乐',
                        label: '美乐'
                    },
                    {
                        value: '雷司令',
                        label: '雷司令'
                    },
                    {
                        value: '贵人香',
                        label: '贵人香'
                    }
                ],
                filterCity: [],
                filterYear: [],
                filterType: [],
                columns: [
                    {
                        title: '编号',
                        key: 'id',
                        width: 70,
                        align: 'center'
                    },
                    {
                        title: '产区归属',
                        key: 'city',
                        filters: [
                            {
                                label: '河北怀来',
                                value: '河北怀来'
                            },
                            {
                                label: '河北昌黎',
                                value: '河北昌黎'
                            },
                            {
                                label: '宁夏',
                                value: '宁夏'
                            },
                            {
                                label: '烟台',
                                value: '烟台'
                            },
                            {
                                label: '新疆',
                                value: '新疆'
                            }
                        ],
                        filterMultiple: true,
                        filterMethod (value, row) {
                            return row.city == value;
                        }
                    },
                    {
                        title: '年份',
                        key: 'year',
                        filters: [
                            {
                                value: '2010',
                                label: '2010年'
                            },
                            {
                                value: '2011',
                                label: '2011年'
                            },
                            {
                                value: '2012',
                                label: '2012年'
                            },
                            {
                                value: '2013',
                                label: '2013年'
                            },
                            {
                                value: '2014',
                                label: '2014年'
                            }
                        ],
                        filterMultiple: true,
                        filterMethod (value, row) {
                            return row.year == value;
                        }
                    },
                    {
                        title: '葡萄品种',
                        key: 'type',
                        filters: [
                            {
                                value: '霞多丽',
                                label: '霞多丽'
                            },
                            {
                                value: '赤霞珠',
                                label: '赤霞珠'
                            },
                            {
                                value: '贵人香',
                                label: '贵人香'
                            },
                            {
                                value: '雷司令',
                                label: '雷司令'
                            },
                            {
                                value: '佳丽酿',
                                label: '佳丽酿'
                            },
                            {
                                value: '美乐',
                                label: '美乐'
                            }
                        ],
                        filterMultiple: true,
                        filterMethod (value, row) {
                            return row.type == value;
                        }
                    },
                    {
                        title: '(D/H)ⅰ (mg/L)',
                        key: 'd1',
                        sortable: true
                    },
                    {
                        title: '(D/H)ⅰ (mg/L)',
                        key: 'd2',
                        sortable: true
                    },
                    {
                        title: 'R',
                        key: 'd3',
                        sortable: true
                    },
                    {
                        title: 'δ13C‰',
                        key: 'd4',
                        sortable: true
                    },
                    {
                        title: 'δ18O‰',
                        key: 'd5',
                        sortable: true
                    }
                ],
                data: [
                    {
                        id: 1,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 97.4829,
                        d2: 116.5568,
                        d3: 2.3822,
                        d4: -28.352,
                        d5: -1.725
                    },
                    {
                        id: 2,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 98.1326,
                        d2: 117.3271,
                        d3: 2.401,
                        d4: -27.979,
                        d5: -1.619
                    },
                    {
                        id: 3,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 97.8556,
                        d2: 117.0282,
                        d3: 2.3913,
                        d4: -28.1751,
                        d5: -1.6570
                    },
                    {
                        id: 4,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 97.3869,
                        d2: 116.2751,
                        d3: 2.3879,
                        d4: -28.259,
                        d5: -1.927
                    },
                    {
                        id: 5,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 97.8273,
                        d2: 117.3562,
                        d3: 2.3993,
                        d4: -27.993,
                        d5: -1.869
                    },
                    {
                        id: 6,
                        city: '河北怀来',
                        year: '2010',
                        type: '霞多丽',
                        d1: 97.6482,
                        d2: 117.1386,
                        d3: 2.3990,
                        d4: -28.0159,
                        d5: -1.9040
                    },
                    {
                        id: 7,
                        city: '河北怀来',
                        year: '2013',
                        type: '霞多丽',
                        d1: 99.0753,
                        d2: 118.0384,
                        d3: 2.3990,
                        d4: -28.5839,
                        d5: -2.0944
                    },
                    {
                        id: 8,
                        city: '河北怀来',
                        year: '2013',
                        type: '霞多丽',
                        d1: 98.2836,
                        d2: 118.2736,
                        d3: 2.3990,
                        d4: -28.8938,
                        d5: -1.8932
                    },
                    {
                        id: 9,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.7384,
                        d2: 115.9863,
                        d3: 2.3979,
                        d4: -23.0383,
                        d5: -1.5693
                    },
                    {
                        id: 10,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.2647,
                        d2: 116.6789,
                        d3: 2.4241,
                        d4: -23.1938,
                        d5: -1.5985
                    },
                    {
                        id: 11,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.3726,
                        d2: 116.8953,
                        d3: 2.4259,
                        d4: -23.1038,
                        d5: -1.6
                    },
                    {
                        id: 12,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.0473,
                        d2: 117.7534,
                        d3: 2.4520,
                        d4: -23.1838,
                        d5: -1.6
                    },
                    {
                        id: 13,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.3837,
                        d2: 117.7482,
                        d3: 2.4433,
                        d4: -23.0552,
                        d5: -1.7048
                    },
                    {
                        id: 14,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 96.2635,
                        d2: 118.0284,
                        d3: 2.4522,
                        d4: -23.0485,
                        d5: -1.5874
                    },
                    {
                        id: 15,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 95.9842,
                        d2: 117.0384,
                        d3: 2.4387,
                        d4: -23.3948,
                        d5: -1.6103
                    },
                    {
                        id: 16,
                        city: '河北昌黎',
                        year: '2013',
                        type: '赤霞珠',
                        d1: 95.8273,
                        d2: 117.9837,
                        d3: 2.4624,
                        d4: -23.1038,
                        d5: -1.6239
                    },
                    {
                        id: 17,
                        city: '宁夏',
                        year: '2011',
                        type: '霞多丽',
                        d1: 97.5946,
                        d2: 118.8363,
                        d3: 2.4148,
                        d4: -26.8550,
                        d5: -0.4038
                    },
                    {
                        id: 18,
                        city: '宁夏',
                        year: '2011',
                        type: '霞多丽',
                        d1: 97.8329,
                        d2: 118.1463,
                        d3: 2.4156,
                        d4: -26.5790,
                        d5: -0.693
                    },
                    {
                        id: 19,
                        city: '宁夏',
                        year: '2011',
                        type: '霞多丽',
                        d1: 97.6765,
                        d2: 118.9715,
                        d3: 2.4152,
                        d4: -26.6291,
                        d5: -0.8305
                    },
                    {
                        id: 20,
                        city: '宁夏',
                        year: '2012',
                        type: '霞多丽',
                        d1: 97.1440,
                        d2: 118.3749,
                        d3: 2.4371,
                        d4: -26.1134,
                        d5: -0.4920
                    },
                    {
                        id: 21,
                        city: '宁夏',
                        year: '2012',
                        type: '霞多丽',
                        d1: 97.0387,
                        d2: 118.9586,
                        d3: 2.4518,
                        d4: -26.1246,
                        d5: -1.0039
                    },
                    {
                        id: 22,
                        city: '宁夏',
                        year: '2013',
                        type: '霞多丽',
                        d1: 96.0472,
                        d2: 119.3749,
                        d3: 2.4858,
                        d4: -26.9374,
                        d5: -0.1928
                    },
                    {
                        id: 23,
                        city: '宁夏',
                        year: '2013',
                        type: '霞多丽',
                        d1: 97.9486,
                        d2: 119.3945,
                        d3: 2.4379,
                        d4: -26.0496,
                        d5: -0.2938
                    },
                    {
                        id: 24,
                        city: '宁夏',
                        year: '2013',
                        type: '霞多丽',
                        d1: 98.0394,
                        d2: 119.4029,
                        d3: 2.4358,
                        d4: -27.0385,
                        d5: -0.3947
                    },
                    {
                        id: 25,
                        city: '烟台',
                        year: '2011',
                        type: '霞多丽',
                        d1: 98.0717,
                        d2: 125.0711,
                        d3: 2.5506,
                        d4: -23.881,
                        d5: -0.4
                    },
                    {
                        id: 26,
                        city: '烟台',
                        year: '2011',
                        type: '霞多丽',
                        d1: 97.5739,
                        d2: 125.7428,
                        d3: 2.5774,
                        d4: -23.822,
                        d5: -0.3
                    },
                    {
                        id: 27,
                        city: '烟台',
                        year: '2011',
                        type: '霞多丽',
                        d1: 97.1362,
                        d2: 125.2859,
                        d3: 2.5796,
                        d4: -23.8620,
                        d5: -0.1000
                    },
                    {
                        id: 28,
                        city: '烟台',
                        year: '2014',
                        type: '霞多丽',
                        d1: 98.8856,
                        d2: 125.09764,
                        d3: 2.5301,
                        d4: -23.7,
                        d5: -0.05
                    },
                    {
                        id: 29,
                        city: '烟台',
                        year: '2014',
                        type: '美乐',
                        d1: 99.1496,
                        d2: 125.24011,
                        d3: 2.5263,
                        d4: -23.4,
                        d5: -1
                    },
                    {
                        id: 30,
                        city: '烟台',
                        year: '2012',
                        type: '佳丽酿',
                        d1: 98.7127,
                        d2: 124.8511,
                        d3: 2.5296,
                        d4: -23.3728,
                        d5: -1
                    },
                    {
                        id: 31,
                        city: '烟台',
                        year: '2012',
                        type: '佳丽酿',
                        d1: 98.0837,
                        d2: 126.3055,
                        d3: 2.5755,
                        d4: -23.9484,
                        d5: -0.54
                    },
                    {
                        id: 32,
                        city: '烟台',
                        year: '2013',
                        type: '佳丽酿',
                        d1: 98.0384,
                        d2: 126.3943,
                        d3: 2.5785,
                        d4: -23.0485,
                        d5: -0.1
                    },
                    {
                        id: 33,
                        city: '新疆',
                        year: '2011',
                        type: '雷司令',
                        d1: 100.4891,
                        d2: 122.2529,
                        d3: 2.4332,
                        d4: -27.3089,
                        d5: 3.4827
                    },
                    {
                        id: 34,
                        city: '新疆',
                        year: '2011',
                        type: '雷司令',
                        d1: 102.3749,
                        d2: 123.5136,
                        d3: 2.4130,
                        d4: -27.3465,
                        d5: 4.5749
                    },
                    {
                        id: 35,
                        city: '新疆',
                        year: '2012',
                        type: '雷司令',
                        d1: 100.3943,
                        d2: 122.6493,
                        d3: 2.4434,
                        d4: -28.3182,
                        d5: 2.8542
                    },
                    {
                        id: 36,
                        city: '新疆',
                        year: '2012',
                        type: '雷司令',
                        d1: 102.8474,
                        d2: 123.9743,
                        d3: 2.4108,
                        d4: -28.4093,
                        d5: 2.8364
                    },
                    {
                        id: 37,
                        city: '新疆',
                        year: '2012',
                        type: '霞多丽',
                        d1: 101.3954,
                        d2: 121.9983,
                        d3: 2.4063873,
                        d4: -28.9736,
                        d5: 2.1039
                    },
                    {
                        id: 38,
                        city: '新疆',
                        year: '2012',
                        type: '霞多丽',
                        d1: 102.859,
                        d2: 120.8638,
                        d3: 2.350087,
                        d4: -28.9403,
                        d5: 1.9029
                    },
                    {
                        id: 39,
                        city: '新疆',
                        year: '2012',
                        type: '贵人香',
                        d1: 100.9387,
                        d2: 122.3094,
                        d3: 2.4234392,
                        d4: -28.6937,
                        d5: 3.5039
                    },
                    {
                        id: 40,
                        city: '新疆',
                        year: '2012',
                        type: '贵人香',
                        d1: 101.3928,
                        d2: 123.9373,
                        d3: 2.446963,
                        d4: -28.608,
                        d5: 3.3048
                    }
                ]
            }
        }
    }
</script>





