<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#header-navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">后台管理</a>
        </div>
        <div class="collapse navbar-collapse" id="header-navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a>首页</a></li>
            <!-- li 加一个open类则自动展开列表 -->
            <li class="dropdown">
              <a
                class="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
                >会员中心 <b class="caret"></b
              ></a>
              <ul class="dropdown-menu">
                <li>
                  <a @click="login"
                    ><i class="fa fa-sign-in fa-fw"></i> 登 录</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="content">
      <div id="content-container" class="container">
        <div class="user-section login-section">
          <div class="logon-tab clearfix"><a class="active">登 录</a></div>
          <div class="login-main">
            <form :model="form">
              <div class="form-group has-success">
                <label class="control-label" for="account">账号</label>
                <div class="controls">
                  <input
                    class="form-control input-lg"
                    id="account"
                    type="text"
                    v-model="form.account"
                    placeholder="邮箱/手机/用户名"
                    autocomplete="off"
                  />
                  <div class="help-block"></div>
                </div>
              </div>
              <div class="form-group has-success">
                <label class="control-label" for="password">密码</label>
                <div class="controls">
                  <input
                    class="form-control input-lg"
                    id="password"
                    type="password"
                    placeholder="密码"
                    autocomplete="off"
                    v-model="form.password"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="controls">
                  <div class="checkbox inline">
                    <label>
                      <input
                        type="checkbox"
                        checked="checked"
                        v-model="form.keepalive"
                      />
                      保持会话
                    </label>
                  </div>
                  <div class="pull-right">
                    <a
                      href="javascript:;"
                      class="btn-forgot"
                      data-toggle="modal"
                      data-target="#forgetPwd-wrapper"
                      >忘记密码?</a
                    >
                  </div>
                </div>
              </div>
            </form>
            <div class="form-group">
              <button class="btn btn-primary btn-lg btn-block" @click="login">
                登 录
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="forgetPwd-wrapper"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">修改密码</h4>
            </div>
            <div class="modal-body">
              <form
                id="resetpwd-form"
                class="form-horizontal form-layer"
                :model="modifyForm"
              >
                <div class="form-body">
                  <input type="hidden" name="action" value="resetpwd" />
                  <div class="form-group">
                    <label class="control-label col-xs-12 col-sm-3"
                      >类型:</label
                    >
                    <div class="col-xs-12 col-sm-8">
                      <div class="radio">
                        <label for="type-email" @click="typeChecked(1)"
                          ><input
                            id="type-email"
                            :checked="type == 1 ? isEmail : false"
                            name="type"
                            type="radio"
                            value="1"
                          />
                          通过邮箱
                        </label>
                        <label for="type-mobile" @click="typeChecked(2)"
                          ><input
                            id="type-mobile"
                            :checked="type == 1 ? false : isEmail"
                            name="type"
                            type="radio"
                            value="2"
                          />
                          通过手机重置
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group" :class="{'hide': type==2}">
                    <label for="email" class="control-label col-xs-12 col-sm-3"
                      >邮箱:</label
                    >
                    <div class="col-xs-12 col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="modifyForm.email"
                      />
                      <span class="msg-box"></span>
                    </div>
                  </div>
                  <div class="form-group" :class="{'hide': type==1}">
                    <label for="mobile" class="control-label col-xs-12 col-sm-3"
                      >手机号:</label
                    >
                    <div class="col-xs-12 col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        id="mobile"
                        name="mobile"
                        v-model="modifyForm.mobile"
                      />
                      <span class="msg-box"></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      for="captcha"
                      class="control-label col-xs-12 col-sm-3"
                      >验证码:</label
                    >
                    <div class="col-xs-12 col-sm-8">
                      <div class="input-group">
                        <input
                          type="text"
                          name="captcha"
                          class="form-control"
                          v-model="modifyForm.captcha"
                        />
                        <span
                          class="input-group-btn"
                          style="padding: 0; border: none"
                        >
                          <a
                            class="btn btn-info btn-captcha"
                            @click="sendCode"
                            >发送验证码</a
                          >
                        </span>
                      </div>
                      <span class="msg-box"></span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      for="newpassword"
                      class="control-label col-xs-12 col-sm-3"
                      >新密码:</label
                    >
                    <div class="col-xs-12 col-sm-8">
                      <input
                        type="password"
                        class="form-control"
                        id="newpassword"
                        name="newpassword"
                        v-model="modifyForm.newpassword"
                      />
                      <span class="msg-box"></span>
                    </div>
                  </div>
                </div>
                <div class="form-group form-footer"></div>
              </form>
            </div>
            <div class="modal-footer">
              <label class="control-label col-xs-12 col-sm-3"></label>
              <div class="col-xs-2 col-sm-1">
                <button class="btn btn-md btn-info" @click="confirm">
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
<script>
import Footer from '@com/Footer';
import { setlocalStorage, removelocalStorageKey } from "@uit/comtool";
export default {
  name: "Login",
  components: {
    Footer
  },
  data() {
    return {
      form: {
        account: "",
        password: "",
        keepalive: "1",
      },
      modifyForm: {
        email: "",
        mobile: "",
        captcha: "",
        newpassword: ""
      },
      type: 1, // 1为email , 2为mobile
      isEmail: true, //是否选择邮箱验证, true为选中，false为不选中
    };
  },

  methods: {
    login() {
      // 登录
      let params = {
        mod: this.form.account,
        pass: this.form.password
      }
      
      // this.fetchpost("/login", params).then((res) => {
      //   console.log('login res',res)
      //   if(res.status == '1') {
      //     setlocalStorage("AUTH_PARAM", res.token);
      //     this.$toast.show('登录成功！', 'green')
      //     this.$router.push({ path: "/index" });
      //   }
        
      // });
    },
    typeChecked(val) {
      // 切换邮箱或手机号码
      if(val == 1) {
        this.type = 1;
      } else if(val == 2) {
        this.type = 2;
      }
    },
    sendCode() {
      // 发送验证码
      // this.fetchget("/sendCode", {}).then((res) => {=
      //   if(res.status == '1') {
          
      //   }
      // });
    },
    confirm() {
      console.log('22',this.modifyForm)
      // 确定修改密码
      // let params = {}
      // this.fetchpost("/modifyPwd", params).then((res) => {=
      //   if(res.status == '1') {
          
      //   }
      // });
    },
  },
  mounted() {
    // 清除本地 token  userinfo 数据
    removelocalStorageKey("AUTH_PARAM", "AUTH_INFO");
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  overflow: auto;
  padding: 15px;
  padding-top: 20px;
  min-height: calc(100vh - 75px);
  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 50px;
    .login-section {
      margin: 50px auto;
      width: 460px;
      .control-label {
        font-size: 13px;
      }
      .logon-tab {
        margin: -15px -15px 0 -15px;
        > a {
          padding: 20px;
          float: left;
          width: 50%;
          font-size: 16px;
          text-align: center;
          color: #616161;
        }
        a:active {
          background-color: #fff;
          transition: all 0.3s ease;
        }
      }
      .login-main {
        padding: 40px 45px 20px 45px;
      }
    }
    .user-section {
      background: #fff;
      padding: 15px;
    }
    .inline {
      display: inline;
    }
    .pull-right {
      float: right !important;
    }
  }

  // 忘记密码样式
  .forgetPwd-wrapper {
    padding-left: 0 !important;
    width: 100%;
    height: 100%;
  }
}
</style>