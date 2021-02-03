<template>
  <div class="ChangePwd">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">修改密码</h2>
        <form
          id="changepwd-form"
          class="form-horizontal nice-validator n-default n-bootstrap"
          :model="form"
        >
          <!-- <input
            type="hidden"
            name="__token__"
            value="c1278596baab0e20e4f942c261874e8c"
          /> -->
          <div class="form-group">
            <label for="oldpassword" class="control-label col-xs-12 col-sm-2"
              >旧密码:</label
            >
            <div class="col-xs-12 col-sm-4">
              <input
                type="password"
                class="form-control"
                id="oldpassword"
                name="oldpassword"
                v-model="form.oldpassword"
                placeholder="旧密码"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="newpassword" class="control-label col-xs-12 col-sm-2"
              >新密码:</label
            >
            <div class="col-xs-12 col-sm-4">
              <input
                type="password"
                class="form-control"
                id="newpassword"
                name="newpassword"
                v-model="form.newpassword"
                placeholder="新密码"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="renewpassword" class="control-label col-xs-12 col-sm-2"
              >确认新密码:</label
            >
            <div class="col-xs-12 col-sm-4">
              <input
                type="password"
                class="form-control"
                id="renewpassword"
                name="renewpassword"
                v-model="form.renewpassword"
                placeholder="确认新密码"
              />
            </div>
          </div>

          <div class="form-group normal-footer">
            <label class="control-label col-xs-12 col-sm-2"></label>
            <div class="col-xs-12 col-sm-8">
              <button class="btn btn-success btn-embossed" style="margin-right:5px" @click="submit">
                提交
              </button>
              <button class="btn btn-default btn-embossed" @click="reset">
                重置
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePwd",
  data() {
    return {
      form: {
        oldpassword: "",
        newpassword: "",
        renewpassword: ""
      }
    };
  },
  mounted() {},
  methods: {
    submit() {
      // 提交
      let params = this.form
      this.fetchpost('/changePwd',params).then((res) => {
        if(res.status == '1') {
          console.log('修改密码成功')
        }else{
          console.log('修改密码失败')
        }
      })
    },
    reset() {
      // 重置
      this.form.oldpassword = '';
      this.form.newpassword = '';
      this.form.renewpassword = '';
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
