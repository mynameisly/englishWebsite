<template>
    <van-tabbar route class="footNav" v-model="footNav" active-color="#2f6ce6">
        <van-tabbar-item name="Home" icon="wap-home" to="/index/Home">Home</van-tabbar-item>
        <van-tabbar-item name="Service" icon="map-marked" to="/index/Service">Service</van-tabbar-item>
        <van-tabbar-item name="Orders" icon="volume" to="/index/Orders">Orders</van-tabbar-item>
        <van-tabbar-item name="Records" icon="volume" to="/index/Records">Records</van-tabbar-item>
        <van-tabbar-item name="Account" icon="friends" to="/index/Account">Account</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    name: "footNav",
    data() {
        return {
            footNav: "Home"
        };
    }
};
</script>
<style lang="scss">
.footNav {
    .van-tabbar-item__icon {
        font-size: 22px;
    }
}
</style>