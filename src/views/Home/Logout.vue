<template>
  <div class="Logout">
  </div>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return {};
  },
  created() {},
  mounted() {
    // TODO
    
    this.$router.push({path: '/Login'})
  },
  methods: {},
};
</script>
