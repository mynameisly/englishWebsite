<template>
    <div class="AdminLog">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>管理员日志</em>管理员可以查看自己所拥有的权限的管理员日志</div>
            </div>
            <div class="panel-body">
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="one">
                        <div class="widget-body no-padding">
                            <div class="bootstrap-table">
                                <div class="commonsearch-table hidden">
                                    <form
                                        class="form-horizontal form-commonsearch nice-validator n-default n-bootstrap"
                                        novalidate=""
                                        method="post"
                                        action=""
                                    >
                                        <fieldset>
                                            <div class="row">
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="username" class="control-label col-xs-4">用户名</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="username-operate"
                                                            data-name="username"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="username"
                                                            value=""
                                                            placeholder="用户名"
                                                            id="username"
                                                            data-index="2"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="title" class="control-label col-xs-4">标题</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="title-operate"
                                                            data-name="title"
                                                            value="LIKE %...%"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="title"
                                                            value=""
                                                            placeholder="模糊搜索"
                                                            id="title"
                                                            data-index="3"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="url" class="control-label col-xs-4">Url</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="url-operate"
                                                            data-name="url"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="url"
                                                            value=""
                                                            placeholder="Url"
                                                            id="url"
                                                            data-index="4"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="ip" class="control-label col-xs-4">IP</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="ip-operate"
                                                            data-name="ip"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="ip"
                                                            value=""
                                                            placeholder="IP"
                                                            id="ip"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="createtime" class="control-label col-xs-4">创建时间</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="createtime-operate"
                                                            data-name="createtime"
                                                            value="RANGE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control datetimerange"
                                                            name="createtime"
                                                            value=""
                                                            placeholder="创建时间"
                                                            id="createtime"
                                                            data-index="7"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <div class="col-sm-8 col-xs-offset-4">
                                                        <button type="submit" class="btn btn-success" formnovalidate="">提交</button>
                                                        <button type="reset" class="btn btn-default">重置</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class="fixed-table-toolbar">
                                    <div class="bs-bars pull-left">
                                        <div id="toolbar" class="toolbar">
                                            <a href="javascript:;" class="btn btn-primary btn-refresh" title="刷新"
                                                ><i class="fa fa-refresh"></i>
                                            </a>
                                            <a href="javascript:;" class="btn btn-danger btn-del btn-disabled disabled" title="删除"
                                                ><i class="fa fa-trash"></i> 删除</a
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
                                    <div class="columns-right pull-right" style="margin-bottom: 10px">
                                        <button class="btn btn-default" type="button" name="commonSearch" title="普通搜索">
                                            <i class="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                    <div class="columns columns-right btn-group pull-right">
                                        <button class="btn btn-default" type="button" name="toggle" aria-label="toggle" title="切换">
                                            <i class="glyphicon glyphicon-list-alt icon-list-alt"></i>
                                        </button>
                                        <div class="keep-open btn-group" title="列">
                                            <button
                                                type="button"
                                                aria-label="columns"
                                                class="btn btn-default dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                <i class="glyphicon glyphicon-th icon-th"></i> <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="id" value="1" checked="checked" /> ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="username" value="2" checked="checked" />
                                                        用户名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="title" value="3" checked="checked" />
                                                        标题</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="url" value="4" checked="checked" /> Url</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="ip" value="5" checked="checked" /> IP</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="browser" value="6" checked="checked" />
                                                        Browser</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="createtime" value="7" checked="checked" />
                                                        创建时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate" value="8" checked="checked" />
                                                        操作</label
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="export btn-group">
                                            <button
                                                class="btn btn-default dropdown-toggle"
                                                aria-label="export type"
                                                title="导出数据"
                                                data-toggle="dropdown"
                                                type="button"
                                            >
                                                <i class="glyphicon glyphicon-export icon-share"></i> <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu" role="menu">
                                                <li role="menuitem" data-type="json"><a href="javascript:void(0)">JSON</a></li>
                                                <li role="menuitem" data-type="xml"><a href="javascript:void(0)">XML</a></li>
                                                <li role="menuitem" data-type="csv"><a href="javascript:void(0)">CSV</a></li>
                                                <li role="menuitem" data-type="txt"><a href="javascript:void(0)">TXT</a></li>
                                                <li role="menuitem" data-type="doc"><a href="javascript:void(0)">MS-Word</a></li>
                                                <li role="menuitem" data-type="excel"><a href="javascript:void(0)">MS-Excel</a></li>
                                            </ul>
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
                                        <table
                                            id="table"
                                            class="table table-striped table-bordered table-hover"
                                            data-operate-detail="1"
                                            data-operate-del="1"
                                            width="100%"
                                        >
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="bs-checkbox"
                                                        style="text-align: center; vertical-align: middle; width: 36px"
                                                        data-field="state"
                                                    >
                                                        <div class="th-inner"><input name="btSelectAll" type="checkbox" /></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="id">
                                                        <div class="th-inner">ID</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="username">
                                                        <div class="th-inner">用户名</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="title">
                                                        <div class="th-inner">标题</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="url">
                                                        <div class="th-inner">Url</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="ip">
                                                        <div class="th-inner">IP</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="browser">
                                                        <div class="th-inner">Browser</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                        <div class="th-inner sortable both">创建时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate">
                                                        <div class="th-inner">操作</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr data-index="0" v-for="(item, index) in adminLogList" :key="index">
                                                    <td class="bs-checkbox">
                                                        <input data-index="0" name="btSelectItem" type="checkbox" />
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">1244</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="searchit"
                                                            data-toggle="tooltip"
                                                            title="点击搜索 admin"
                                                            data-field="username"
                                                            data-value="admin"
                                                            >admin</a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">登录</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <div class="input-group input-group-sm" style="width: 250px; margin: 0 auto">
                                                            <input
                                                                type="text"
                                                                class="form-control input-sm"
                                                                value="/HxcFsNbkRZ.php/index/login?url=%2FHxcFsNbkRZ.php"
                                                            /><span class="input-group-btn input-group-sm"
                                                                ><a
                                                                    href="/HxcFsNbkRZ.php/index/login?url=%2FHxcFsNbkRZ.php"
                                                                    target="_blank"
                                                                    class="btn btn-default btn-sm"
                                                                    ><i class="fa fa-link"></i></a
                                                            ></span>
                                                        </div>
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="searchit"
                                                            data-toggle="tooltip"
                                                            title="点击搜索 110.191.216.8"
                                                            data-field="ip"
                                                            data-value="110.191.216.8"
                                                            >110.191.216.8</a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a class="btn btn-xs btn-browser">Mozilla/5.0</a>
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">2021-02-02 09:05:21</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="/HxcFsNbkRZ.php/auth/adminlog/detail/ids/1244"
                                                            class="btn btn-info btn-xs btn-detail btn-dialog"
                                                            title="详情"
                                                            data-table-id="table"
                                                            data-field-index="8"
                                                            data-row-index="0"
                                                            data-button-index="0"
                                                            ><i class="fa fa-list"></i> 详情</a
                                                        >
                                                        <a
                                                            href="javascript:;"
                                                            class="btn btn-xs btn-danger btn-delone"
                                                            data-toggle="tooltip"
                                                            title="删除"
                                                            data-table-id="table"
                                                            data-field-index="8"
                                                            data-row-index="0"
                                                            data-button-index="2"
                                                            ><i class="fa fa-trash"></i
                                                        ></a>
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
                                            <span class="pagination-info">显示第 1 到第 10 条记录，总共 734 条记录</span
                                            ><span class="page-list"
                                                >每页显示
                                                <span class="btn-group dropup"
                                                    ><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        <span class="page-size">10</span> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem" class="active"><a href="#">10</a></li>
                                                        <li role="menuitem"><a href="#">15</a></li>
                                                        <li role="menuitem"><a href="#">20</a></li>
                                                        <li role="menuitem"><a href="#">25</a></li>
                                                        <li role="menuitem"><a href="#">50</a></li>
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
                                                <li class="page-last-separator disabled"><a href="#">...</a></li>
                                                <li class="page-last"><a href="#">74</a></li>
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
            adminLogList: []
        };
    }
};
</script>

<style lang="less" scoped>
.AdminLog {
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