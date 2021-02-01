<template>
    <div class="PersonalData">
        <div class="row animated fadeInRight">
            <div class="col-md-4">
                <div class="box box-success">
                    <div class="panel-heading">个人资料</div>
                    <div class="panel-body">
                        <form
                            id="update-form"
                            role="form"
                            data-toggle="validator"
                            method="POST"
                            action="/HxcFsNbkRZ.php/general.profile/update"
                            class="nice-validator n-default n-bootstrap"
                            novalidate="novalidate"
                        >
                            <input type="hidden" name="__token__" value="d8251281027b6cf5430ecd905a8e0e9d" />
                            <input type="hidden" id="c-avatar" name="row[avatar]" value="/assets/img/avatar.png" />
                            <div class="box-body box-profile">
                                <div class="profile-avatar-container">
                                    <img class="profile-user-img img-responsive img-circle" src="/assets/img/avatar.png" alt="" />
                                    <div class="profile-avatar-text img-circle">点击编辑</div>
                                    <button
                                        type="button"
                                        id="faupload-avatar"
                                        class="faupload dz-clickable"
                                        data-input-id="c-avatar"
                                        initialized="true"
                                    >
                                        <i class="fa fa-upload dz-message"></i> 上传
                                    </button>
                                </div>

                                <h3 class="profile-username text-center">admin</h3>

                                <p class="text-muted text-center">admin@admin.com</p>
                                <div class="form-group">
                                    <label for="username" class="control-label">用户名:</label>
                                    <input type="text" class="form-control" id="username" name="row[username]" value="admin" disabled="" />
                                </div>
                                <div class="form-group">
                                    <label for="email" class="control-label">Email:</label>
                                    <input type="text" class="form-control" id="email" name="row[email]" value="admin@admin.com" />
                                </div>
                                <div class="form-group">
                                    <label for="nickname" class="control-label">昵称:</label>
                                    <input type="text" class="form-control" id="nickname" name="row[nickname]" value="Admin" />
                                </div>
                                <div class="form-group">
                                    <label for="password" class="control-label">密码:</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="不修改密码请留空"
                                        autocomplete="new-password"
                                        name="row[password]"
                                        value=""
                                    />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success">提交</button>
                                    <button type="reset" class="btn btn-default">重置</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="panel panel-default panel-intro panel-nav">
                    <div class="panel-heading">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#one" data-toggle="tab"><i class="fa fa-list"></i> 操作日志</a>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <div id="myTabContent" class="tab-content">
                            <div class="tab-pane fade active in" id="one">
                                <div class="widget-body no-padding">
                                    <div class="bootstrap-table">
                                        <div class="fixed-table-toolbar">
                                            <div class="bs-bars pull-left">
                                                <div id="toolbar" class="toolbar">
                                                    <a href="javascript:;" class="btn btn-primary btn-refresh" title="刷新"
                                                        ><i class="fa fa-refresh"></i>
                                                    </a>
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
                                            <div class="columns columns-right btn-group pull-right">
                                                <button
                                                    class="btn btn-default"
                                                    type="button"
                                                    name="toggle"
                                                    aria-label="toggle"
                                                    title="切换"
                                                >
                                                    <i class="glyphicon glyphicon-list-alt icon-list-alt"></i>
                                                </button>
                                                <div class="keep-open btn-group" title="列">
                                                    <button
                                                        type="button"
                                                        aria-label="columns"
                                                        class="btn btn-default dropdown-toggle"
                                                        data-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="glyphicon glyphicon-th icon-th"></i> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem">
                                                            <label
                                                                ><input type="checkbox" data-field="id" value="0" checked="checked" />
                                                                ID</label
                                                            >
                                                        </li>
                                                        <li role="menuitem">
                                                            <label
                                                                ><input type="checkbox" data-field="title" value="1" checked="checked" />
                                                                标题</label
                                                            >
                                                        </li>
                                                        <li role="menuitem">
                                                            <label
                                                                ><input type="checkbox" data-field="url" value="2" checked="checked" />
                                                                链接</label
                                                            >
                                                        </li>
                                                        <li role="menuitem">
                                                            <label
                                                                ><input type="checkbox" data-field="ip" value="3" checked="checked" />
                                                                ip</label
                                                            >
                                                        </li>
                                                        <li role="menuitem">
                                                            <label
                                                                ><input
                                                                    type="checkbox"
                                                                    data-field="createtime"
                                                                    value="4"
                                                                    checked="checked"
                                                                />
                                                                操作时间</label
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
                                                        aria-expanded="false"
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
                                            <div class="pull-right search">
                                                <input class="form-control" type="text" placeholder="搜索" />
                                            </div>
                                        </div>
                                        <div class="fixed-table-container" style="padding-bottom: 0px">
                                            <div class="fixed-table-header" style="display: none"><table></table></div>
                                            <div class="fixed-table-body" style="height: 100%">
                                                <div class="fixed-table-loading" style="top: 42px; display: none">
                                                    正在努力地加载数据中，请稍候……
                                                </div>
                                                <table
                                                    id="table"
                                                    class="table table-striped table-bordered table-hover"
                                                    width="100%"
                                                    style="margin-top: 0px"
                                                >
                                                    <thead style="display: table-header-group">
                                                        <tr>
                                                            <th style="text-align: center; vertical-align: middle" data-field="id">
                                                                <div class="th-inner">ID</div>
                                                                <div class="fht-cell"></div>
                                                            </th>
                                                            <th style="text-align: center; vertical-align: middle" data-field="title">
                                                                <div class="th-inner">标题</div>
                                                                <div class="fht-cell"></div>
                                                            </th>
                                                            <th style="text-align: left; vertical-align: middle" data-field="url">
                                                                <div class="th-inner">链接</div>
                                                                <div class="fht-cell"></div>
                                                            </th>
                                                            <th style="text-align: center; vertical-align: middle" data-field="ip">
                                                                <div class="th-inner">ip</div>
                                                                <div class="fht-cell"></div>
                                                            </th>
                                                            <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                                <div class="th-inner sortable both">操作时间</div>
                                                                <div class="fht-cell"></div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody data-listidx="0">
                                                        <tr data-index="0" v-for="(item,index) in operateLogList" :key="index">
                                                            <td style="text-align: center; vertical-align: middle">{{item.id}}</td>
                                                            <td style="text-align: center; vertical-align: middle">{{item.title}}</td>
                                                            <td style="text-align: left; vertical-align: middle">
                                                                <div
                                                                    class="input-group input-group-sm"
                                                                    style="width: 250px; margin: 0 auto"
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        class="form-control input-sm"
                                                                        :value="item.link"
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
                                                                    title="点击搜索 125.69.15.126"
                                                                    data-field="ip"
                                                                    data-value="125.69.15.126"
                                                                    >{{item.ip}}</a
                                                                >
                                                            </td>
                                                            <td style="text-align: center; vertical-align: middle">{{item.time}}</td>
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
                                                    <span class="pagination-info">显示第 1 到第 10 条记录，总共 469 条记录</span
                                                    ><span class="page-list"
                                                        >每页显示
                                                        <span class="btn-group dropup"
                                                            ><button
                                                                type="button"
                                                                class="btn btn-default dropdown-toggle"
                                                                data-toggle="dropdown"
                                                            >
                                                                <span class="page-size">10</span> <span class="caret"></span>
                                                            </button>
                                                            <ul class="dropdown-menu" role="menu">
                                                                <li role="menuitem"><a href="#">10</a></li>
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
                                                        <li class="page-last"><a href="#">47</a></li>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          operateLogList: [
            {
              id: "1240",
              title: "登录",
              link: '/HxcFsNbkRZ.php/index/login?url=%2FHxcFsNbkRZ.php',
              ip: '125.69.15.126',
              time: '2021-02-01 21:09:21'
            },
            {
              id: "2344",
              title: "登录",
              link: '/HxcFsNbkRZ.php/index/login?url=%2FHxcFsNbkRZ.php',
              ip: '125.69.15.126',
              time: '2021-02-01 21:09:21'
            },
            {
              id: "3245",
              title: "登录",
              link: '/HxcFsNbkRZ.php/index/login?url=%2FHxcFsNbkRZ.php',
              ip: '125.69.15.126',
              time: '2021-02-01 21:09:21'
            }
          ]
        };
    }
};
</script>

<style lang="less" scoped>
.PersonalData {
    .box {
        position: relative;
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
    .box-success {
        border-top-color: #18bc9c;
        .panel-heading {
            padding: 10px 15px;
            border-bottom: 1px solid transparent;
            border-top-right-radius: 2px;
            border-top-left-radius: 2px;
        }
        .panel-body {
            padding: 15px;
        }
    }
}
</style>