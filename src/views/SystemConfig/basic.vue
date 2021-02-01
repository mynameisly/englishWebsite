<template>
    <div id="basic">
        <div class="tab-pane fade active in">
            <div class="widget-body no-padding">
                <form
                    id="basic-form"
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
                                <td>站点名称</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[name]"
                                                value="后台管理"
                                                class="form-control"
                                                data-tip="请填写站点名称"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.name}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>备案号</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[beian]"
                                                value=""
                                                class="form-control"
                                                data-rule=""
                                                data-tip="粤ICP备15000000号-1"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.beian}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>CDN地址</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[cdnurl]"
                                                value=""
                                                class="form-control"
                                                data-rule=""
                                                data-tip="如果全站静态资源使用第三方云储存请配置该值"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.cdnurl}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>版本号</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[version]"
                                                value="1.0.1"
                                                class="form-control"
                                                data-tip="如果静态资源有变动请重新配置该值"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.version}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>时区</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[timezone]"
                                                value="Asia/Shanghai"
                                                class="form-control"
                                                data-tip=""
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.timezone}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>禁止IP</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <textarea
                                                name="row[forbiddenip]"
                                                class="form-control"
                                                data-rule=""
                                                rows="5"
                                                data-tip="一行一条记录"
                                            ></textarea>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.forbiddenip}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>语言</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <dl class="fieldlist" data-name="row[languages]" data-listidx="0">
                                                <dd>
                                                    <ins>键名</ins>
                                                    <ins>键值</ins>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[languages][0][key]"
                                                        class="form-control"
                                                        value="backend"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[languages][0][value]" class="form-control" value="zh-cn" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd class="form-inline">
                                                    <input
                                                        type="text"
                                                        name="row[languages][1][key]"
                                                        class="form-control"
                                                        value="frontend"
                                                        size="10"
                                                    />
                                                    <input type="text" name="row[languages][1][value]" class="form-control" value="zh-cn" />
                                                    <span class="btn btn-sm btn-danger btn-remove"><i class="fa fa-times"></i></span>
                                                    <span class="btn btn-sm btn-primary btn-dragsort"><i class="fa fa-arrows"></i></span>
                                                </dd>
                                                <dd>
                                                    <a href="javascript:;" class="btn btn-sm btn-success btn-append"
                                                        ><i class="fa fa-plus"></i> 追加</a
                                                    >
                                                </dd>
                                                <textarea name="row[languages]" class="form-control hide" cols="30" rows="5">
{"backend":"zh-cn","frontend":"zh-cn"}</textarea
                                                >
                                            </dl>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.languages}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>后台固定页</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[fixedpage]"
                                                value="dashboard"
                                                class="form-control"
                                                data-tip="请尽量输入左侧菜单栏存在的链接"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.fixedpage}</td>
                                <td></td>
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