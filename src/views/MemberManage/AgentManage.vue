<template>
    <div class="AgentManage">
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
                                                    <label for="id" class="control-label col-xs-4">代理ID</label>
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
                                                            placeholder="代理ID"
                                                            id="id"
                                                            data-index="1"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="username" class="control-label col-xs-4">代理名称</label>
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
                                                            placeholder="代理名称"
                                                            id="username"
                                                            data-index="2"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="invcode" class="control-label col-xs-4">推广码</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="invcode-operate"
                                                            data-name="invcode"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="invcode"
                                                            value=""
                                                            placeholder="推广码"
                                                            id="invcode"
                                                            data-index="3"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="extcount" class="control-label col-xs-4">推广总人数</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="extcount-operate"
                                                            data-name="extcount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="extcount"
                                                            value=""
                                                            placeholder="推广总人数"
                                                            id="extcount"
                                                            data-index="4"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="trueextcount" class="control-label col-xs-4">有效推广总人数</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="trueextcount-operate"
                                                            data-name="trueextcount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="trueextcount"
                                                            value=""
                                                            placeholder="有效推广总人数"
                                                            id="trueextcount"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="reccount" class="control-label col-xs-4">总充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="reccount-operate"
                                                            data-name="reccount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="reccount"
                                                            value=""
                                                            placeholder="总充值"
                                                            id="reccount"
                                                            data-index="6"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="recmembercount" class="control-label col-xs-4">总会员充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="recmembercount-operate"
                                                            data-name="recmembercount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="recmembercount"
                                                            value=""
                                                            placeholder="总会员充值"
                                                            id="recmembercount"
                                                            data-index="7"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="reccuscount" class="control-label col-xs-4">总手动充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="reccuscount-operate"
                                                            data-name="reccuscount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="reccuscount"
                                                            value=""
                                                            placeholder="总手动充值"
                                                            id="reccuscount"
                                                            data-index="8"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="withdrawal" class="control-label col-xs-4">总提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="withdrawal-operate"
                                                            data-name="withdrawal"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="withdrawal"
                                                            value=""
                                                            placeholder="总提现"
                                                            id="withdrawal"
                                                            data-index="9"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="truewithdrawal" class="control-label col-xs-4">实际总提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="truewithdrawal-operate"
                                                            data-name="truewithdrawal"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="truewithdrawal"
                                                            value=""
                                                            placeholder="实际总提现"
                                                            id="truewithdrawal"
                                                            data-index="10"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_extCount" class="control-label col-xs-4">今日新增会员</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_extCount-operate"
                                                            data-name="t_extCount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_extCount"
                                                            value=""
                                                            placeholder="今日新增会员"
                                                            id="t_extCount"
                                                            data-index="11"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_extCount" class="control-label col-xs-4">昨日新增会员</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_extCount-operate"
                                                            data-name="y_extCount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_extCount"
                                                            value=""
                                                            placeholder="昨日新增会员"
                                                            id="y_extCount"
                                                            data-index="12"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_recamount" class="control-label col-xs-4">今日充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_recamount-operate"
                                                            data-name="t_recamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_recamount"
                                                            value=""
                                                            placeholder="今日充值"
                                                            id="t_recamount"
                                                            data-index="13"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_recamount" class="control-label col-xs-4">昨日充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_recamount-operate"
                                                            data-name="y_recamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_recamount"
                                                            value=""
                                                            placeholder="昨日充值"
                                                            id="y_recamount"
                                                            data-index="14"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_cusrecamount" class="control-label col-xs-4">今日手动充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_cusrecamount-operate"
                                                            data-name="t_cusrecamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_cusrecamount"
                                                            value=""
                                                            placeholder="今日手动充值"
                                                            id="t_cusrecamount"
                                                            data-index="15"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_cusrecamount" class="control-label col-xs-4">昨日手动充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_cusrecamount-operate"
                                                            data-name="y_cusrecamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_cusrecamount"
                                                            value=""
                                                            placeholder="昨日手动充值"
                                                            id="y_cusrecamount"
                                                            data-index="16"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_updateamount" class="control-label col-xs-4">今日会员充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_updateamount-operate"
                                                            data-name="t_updateamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_updateamount"
                                                            value=""
                                                            placeholder="今日会员充值"
                                                            id="t_updateamount"
                                                            data-index="17"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_updateamount" class="control-label col-xs-4">昨日会员充值</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_updateamount-operate"
                                                            data-name="y_updateamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_updateamount"
                                                            value=""
                                                            placeholder="昨日会员充值"
                                                            id="y_updateamount"
                                                            data-index="18"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_txamount" class="control-label col-xs-4">今日提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_txamount-operate"
                                                            data-name="t_txamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_txamount"
                                                            value=""
                                                            placeholder="今日提现"
                                                            id="t_txamount"
                                                            data-index="19"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="t_truetxamount" class="control-label col-xs-4">今日实际提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="t_truetxamount-operate"
                                                            data-name="t_truetxamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="t_truetxamount"
                                                            value=""
                                                            placeholder="今日实际提现"
                                                            id="t_truetxamount"
                                                            data-index="20"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_txamount" class="control-label col-xs-4">昨日提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_txamount-operate"
                                                            data-name="y_txamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_txamount"
                                                            value=""
                                                            placeholder="昨日提现"
                                                            id="y_txamount"
                                                            data-index="21"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="y_truetxamount" class="control-label col-xs-4">昨日实际提现</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="y_truetxamount-operate"
                                                            data-name="y_truetxamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="y_truetxamount"
                                                            value=""
                                                            placeholder="昨日实际提现"
                                                            id="y_truetxamount"
                                                            data-index="22"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="jointime" class="control-label col-xs-4">加入时间</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="jointime-operate"
                                                            data-name="jointime"
                                                            value="RANGE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control datetimerange"
                                                            name="jointime"
                                                            value=""
                                                            placeholder="加入时间"
                                                            id="jointime"
                                                            data-index="23"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="status" class="control-label col-xs-4">状态</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="status-operate"
                                                            data-name="status"
                                                            value="="
                                                            readonly=""
                                                        /><select class="form-control" name="status">
                                                            <option value="">选择</option>
                                                            <option value="normal">正常</option>
                                                            <option value="stop">停用</option>
                                                        </select>
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
                                                        ><input type="checkbox" data-field="id" value="1" checked="checked" /> 代理ID</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="username" value="2" checked="checked" />
                                                        代理名称</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="invcode" value="3" checked="checked" />
                                                        推广码</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="extcount" value="4" checked="checked" />
                                                        推广总人数</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="trueextcount" value="5" checked="checked" />
                                                        有效推广总人数</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="reccount" value="6" checked="checked" />
                                                        总充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="recmembercount" value="7" checked="checked" />
                                                        总会员充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="reccuscount" value="8" checked="checked" />
                                                        总手动充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="withdrawal" value="9" checked="checked" />
                                                        总提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="truewithdrawal" value="10" checked="checked" />
                                                        实际总提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_extCount" value="11" checked="checked" />
                                                        今日新增会员</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_extCount" value="12" checked="checked" />
                                                        昨日新增会员</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_recamount" value="13" checked="checked" />
                                                        今日充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_recamount" value="14" checked="checked" />
                                                        昨日充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_cusrecamount" value="15" checked="checked" />
                                                        今日手动充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_cusrecamount" value="16" checked="checked" />
                                                        昨日手动充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_updateamount" value="17" checked="checked" />
                                                        今日会员充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_updateamount" value="18" checked="checked" />
                                                        昨日会员充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_txamount" value="19" checked="checked" />
                                                        今日提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_truetxamount" value="20" checked="checked" />
                                                        今日实际提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_txamount" value="21" checked="checked" />
                                                        昨日提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_truetxamount" value="22" checked="checked" />
                                                        昨日实际提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="jointime" value="23" checked="checked" />
                                                        加入时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="status" value="24" checked="checked" />
                                                        状态</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate" value="25" checked="checked" />
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
                                                        data-field="0"
                                                    >
                                                        <div class="th-inner"><input name="btSelectAll" type="checkbox" /></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="id">
                                                        <div class="th-inner">代理ID</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="username">
                                                        <div class="th-inner">代理名称</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="invcode">
                                                        <div class="th-inner">推广码</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="extcount">
                                                        <div class="th-inner">推广总人数</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="trueextcount">
                                                        <div class="th-inner">有效推广总人数</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="reccount">
                                                        <div class="th-inner">总充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="recmembercount">
                                                        <div class="th-inner">总会员充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="reccuscount">
                                                        <div class="th-inner">总手动充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="withdrawal">
                                                        <div class="th-inner">总提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="truewithdrawal">
                                                        <div class="th-inner">实际总提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_extCount">
                                                        <div class="th-inner">今日新增会员</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_extCount">
                                                        <div class="th-inner">昨日新增会员</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_recamount">
                                                        <div class="th-inner">今日充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_recamount">
                                                        <div class="th-inner">昨日充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_cusrecamount">
                                                        <div class="th-inner">今日手动充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_cusrecamount">
                                                        <div class="th-inner">昨日手动充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_updateamount">
                                                        <div class="th-inner">今日会员充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_updateamount">
                                                        <div class="th-inner">昨日会员充值</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_txamount">
                                                        <div class="th-inner">今日提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="t_truetxamount">
                                                        <div class="th-inner">今日实际提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_txamount">
                                                        <div class="th-inner">昨日提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="y_truetxamount">
                                                        <div class="th-inner">昨日实际提现</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="jointime">
                                                        <div class="th-inner sortable both">加入时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="status">
                                                        <div class="th-inner">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate">
                                                        <div class="th-inner">操作</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr data-index="0">
                                                    <td class="bs-checkbox">
                                                        <input data-index="0" name="btSelectItem" type="checkbox" />
                                                    </td>
                                                    <td style="text-align: center; vertical-align: middle">286</td>
                                                    <td style="text-align: center; vertical-align: middle">zongdai</td>
                                                    <td style="text-align: center; vertical-align: middle">169041</td>
                                                    <td style="text-align: center; vertical-align: middle">22194</td>
                                                    <td style="text-align: center; vertical-align: middle">93</td>
                                                    <td style="text-align: center; vertical-align: middle">110500.00</td>
                                                    <td style="text-align: center; vertical-align: middle">7000.00</td>
                                                    <td style="text-align: center; vertical-align: middle">292244.01</td>
                                                    <td style="text-align: center; vertical-align: middle">106600.00</td>
                                                    <td style="text-align: center; vertical-align: middle">87412.00</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">0</td>
                                                    <td style="text-align: center; vertical-align: middle">2021-01-09 15:41:06</td>
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
                                                            href="/HxcFsNbkRZ.php/user/user/edit/ids/286"
                                                            class="btn btn-xs btn-success btn-editone"
                                                            data-toggle="tooltip"
                                                            title="编辑"
                                                            data-table-id="table"
                                                            data-field-index="25"
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
                                                            data-field-index="25"
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
                                            <span class="pagination-info">显示第 1 到第 6 条记录，总共 6 条记录</span
                                            ><span class="page-list" style="display: none"
                                                >每页显示
                                                <span class="btn-group dropup"
                                                    ><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        <span class="page-size">10</span> <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li role="menuitem" class="active"><a href="#">10</a></li>
                                                    </ul></span
                                                >
                                                条记录</span
                                            >
                                        </div>
                                        <div class="pull-right pagination" style="display: none">
                                            <ul class="pagination">
                                                <li class="page-pre"><a href="#">上一页</a></li>
                                                <li class="page-number active"><a href="#">1</a></li>
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
.AgentManage {
}
</style>