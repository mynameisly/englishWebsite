<template>
    <div class="SystemConfig">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>系统配置</em>可以在此增改系统的变量和分组,也可以自定义分组和变量</div>
                <ul class="nav nav-tabs">
                    <li v-for="(item, index) in tabList" :key="index" @click="toggleTab(item,index)" :class="{ active: current == index }">
                        <a>{{ item.label }}</a>
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
        Basic,
        Email,
        Dictionary,
        User,
        Example,
        Addcfg,
    },
    data() {
        return {
            current: '0', //当前的tab页
            tabList: [{
                label: '基础配置',
                value: 'Basic'
            },
            {
                label: '邮件配置',
                value: 'Email'
            },
            {
                label: '字典配置',
                value: 'Dictionary'
            },
            {
                label: '会员配置',
                value: 'User'
            },
            {
                label: '示例分组',
                value: 'Example'
            },
            {
                label: '',
                value: 'Addcfg'
            }],
            currentView: 'Basic'
        };
    },
    methods: {
        toggleTab(item,index) {
            this.current = index;
            this.currentView = item.value;
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