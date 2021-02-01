<template>
    <div id="dictionary">
        <div class="tab-pane">
            <div class="widget-body no-padding">
                <form
                    id="dictionary-form"
                    class="edit-form form-horizontal nice-validator n-default n-bootstrap"
                    role="form"
                    data-toggle="validator"
                    method="POST"
                    action="/HxcFsNbkRZ.php/general.config/edit"
                    novalidate="novalidate"
                >
                    <input type="hidden" name="__token__" value="36a6691ceec2f1cdce54c828a3c36d69" />
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th width="15%">变量标题</th>
                                <th width="68%">变量值</th>
                                <th width="15%">变量名</th>
                                <th width="2%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>分类类型</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <dl class="fieldlist" data-name="row[categorytype]" data-listidx="0">
                                                <dd>
                                                    <ins>键名</ins>
                                                    <ins>键值</ins>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][0][key]"
                                                        class="form-control"
                                                        value="default"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][0][value]"
                                                        class="form-control"
                                                        value="Default"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][1][key]"
                                                        class="form-control"
                                                        value="page"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][1][value]"
                                                        class="form-control"
                                                        value="Page"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][2][key]"
                                                        class="form-control"
                                                        value="article"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][2][value]"
                                                        class="form-control"
                                                        value="Article"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][3][key]"
                                                        class="form-control"
                                                        value="test"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[categorytype][3][value]"
                                                        class="form-control"
                                                        value="Test"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd>
                                                    <a href="javascript:;" class="btn btn-sm btn-success btn-append"
                                                        ><i class="fa fa-plus"></i> 追加</a
                                                    >
                                                </dd>
                                                <textarea name="row[categorytype]" class="form-control hide" cols="30" rows="5">
{"default":"Default","page":"Page","article":"Article","test":"Test"}</textarea
                                                >
                                            </dl>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.categorytype}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>配置分组</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <dl class="fieldlist" data-name="row[configgroup]" data-listidx="0">
                                                <dd>
                                                    <ins>键名</ins>
                                                    <ins>键值</ins>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][0][key]"
                                                        class="form-control"
                                                        value="basic"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][0][value]"
                                                        class="form-control"
                                                        value="Basic"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][1][key]"
                                                        class="form-control"
                                                        value="email"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][1][value]"
                                                        class="form-control"
                                                        value="Email"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][2][key]"
                                                        class="form-control"
                                                        value="dictionary"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][2][value]"
                                                        class="form-control"
                                                        value="Dictionary"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][3][key]"
                                                        class="form-control"
                                                        value="user"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][3][value]"
                                                        class="form-control"
                                                        value="User"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][4][key]"
                                                        class="form-control"
                                                        value="example"
                                                        size="10"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="row[configgroup][4][value]"
                                                        class="form-control"
                                                        value="Example"
                                                    />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd>
                                                    <a href="javascript:;" class="btn btn-sm btn-success btn-append"
                                                        ><i class="fa fa-plus"></i> 追加</a
                                                    >
                                                </dd>
                                                <textarea name="row[configgroup]" class="form-control hide" cols="30" rows="5">
{"basic":"Basic","email":"Email","dictionary":"Dictionary","user":"User","example":"Example"}</textarea
                                                >
                                            </dl>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.configgroup}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>recharge</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <dl class="fieldlist" data-name="row[recharge]" data-listidx="0">
                                                <dd>
                                                    <ins>键名</ins>
                                                    <ins>键值</ins>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][0][key]"
                                                        class="form-control"
                                                        value="0"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][0][value]" class="form-control" value="300" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][1][key]"
                                                        class="form-control"
                                                        value="1"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][1][value]" class="form-control" value="500" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][2][key]"
                                                        class="form-control"
                                                        value="2"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][2][value]" class="form-control" value="1000" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][3][key]"
                                                        class="form-control"
                                                        value="3"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][3][value]" class="form-control" value="3000" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][4][key]"
                                                        class="form-control"
                                                        value="4"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][4][value]" class="form-control" value="5000" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][5][key]"
                                                        class="form-control"
                                                        value="5"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][5][value]" class="form-control" value="10000" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[recharge][6][key]"
                                                        class="form-control"
                                                        value="6"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[recharge][6][value]" class="form-control" value="30000" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd>
                                                    <a href="javascript:;" class="btn btn-sm btn-success btn-append"
                                                        ><i class="fa fa-plus"></i> 追加</a
                                                    >
                                                </dd>
                                                <textarea name="row[recharge]" class="form-control hide" cols="30" rows="5">
