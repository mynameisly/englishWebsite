<template>
    <div class="FinancialRecords">
        <div class="panel panel-default panel-intro">
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
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="username"
                                                            value=""
                                                            placeholder="用户名"
                                                            id="username"
                                                            data-index="1"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="mobile" class="control-label col-xs-4">手机号</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="mobile-operate"
                                                            data-name="mobile"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="mobile"
                                                            value=""
                                                            placeholder="手机号"
                                                            id="mobile"
                                                            data-index="2"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="producttitle" class="control-label col-xs-4">产品名称</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="producttitle-operate"
                                                            data-name="producttitle"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="producttitle"
                                                            value=""
                                                            placeholder="产品名称"
                                                            id="producttitle"
                                                            data-index="3"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="remark" class="control-label col-xs-4">产品简介</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="remark-operate"
                                                            data-name="remark"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="remark"
                                                            value=""
                                                            placeholder="产品简介"
                                                            id="remark"
                                                            data-index="4"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="amount" class="control-label col-xs-4">购买金额</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="amount-operate"
                                                            data-name="amount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="amount"
                                                            value=""
                                                            placeholder="购买金额"
                                                            id="amount"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="createtime" class="control-label col-xs-4">购买时间</label>
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
                                                            placeholder="购买时间"
                                                            id="createtime"
                                                            data-index="6"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="endtime" class="control-label col-xs-4">到期时间</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="endtime-operate"
                                                            data-name="endtime"
                                                            value="RANGE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control datetimerange"
                                                            name="endtime"
                                                            value=""
                                                            placeholder="到期时间"
                                                            id="endtime"
                                                            data-index="7"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="order_status" class="control-label col-xs-4">状态</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="order_status-operate"
                                                            data-name="order_status"
                                                            value="="
                                                            readonly=""
                                                        /><select class="form-control" name="order_status">
                                                            <option value="">选择</option>
                                                            <option value="0">锁定</option>
                                                            <option value="1">已赎回</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="recoverytime" class="control-label col-xs-4">赎回时间</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="recoverytime-operate"
                                                            data-name="recoverytime"
                                                            value="RANGE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control datetimerange"
                                                            name="recoverytime"
                                                            value=""
                                                            placeholder="赎回时间"
                                                            id="recoverytime"
                                                            data-index="9"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="fitamount" class="control-label col-xs-4">收益</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="fitamount-operate"
                                                            data-name="fitamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="fitamount"
                                                            value=""
                                                            placeholder="收益"
                                                            id="fitamount"
                                                            data-index="10"
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
                                    <div class="columns-right pull-right" style="margin-top: 10px; margin-bottom: 10px">
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
                                                    <label
                                                        ><input type="checkbox" data-field="username" value="1" checked="checked" />
                                                        用户名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="mobile" value="2" checked="checked" />
                                                        手机号</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="producttitle" value="3" checked="checked" />
                                                        产品名称</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="remark" value="4" checked="checked" />
                                                        产品简介</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="amount" value="5" checked="checked" />
                                                        购买金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="createtime" value="6" checked="checked" />
                                                        购买时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="endtime" value="7" checked="checked" />
                                                        到期时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="order_status" value="8" checked="checked" />
                                                        状态</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="recoverytime" value="9" checked="checked" />
                                                        赎回时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="fitamount" value="10" checked="checked" />
                                                        收益</label
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
                                            data-operate-edit="1"
                                            data-operate-del="1"
                                            width="100%"
                                        >
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="bs-checkbox"
                                                        style="text-align: center; vertical-align: middle; width: 36px"
                                                        data-field="0"
                                                    >
                                                        <div class="th-inner"><input name="btSelectAll" type="checkbox" /></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="username">
                                                        <div class="th-inner">用户名</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="mobile">
                                                        <div class="th-inner">手机号</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="producttitle">
                                                        <div class="th-inner">产品名称</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="remark">
                                                        <div class="th-inner">产品简介</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="amount">
                                                        <div class="th-inner">购买金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                        <div class="th-inner sortable both">购买时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="endtime">
                                                        <div class="th-inner sortable both">到期时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="order_status">
                                                        <div class="th-inner">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="recoverytime">
                                                        <div class="th-inner sortable both">赎回时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="fitamount">
                                                        <div class="th-inner">收益</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr data-index="0">
                                                    <td class="bs-checkbox">
                                                        <input data-index="0" name="btSelectItem" type="checkbox" />
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">180615136</td>
                                                    <td style="text-align: center; vertical-align: middle">7016231435</td>
                                                    <td style="text-align: center; vertical-align: middle">Product A</td>
                                                    <td style="text-align: center; vertical-align: middle">日收益5%,锁定7天</td>
                                                    <td style="text-align: center; vertical-align: middle">112.00</td>
                                                    <td style="text-align: center; vertical-align: middle">2021-02-08 11:47:07</td>
                                                    <td style="text-align: center; vertical-align: middle">2021-02-15 11:47:07</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="searchit"
                                                            data-toggle="tooltip"
                                                            title="点击搜索 锁定"
                                                            data-field="order_status"
                                                            data-value="0"
                                                            ><span class="text-primary"><i class="fa fa-circle"></i> 锁定</span></a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">无</td>
                                                    <td style="text-align: center; vertical-align: middle">0.00</td>
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
                                            <span class="pagination-info">显示第 1 到第 10 条记录，总共 1276 条记录</span
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
                                                <li class="page-last"><a href="#">128</a></li>
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
        return {};
    }
};
</script>

<style lang="less" scoped>
.FinancialRecords {
}
</style>