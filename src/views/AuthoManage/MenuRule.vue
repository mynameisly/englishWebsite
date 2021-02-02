<template>
    <div class="MenuRule">
        <div class="panel panel-default panel-intro">
            <div class="panel-heading">
                <div class="panel-lead">
                    <em>菜单规则</em>规则通常对应一个控制器的方法,同时左侧的菜单栏数据也从规则中体现,通常建议通过命令行进行生成规则节点
                </div>
            </div>
            <div class="panel-body">
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="one">
                        <div class="widget-body no-padding">
                            <div class="bootstrap-table">
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
                                            <a href="javascript:;" class="btn btn-success btn-add" title="添加"
                                                ><i class="fa fa-plus"></i> 添加</a
                                            >
                                            <a href="javascript:;" class="btn btn-success btn-edit btn-disabled disabled" title="编辑"
                                                ><i class="fa fa-pencil"></i> 编辑</a
                                            >
                                            <a href="javascript:;" class="btn btn-danger btn-del btn-disabled disabled" title="删除"
                                                ><i class="fa fa-trash"></i> 删除</a
                                            >
                                            <div class="dropdown btn-group">
                                                <a
                                                    class="btn btn-primary btn-more dropdown-toggle btn-disabled disabled"
                                                    data-toggle="dropdown"
                                                    ><i class="fa fa-cog"></i> 更多</a
                                                >
                                                <ul class="dropdown-menu text-left" role="menu">
                                                    <li>
                                                        <a
                                                            class="btn btn-link btn-multi btn-disabled disabled"
                                                            href="javascript:;"
                                                            data-params="status=normal"
                                                            ><i class="fa fa-eye"></i> 设为正常</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="btn btn-link btn-multi btn-disabled disabled"
                                                            href="javascript:;"
                                                            data-params="status=hidden"
                                                            ><i class="fa fa-eye-slash"></i> 设为隐藏</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="javascript:;" class="btn btn-danger btn-toggle-all"
                                                ><i class="fa fa-plus"></i> 显示全部</a
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
                                                        ><input type="checkbox" data-field="title" value="2" checked="checked" />
                                                        标题</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="icon" value="3" checked="checked" /> 图标</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="name" value="4" checked="checked" /> 规则</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="weigh" value="5" checked="checked" />
                                                        权重</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="status" value="6" checked="checked" />
                                                        状态</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="ismenu" value="7" checked="checked" />
                                                        菜单</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="id" value="8" checked="checked" />
                                                        <a href="javascript:;" class="btn btn-success btn-xs btn-toggle"
                                                            ><i class="fa fa-chevron-up"></i></a
                                                    ></label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate" value="9" checked="checked" />
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
                                </div>
                                <div class="fixed-table-container" style="padding-bottom: 0px">
                                    <div class="fixed-table-header" style="display: none"><table></table></div>
                                    <div class="fixed-table-body">
                                        <div class="fixed-table-loading" style="top: 42px; display: none">
                                            正在努力地加载数据中，请稍候……
                                        </div>
                                        <table
                                            id="table"
                                            class="table table-bordered table-hover"
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
                                                    <th style="text-align: left; vertical-align: middle" data-field="title">
                                                        <div class="th-inner">标题</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="icon">
                                                        <div class="th-inner">图标</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: left; vertical-align: middle" data-field="name">
                                                        <div class="th-inner">规则</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="weigh">
                                                        <div class="th-inner">权重</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="status">
                                                        <div class="th-inner">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="ismenu">
                                                        <div class="th-inner">菜单</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="id">
                                                        <div class="th-inner">
                                                            <a href="javascript:;" class="btn btn-success btn-xs btn-toggle"
                                                                ><i class="fa fa-chevron-up"></i
                                                            ></a>
                                                        </div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate">
                                                        <div class="th-inner">操作</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item,index) in menuRuleList" :key="index">
                                                    <td class="bs-checkbox">
                                                        <input data-index="0" name="btSelectItem" type="checkbox" />
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">1</td>
                                                    <td style="text-align: left; vertical-align: middle">控制台</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <span class=""><i class="fa fa-dashboard"></i></span>
                                                    </td>
                                                    <td style="text-align: left; vertical-align: middle">dashboard</td>
                                                    <td style="text-align: center; vertical-align: middle">143</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="searchit"
                                                            data-toggle="tooltip"
                                                            title="点击搜索 正常"
                                                            data-field="status"
                                                            data-value="normal"
                                                            ><span class="text-success"><i class="fa fa-circle"></i> 正常</span></a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            data-toggle="tooltip"
                                                            title="点击切换"
                                                            class="btn-change"
                                                            data-index="0"
                                                            data-id="1"
                                                            data-params="ismenu=0"
                                                            ><i class="fa fa-toggle-on text-success text-success fa-2x"></i
                                                        ></a>
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            data-toggle="tooltip"
                                                            title="点击切换子菜单"
                                                            data-id="1"
                                                            data-pid="0"
                                                            class="btn btn-xs btn-success btn-node-sub"
                                                            ><i class="fa fa-sitemap"></i
                                                        ></a>
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="btn btn-xs btn-primary btn-dragsort"
                                                            data-toggle="tooltip"
                                                            title="拖动进行排序"
                                                            data-table-id="table"
                                                            data-field-index="9"
                                                            data-row-index="0"
                                                            data-button-index="0"
                                                            ><i class="fa fa-arrows"></i
                                                        ></a>
                                                        <a
                                                            href="/HxcFsNbkRZ.php/auth/rule/edit/ids/1"
                                                            class="btn btn-xs btn-success btn-editone"
                                                            data-toggle="tooltip"
                                                            title="编辑"
                                                            data-table-id="table"
                                                            data-field-index="9"
                                                            data-row-index="0"
                                                            data-button-index="1"
                                                            ><i class="fa fa-pencil"></i
                                                        ></a>
                                                        <a
                                                            href="javascript:;"
                                                            class="btn btn-xs btn-danger btn-delone"
                                                            data-toggle="tooltip"
                                                            title="删除"
                                                            data-table-id="table"
                                                            data-field-index="9"
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
                                    <div class="fixed-table-pagination" style="display: none"></div>
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
          menuRuleList: [ //data数据

          ]
        };
    }
};
</script>

<style lang="less" scoped>
.MenuRule {
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