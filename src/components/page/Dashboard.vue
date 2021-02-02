<template>
    <div class="Dashboard">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>控制台</em>用于展示当前系统中的统计数据、统计报表及重要实时数据</div>
                <ul class="nav nav-tabs">
                    <li v-for="(item,index) in tabList" :key="index" :class="{active: current == index}" @click="toggleTab(item,index)">
                        <a>{{ item.label }}</a>
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
import DashboardCom from './dashboardCom';
import CustomCom from './customCom';
export default {
    name: 'dashboard',
    components: {
        DashboardCom,
        CustomCom
    },
    data() {
        return {
            current: '0',
            currentView: 'DashboardCom',
            tabList: [
                {
                    label: '控制台',
                    value: 'DashboardCom'
                },
                {
                    label: '自定义',
                    value: 'CustomCom'
                },
            ]
        };
    },
    mounted() {},
    methods: {
        toggleTab(item,index) {
            console.log('item',item)
            this.current = index;
            this.currentView = item.value;
        }
    }
};
</script>


<style lang="less" scoped>
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
</style>
