<template>
  <div class="Cooperative">
    <van-nav-bar
      title="Cooperative Agent"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper">
      <p>
        The platform is established on three-level agentmechanism and grants
        each user the agent qualification.The user registered with his/her
        owninvitation code will be the first-level agent.Thenew users registered
        through scanning the invitation code of the first-level agent will
        becomesuch user’ s second-level agent.In a same fashion, the new users
        registered through scanning the invitation code of the second-levelagent
        will become the third-level agent. Agent mechanism: The agent can earn
        16% of thefirst-level agent's commission Earn 8% of the second-level
        agent' s commissionEarn 4% of the third-level agent' s commissionFor
        example: A invites B to be first-level agent invites C to be A' s
        second-level agentC invites D to be A' s third-level agentA will earn
        16% of B’ s income, 8% of C' sincome, and 4% of D' s income.
      </p>

      <p>
        For example: lf BCD earns promotion commission 
        of 10000 per day,A can earn <br />
        B 10000 X 16%= 1600 <br />
        C 10000 X 8% = 800 <br />
        D 10000 × 4%= 400<br />
        B＋C+D=2800 <br />
        B+C+D=2800
      </p>
      <p>
        The more promotion agents the agent has, themore earnings the agent can
        make.If the user has10 first-level agents, the user can earn
        1600×10=16000 from the first-rate agents
      </p>
      <p>
        lf the user has 100 second-level agents, the usercan earn 800X100=80000
        from the second-rateagents.lf the user has 1000 third-level agents,
        theuser can earn 400X1000=400000 from the third-rate agents, and so on!
        Note: The earnings of the agent are extra bonusfrom the platform, and
        irrelevant to the earningsof the agents in different levels.
      </p>
      <p>
        Every agent can solely earn from the commissionof the respective
        first-level, second-level and third-level agents, and make no earnings
        from the agents beyond the first three levels.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cooperative",
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
.Cooperative {
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
      line-height: 24px;
    }
  }
}
</style>