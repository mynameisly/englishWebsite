<template>
    <div class="WithdrawalRecord">
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
                                                    <label for="id" class="control-label col-xs-4">id</label>
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
                                                            placeholder="id"
                                                            id="id"
                                                            data-index="1"
                                                        />
                                                    </div>
                                                </div>
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
                                                            data-index="2"
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
                                                            data-index="3"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="orderno" class="control-label col-xs-4">订单号</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="orderno-operate"
                                                            data-name="orderno"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="orderno"
                                                            value=""
                                                            placeholder="订单号"
                                                            id="orderno"
                                                            data-index="4"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="transno" class="control-label col-xs-4">平台订单号</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="transno-operate"
                                                            data-name="transno"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="transno"
                                                            value=""
                                                            placeholder="平台订单号"
                                                            id="transno"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="name" class="control-label col-xs-4">收款人姓名</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="name-operate"
                                                            data-name="name"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="name"
                                                            value=""
                                                            placeholder="收款人姓名"
                                                            id="name"
                                                            data-index="6"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="bankaccount" class="control-label col-xs-4">银行账号</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="bankaccount-operate"
                                                            data-name="bankaccount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="bankaccount"
                                                            value=""
                                                            placeholder="银行账号"
                                                            id="bankaccount"
                                                            data-index="7"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="isfcno" class="control-label col-xs-4">IFSC</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="isfcno-operate"
                                                            data-name="isfcno"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="isfcno"
                                                            value=""
                                                            placeholder="IFSC"
                                                            id="isfcno"
                                                            data-index="8"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="createtime" class="control-label col-xs-4">提现时间</label>
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
                                                            placeholder="提现时间"
                                                            id="createtime"
                                                            data-index="9"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="amount" class="control-label col-xs-4">提现金额</label>
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
                                                            placeholder="提现金额"
                                                            id="amount"
                                                            data-index="10"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="trueamount" class="control-label col-xs-4">实际提现金额</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="trueamount-operate"
                                                            data-name="trueamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="trueamount"
                                                            value=""
                                                            placeholder="实际提现金额"
                                                            id="trueamount"
                                                            data-index="11"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="orderstatus" class="control-label col-xs-4">状态</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="orderstatus-operate"
                                                            data-name="orderstatus"
                                                            value="="
                                                            readonly=""
                                                        /><select class="form-control" name="orderstatus">
                                                            <option value="">选择</option>
                                                            <option value="0">未打款</option>
                                                            <option value="2">已打款</option>
                                                            <option value="3">已退回</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="operate2" class="control-label col-xs-4"></label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="operate2-operate"
                                                            data-name="operate2"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="operate2"
                                                            value=""
                                                            placeholder=""
                                                            id="operate2"
                                                            data-index="14"
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
                                                    <label><input type="checkbox" data-field="id" value="1" /> id</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="username" value="2" checked="checked" />
                                                        用户名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="mobile" value="3" checked="checked" />
                                                        手机号</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="orderno" value="4" checked="checked" />
                                                        订单号</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="transno" value="5" checked="checked" />
                                                        平台订单号</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="name" value="6" checked="checked" />
                                                        收款人姓名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="bankaccount" value="7" checked="checked" />
                                                        银行账号</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="isfcno" value="8" checked="checked" />
                                                        IFSC</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="createtime" value="9" checked="checked" />
                                                        提现时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="amount" value="10" checked="checked" />
                                                        提现金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="trueamount" value="11" checked="checked" />
                                                        实际提现金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="orderstatus" value="12" checked="checked" />
                                                        状态</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate" value="13" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate2" value="14" checked="checked" />
                                                    </label>
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
                                                    <th style="text-align: center; vertical-align: middle" data-field="orderno">
                                                        <div class="th-inner">订单号</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="transno">
                                                        <div class="th-inner">平台订单号</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="name">
                                                        <div class="th-inner">收款人姓名</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="bankaccount">
                                                        <div class="th-inner">银行账号</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="isfcno">
                                                        <div class="th-inner">IFSC</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                        <div class="th-inner sortable both">提现时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="amount">
                                                        <div class="th-inner">提现金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="trueamount">
                                                        <div class="th-inner">实际提现金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="orderstatus">
                                                        <div class="th-inner">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate2">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr data-index="0">
                                                    <td class="bs-checkbox">
                                                        <input data-index="0" name="btSelectItem" type="checkbox" />
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">110999961</td>
                                                    <td style="text-align: center; vertical-align: middle">1234567890</td>
                                                    <td style="text-align: center; vertical-align: middle">1611923534467919505</td>
                                                    <td style="text-align: center; vertical-align: middle">-</td>
                                                    <td style="text-align: center; vertical-align: middle">MUHAMMED BASHEER C</td>
                                                    <td style="text-align: center; vertical-align: middle">29720110048108</td>
                                                    <td style="text-align: center; vertical-align: middle">UCBA0002972</td>
                                                    <td style="text-align: center; vertical-align: middle">2021-01-29 18:02:14</td>
                                                    <td style="text-align: center; vertical-align: middle">100.00</td>
                                                    <td style="text-align: center; vertical-align: middle">82.00</td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a
                                                            href="javascript:;"
                                                            class="searchit"
                                                            data-toggle="tooltip"
                                                            title="点击搜索 未打款"
                                                            data-field="orderstatus"
                                                            data-value="0"
                                                            ><span class="text-primary"><i class="fa fa-circle"></i> 未打款</span></a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a href="javascript:;" class="btn btn-info btn-view btn-xs"
                                                            ><i class="fa fa-check"></i> 设置为已付款</a
                                                        >
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">
                                                        <a href="javascript:;" class="btn btn-info btn-view btn-xs"
                                                            ><i class="fa fa-check"></i> 退回提现订单</a
                                                        >
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
                                            <span class="pagination-info">显示第 1 到第 10 条记录，总共 772 条记录</span
                                            ><span class="page-list"
                                                >每页显示
                                                <span class="btn-group dropup"
                                                    ><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        <span class="page-size">10</span> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem" class="active"><a href="#">10</a></li>
                                                        <li role="menuitem"><a href="#">25</a></li>
                                                        <li role="menuitem"><a href="#">50</a></li>
                                                        <li role="menuitem"><a href="#">100</a></li>
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
                                                <li class="page-last"><a href="#">78</a></li>
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
.WithdrawalRecord {
}
</style>