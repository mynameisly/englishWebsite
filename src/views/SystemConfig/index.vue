<template>
    <div class="SystemConfig">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>系统配置</em>可以在此增改系统的变量和分组,也可以自定义分组和变量</div>
                <ul class="nav nav-tabs">
                    <li v-for="(item, index) in tabList" :key="index" @click="toggleTab(index)" :class="{ active: current == index }">
                        <a href="">{{ item }}</a>
                    </li>
                    <li data-toggle="tooltip" title="" data-original-title="点击添加新的配置">
                        <a href="#addcfg" data-toggle="tab"><i class="fa fa-plus"></i></a>
                    </li>
                </ul>
            </div>

            <div class="panel-body">
                <div id="myTabContent" class="tab-content">
                    <component :is="currentView"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Addcfg from './addcfg'
import Basic from './basic'
import Dictionary from './dictionary'
import Email from './email'
import Example from './example'
import User from './user'
export default {
    components: {
        Addcfg,
        Basic,
        Dictionary,
        Email,
        Example,
        User
    },
    data() {
        return {
            current: '0', //当前的tab页
            tabList: ['基础配置', '字典配置', '会员配置', '示例分组'],
            currentView: '0',
            arr: ['Addcfg','Basic','Dictionary','Email','Example','User']
        };
    },
    computed:{
        currentView(){
            return this.arr[this.index];
        }
    },
    methods: {
        toggleTab(index) {
            this.current = index;
        }
    }
};
</script>

<style lang="less" scoped>
.SystemConfig {
    .panel-intro {
        .panel-heading {
            padding: 15px;
            padding-bottom: 0;
            background: #e8edf0;
            border-color: #e8edf0;
            position: relative;
            .panel-lead {
                margin-bottom: 15px;
                em {
                    display: block;
                    font-weight: bold;
                    font-style: normal;
                }
            }
        }
    }
}
</style>