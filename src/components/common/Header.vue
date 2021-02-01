<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>

        <div class="tags-wrapper">
            <v-tags></v-tags>
        </div>

        <div class="header-right">
            <ul>
                <li>
                    <a href="/" target="_blank">
                    <i class="el-icon-delete"></i>
                    <!-- <i class="fa fa-home" style="font-size: 14px"></i> -->
                    </a>
                </li>

                <li>
                    <!-- 清除缓存 -->
                    <el-dropdown>
                        <a href="/" target="_blank">
                        <i class="el-icon-delete"></i>
                        <!-- <i class="fa fa-home" style="font-size: 14px"></i> -->
                        </a>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-trash"></i> -->
                                    <span>清空缓存</span>
                                </template>
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-trash"></i> -->
                                    <span>一键清除缓存</span>
                                </template>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-file-text"></i> -->
                                    <span>清空内容缓存</span>
                                </template>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-file-image-o"></i> -->
                                    <span>清除模板缓存</span>
                                </template>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-rocket"></i> -->
                                    <span>清除插件缓存</span>
                                </template>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>

                <li>
                    <!-- 多语言列表 -->
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="fa fa-language"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-trash"></i> -->
                                    <span>简体中文</span>
                                </template>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <template>
                                    <i class="el-icon-delete"></i>
                                    <!-- <i class="fa fa-file-text"></i> -->
                                    <span>English</span>
                                </template>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <!-- 全屏按钮 -->
                    <a href="#" data-toggle="fullscreen" @click="handleFullScreen">
                        <i class="el-icon-delete"></i>
                        <!-- <i class="fa fa-arrows-alt"></i> -->
                        </a>
                </li>
                <li>
                    <!-- 账号信息下拉框 -->
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <img src="/assets/img/avatar.png" class="user-image" alt="" />
                            <span class="hidden-xs">Admin</span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <template>
                                    <li class="user-header">
                                        <img src="/assets/img/avatar.png" class="img-circle" alt="" />

                                        <p>Admin <small>2021-02-01 06:46:39</small></p>
                                    </li>
                                    <!-- 底部 -->
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="general/profile" class="btn btn-primary addtabsit"
                                                ><i class="fa fa-user"></i> 个人资料</a
                                            >
                                        </div>
                                        <div class="pull-right">
                                            <a href="/HxcFsNbkRZ.php/index/logout" class="btn btn-danger"
                                                ><i class="fa fa-sign-out"></i> 退出</a
                                            >
                                        </div>
                                    </li>
                                </template>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <a href="javascript:;" data-toggle="control-sidebar">
                        <i class="el-icon-delete"></i>
                        <!-- <i class="fa fa-gears"></i> -->
                        </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import vTags from './Tags.vue';
import bus from '../common/bus';
import { mapGetters, mapActions } from 'vuex';
import { getLoginEmployee, loginout } from '@/api/login';
export default {
    components: {
        vTags
    },
    data() {
        return {
            collapse: false,
            fullscreen: false,
            number: '',
            headImg: '',
            message: 2
        };
    },
    // computed: {
    //   ...mapGetters(["employeeId", "number", "headImg"])
    // },
    computed: {
        // username() {
        //   let username = localStorage.getItem('ms_username');
        //   return username ? username : this.name;
        // }
    },
    mounted() {
        // this上还有employeeId
        // console.log(this)
        // this.number = this.$store.getters.number
        // this.headImg = this.$store.getters.headImg
        this.getLoginEmployee();
        // this.$store.dispatch('getInfo')
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    },
    methods: {
        getLoginEmployee() {
            getLoginEmployee(null).then((res) => {
                // console.log('当前用户登录信息是，', res)
                if (res.data.code === 0) {
                    this.number = res.data.data.number;
                    this.headImg = res.data.data.headImg;
                }
            });
        },
        handleCommand(command) {
            // 用户名下拉菜单选择事件
            if (command == 'updatePwd') {
                // 修改密码
                this.$router.push({ path: '/updatePwd' });
            } else if (command == 'loginout') {
                // localStorage.removeItem('ms_username');
                // this.$router.push('/login');
                loginout(null).then((res) => {
                    if (res.data.code === 0) {
                        this.$message({
                            type: 'success',
                            message: '已退出登录'
                        });
                        // this.setUserdata("");
                        // 退出登录时将sessionStorage里的token和store里面的角色都清零
                        // removeToken();
                        // this.resetToken();
                        // sessionStorage.removeItem("store");
                    }
                });
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
        // ...mapActions("user/", ["setUserdata"])
    }
};
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 50px;
    font-size: 13px;
    color: #666;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 5px 10px #ddd;
    .collapse-btn {
        width: 3%;
        text-align: center;
        cursor: pointer;
        font-size: 24px;
        line-height: 50px;
    }
    .tags-wrapper{
        width: 78%;
    }
    .header-right {
        width: 20%;
        height: 50px;
        line-height: 50px;
        ul{
            display: flex;
            justify-content: flex-start;
            border: 1px solid red;
            li{
                width: 20%;
                list-style: none;
            }
        }
    }
}

</style>
