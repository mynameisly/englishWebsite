<template>
    <div>
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
                                                    <label for="operate10" class="control-label col-xs-4"></label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="operate10-operate"
                                                            data-name="operate10"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="operate10"
                                                            value=""
                                                            placeholder=""
                                                            id="operate10"
                                                            data-index="1"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="operate30" class="control-label col-xs-4"></label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="operate30-operate"
                                                            data-name="operate30"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="operate30"
                                                            value=""
                                                            placeholder=""
                                                            id="operate30"
                                                            data-index="2"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="operate1" class="control-label col-xs-4"></label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="operate1-operate"
                                                            data-name="operate1"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="operate1"
                                                            value=""
                                                            placeholder=""
                                                            id="operate1"
                                                            data-index="3"
                                                        />
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
                                                            data-index="4"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="agentid" class="control-label col-xs-4">代理ID</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="agentid-operate"
                                                            data-name="agentid"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="agentid"
                                                            value=""
                                                            placeholder="代理ID"
                                                            id="agentid"
                                                            data-index="5"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="busid" class="control-label col-xs-4">业务员ID</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="busid-operate"
                                                            data-name="busid"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="busid"
                                                            value=""
                                                            placeholder="业务员ID"
                                                            id="busid"
                                                            data-index="6"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="id" class="control-label col-xs-4">会员ID</label>
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
                                                            placeholder="会员ID"
                                                            id="id"
                                                            data-index="7"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="operate3" class="control-label col-xs-4"></label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="operate3-operate"
                                                            data-name="operate3"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="operate3"
                                                            value=""
                                                            placeholder=""
                                                            id="operate3"
                                                            data-index="8"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="agentname" class="control-label col-xs-4">所属代理</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="agentname-operate"
                                                            data-name="agentname"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="agentname"
                                                            value=""
                                                            placeholder="所属代理"
                                                            id="agentname"
                                                            data-index="9"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="busname" class="control-label col-xs-4">所属业务员</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="busname-operate"
                                                            data-name="busname"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="busname"
                                                            value=""
                                                            placeholder="所属业务员"
                                                            id="busname"
                                                            data-index="10"
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
                                                            data-index="11"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="mobile" class="control-label col-xs-4">手机号码</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="mobile-operate"
                                                            data-name="mobile"
                                                            value="LIKE"
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="mobile"
                                                            value=""
                                                            placeholder="手机号码"
                                                            id="mobile"
                                                            data-index="12"
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
                                                            data-index="13"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="level" class="control-label col-xs-4">会员等级</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="level-operate"
                                                            data-name="level"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="level"
                                                            value=""
                                                            placeholder="会员等级"
                                                            id="level"
                                                            data-index="14"
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
                                                            data-index="15"
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
                                                            data-index="16"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="money" class="control-label col-xs-4">账户余额</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="money-operate"
                                                            data-name="money"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="money"
                                                            value=""
                                                            placeholder="账户余额"
                                                            id="money"
                                                            data-index="17"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="reccount" class="control-label col-xs-4">充值总金额</label>
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
                                                            placeholder="充值总金额"
                                                            id="reccount"
                                                            data-index="18"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="reccuscount" class="control-label col-xs-4">手动充值总金额</label>
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
                                                            placeholder="手动充值总金额"
                                                            id="reccuscount"
                                                            data-index="19"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="withdrawal" class="control-label col-xs-4">提现总金额</label>
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
                                                            placeholder="提现总金额"
                                                            id="withdrawal"
                                                            data-index="20"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="truewithdrawal" class="control-label col-xs-4">实际提现总金额</label>
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
                                                            placeholder="实际提现总金额"
                                                            id="truewithdrawal"
                                                            data-index="21"
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
                                                            data-index="22"
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
                                                            data-index="23"
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
                                                            data-index="24"
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
                                                            data-index="25"
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
                                                            data-index="26"
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
                                                            data-index="27"
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
                                                            data-index="28"
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
                                                            data-index="29"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="totaltask" class="control-label col-xs-4">合计任务数</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="totaltask-operate"
                                                            data-name="totaltask"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="totaltask"
                                                            value=""
                                                            placeholder="合计任务数"
                                                            id="totaltask"
                                                            data-index="30"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="totaktaskamount" class="control-label col-xs-4">合计任务佣金</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="totaktaskamount-operate"
                                                            data-name="totaktaskamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="totaktaskamount"
                                                            value=""
                                                            placeholder="合计任务佣金"
                                                            id="totaktaskamount"
                                                            data-index="31"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="leveltotaktaskamount" class="control-label col-xs-4">下级任务分佣</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="leveltotaktaskamount-operate"
                                                            data-name="leveltotaktaskamount"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="leveltotaktaskamount"
                                                            value=""
                                                            placeholder="下级任务分佣"
                                                            id="leveltotaktaskamount"
                                                            data-index="32"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="levelreccountfit" class="control-label col-xs-4">下级首充分佣</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="levelreccountfit-operate"
                                                            data-name="levelreccountfit"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="levelreccountfit"
                                                            value=""
                                                            placeholder="下级首充分佣"
                                                            id="levelreccountfit"
                                                            data-index="33"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                                    <label for="totalfinancefit" class="control-label col-xs-4">理财收益</label>
                                                    <div class="col-xs-8">
                                                        <input
                                                            type="hidden"
                                                            class="form-control operate"
                                                            name="totalfinancefit-operate"
                                                            data-name="totalfinancefit"
                                                            value="="
                                                            readonly=""
                                                        /><input
                                                            type="text"
                                                            class="form-control"
                                                            name="totalfinancefit"
                                                            value=""
                                                            placeholder="理财收益"
                                                            id="totalfinancefit"
                                                            data-index="34"
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
                                                            data-index="35"
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
                                                        ><input type="checkbox" data-field="operate10" value="1" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate30" value="2" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate1" value="3" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate2" value="4" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="agentid" value="5" /> 代理ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="busid" value="6" /> 业务员ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label><input type="checkbox" data-field="id" value="7" /> 会员ID</label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="operate3" value="8" checked="checked" />
                                                    </label>
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="agentname" value="9" checked="checked" />
                                                        所属代理</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="busname" value="10" checked="checked" />
                                                        所属业务员</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="username" value="11" checked="checked" />
                                                        用户名</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="mobile" value="12" checked="checked" />
                                                        手机号码</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="invcode" value="13" checked="checked" />
                                                        推广码</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="level" value="14" checked="checked" />
                                                        会员等级</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="extcount" value="15" checked="checked" />
                                                        推广总人数</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="trueextcount" value="16" checked="checked" />
                                                        有效推广总人数</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="money" value="17" checked="checked" />
                                                        账户余额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="reccount" value="18" checked="checked" />
                                                        充值总金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="reccuscount" value="19" checked="checked" />
                                                        手动充值总金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="withdrawal" value="20" checked="checked" />
                                                        提现总金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="truewithdrawal" value="21" checked="checked" />
                                                        实际提现总金额</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_recamount" value="22" checked="checked" />
                                                        今日充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_recamount" value="23" checked="checked" />
                                                        昨日充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_cusrecamount" value="24" checked="checked" />
                                                        今日手动充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_cusrecamount" value="25" checked="checked" />
                                                        昨日手动充值</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_txamount" value="26" checked="checked" />
                                                        今日提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="t_truetxamount" value="27" checked="checked" />
                                                        今日实际提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_txamount" value="28" checked="checked" />
                                                        昨日提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="y_truetxamount" value="29" checked="checked" />
                                                        昨日实际提现</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="totaltask" value="30" checked="checked" />
                                                        合计任务数</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="totaktaskamount" value="31" checked="checked" />
                                                        合计任务佣金</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input
                                                            type="checkbox"
                                                            data-field="leveltotaktaskamount"
                                                            value="32"
                                                            checked="checked"
                                                        />
                                                        下级任务分佣</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input
                                                            type="checkbox"
                                                            data-field="levelreccountfit"
                                                            value="33"
                                                            checked="checked"
                                                        />
                                                        下级首充分佣</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="totalfinancefit" value="34" checked="checked" />
                                                        理财收益</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="createtime" value="35" checked="checked" />
                                                        创建时间</label
                                                    >
                                                </li>
                                                <li role="menuitem">
                                                    <label
                                                        ><input type="checkbox" data-field="status" value="36" checked="checked" />
                                                        状态</label
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
                                        <div class="fixed-table-loading" style="top: 42px; display: block">
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
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate10">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate30">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate1">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate2">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="operate3">
                                                        <div class="th-inner"></div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="agentname">
                                                        <div class="th-inner">所属代理</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="busname">
                                                        <div class="th-inner">所属业务员</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="username">
                                                        <div class="th-inner">用户名</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="mobile">
                                                        <div class="th-inner">手机号码</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="invcode">
                                                        <div class="th-inner">推广码</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="level">
                                                        <div class="th-inner">会员等级</div>
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
                                                    <th style="text-align: center; vertical-align: middle" data-field="money">
                                                        <div class="th-inner">账户余额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="reccount">
                                                        <div class="th-inner">充值总金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="reccuscount">
                                                        <div class="th-inner">手动充值总金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="withdrawal">
                                                        <div class="th-inner">提现总金额</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="truewithdrawal">
                                                        <div class="th-inner">实际提现总金额</div>
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
                                                    <th style="text-align: center; vertical-align: middle" data-field="totaltask">
                                                        <div class="th-inner">合计任务数</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="totaktaskamount">
                                                        <div class="th-inner">合计任务佣金</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th
                                                        style="text-align: center; vertical-align: middle"
                                                        data-field="leveltotaktaskamount"
                                                    >
                                                        <div class="th-inner">下级任务分佣</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="levelreccountfit">
                                                        <div class="th-inner">下级首充分佣</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="totalfinancefit">
                                                        <div class="th-inner">理财收益</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="createtime">
                                                        <div class="th-inner sortable both">创建时间</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                    <th style="text-align: center; vertical-align: middle" data-field="status">
                                                        <div class="th-inner">状态</div>
                                                        <div class="fht-cell"></div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-listidx="0">
                                                <tr class="no-records-found">
                                                    <td colspan="34">没有找到匹配的记录</td>
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
                                                        <li role="menuitem" class="active"><a href="#">10</a></li>
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
        return {};
    },
    methods: {
      a() {
        // 5433 3160 975
      }
    }
};
</script>

<style lang="less" scoped>
</style>