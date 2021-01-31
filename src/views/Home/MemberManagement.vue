<template>
  <div class="MemberManagement">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">会员管理</h2>
        <div class="panel panel-default panel-intro" style="padding: 0">
          <button
            id="btnAddAccount"
            type="button"
            class="btn btn-default"
            @click="addMember"
          >
            添加会员
          </button>
          <div class="bootstrap-table">
            <div
              class="commonsearch-table"
              :class="iscommonsearch ? 'hidden' : ''"
            >
              <form
                class="form-horizontal form-commonsearch nice-validator n-default n-bootstrap"
              >
                <fieldset>
                  <div class="row">
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate10"
                        class="control-label col-xs-4"
                      ></label>
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
                          data-index="0"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate1"
                        class="control-label col-xs-4"
                      ></label>
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
                          data-index="1"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate2"
                        class="control-label col-xs-4"
                      ></label>
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
                          data-index="2"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate12"
                        class="control-label col-xs-4"
                      ></label>
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="operate12-operate"
                          data-name="operate12"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="operate12"
                          value=""
                          placeholder=""
                          id="operate12"
                          data-index="3"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate3"
                        class="control-label col-xs-4"
                      ></label>
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
                          data-index="4"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="operate4"
                        class="control-label col-xs-4"
                      ></label>
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="operate4-operate"
                          data-name="operate4"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="operate4"
                          value=""
                          placeholder=""
                          id="operate4"
                          data-index="5"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="username" class="control-label col-xs-4"
                        >会员编号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="username-operate"
                          data-name="username"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="username"
                          value=""
                          placeholder="会员编号"
                          id="username"
                          data-index="6"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="mobile" class="control-label col-xs-4"
                        >手机号</label
                      >
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
                          data-index="7"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="status" class="control-label col-xs-4"
                        >状态</label
                      >
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
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="level" class="control-label col-xs-4"
                        >等级</label
                      >
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
                          placeholder="等级"
                          id="level"
                          data-index="9"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="money" class="control-label col-xs-4"
                        >总资产</label
                      >
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
                          placeholder="总资产"
                          id="money"
                          data-index="10"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="invcode" class="control-label col-xs-4"
                        >推广码</label
                      >
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
                          data-index="11"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="totalrecharge" class="control-label col-xs-4"
                        >充值总金额</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="totalrecharge-operate"
                          data-name="totalrecharge"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="totalrecharge"
                          value=""
                          placeholder="充值总金额"
                          id="totalrecharge"
                          data-index="12"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="totalcusrecharge"
                        class="control-label col-xs-4"
                        >手动充值总金额</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="totalcusrecharge-operate"
                          data-name="totalcusrecharge"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="totalcusrecharge"
                          value=""
                          placeholder="手动充值总金额"
                          id="totalcusrecharge"
                          data-index="13"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="totalwithdrawal"
                        class="control-label col-xs-4"
                        >提现总金额</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="totalwithdrawal-operate"
                          data-name="totalwithdrawal"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="totalwithdrawal"
                          value=""
                          placeholder="提现总金额"
                          id="totalwithdrawal"
                          data-index="14"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="extcount" class="control-label col-xs-4"
                        >总推广人数</label
                      >
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
                          placeholder="总推广人数"
                          id="extcount"
                          data-index="15"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="trueextcount" class="control-label col-xs-4"
                        >有效推广人数</label
                      >
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
                          placeholder="有效推广人数"
                          id="trueextcount"
                          data-index="16"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="totaltask" class="control-label col-xs-4"
                        >刷单数</label
                      >
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
                          placeholder="刷单数"
                          id="totaltask"
                          data-index="17"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="parentid" class="control-label col-xs-4"
                        >上级ID</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="parentid-operate"
                          data-name="parentid"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="parentid"
                          value=""
                          placeholder="上级ID"
                          id="parentid"
                          data-index="18"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label
                        for="totaktaskamount"
                        class="control-label col-xs-4"
                        >总佣金</label
                      >
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
                          placeholder="总佣金"
                          id="totaktaskamount"
                          data-index="19"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="parent" class="control-label col-xs-4"
                        >上级ID</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="parent-operate"
                          data-name="parent"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="parent"
                          value=""
                          placeholder="上级ID"
                          id="parent"
                          data-index="20"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="createtime" class="control-label col-xs-4"
                        >注册时间</label
                      >
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
                          placeholder="注册时间"
                          id="createtime"
                          data-index="21"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <div class="col-sm-8 col-xs-offset-4">
                        <button
                          type="submit"
                          class="btn btn-success"
                          formnovalidate=""
                        >
                          提交
                        </button>
                        <button type="reset" class="btn btn-default">
                          重置
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="fixed-table-toolbar">
              <div class="bs-bars pull-left"></div>
              <div class="columns-right pull-right" style="margin-bottom: 10px">
                <button
                  class="btn btn-default"
                  type="button"
                  name="commonSearch"
                  title="Common search"
                  @click="commonSearch"
                >
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
              <div class="columns columns-right btn-group pull-right">
                <button
                  class="btn btn-default"
                  type="button"
                  name="toggle"
                  aria-label="toggle"
                  title="切换"
                  @click="toggle"
                >
                  <i class="glyphicon glyphicon-list-alt icon-list-alt"></i>
                </button>
                <div class="keep-open btn-group" title="列">
                  <button
                    type="button"
                    aria-label="columns"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="glyphicon glyphicon-th icon-th"></i>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li
                      role="menuitem"
                      v-for="(item, index) in headerList"
                      :key="index"
                    >
                      <label
                        ><input
                          type="checkbox"
                          :data-field="item.name"
                          value="0"
                          :checked="item.name"
                          @click="filterColumn(item.name)"
                        />{{ item.label }}</label
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pull-right search">
                <input class="form-control" type="text" placeholder="搜索" />
              </div>
            </div>
            <div class="fixed-table-container" style="padding-bottom: 0px">
              <div class="fixed-table-header" style="display: none">
                <table></table>
              </div>
              <div class="fixed-table-body">
                <div
                  class="fixed-table-loading"
                  style="top: 42px; display: none"
                >
                  正在努力地加载数据中，请稍候……
                </div>
                <table
                  id="table"
                  class="table table-striped table-bordered table-hover table-nowrap"
                  data-pagination="true"
                  data-striped="true"
                  width="100%"
                >
                  <thead
                    :style="{
                      display: isToggle ? 'table-header-group' : 'none',
                    }"
                  >
                    <tr>
                      <th
                        style="text-align: center; vertical-align: middle"
                        :data-field="item.name"
                        v-for="(item, index) in headerList"
                        :key="index"
                      >
                        <div class="th-inner">{{ item.label }}</div>
                        <div class="fht-cell"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody v-show="isToggle == true">
                    <tr
                      :data-index="index"
                      v-for="(item, index) in bodyList"
                      :key="index"
                    >
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-danger btn-chooseone btn-xs"
                          >{{ item.operate10 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-danger btn-chooseone btn-xs"
                          >{{ item.operate1 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          >{{ item.operate2 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          >{{ item.operate1 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          >{{ item.operate12 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          >{{ item.operate4 }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.username }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.mobile }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.status }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.level }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.money }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.invcode }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.totalrecharge }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.totalcusrecharge }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.totalwithdrawal }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.extcount }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.trueextcount }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.totaltask }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.parentid }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.totaktaskamount }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          >{{ item.parent }}</a
                        >
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.createtime }}
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-show="isToggle == false">
                    <tr
                      :data-index="index"
                      v-for="(item, index) in bodyList"
                      :key="index"
                    >
                      <td colspan="8">
                        <div class="card-views">
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-danger btn-chooseone btn-xs"
                                @click="operate10(item)"
                                >{{ item.operate10 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-danger btn-chooseone btn-xs"
                                @click="operate1(item)"
                                >{{ item.operate1 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-info btn-view btn-xs"
                                @click="operate2(item)"
                                >{{ item.operate2 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-info btn-view btn-xs"
                                @click="operate12(item)"
                                >{{ item.operate12 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-info btn-view btn-xs"
                                @click="operate3(item)"
                                >{{ item.operate3 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                            ></span
                            ><span class="value"
                              ><a
                                href="javascript:;"
                                class="btn btn-info btn-view btn-xs"
                                @click="operate4(item)"
                                >{{ item.operate4 }}</a
                              ></span
                            >
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >会员编号</span
                            ><span class="value">{{ item.username }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >手机号</span
                            ><span class="value">{{ item.mobile }}</span>
                          </div>
                          <div class="card-view"></div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >状态</span
                            ><span class="value">{{ item.status }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >等级</span
                            ><span class="value">{{ item.level }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >总资产</span
                            ><span class="value">{{ item.money }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >推广码</span
                            ><span class="value">{{ item.invcode }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >充值总金额</span
                            ><span class="value">{{ item.totalrecharge }}</span>
                          </div>
                          <div class="card-view"></div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >手动充值总金额</span
                            ><span class="value">{{
                              item.totalcusrecharge
                            }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >提现总金额</span
                            ><span class="value">{{
                              item.totalwithdrawal
                            }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >总推广人数</span
                            ><span class="value">{{ item.extcount }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >有效推广人数</span
                            ><span class="value">{{ item.trueextcount }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >刷单数</span
                            ><span class="value">{{ item.totaltask }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >上级ID</span
                            ><span class="value">{{ item.parentid }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >总佣金</span
                            ><span class="value">{{
                              item.totaktaskamount
                            }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >上级ID</span
                            ><span class="value">{{ item.parent }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >注册时间</span
                            ><span class="value">{{ item.createtime }}</span>
                          </div>
                        </div>
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
                  <span class="pagination-info"
                    >显示第 1 到第 {{ pageSize }} 条记录，总共
                    {{ total }} 条记录</span
                  ><span class="page-list"
                    >每页显示
                    <span class="btn-group dropup"
                      ><button
                        type="button"
                        class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="page-size">{{ pageSize }}</span>
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu">
                        <li role="menuitem">
                          <a href="#" @click="toggle1">10</a>
                        </li>
                        <li role="menuitem">
                          <a href="#" @click="toggle2">25</a>
                        </li>
                      </ul></span
                    >
                    条记录</span
                  >
                </div>
                <div class="pull-right pagination" style="display: none">
                  <ul class="pagination">
                    <li class="page-pre">
                      <a href="#" @click="previousPage">上一页</a>
                    </li>
                    <li class="page-number active"><a href="#">1</a></li>
                    <li class="page-next">
                      <a href="#" @click="nextPage">下一页</a>
                    </li>
                    <li class="jumpto">
                      <input type="text" class="form-control" /><button
                        class="btn btn-default"
                        title="Go"
                        type="button"
                        @click="go"
                      >
                        Go
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
</template>

<script>
export default {
  name: "MemberManagement",
  data() {
    return {
      iscommonsearch: true,
      isToggle: true, //是否切换视图
      headerList: [
        // 标题数组
        {
          // label: "会员编号",
          name: "operate10",
        },
        {
          // label: "会员编号",
          name: "operate1",
        },
        {
          // label: "手机号",
          name: "operate2",
        },
        {
          // label: "订单号",
          name: "operate12",
        },
        {
          // label: "支付平台订单号",
          name: "operate3",
        },
        {
          // label: "金额",
          name: "operate4",
        },
        {
          label: "会员编号",
          name: "username",
        },
        {
          label: "手机号",
          name: "mobile",
        },
        {
          label: "状态",
          name: "status",
        },
        {
          label: "等级",
          name: "level",
        },
        {
          label: "总资产",
          name: "money",
        },
        {
          label: "推广码",
          name: "invcode",
        },
        {
          label: "充值总金额",
          name: "totalrecharge",
        },
        {
          label: "手动充值总金额",
          name: "totalcusrecharge",
        },
        {
          label: "提现总金额",
          name: "totalwithdrawal",
        },
        {
          label: "总推广人数",
          name: "extcount",
        },
        {
          label: "有效推广人数",
          name: "trueextcount",
        },
        {
          label: "刷单数",
          name: "totaltask",
        },
        {
          label: "上级ID",
          name: "parentid",
        },
        {
          label: "总佣金",
          name: "totaktaskamount",
        },
        {
          label: "上级ID",
          name: "parent",
        },
        {
          label: "注册时间",
          name: "createtime",
        },
      ],
      bodyList: [
        // body数据
        {
          operate10: "删除",
          operate1: "停用",
          operate2: "充值",
          operate12: "级别",
          operate3: "重置密码",
          operate4: "查看下级",
          username: "696002201",
          mobile: "6789786",
          status: "正常",
          level: "1",
          money: "0.00",
          invcode: "537760",
          totalrecharge: "0.00",
          totalcusrecharge: "0.00",
          totalwithdrawal: "0.00",
          extcount: "0",
          trueextcount: "-",
          totaltask: "0",
          parentid: "595",
          totaktaskamount: "0.00",
          parent: "110999961",
          createtime: "2021-01-28 22:33:31",
        },
        {
          operate10: "删除",
          operate1: "停用",
          operate2: "充值",
          operate12: "级别",
          operate3: "重置密码",
          operate4: "查看下级",
          username: "696002201",
          mobile: "6789786",
          status: "正常",
          level: "1",
          money: "0.00",
          invcode: "537760",
          totalrecharge: "0.00",
          totalcusrecharge: "0.00",
          totalwithdrawal: "0.00",
          extcount: "0",
          trueextcount: "-",
          totaltask: "0",
          parentid: "595",
          totaktaskamount: "0.00",
          parent: "110999961",
          createtime: "2021-01-28 22:33:31",
        },
        {
          operate10: "删除",
          operate1: "停用",
          operate2: "充值",
          operate12: "级别",
          operate3: "重置密码",
          operate4: "查看下级",
          username: "696002201",
          mobile: "6789786",
          status: "正常",
          level: "1",
          money: "0.00",
          invcode: "537760",
          totalrecharge: "0.00",
          totalcusrecharge: "0.00",
          totalwithdrawal: "0.00",
          extcount: "0",
          trueextcount: "-",
          totaltask: "0",
          parentid: "595",
          totaktaskamount: "0.00",
          parent: "110999961",
          createtime: "2021-01-28 22:33:31",
        },
      ],
      pageSize: "30", //每页条数
      total: "100", //总条数
    };
  },
  created() {},
  mounted() {},
  methods: {
    addMember() {
      // 添加会员
    },
    toggle() {
      // 视图切换
      this.isToggle = !this.isToggle;
    },
    filterColumn(name) {
      console.log("name", name);
      // 筛选列
      this.headerList.filter((item) => {
        return item.name.includes(name);
      });
      console.log("1", this.headerList);
      // this.bodyList.firlter(item => item.indexOf(name) < 0)
    },
    commonSearch() {
      // 搜索
      this.iscommonsearch = !this.iscommonsearch;
    },
    operate10(item){
      // 删除
    },
    operate10(item){
      // 删除
    },
    operate1(item){
      // 停用
    },
    operate2(item){
      // 充值
    },
    operate12(item){
      // 级别
    },
    operate3(item){
      // 重置密码
    },
    operate4(item){
      // 查看下级
    },
    previousPage() {
      // 上一页
    },
    nextPage() {
      // 下一页
    },
    go() {
      // 前往第几页
    },
    toggle1() {
      // 每页显示10条数据
      this.pageSize = this.total / 10;
    },
    toggle2() {
      // 每页显示25条数据
      this.pageSize = this.total / 25;
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-table-toolbar .columns label {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.428571429;
}
.fixed-table-toolbar .columns-right {
  margin-left: 5px;
}
.card-view .title {
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  min-width: 30%;
  text-align: left !important;
}
</style>
