<template>
    <div class="AttachManage">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead"><em>附件管理</em>主要用于管理上传到服务器或第三方存储的数据</div>
                <ul class="nav nav-tabs">
                    <li v-for="(item, index) in tabList" :key="index" @click="toggleTab(item, index)" :class="{ active: current == index }">
                        <a>{{ item.label }}</a>
                    </li>
                </ul>
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
                                                    <label for="id" class="control-label col-xs-4">ID</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="id-operate"
                                                            data-name="id"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="id"
                                                            value=""
                                                            placeholder="ID"
                                                            id="id"
                                                            data-index="1"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="admin_id" class="control-label col-xs-4">管理员ID</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="admin_id-operate"
                                                            data-name="admin_id"
                                                            value="="
                                                            readonly=""
                                                        />
                                                        <div class="sp_container" style="width: 100%">
                                                            <input
                                                                type="text"
                                                                class="form-control selectpage sp_input"
                                                                name="admin_id_text"
                                                                value=""
                                                                placeholder="管理员ID"
                                                                id="admin_id_text"
                                                                data-index="2"
                                                                data-source="auth/admin/index"
                                                                data-field="nickname"
                                                                autocomplete="off"
                                                            /><input
                                                                type="hidden"
                                                                class="sp_hidden"
                                                                name="admin_id"
                                                                id="admin_id"
                                                                value=""
                                                            />
                                                            <div class="sp_button" title="关闭 (Tab键)"><span class="sp_caret"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="user_id" class="control-label col-xs-4">会员ID</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="user_id-operate"
                                                            data-name="user_id"
                                                            value="="
                                                            readonly=""
                                                        />
                                                        <div class="sp_container" style="width: 100%">
                                                            <input
                                                                type="text"
                                                                class="form-control selectpage sp_input"
                                                                name="user_id_text"
                                                                value=""
                                                                placeholder="会员ID"
                                                                id="user_id_text"
                                                                data-index="3"
                                                                data-source="user/user/index"
                                                                data-field="nickname"
                                                                autocomplete="off"
                                                            /><input type="hidden" class="sp_hidden" name="user_id" id="user_id" value="" />
                                                            <div class="sp_button" title="关闭 (Tab键)"><span class="sp_caret"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="url" class="control-label col-xs-4">物理路径</label>
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
                                                            placeholder="物理路径"
                                                            id="url"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="filename" class="control-label col-xs-4">文件名</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="filename-operate"
                                                            data-name="filename"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="filename"
                                                            value=""
                                                            placeholder="文件名"
                                                            id="filename"
                                                            data-index="6"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="filesize" class="control-label col-xs-4">文件大小</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="filesize-operate"
                                                            data-name="filesize"
                                                            value="BETWEEN"
                                                            readonly=""
                                                        />
                                                        <div class="row row-between">
                                                            <div class="col-xs-6">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    name="filesize"
                                                                    value=""
                                                                    placeholder="文件大小"
                                                                    id="filesize-min"
                                                                    data-index="7"
                                                                />
                                                            </div>
                                                            <div class="col-xs-6">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    name="filesize"
                                                                    value=""
                                                                    placeholder="文件大小"
                                                                    id="filesize-max"
                                                                    data-index="7"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="imagewidth" class="control-label col-xs-4">宽度</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="imagewidth-operate"
                                                            data-name="imagewidth"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="imagewidth"
                                                            value=""
                                                            placeholder="宽度"
                                                            id="imagewidth"
                                                            data-index="8"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="imageheight" class="control-label col-xs-4">高度</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="imageheight-operate"
                                                            data-name="imageheight"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="imageheight"
                                                            value=""
                                                            placeholder="高度"
                                                            id="imageheight"
                                                            data-index="9"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="imagetype" class="control-label col-xs-4">图片类型</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="imagetype-operate"
                                                            data-name="imagetype"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="imagetype"
                                                            value=""
                                                            placeholder="图片类型"
                                                            id="imagetype"
                                                            data-index="10"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="storage" class="control-label col-xs-4">存储引擎</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="storage-operate"
                                                            data-name="storage"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="storage"
                                                            value=""
                                                            placeholder="存储引擎"
                                                            id="storage"
                                                            data-index="11"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="mimetype" class="control-label col-xs-4">Mime类型</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="mimetype-operate"
                                                            data-name="mimetype"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="mimetype"
                                                            value=""
                                                            placeholder="Mime类型"
                                                            id="mimetype"
                                                            data-index="12"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="createtime" class="control-label col-xs-4">创建日期</label>
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
                                                            placeholder="创建日期"
                                                            id="createtime"
                                                            data-index="13"
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
                                            <a href="javascript:;" class="btn btn-success btn-add" title="添加"
                                                ><i class="fa fa-plus"></i> 添加</a
                                            >
                                            <a href="javascript:;" class="btn btn-success btn-edit btn-disabled disabled" title="编辑"
                                                ><i class="fa fa-pencil"></i> 编辑</a
                                            >
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
                                                    <label><input type="checkbox" data-field="admin_id" value="2" /> 管理员ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="user_id" value="3" /> 会员ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="preview" value="4" checked="checked" />
                                                        预览</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="url" value="5" /> 物理路径</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="filename" value="6" checked="checked" />
                                                        文件名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="filesize" value="7" checked="checked" />
                                                        文件大小</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="imagewidth" value="8" checked="checked" />
                                                        宽度</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="imageheight" value="9" checked="checked" />
                                                        高度</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="imagetype" value="10" checked="checked" />
                                                        图片类型</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="storage" value="11" checked="checked" />
                                                        存储引擎</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="mimetype" value="12" checked="checked" />
                                                        Mime类型</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="createtime" value="13" checked="checked" />
                                                        创建日期</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate" value="14" checked="checked" />
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
                                            class="table table-striped table-bordered table-hover table-nowrap"
                                            data-operate-edit="1"
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
                                                    <th style="text-align: center; vertical-align: middle" data-field="preview">
                                                        <div class="th-inner">预览</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="filename">
                                                        <div class="th-inner">文件名</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="filesize">
                                                        <div class="th-inner sortable both">文件大小</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="imagewidth">
                                                        <div class="th-inner sortable both">宽度</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="imageheight">
                                                        <div class="th-inner sortable both">高度</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="imagetype">
                                                        <div class="th-inner">图片类型</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="storage">
                                                        <div class="th-inner">存储引擎</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="mimetype">
                                                        <div class="th-inner">Mime类型</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                        <div class="th-inner sortable both">创建日期</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate">
                                                        <div class="th-inner">操作</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr class="no-records-found">
                                                    <td colspan="12">没有找到匹配的记录</td>
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
                                    <div class="fixed-table-pagination" style="display: none">
                                        <div class="pull-left pagination-detail">
                                            <span class="pagination-info">显示第 1 到第 0 条记录，总共 0 条记录</span
                                            ><span class="page-list" style="display: none"
                                                >每页显示
                                                <span class="btn-group dropup"
                                                    ><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        <span class="page-size">10</span> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem"><a href="#">10</a></li>
                                                    </ul></span
                                                >
                                                条记录</span
                                            >
                                        </div>
                                        <div class="pull-right pagination" style="display: none">
                                            <ul class="pagination">
                                                <li class="page-pre"><a href="#">上一页</a></li>
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
            current: '0', //当前的tab页
            tabList: [
                {
                    label: '全部',
                    value: 'Basic'
                },
                {
                    label: '图片',
                    value: 'Email'
                },
                {
                    label: '音频',
                    value: 'Dictionary'
                },
                {
                    label: '视频',
                    value: 'User'
                },
                {
                    label: '文档',
                    value: 'Example'
                },
                {
                    label: '应用',
                    value: 'Addcfg'
                },
                {
                    label: '压缩包',
                    value: 'Addcfg'
                }
            ],
            currentView: 'Basic'
        };
    },
    methods: {
        toggleTab(item, index) {
            this.current = index;
            this.currentView = item.value;
        }
    }
};
</script>

<style lang="less" scoped>
.AttachManage {
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
        .no-records-found {
            text-align: center;
        }
    }
}
</style>