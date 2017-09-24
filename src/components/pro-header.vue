<template>
    <header class="pro-header">
        <h1><a href="/"><img v-if="logo" :src="logo" /> {{ title }}</a></h1>
    </header>
</template>

<script>
    export default {
        name: 'ProHeader',
        props: {
            "title": {
                type: String,
                default: "中国葡萄酒同位素数据银行"
            },
            "logo": {
                type: String,
                default: false
            },
        },
        methods: {

        }
    };
</script>