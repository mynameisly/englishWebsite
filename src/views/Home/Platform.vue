<template>
  <div class="Platform">
    <van-nav-bar
      title="Platform Introduction"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper">
      <p>
        The Shoppers Technology Corporation (TTC) isjointly operated by Kumar
        Nathan and a group oflike-minded lnternet elites.The companys ultimate
        goal is to build a cross-border onlineshopping community that seamlessly
        connects tomajor global e-commerce platforms so that itsmembers can
        participate in online businessopportunities with an annual consumption
        ofabout 4.2 trillion US dollars, benefit from it, andearn continuous
        passive income.
      </p>

      <p>
        The Shoppers' business model and businesslogic are actually 2 simple
        things : match orders,referred to matching orders.To put it simple,
        theordering is actually to distinguish the products ofThe Shoppers
        merchants from the information ofthe members separately, and then use
        big datascience to integrate the information of bothparties into data
        and match them to avoid information asymmetry or information overlap.The
        matched product information will be automatically sent to The Shoppers
        globalmembers for scoring.The members of The Shoppers only need to
        evaluate the products ofthe merchants and give the products praise to
        getthe merchants'rewards. The main purpose of these services is to
        assist:
      </p>
      <p>
        Promote the newly established e-commerceDrive new products on the
        shelves Promote slow-moving goods lmprove the credibility of
        e-commerceSolve excess e-commerce inventorylncrease e-commerce sales
      </p>

      <p>
        lt is completely different from the traditionalconcept of swiping
        orders.The innovative thinkingof The Shoppers is to allow its members to
        use theever-changing Internet technology to automatically allocate
        orders and maximize thebenefits of their members.After thoroughly
        understanding the shortcomings of the traditionalmanual swiping mode,
        The Shoppers found thatthe traditional swiping method was very
        time-consuming and often made mistakes.Therefore,under the leadership of
        the company founder Latif,The Shoppers developed a dual cloud
        intelligenceMatching system to replace the traditional swiping mode.The
        Shoppers precision systemuses information matching algorithms and
        bigdata science to greatly improve the accuracy of thesystem, so that
        the ordering process will evolvewithout time-consuming, labor-intensive
        anderror-free.After the successful development of thesystem at the
        beginning of 2020, the merchantgroup in the world-renowned
        e-commerceplatform was invited to try it, and the result wasremarkable.
      </p>

      <p>
        After a long period of 2 years, The Shopperswas officially launched on
        the market in early 2020after being tested and verified by tens and
        thousands of home appliances, which was wellreceived. Many well-known
        large e-commerce ande-commerce platforms have also joined, makingthe
        number of e-commerce companies of TheShoppers increase day by day, which
        is alreadyclose to 100,000 companies.
      </p>

      <p>
        Undeniably, the problems faced by e-commercetoday is not only high
        prices and low quality, butalso other factors such as credibility,
        popularity,ranking, attention, word of mouth, and salesvolume.After all,
        no one wants to care about anunknown or unpopular e-commerce
        company,there won't even be a thought of trading withthem. So what
        should these e-commercecompanies do? lmprove product sales data,increase
        product exposure and page views, andcollect a large number of user
        reviews.Use TheShoppers to match orders!
      </p>

      <p>
        The shopper's order placement process is actuallysimilar to the online
        shopping process, includingpurchase and payment.The only difference is
        thatthe system will automatically refund the order foryou after you
        complete the payment, and automatically leave a good comment on the
        e-commerce company, and then return the amountyou paid and the order
        bonus earned to youraccount in The Shoppers e-wallet.In this way, youcan
        continue to place orders again and again, andeasily earn rewards from
        e-commerce companiesevery day.The Shoppers has a three-level
        agencymechanism, allowing each user to be an agentwith zero investment,
        and the agent rewards areautomatically credited to the account every
        day.For detail regarding order bonus earning andagency mechanism
        rules,please read the (platformrules) and (cooperative agency) of the
        platform.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Platform",
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
.Platform {
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