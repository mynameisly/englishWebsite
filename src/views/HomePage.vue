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
