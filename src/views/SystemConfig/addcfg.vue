<template>
    <div id="addcfg">
        <div class="tab-pane fade">
            <form
                id="add-form"
                class="form-horizontal nice-validator n-default n-bootstrap"
                role="form"
                data-toggle="validator"
                method="POST"
                action="/HxcFsNbkRZ.php/general.config/add"
                novalidate="novalidate"
            >
                <input type="hidden" name="__token__" value="36a6691ceec2f1cdce54c828a3c36d69" />
                <div class="form-group">
                    <label class="control-label col-xs-12 col-sm-2">分组:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="btn-group bootstrap-select form-control">
                            <button
                                type="button"
                                class="btn dropdown-toggle btn-default"
                                data-toggle="dropdown"
                                role="button"
                                title="基础配置"
                            >
                                <span class="filter-option pull-left">基础配置</span>&nbsp;<span class="bs-caret"
                                    ><span class="caret"></span
                                ></span>
                            </button>
                            <div class="dropdown-menu open" role="combobox">
                                <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                                    <li data-original-index="0" class="selected">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="true"
                                            ><span class="text">基础配置</span><span class="glyphicon glyphicon-ok check-mark"></span
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
                                            ><span class="text">邮件配置</span><span class="glyphicon glyphicon-ok check-mark"></span
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
                                            ><span class="text">字典配置</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="3">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">会员配置</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="4">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">示例分组</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                            <select name="row[group]" class="form-control selectpicker" tabindex="-98">
                                <option value="basic" selected="">基础配置</option>
                                <option value="email">邮件配置</option>
                                <option value="dictionary">字典配置</option>
                                <option value="user">会员配置</option>
                                <option value="example">示例分组</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-xs-12 col-sm-2">类型:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="btn-group bootstrap-select form-control">
                            <button
                                type="button"
                                class="btn dropdown-toggle btn-default"
                                data-toggle="dropdown"
                                role="button"
                                data-id="c-type"
                                title="字符"
                            >
                                <span class="filter-option pull-left">字符</span>&nbsp;<span class="bs-caret"
                                    ><span class="caret"></span
                                ></span>
                            </button>
                            <div class="dropdown-menu open" role="combobox">
                                <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                                    <li data-original-index="0" class="selected">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="true"
                                            ><span class="text">字符</span><span class="glyphicon glyphicon-ok check-mark"></span
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
                                            ><span class="text">文本</span><span class="glyphicon glyphicon-ok check-mark"></span
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
                                            ><span class="text">编辑器</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="3">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">数字</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="4">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">日期</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="5">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">时间</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="6">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">日期时间</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="7">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">日期时间区间</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="8">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">列表</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="9">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">列表(多选)</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="10">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">图片</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="11">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">图片(多)</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="12">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">文件</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="13">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">文件(多)</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="14">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">开关</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="15">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">复选</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="16">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">单选</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="17">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">城市地区</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="18">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">关联表</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="19">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">关联表(多选)</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="20">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">数组</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                    <li data-original-index="21">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="false"
                                            ><span class="text">自定义</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                            <select name="row[type]" id="c-type" class="form-control selectpicker" tabindex="-98">
                                <option value="string" selected="">字符</option>
                                <option value="text">文本</option>
                                <option value="editor">编辑器</option>
                                <option value="number">数字</option>
                                <option value="date">日期</option>
                                <option value="time">时间</option>
                                <option value="datetime">日期时间</option>
                                <option value="datetimerange">日期时间区间</option>
                                <option value="select">列表</option>
                                <option value="selects">列表(多选)</option>
                                <option value="image">图片</option>
                                <option value="images">图片(多)</option>
                                <option value="file">文件</option>
                                <option value="files">文件(多)</option>
                                <option value="switch">开关</option>
                                <option value="checkbox">复选</option>
                                <option value="radio">单选</option>
                                <option value="city">城市地区</option>
                                <option value="selectpage">关联表</option>
                                <option value="selectpages">关联表(多选)</option>
                                <option value="array">数组</option>
                                <option value="custom">自定义</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="control-label col-xs-12 col-sm-2">变量名:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" class="form-control" id="name" name="row[name]" value="" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="title" class="control-label col-xs-12 col-sm-2">变量标题:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" class="form-control" id="title" name="row[title]" value="" />
                    </div>
                </div>
                <div class="form-group hidden tf tf-selectpage tf-selectpages">
                    <label for="c-selectpage-table" class="control-label col-xs-12 col-sm-2">关联表:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="btn-group bootstrap-select form-control">
                            <button
                                type="button"
                                class="btn dropdown-toggle bs-placeholder btn-default"
                                data-toggle="dropdown"
                                role="button"
                                data-id="c-selectpage-table"
                                title="关联表"
                            >
                                <span class="filter-option pull-left">关联表</span>&nbsp;<span class="bs-caret"
                                    ><span class="caret"></span
                                ></span>
                            </button>
                            <div class="dropdown-menu open" role="combobox">
                                <div class="bs-searchbox">
                                    <input type="text" class="form-control" autocomplete="off" role="textbox" aria-label="Search" />
                                </div>
                                <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
                                    <li data-original-index="0" class="selected">
                                        <a
                                            tabindex="0"
                                            class=""
                                            style=""
                                            data-tokens="null"
                                            role="option"
                                            aria-disabled="false"
                                            aria-selected="true"
                                            ><span class="text">关联表</span><span class="glyphicon glyphicon-ok check-mark"></span
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                            <select
                                id="c-selectpage-table"
                                name="row[setting][table]"
                                class="form-control selectpicker"
                                data-live-search="true"
                                tabindex="-98"
                            >
                                <option value="">关联表</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group hidden tf tf-selectpage tf-selectpages">
                    <label for="c-selectpage-primarykey" class="control-label col-xs-12 col-sm-2">存储字段:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="btn-group bootstrap-select form-control">
                            <button
                                type="button"
                                class="btn dropdown-toggle bs-placeholder btn-default"
                                data-toggle="dropdown"
                                role="button"
                                data-id="c-selectpage-primarykey"
                                title="没有选中任何项"
                            >
                                <span class="filter-option pull-left">没有选中任何项</span>&nbsp;<span class="bs-caret"
                                    ><span class="caret"></span
                                ></span>
                            </button>
                            <div class="dropdown-menu open" role="combobox">
                                <ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>
                            </div>
                            <select
                                name="row[setting][primarykey]"
                                class="form-control selectpicker"
                                id="c-selectpage-primarykey"
                                tabindex="-98"
                            ></select>
                        </div>
                    </div>
                </div>
                <div class="form-group hidden tf tf-selectpage tf-selectpages">
                    <label for="c-selectpage-field" class="control-label col-xs-12 col-sm-2">显示字段:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="btn-group bootstrap-select form-control">
                            <button
                                type="button"
                                class="btn dropdown-toggle bs-placeholder btn-default"
                                data-toggle="dropdown"
                                role="button"
                                data-id="c-selectpage-field"
                                title="没有选中任何项"
                            >
                                <span class="filter-option pull-left">没有选中任何项</span>&nbsp;<span class="bs-caret"
                                    ><span class="caret"></span
                                ></span>
                            </button>
                            <div class="dropdown-menu open" role="combobox">
                                <ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>
                            </div>
                            <select
                                name="row[setting][field]"
                                class="form-control selectpicker"
                                id="c-selectpage-field"
                                tabindex="-98"
                            ></select>
                        </div>
                    </div>
                </div>
                <div class="form-group hidden tf tf-selectpage tf-selectpages">
                    <label class="control-label col-xs-12 col-sm-2">筛选条件:</label>
                    <div class="col-xs-12 col-sm-8">
                        <dl class="fieldlist" data-name="row[setting][conditions]" data-listidx="0">
                            <dd>
                                <ins>字段名</ins>
                                <ins>字段值</ins>
                            </dd>

                            <dd>
                                <a href="javascript:;" class="append btn btn-sm btn-success"><i class="fa fa-plus"></i> 追加</a>
                            </dd>
                            <textarea name="row[setting][conditions]" class="form-control hide" cols="30" rows="5"></textarea>
                        </dl>
                    </div>
                </div>
                <div class="form-group hidden tf tf-array">
                    <label for="c-array-key" class="control-label col-xs-12 col-sm-2">键名:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" name="row[setting][key]" class="form-control" id="c-array-key" />
                    </div>
                </div>
                <div class="form-group hidden tf tf-array">
                    <label for="c-array-value" class="control-label col-xs-12 col-sm-2">键值:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" name="row[setting][value]" class="form-control" id="c-array-value" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="value" class="control-label col-xs-12 col-sm-2">变量值:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" class="form-control" id="value" name="row[value]" value="" data-rule="" />
                    </div>
                </div>
                <div class="form-group hide" id="add-content-container">
                    <label for="content" class="control-label col-xs-12 col-sm-2">数据列表:</label>
                    <div class="col-xs-12 col-sm-4">
                        <textarea name="row[content]" id="content" cols="30" rows="5" class="form-control">