[300,500,1000,3000,5000,10000,30000]</textarea
                                                >
                                            </dl>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.recharge}</td>
                                <td>
                                    <a href="javascript:;" class="btn-delcfg text-muted" data-name="recharge"
                                        ><i class="fa fa-times"></i
                                    ></a>
                                </td>
                            </tr>
                            <tr>
                                <td>levelinfo</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <dl class="fieldlist" data-name="row[levelinfo]" data-listidx="0">
                                                <dd>
                                                    <ins>键名</ins>
                                                    <ins>键值</ins>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[levelinfo][0][key]"
                                                        class="form-control"
                                                        value="0"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[levelinfo][0][value]" class="form-control" value="" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[levelinfo][1][key]"
                                                        class="form-control"
                                                        value="1"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[levelinfo][1][value]" class="form-control" value="" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[levelinfo][2][key]"
                                                        class="form-control"
                                                        value="2"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[levelinfo][2][value]" class="form-control" value="" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd>
                                                    <a href="javascript:;" class="btn btn-sm btn-success btn-append"
                                                        ><i class="fa fa-plus"></i> 追加</a
                                                    >
                                                </dd>
                                                <textarea name="row[levelinfo]" class="form-control hide" cols="30" rows="5">
[{"id":"1","level":"lv1 members","price":"300","fit":[{"level":"1","rate":"9"},{"level":"2","rate":"7"},{"level":"3","rate":"4"}],"remark":["1.Each withdrawal limit is 5000","2.The number of orders that can be swiped is 20","3.The promotion rebate is 9%/7%/4%"],"des":"","withdrawalminprice":"100","withdrawallimit":"5000","withdrawalnum":"1","taskcount":"20","breach":"15","withdrawalserver":"18","withdrawtime":"9-18"},{"id":"2","level":"lv2 members","price":"500","fit":[{"level":"1","rate":"11"},{"level":"2","rate":"8"},{"level":"3","rate":"4"}],"remark":["1.Each withdrawal limit is 50000","2.The number of orders that can be swiped is 20","3.The promotion rebate is 11%/8%/4%"],"des":"","withdrawalminprice":"100","withdrawallimit":"5000","withdrawalnum":"1","taskcount":"20","breach":"15","withdrawalserver":"18","withdrawtime":"9-18"}
,{"id":"3","level":"lv3 members","price":"1000","fit":[{"level":"1","rate":"13"},{"level":"2","rate":"9"},{"level":"3","rate":"4"}],"remark":["1.Each withdrawal limit is 100000","2.The number of orders that can be swiped is 20","3.The promotion rebate is 13%/9%/4%"],"des":"","withdrawalminprice":"100","withdrawallimit":"5000","withdrawalnum":"1","taskcount":"20","breach":"15","withdrawalserver":"18","withdrawtime":"9-18"}]</textarea
                                                >
                                            </dl>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.levelinfo}</td>
                                <td>
                                    <a href="javascript:;" class="btn-delcfg text-muted" data-name="levelinfo"
                                        ><i class="fa fa-times"></i
                                    ></a>
                                </td>
                            </tr>
                            <tr>
                                <td>每天提现时间</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[withdrawaltime]"
                                                value="9-18"
                                                class="form-control"
                                                data-rule=""
                                                data-tip=""
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.withdrawaltime}</td>
                                <td>
                                    <a href="javascript:;" class="btn-delcfg text-muted" data-name="withdrawaltime"
                                        ><i class="fa fa-times"></i
                                    ></a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" class="btn btn-success btn-embossed">确定</button>
                                    <button type="reset" class="btn btn-default btn-embossed">重置</button>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
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