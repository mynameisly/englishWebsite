<template>
    <div class="homepage">
        <Header />
            <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@com/Header";
import Footer from "@com/Footer";
export default {
    name: "HomePage",
    components: {
        Header,
        Footer
    },
    methods: {},
    mounted() {
        
    }
};
</script>
<style lang="scss">
</style>
