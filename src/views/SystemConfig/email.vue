<template>
    <div id="email">
        <div class="tab-pane fade">
            <div class="widget-body no-padding">
                <form
                    id="email-form"
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
                                <td>邮件发送方式</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <div class="btn-group bootstrap-select form-control">
                                                <button
                                                    type="button"
                                                    class="btn dropdown-toggle btn-default"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    title="SMTP"
                                                >
                                                    <span class="filter-option pull-left">SMTP</span>&nbsp;<span class="bs-caret"
                                                        ><span class="caret"></span
                                                    ></span>
                                                </button>
                                                <div class="dropdown-menu open" role="combobox">
                                                    <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                                                        <li data-original-index="0">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="false"
                                                                ><span class="text">请选择</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                        <li data-original-index="1" class="selected">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="true"
                                                                ><span class="text">SMTP</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                        <li data-original-index="2">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="false"
                                                                ><span class="text">Mail</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select
                                                    name="row[mail_type]"
                                                    class="form-control selectpicker"
                                                    data-tip="选择邮件发送方式"
                                                    tabindex="-98"
                                                >
                                                    <option value="0">请选择</option>
                                                    <option value="1" selected="">SMTP</option>
                                                    <option value="2">Mail</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_type}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SMTP服务器</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[mail_smtp_host]"
                                                value="smtp.qq.com"
                                                class="form-control"
                                                data-rule=""
                                                data-tip="错误的配置发送邮件会导致服务器超时"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_smtp_host}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SMTP端口</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[mail_smtp_port]"
                                                value="465"
                                                class="form-control"
                                                data-rule=""
                                                data-tip="(不加密默认25,SSL默认465,TLS默认587)"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_smtp_port}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SMTP用户名</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[mail_smtp_user]"
                                                value="10000"
                                                class="form-control"
                                                data-rule=""
                                                data-tip="（填写完整用户名）"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_smtp_user}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SMTP密码</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[mail_smtp_pass]"
                                                value="password"
                                                class="form-control"
                                                data-rule=""
                                                data-tip="（填写您的密码）"
                                            />
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_smtp_pass}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SMTP验证方式</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <div class="btn-group bootstrap-select form-control">
                                                <button
                                                    type="button"
                                                    class="btn dropdown-toggle btn-default"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    title="SSL"
                                                >
                                                    <span class="filter-option pull-left">SSL</span>&nbsp;<span class="bs-caret"
                                                        ><span class="caret"></span
                                                    ></span>
                                                </button>
                                                <div class="dropdown-menu open" role="combobox">
                                                    <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                                                        <li data-original-index="0">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="false"
                                                                ><span class="text">无</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                        <li data-original-index="1">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="false"
                                                                ><span class="text">TLS</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                        <li data-original-index="2" class="selected">
                                                            <a
                                                                tabindex="0"
                                                                class=""
                                                                style=""
                                                                data-tokens="null"
                                                                role="option"
                                                                aria-disabled="false"
                                                                aria-selected="true"
                                                                ><span class="text">SSL</span
                                                                ><span class="glyphicon glyphicon-ok check-mark"></span
                                                            ></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select
                                                    name="row[mail_verify_type]"
                                                    class="form-control selectpicker"
                                                    data-tip="（SMTP验证方式[推荐SSL]）"
                                                    tabindex="-98"
                                                >
                                                    <option value="0">无</option>
                                                    <option value="1">TLS</option>
                                                    <option value="2" selected="">SSL</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-4"></div>
                                    </div>
                                </td>
                                <td>{$site.mail_verify_type}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>发件人邮箱</td>
                                <td>
                                    <div class="row">
                                        <div class="col-sm-8 col-xs-12">
                                            <input
                                                type="text"
                                                name="row[mail_from]"
                                                value="10000@qq.com"
                                                class="form-control"
                                                data-rule=""
                                                data-tip=""
                                            />
                                        </div>
                                        <div class="col-sm-4"><a class="btn btn-info testmail">发送测试邮件</a></div>
                                    </div>
                                </td>
                                <td>{$site.mail_from}</td>
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