<template>
    <div class="PlugManage">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>插件管理</em>可在线安装、卸载、禁用、启用插件，同时支持添加本地插件。</div>
                <ul class="nav nav-tabs nav-category">
                    <li :class="{'active':current == index}" v-for="(item,index) in tabList" :key="index" @click="toggleTab(item,index)">
                      <a>{{ item.label }}</a>
                    </li>
                </ul>
            </div>

            <div class="panel-body">
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="one">
                        <div class="widget-body no-padding">
                            <div class="bootstrap-table">
                                <div class="commonsearch-table">
                                    <form action="" class="form-commonsearch hide nice-validator n-default n-bootstrap">
                                        <div class="well" style="box-shadow: none; border-radius: 2px; margin-bottom: 10px">
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-6 col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">名称</label>
                                                        <input
                                                            class="operate"
                                                            type="hidden"
                                                            data-name="title"
                                                            value="like"
                                                            id="N501663950963"
                                                        />
                                                        <input class="form-control" type="text" name="title" placeholder="" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">类型</label>
                                                        <input
                                                            class="operate"
                                                            type="hidden"
                                                            data-name="type"
                                                            value="="
                                                            id="N772964734913"
                                                        />
                                                        <input class="form-control" type="text" name="type" placeholder="all" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">分类管理</label>
                                                        <input
                                                            type="hidden"
                                                            class="operate"
                                                            data-name="category_id"
                                                            value="="
                                                            id="N773542578344"
                                                        />
                                                        <input class="form-control" name="category_id" type="text" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">版本</label>
                                                        <input
                                                            type="hidden"
                                                            class="operate"
                                                            data-name="faversion"
                                                            value="="
                                                            id="N143649043845"
                                                        />
                                                        <input
                                                            class="form-control"
                                                            name="faversion"
                                                            type="text"
                                                            value="1.2.0.20201008_beta"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-xs-12 col-sm-6 col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label"></label>
                                                        <div class="row">
                                                            <div class="col-xs-6">
                                                                <input type="submit" class="btn btn-success btn-block" value="提交" />
                                                            </div>
                                                            <div class="col-xs-6">
                                                                <input type="reset" class="btn btn-primary btn-block" value="重置" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="fixed-table-toolbar">
                                    <div class="bs-bars pull-left">
                                        <div id="toolbar" class="toolbar">
                                            <a
                                                href="javascript:;"
                                                class="btn btn-primary btn-refresh"
                                                title="刷新"
                                                data-force-refresh="false"
                                                ><i class="fa fa-refresh"></i>
                                            </a>
                                            <button
                                                type="button"
                                                id="faupload-addon"
                                                class="btn btn-danger faupload btn-mini-xs dz-clickable"
                                                data-url="addon/local"
                                                data-chunking="false"
                                                data-mimetype="zip,fastaddon"
                                                data-multiple="false"
                                                initialized="true"
                                            >
                                                <i class="fa fa-upload dz-message"></i> 离线安装
                                            </button>
                                            <div class="btn-group">
                                                <a href="#" class="btn btn-info btn-switch active btn-mini-xs" data-type="all"
                                                    ><i class="fa fa-list"></i> 全部</a
                                                >
                                                <a href="#" class="btn btn-info btn-switch btn-mini-xs" data-type="free"
                                                    ><i class="fa fa-gift"></i> 免费</a
                                                >
                                                <a href="#" class="btn btn-info btn-switch btn-mini-xs" data-type="price"
                                                    ><i class="fa fa-rmb"></i> 付费</a
                                                >
                                                <a
                                                    href="#"
                                                    class="btn btn-info btn-switch btn-mini-xs"
                                                    data-type="local"
                                                    data-url="addon/downloaded"
                                                    ><i class="fa fa-laptop"></i> 本地插件</a
                                                >
                                            </div>
                                            <a class="btn btn-primary btn-userinfo btn-mini-xs" href="javascript:;"
                                                ><i class="fa fa-user"></i> 会员信息</a
                                            >
                                            <a
                                                href="javascript:"
                                                class="btn btn-warning-light btn-selected-tips hide"
                                                data-animation="false"
                                                data-toggle="tooltip"
                                                data-title="点击取消全部"
                                                ><i class="fa fa-info-circle"></i> 跨页选择模式，已选 <b>0</b> 项</a
                                            >
                                        </div>
                                    </div>
                                    <div class="pull-right search"><input class="form-control" type="text" placeholder="搜索" /></div>
                                </div>
                                <div class="fixed-table-container" style="padding-bottom: 0px">
                                    <div class="fixed-table-header" style="display: none"><table></table></div>
                                    <div class="fixed-table-body">
                                        <div class="fixed-table-loading" style="top: 42px; display: none">
                                            正在努力地加载数据中，请稍候……
                                        </div>
                                        <table id="table" class="table table-striped table-bordered table-hover" width="100%">
                                            <thead>
                                                <tr>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 50px; max-width: 50px"
                                                        data-field="home"
                                                    >
                                                        <div class="th-inner" style="width: 50px">前台</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: left; vertical-align: middle" data-field="title">
                                                        <div class="th-inner">名称</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        class="visible-lg"
                                                        style="text-align: left; vertical-align: middle"
                                                        data-field="intro"
                                                    >
                                                        <div class="th-inner">介绍</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 100px; max-width: 100px"
                                                        data-field="author"
                                                    >
                                                        <div class="th-inner" style="width: 100px">作者</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 100px; max-width: 100px"
                                                        data-field="price"
                                                    >
                                                        <div class="th-inner" style="width: 100px">价格</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 80px; max-width: 80px"
                                                        data-field="downloads"
                                                    >
                                                        <div class="th-inner" style="width: 80px">下载</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 80px; max-width: 80px"
                                                        data-field="version"
                                                    >
                                                        <div class="th-inner" style="width: 80px">版本</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle; width: 80px; max-width: 80px"
                                                        data-field="toggle"
                                                    >
                                                        <div class="th-inner" style="width: 80px">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: right; vertical-align: middle" data-field="id">
                                                        <div class="th-inner">操作</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item,index) in allPlugList" :key="index">
                                                    <td style="text-align: center; vertical-align: middle; width: 50px">
                                                        <a href="javascript:;"><i class="fa fa-home text-gray"></i></a>
                                                    </td>
                                                    <td style="text-align: left; vertical-align: middle">
                                                        <a
                                                            class="title"
                                                            href="https://www.fastadmin.net/store/recommend.html"
                                                            data-toggle="tooltip"
                                                            title="查看插件介绍和帮助"
                                                            target="_blank"
                                                            >FastAdmin推荐服务器</a
                                                        >
                                                        <a
                                                            href="javascript:;"
                                                            data-index="0"
                                                            class="view-screenshots text-success"
                                                            title="点击查看插件截图"
                                                            data-toggle="tooltip"
                                                            ><i class="fa fa-image"></i
                                                        ></a>
                                                    </td>
                                                    <td class="visible-lg" style="text-align: left; vertical-align: middle">
                                                        双11腾讯云服务器1核/2G/1M 88元/1年, 2核/4G/3M 698元/3年
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle; width: 100px">
                                                        <a
                                                            href="https://www.fastadmin.net"
                                                            target="_blank"
                                                            data-toggle="tooltip"
                                                            class="text-primary"
                                                            >官方</a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle; width: 100px">
                                                        <span class="text-success">免费</span>
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle; width: 80px">999</td>
                                                    <td style="text-align: center; vertical-align: middle; width: 80px">1.0.0</td>
                                                    <td style="text-align: center; vertical-align: middle; width: 80px"></td>
                                                    <td style="text-align: right; vertical-align: middle">
                                                        <div class="operate" data-id="" data-name="recommend">
                                                            <a
                                                                href="https://www.fastadmin.net/store/recommend.html"
                                                                class="btn btn-xs btn-primary btn-info"
                                                                target="_blank"
                                                            >
                                                                点击了解详情
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="fixed-table-footer" style="display: none">
                                        <table>
                                            <tbody>
                                                <tr></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="fixed-table-pagination" style="display: block">
                                        <div class="pull-left pagination-detail">
                                            <span class="pagination-info">显示第 1 到第 50 条记录，总共 226 条记录</span
                                            ><span class="page-list"
                                                >每页显示
                                                <span class="btn-group dropup"
                                                    ><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        <span class="page-size">50</span> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem"><a href="#">10</a></li>
                                                        <li role="menuitem"><a href="#">15</a></li>
                                                        <li role="menuitem"><a href="#">20</a></li>
                                                        <li role="menuitem"><a href="#">25</a></li>
                                                        <li role="menuitem" class="active"><a href="#">50</a></li>
                                                        <li role="menuitem"><a href="#">All</a></li>
                                                    </ul></span
                                                >
                                                条记录</span
                                            >
                                        </div>
                                        <div class="pull-right pagination">
                                            <ul class="pagination">
                                                <li class="page-pre"><a href="#">上一页</a></li>
                                                <li class="page-number active"><a href="#">1</a></li>
                                                <li class="page-number"><a href="#">2</a></li>
                                                <li class="page-number"><a href="#">3</a></li>
                                                <li class="page-number"><a href="#">4</a></li>
                                                <li class="page-number"><a href="#">5</a></li>
                                                <li class="page-next"><a href="#">下一页</a></li>
                                                <li class="jumpto">
                                                    <input type="text" class="form-control" /><button
                                                        class="btn btn-default"
                                                        title="跳转"
                                                        type="button"
                                                    >
                                                        跳转
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
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
          current: '0',
          tabList: [
            { label: '全部', value: '' },
            { label: '完整应用', value: '' },
            { label: '小程序', value: '' },
            { label: '开发测试', value: '' },
            { label: '编辑器', value: '' },
            { label: '云存储', value: '' },
            { label: '短信验证', value: '' },
            { label: '接口整合', value: '' },
            { label: '辅助增强', value: '' },
            { label: '最新上架', value: '' },
            { label: '未归类', value: '' },
          ],
          allPlugList: [],
          plugList: [ //全部下 table数据

          ]
        };
    },
    methods: {
      toggleTab(item,index) {
        this.current = index;
      }
    }
};
</script>

<style lang="less" scoped>
.PlugManage {
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