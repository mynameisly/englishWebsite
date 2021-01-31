<template>
  <div class="PersonalData">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">个人资料</h2>
        <form
          id="profile-form"
          class="form-horizontal nice-validator n-default n-bootstrap"
          role="form"
          data-toggle="validator"
          novalidate="novalidate"
          :model="form"
        >
          <!-- <input
            type="hidden"
            name="__token__"
            value="e38fe10eb91ea0f854c628766d53f5c7"
          /> -->
          <input type="hidden" name="avatar" id="c-avatar" value="" />
          <div class="form-group">
            <label class="control-label col-xs-12 col-sm-2"></label>
            <div class="col-xs-12 col-sm-4">
              <div class="profile-avatar-container">
                <img
                  class="profile-user-img img-responsive img-circle"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjAsMjI5LDE3OSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj48L3RleHQ+PC9zdmc+"
                  alt=""
                />
                <div class="profile-avatar-text img-circle">点击编辑</div>
                <button
                  type="button"
                  id="faupload-avatar"
                  class="faupload dz-clickable"
                  data-mimetype="png,jpg,jpeg,gif"
                  data-input-id="c-avatar"
                  initialized="true"
                >
                  <i class="fa fa-upload dz-message"></i> 上传
                </button>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-xs-12 col-sm-2">用户名:</label>
            <div class="col-xs-12 col-sm-4">
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                v-model="form.username"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-xs-12 col-sm-2">昵称:</label>
            <div class="col-xs-12 col-sm-4">
              <input
                type="text"
                class="form-control"
                id="nickname"
                name="nickname"
                v-model="form.nickname"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group">
            <label for="c-bio" class="control-label col-xs-12 col-sm-2"
              >个人介绍:</label
            >
            <div class="col-xs-12 col-sm-8">
              <input
                id="c-bio"
                data-rule=""
                data-tip="一句话介绍一下你自己"
                class="form-control"
                name="bio"
                type="text"
                v-model="form.bio"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="c-email" class="control-label col-xs-12 col-sm-2"
              >邮箱:</label
            >
            <div class="col-xs-12 col-sm-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="c-email"
                  name="email"
                  v-model="form.email"
                  disabled=""
                  placeholder=""
                />
                <span class="input-group-btn" style="padding: 0; border: none">
                  <a
                    href="javascript:;"
                    class="btn btn-info btn-change"
                    data-type="email"
                    >修改</a
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="c-mobile" class="control-label col-xs-12 col-sm-2"
              >手机号:</label
            >
            <div class="col-xs-12 col-sm-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="c-mobile"
                  name="mobile"
                  v-model="form.mobile"
                  disabled=""
                  placeholder=""
                />
                <span class="input-group-btn" style="padding: 0; border: none">
                  <a
                    href="javascript:;"
                    class="btn btn-info btn-change"
                    data-type="mobile"
                    >修改</a
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="form-group normal-footer">
            <label class="control-label col-xs-12 col-sm-2"></label>
            <div class="col-xs-12 col-sm-8">
              <button class="btn btn-success btn-embossed" style="margin-right:5px" @click="confirm">
                确定
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
  name: "PersonalData",
  data() {
    return {
      form: {
        username: "",
        nickname: "",
        bio: "",
        email: "",
        mobile: ""
      }
    };
  },
  mounted() {},
  methods: {
    confirm() {
      // 提交
    },
    reset() {
      // 重置
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-avatar-container {
  position: relative;
  width: 100px;
  .profile-user-img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 3px;
    border: 3px solid #d2d6de;
  }
  .img-circle {
    border-radius: 50%;
  }
  .profile-avatar-text {
    display: none;
  }
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    opacity: 0;
  }
  
}
</style>
