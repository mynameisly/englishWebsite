<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="less">
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
.panel-intro {
    .panel-heading {
        padding: 15px;
        padding-bottom: 0;
        background: #e8edf0;
        border-color: #fff;
        position: relative;
        .panel-lead {
            margin-bottom: 15px;
            em {
                display: block;
                font-weight: bold;
                font-style: normal;
            }
        }
        .nav-tabs > li > a {
            margin-right: 4px;
            color: #95a5a6;
            background-color: #d8e0e6;
            border: none;
            cursor: pointer;
            border-radius: 0px;
            border-bottom-color: transparent;
        }
        .nav-tabs > li > a:hover {
            border-bottom-color: transparent;
        }
        .nav-tabs > li > a:active {
            border-bottom-color: transparent;
        }
        .nav-tabs > li.active > a {
            background-color: #fff;
        }
    }
}

// .table-striped > tbody > tr:nth-of-type(odd) {
//     background-color: #f9f9f9;
// }
// .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {
//     border-top: 1px solid #f4f4f4;
//     padding: 8px;
//     line-height: 1.42857143;
//     vertical-align: top;
// }
</style>