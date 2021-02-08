<template>
    <div>
        <div class="container">
            <div class="login-wrapper">
                <div class="login-screen">
                    <div class="well">
                        <div class="login-head">
                            <img src="../../assets/img/login-head.png" style="width: 100%" />
                        </div>
                        <div class="login-form">
                            <img id="profile-img" class="profile-img-card" src="../../assets/img/avatar.png" />
                            <p id="profile-name" class="profile-name-card"></p>

                            <form :model="form" id="login-form">
                                <div id="errtips" class="hide msg-container"></div>
                                <input type="hidden" name="__token__" value="9ee03419e4ae1ecd39661283a603c063" data-target="#errtips" />
                                <div class="input-group">
                                    <div class="input-group-addon"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="pd-form-username"
                                        placeholder="用户名"
                                        name="username"
                                        v-model="form.username"
                                    />
                                </div>

                                <div class="input-group">
                                    <div class="input-group-addon"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></div>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="pd-form-password"
                                        placeholder="密码"
                                        name="password"
                                        v-model="form.password"
                                    />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span>
                                    </div>
                                    <input type="text" name="captcha" class="form-control" placeholder="验证码" v-model="form.captcha" />
                                    <span class="input-group-addon" style="padding: 0; border: none; cursor: pointer">
                                        <img src="/index.php?s=/captcha" width="100" height="30" @click="getCaptcha" />
                                    </span>
                                </div>
                                <div class="form-group checkbox">
                                    <label class="inline" for="keeplogin">
                                        <input type="checkbox" name="keeplogin" id="keeplogin" value="1" data-target="#errtips" />
                                        保持会话
                                    </label>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-success btn-lg btn-block" style="background: #708eea;font-size:15px" @click="login">
                                        登 录
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                captcha: ''
            }
        };
    },
    methods: {
        getCaptcha() {
            // 获取验证码
        },
        login() {
            // 登录
            this.$router.push({ path:'/dashboard'} );
        }
    }
};
</script>


<style lang="less" scoped>
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    .login-screen {
        max-width: 430px;
        padding: 0;
        margin: 100px auto 0 auto;
        .well {
            border-radius: 3px;
            margin-bottom: 20px;
            min-height: 20px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 1);
            border: none;
            overflow: hidden;
            padding: 0;
            .login-head {
                background: #899fe1;
            }
            .login-form {
                padding: 40px 30px;
                position: relative;
                z-index: 99;
                .profile-img-card {
                    width: 100px;
                    height: 100px;
                    display: block;
                    border-radius: 50%;
                    margin: -93px auto 30px;
                    border: 5px solid #fff;
                }
                #login-form {
                    margin-top: 20px;
                    .input-group {
                        margin-bottom: 15px;
                        .input-group-addon {
                            border-radius: 0;
                            border-color: #d2d6de;
                            background-color: #fff;
                        }
                        .form-control {
                            border-radius: 0;
                            box-shadow: none;
                            border-color: #d2d6de;
                        }
                    }
                }
            }
        }
    }
}
</style>