value1|title1
value2|title2</textarea
                        >
                    </div>
                </div>
                <div class="form-group">
                    <label for="tip" class="control-label col-xs-12 col-sm-2">提示信息:</label>
                    <div class="col-xs-12 col-sm-4">
                        <input type="text" class="form-control" id="tip" name="row[tip]" value="" data-rule="" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="rule" class="control-label col-xs-12 col-sm-2">校验规则:</label>
                    <div class="col-xs-12 col-sm-4">
                        <div class="input-group pull-left">
                            <input
                                type="text"
                                class="form-control"
                                id="rule"
                                name="row[rule]"
                                value=""
                                data-tip="校验规则使用请参考Nice-validator文档"
                            />
                            <span class="input-group-btn">
                                <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">选择</button>
                                <ul class="dropdown-menu pull-right rulelist">
                                    <li>
                                        <a href="javascript:;" data-value="required">必选<span class="text-muted">(required)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="digits">数字<span class="text-muted">(digits)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="letters">字母<span class="text-muted">(letters)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="date">日期<span class="text-muted">(date)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="time">时间<span class="text-muted">(time)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="email">邮箱<span class="text-muted">(email)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="url">网址<span class="text-muted">(url)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="qq">QQ号<span class="text-muted">(qq)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="IDcard">身份证<span class="text-muted">(IDcard)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="tel">座机电话<span class="text-muted">(tel)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="mobile">手机号<span class="text-muted">(mobile)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="zipcode">邮编<span class="text-muted">(zipcode)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="chinese">中文<span class="text-muted">(chinese)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="username">用户名<span class="text-muted">(username)</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" data-value="password">密码<span class="text-muted">(password)</span></a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <span class="msg-box n-right" for="rule"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="extend" class="control-label col-xs-12 col-sm-2">扩展属性:</label>
                    <div class="col-xs-12 col-sm-4">
                        <textarea
                            name="row[extend]"
                            id="extend"
                            cols="30"
                            rows="5"
                            class="form-control"
                            data-tip="扩展属性支持{id}、{name}、{group}、{title}、{value}、{content}、{rule}替换"
                            data-msg-extend="当类型为自定义时，扩展属性不能为空"
                        ></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-xs-12 col-sm-2"></label>
                    <div class="col-xs-12 col-sm-4">
                        <button type="submit" class="btn btn-success btn-embossed">确定</button>
                        <button type="reset" class="btn btn-default btn-embossed">重置</button>
                    </div>
                </div>
            </form>
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