<!--
 * @Description: 主页面
 * @FilePath: \newPro\src\views\Home.vue
 * @LastEditTime: 2020-06-25 12:59:06
--> 
<template>
    <div class="homepage">
        <router-view ref="main" />
        <FootNav />
    </div>
</template>

<script>
import FootNav from "@com/FootNav";
export default {
    name: "HomePage",
    components: {
        FootNav
    },
    methods: {},
    mounted() {
        
    }
};
</script>
<style lang="scss">
</style>
