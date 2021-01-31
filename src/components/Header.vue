<template>
  <div class="Header">
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
            <li><a href="/">首页</a></li>
            <li class="dropdown">
              <a
                href=""
                class="dropdown-toggle"
                data-toggle="dropdown"
                style="padding-top: 10px; height: 50px"
              >
                <span class="avatar-img"
                  ><img
                   style="width:30px;height:30px;line-height:30px;border-radius:50%"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjAsMjI5LDE3OSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj48L3RleHQ+PC9zdmc+"
                    alt=""
                /></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href=""><i class="fa fa-user-circle fa-fw"></i>会员中心</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-user-o fa-fw"></i>个人资料</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-key fa-fw"></i>修改密码</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-sign-out fa-fw"></i>退 出</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toggleIem(index) {
      this.current = index;
    },
  },
};
</script>
<style lang="scss">
.Header {
  height: 50px;
}
</style>