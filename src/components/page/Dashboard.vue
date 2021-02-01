<template>
    <div class="Dashboard">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>控制台</em>用于展示当前系统中的统计数据、统计报表及重要实时数据</div>
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#one" data-toggle="tab">控制台</a></li>
                    <li><a href="#two" data-toggle="tab">自定义</a></li>
                </ul>
            </div>
            <div class="panel-body">
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="one">
                        <div class="row">
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-violet"><i class="fa fa-book"></i></span>
                                    <div class="sm-st-info">
                                        <span>6</span>
                                        代理总数
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-violet"><i class="fa fa-book"></i></span>
                                    <div class="sm-st-info">
                                        <span>44</span>
                                        业务员总数
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-red"><i class="fa fa-users"></i></span>
                                    <div class="sm-st-info">
                                        <span>23420</span>
                                        会员总数
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-blue"><i class="fa fa-shopping-bag"></i></span>
                                    <div class="sm-st-info">
                                        <span>178100</span>
                                        充值总金额
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-blue"><i class="fa fa-shopping-bag"></i></span>
                                    <div class="sm-st-info">
                                        <span>11500</span>
                                        会员升级总金额
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-blue"><i class="fa fa-shopping-bag"></i></span>
                                    <div class="sm-st-info">
                                        <span>582036</span>
                                        手动充值金额
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-green"><i class="fa fa-cny"></i></span>
                                    <div class="sm-st-info">
                                        <span>139600</span>
                                        提现总金额
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-green"><i class="fa fa-cny"></i></span>
                                    <div class="sm-st-info">
                                        <span>114472</span>
                                        实际提现总金额
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-green"><i class="fa fa-cny"></i></span>
                                    <div class="sm-st-info">
                                        <span>189600</span>
                                        合计充值(含购买会员)
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2 col-xs-6">
                                <div class="sm-st clearfix">
                                    <span class="sm-st-icon st-green"><i class="fa fa-cny"></i></span>
                                    <div class="sm-st-info">
                                        <span>75128</span>
                                        盘面余额(扣除实际提现总金额)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card sameheight-item stats">
                                    <div class="card-block">
                                        <div class="row row-sm stats-container">
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-rocket"></i></div>
                                                <div class="stat">
                                                    <div class="value">492</div>
                                                    <div class="name">今日新增会员</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 30%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-shopping-cart"></i></div>
                                                <div class="stat">
                                                    <div class="value">1756</div>
                                                    <div class="name">昨日新增会员</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-line-chart"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">今日充值</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-users"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">昨日充值</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-line-chart"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">今日会员充值(升级会员)</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-users"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">昨日会员充值(升级会员)</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-list-alt"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">今日提现</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-dollar"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">昨日提现</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-list-alt"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">今日实际提现</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 stat-col">
                                                <div class="stat-icon"><i class="fa fa-dollar"></i></div>
                                                <div class="stat">
                                                    <div class="value">0</div>
                                                    <div class="name">昨日实际提现</div>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" style="width: 25%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="two">
                        <div class="row">
                            <div class="col-xs-12">这里是你的自定义数据</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {};
    },
    mounted() {},
    components: {},
    computed: {},
    methods: {}
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
    .sm-st {
        background: #fff;
        padding: 20px;
        border-radius: 3px;
        margin-bottom: 20px;
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05);
        .st-violet {
            background-color: #7266ba;
        }

        .sm-st-icon {
            width: 60px;
            height: 60px;
            display: inline-block;
            line-height: 60px;
            text-align: center;
            font-size: 30px;
            background: #eee;
            border-radius: 5px;
            float: left;
            margin-right: 10px;
            color: #fff;
        }

        .sm-st-info {
            font-size: 12px;
            padding-top: 2px;
            span {
                display: block;
                font-size: 24px;
                font-weight: 600;
            }
        }
    }

    .stats {
        .stat-icon {
            color: #28bb9c;
            display: inline-block;
            font-size: 26px;
            text-align: center;
            vertical-align: middle;
            width: 50px;
            float: left;
            margin-bottom: 5px;
        }

        .stat {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            .value {
                font-size: 20px;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 500;
            }
            .name {
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .progress {
            height: 2px;
            .progress-bar {
                line-height: 2px;
                height: 2px;
            }
        }
    }
}
</style>
