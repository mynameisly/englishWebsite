<template>
  <div class="Rules">
    <van-nav-bar title="Platform Rules" left-arrow @click-left="onClickLeft" />
    <div class="wrapper">
      <p>
        The platform is intelligent cloud automatic order matching system. After
        clicking (order receiving), the platform will automatically match
        corresponding orders in corresponding room according to the member
        account balance for promotion.
      </p>

      <p>
        6 order-receiving rooms, in which the goods promotion will bring
        different commission. If the user needs to enter corresponding room, the
        user needs to meet the room unlocking requirements. The user can receive
        orders for 60 times per day per account. That is to say, the user has
        the opportunity to earn the commission for 60 times. If the user
        successfully receives the orders for 60 times, the system will
        automatically set the upper limit. The invitation code will be generated
        for each user after registration. The user can register as new user
        through scanning the invitation code shared by the agent, and become the
        fist-level agent member of the team. The new users registered through
        scanning the invitation code of the first-level agent will become such
        user’s second-level agent. In a same fashion, the new users registered
        through scanning the invitation code of the second-level agent will
        become the team third-level agent.
      </p>

      <p>
        The platform is established on three-level agent mechanism and grants
        each user the agent qualification.Refer to the introduction to
        cooperative agent mechanism of the platform for the details.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Rules {
  .wrapper {
    border-top: 1px solid #f5f5f5;
    padding: 16px;
    position: absolute;
    top: 45px;
    width: 100%;
    height: calc(100% - 45px);
    background-color: #fff;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    p {
      text-indent: 20px;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>