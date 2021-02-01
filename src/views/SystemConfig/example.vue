<template>
    <div id="example">
        <div class="tab-pane">
            <div class="widget-body no-padding">
                <form
                    id="example-form"
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
                        <tbody></tbody>
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