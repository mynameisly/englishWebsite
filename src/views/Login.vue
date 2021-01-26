<template>
    <div class="Login">
        <div class="header">
            <div class="logo_bg">
                <span class="logo_txt">englishWebsite</span>
            </div>
        </div>
        <div class="content">
            <van-form class="login_box" @submit="loginEvent">
                <van-field
                    v-model="params.username"
                    label="用户名"
                    size="large"
                    placeholder="请输入登陆账号"
                    :rules="[{required: true, message: '用户名不能为空'}]"
                />
                <van-field
                    v-model="params.password"
                    label="密码"
                    size="large"
                    type="password"
                    placeholder="请输入密码"
                    :rules="[{required: true, message: '密码不能为空'}]"
                />
                <div class="login_btn">
                    <van-button type="info" native-type="submit" block>立即登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import { setlocalStorage, removelocalStorageKey } from "@uit/comtool";
export default {
    name: "Login",
    data() {
        return {
            params: {
                username: "test11",
                password: "Aa123456"
            }
        };
    },

    methods: {
        // 登录事件
        loginEvent() {
            // 表单转化
            // let formData = this.formDataObject(this.params);
            // this.fetchpost("/api/login", formData).then(res => {
            //     this.$toast(res.msg);
            //     if (res.code === 500) {
            //     } else {
            //         setlocalStorage("AUTH_PARAM", res.token);
            //         this.$router.push("/index");
            //     }
            // });
        }
    },
    mounted() {
        // 清除本地 token  userinfo 数据
        removelocalStorageKey("AUTH_PARAM", "AUTH_INFO");
    }
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: #0468a5;
    padding: 15px 0;
    text-align: center;
    box-sizing: border-box;
    .logo_bg {
        display: inline-block;
        .logo_img {
            display: inline-block;
            width: 30px;
            vertical-align: middle;
        }
        .logo_txt {
            margin-left: 10px;
            font-size: 22px;
            color: #ffffff;
        }
    }
}
.content {
    width: 100%;
    .login_box {
        width: 90%;
        margin-top: 80px;
        margin-left: 5%;
    }
    .login_btn {
        width: 100%;
        margin-top: 20px;
        padding: 0 5px;
        box-sizing: border-box;
    }
}
</style>