<template>
  <div class="Home">
    <div class="header">
      <div class="left">Hello {{ username }}</div>
      <div class="right">THE SHOPPERS</div>
    </div>
    <!-- 轮播图 -->
    <div class="banners">
      <van-swipe class="imgWrapper" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imagesArr" :key="index">
          <a @click="toShoppers">
            <img :src="item.homePicLinkUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 选项组 -->
    <div class="home-menu">
      <van-grid :column-num="4">
        <van-grid-item class="menu-wrapper" @click="goShoppingAssistant">
          <img
            src="../../static/img/licai.808f4ef.png"
            alt
            style="margin-top: 10px"
          />
          <p>Shopping Assistant</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goRecharge">
          <img src="../../static/img/chongzhi.96189b6.png" alt />
          <p>Recharge</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goWithdrawal">
          <img src="../../static/img/Withdrawal.png" alt />
          <p>Withdrawal</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goInvite">
          <img src="../../static/img/Invite.png" alt />
          <p>Invite Friends</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goRules">
          <img src="../../static/img/Rules.png" alt style="margin-top: -10px" />
          <p>Rules</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goCooperative">
          <img src="../../static/img/Cooperative.png" alt />
          <p>Cooperative Agent</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goPlatform">
          <img src="../../static/img/Platform.png" alt />
          <p>Platform Introduction</p>
        </van-grid-item>

        <van-grid-item class="menu-wrapper" @click="goVideo">
          <img src="../../static/img/Video.png" alt />
          <p>Video Guide</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- News -->
    <div class="noticebox">
      <span class="news">News</span>
      <img class="img" src="../../static/img/notice.png" alt="" />
      <van-notice-bar
        style="width: 70%; color: rgb(102, 102, 102)"
        text="Dear Valued Customer, Please be informed that recharged failure
        (recharge amount not credited to account)will not be entertain if you
        had failed to report the failure within 48 hours."
      />
    </div>

    <!-- Business && Partner -->
    <div class="viptit">
      Business&nbsp;
      <span>Partner</span>
    </div>

    <div class="task">
      <ul>
        <li>
          <div class="task-bottom">
            <div>
              <p>Snapdeal</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABuElEQVQ4T63UPWgUQRjG8f87eyaIqIWFGA/ubmOhEBTRQhQFLWxsreJHeWZ3FWKVzkupgih6udPOwo/KzsoiqIilnSCYW08LsbBQUoUk+8iuTZKL3hzJMOW+v3ln5tkxBhyqhzsJFqdwQ+OgCsv6jAWP2V2+bdOvl2wQT/WR/QxtmyXL9oCKicsJA2WfWPh5whtU/cgWSr+7oBHQe0SDYLlDpjHM3YLgAOitPxhVxrHSU1j6aK2vYyt3puvlrSyUfkCwwx9MaveRu4YWL1n725O1R6WoehcLJv3BOHwIXMFx3prpi14wnMK4OQBYewB2FccFa6bPesC42gA37Q9OVBs4dwO5M9aee9MDJmETkZii8kFs+DKohIogrBlZHo0M2SngENgr0BzSPMO6Y/e6v/ICRfuOQXbclNSEvBtdsVheI6yVrio2xeE6XfnH3R/828Bz0C6ws/9awh9UFlm7m0cFxaMvQefWQ/1BOGmt9F0BJrVHyOobA82+20xnryYqh3HBh41vOX9DWqkpHj0Nmt0UELiIOIoxuVlg3/wMcil9sfyHsHbnv8Ge768UX2wvXmnLsJkvq8A/NW60lN7vFxsAAAAASUVORK5CYII="
                />
                250.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/15e9d9707154ceff0c765aa1.jpg"
                alt=""
              />
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>2.5%Reward</span>
          </p>
          <div class="grade">LV.1</div>
        </li>
        <li>
          <div class="task-bottom">
            <div>
              <p>Myntra</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC"
                />
                10,000.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/3812fb22646b87efc451cf70.png"
                alt=""
              />
              <span class="taskMb"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACWklEQVRIS63VTYiXVRTH8c+x0gpTiwp8gUgEkRCstma4k1kYM/hClFgLQXxJwTZJFApSCxUEceNaEcW2ViSCQhAGLcxCJVuIbziizgxmlt04wy1nHv4vwzBn88C9z/3e37n3d84NbaKU8ip6sBQLMRWX8D1O4GxEPGguj+ZAKSXHXsMOvIXn8DQK/sEQrmAvjkTEHyMZo4AVNhcHqrKcv4nf8CfmYDam4Xd8guMR8fd/0CZwOrZjI57CN9iHX6rCGVhV51/CObyLXyMiM9AEvoFjeAWnsQEXIyJTHY5SyovYjK11/c7MKCLujwKWUibjfexGpvARjo6EjYDOw1dYkCljU0T0N4HP1FQ+xQDeiYifWpmgqjyI5TiJNRGRZ/045VLKSOAgeiPixw7A/ViBUxV4oxVwPT6r1uiLiLNtgHkh6YRefIe1rRQ+iXXYhVTYExHn2wCfr8CV+Bof/H+GpZRnq6/y+x4+rgo/REsg0j5f1Eo6gy24nV6NUso2LKs/vYxZtSKyzFLppIbK9NsTyAJIpXmBl6vxLyXwOhLUXNiuzDuNDyXwTlU3HkBzzTDwGmZ2oGWV5KZ/1RSndPj3Xjfgo1rHe5A+y0rqQ15gqxjoBrxVbzDLKxXOx2G8Pl7g1VoNP2Q3KaWkAw7h7WZjqRt0VZgdOQGfI9Vmq0r/tTvzrsDcOFWuxc/ZobGkg8XGBMwushoXaq9c3OGWxwRMy3yZjbamvqgbMFPKw24X6cO7eIgXkI24XQz7MA872/pExGACs7jzqZyIeJDAb/FmfeWGX65xRjaX/n8Blzzuxi24SrEAAAAASUVORK5CYII="
                  alt=""
              /></span>
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>3%Reward</span>
          </p>
          <div class="grade">LV.2</div>
        </li>
        <li>
          <div class="task-bottom">
            <div>
              <p>Paytm Mall</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC"
                />
                50,000.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/f8c2a76d1995e53309fa6074.webp"
                alt=""
              />
              <span class="taskMb"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACWklEQVRIS63VTYiXVRTH8c+x0gpTiwp8gUgEkRCstma4k1kYM/hClFgLQXxJwTZJFApSCxUEceNaEcW2ViSCQhAGLcxCJVuIbziizgxmlt04wy1nHv4vwzBn88C9z/3e37n3d84NbaKU8ip6sBQLMRWX8D1O4GxEPGguj+ZAKSXHXsMOvIXn8DQK/sEQrmAvjkTEHyMZo4AVNhcHqrKcv4nf8CfmYDam4Xd8guMR8fd/0CZwOrZjI57CN9iHX6rCGVhV51/CObyLXyMiM9AEvoFjeAWnsQEXIyJTHY5SyovYjK11/c7MKCLujwKWUibjfexGpvARjo6EjYDOw1dYkCljU0T0N4HP1FQ+xQDeiYifWpmgqjyI5TiJNRGRZ/045VLKSOAgeiPixw7A/ViBUxV4oxVwPT6r1uiLiLNtgHkh6YRefIe1rRQ+iXXYhVTYExHn2wCfr8CV+Bof/H+GpZRnq6/y+x4+rgo/REsg0j5f1Eo6gy24nV6NUso2LKs/vYxZtSKyzFLppIbK9NsTyAJIpXmBl6vxLyXwOhLUXNiuzDuNDyXwTlU3HkBzzTDwGmZ2oGWV5KZ/1RSndPj3Xjfgo1rHe5A+y0rqQ15gqxjoBrxVbzDLKxXOx2G8Pl7g1VoNP2Q3KaWkAw7h7WZjqRt0VZgdOQGfI9Vmq0r/tTvzrsDcOFWuxc/ZobGkg8XGBMwushoXaq9c3OGWxwRMy3yZjbamvqgbMFPKw24X6cO7eIgXkI24XQz7MA872/pExGACs7jzqZyIeJDAb/FmfeWGX65xRjaX/n8Blzzuxi24SrEAAAAASUVORK5CYII="
                  alt=""
              /></span>
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>3.5%Reward</span>
          </p>
          <div class="grade">LV.3</div>
        </li>
        <li>
          <div class="task-bottom">
            <div>
              <p>Flipkart</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC"
                />
                100,000.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/eed642f6f6dff61cacbea494.jpg"
                alt=""
              />
              <span class="taskMb"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACWklEQVRIS63VTYiXVRTH8c+x0gpTiwp8gUgEkRCstma4k1kYM/hClFgLQXxJwTZJFApSCxUEceNaEcW2ViSCQhAGLcxCJVuIbziizgxmlt04wy1nHv4vwzBn88C9z/3e37n3d84NbaKU8ip6sBQLMRWX8D1O4GxEPGguj+ZAKSXHXsMOvIXn8DQK/sEQrmAvjkTEHyMZo4AVNhcHqrKcv4nf8CfmYDam4Xd8guMR8fd/0CZwOrZjI57CN9iHX6rCGVhV51/CObyLXyMiM9AEvoFjeAWnsQEXIyJTHY5SyovYjK11/c7MKCLujwKWUibjfexGpvARjo6EjYDOw1dYkCljU0T0N4HP1FQ+xQDeiYifWpmgqjyI5TiJNRGRZ/045VLKSOAgeiPixw7A/ViBUxV4oxVwPT6r1uiLiLNtgHkh6YRefIe1rRQ+iXXYhVTYExHn2wCfr8CV+Bof/H+GpZRnq6/y+x4+rgo/REsg0j5f1Eo6gy24nV6NUso2LKs/vYxZtSKyzFLppIbK9NsTyAJIpXmBl6vxLyXwOhLUXNiuzDuNDyXwTlU3HkBzzTDwGmZ2oGWV5KZ/1RSndPj3Xjfgo1rHe5A+y0rqQ15gqxjoBrxVbzDLKxXOx2G8Pl7g1VoNP2Q3KaWkAw7h7WZjqRt0VZgdOQGfI9Vmq0r/tTvzrsDcOFWuxc/ZobGkg8XGBMwushoXaq9c3OGWxwRMy3yZjbamvqgbMFPKw24X6cO7eIgXkI24XQz7MA872/pExGACs7jzqZyIeJDAb/FmfeWGX65xRjaX/n8Blzzuxi24SrEAAAAASUVORK5CYII="
                  alt=""
              /></span>
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>4%Reward</span>
          </p>
          <div class="grade">LV.4</div>
        </li>
        <li>
          <div class="task-bottom">
            <div>
              <p>Walmart</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC"
                />
                800,000.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/93a7e9d842c2765609e60e15.jpg"
                alt=""
              />
              <span class="taskMb"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACWklEQVRIS63VTYiXVRTH8c+x0gpTiwp8gUgEkRCstma4k1kYM/hClFgLQXxJwTZJFApSCxUEceNaEcW2ViSCQhAGLcxCJVuIbziizgxmlt04wy1nHv4vwzBn88C9z/3e37n3d84NbaKU8ip6sBQLMRWX8D1O4GxEPGguj+ZAKSXHXsMOvIXn8DQK/sEQrmAvjkTEHyMZo4AVNhcHqrKcv4nf8CfmYDam4Xd8guMR8fd/0CZwOrZjI57CN9iHX6rCGVhV51/CObyLXyMiM9AEvoFjeAWnsQEXIyJTHY5SyovYjK11/c7MKCLujwKWUibjfexGpvARjo6EjYDOw1dYkCljU0T0N4HP1FQ+xQDeiYifWpmgqjyI5TiJNRGRZ/045VLKSOAgeiPixw7A/ViBUxV4oxVwPT6r1uiLiLNtgHkh6YRefIe1rRQ+iXXYhVTYExHn2wCfr8CV+Bof/H+GpZRnq6/y+x4+rgo/REsg0j5f1Eo6gy24nV6NUso2LKs/vYxZtSKyzFLppIbK9NsTyAJIpXmBl6vxLyXwOhLUXNiuzDuNDyXwTlU3HkBzzTDwGmZ2oGWV5KZ/1RSndPj3Xjfgo1rHe5A+y0rqQ15gqxjoBrxVbzDLKxXOx2G8Pl7g1VoNP2Q3KaWkAw7h7WZjqRt0VZgdOQGfI9Vmq0r/tTvzrsDcOFWuxc/ZobGkg8XGBMwushoXaq9c3OGWxwRMy3yZjbamvqgbMFPKw24X6cO7eIgXkI24XQz7MA872/pExGACs7jzqZyIeJDAb/FmfeWGX65xRjaX/n8Blzzuxi24SrEAAAAASUVORK5CYII="
                  alt=""
              /></span>
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>4.5%Reward</span>
          </p>
          <div class="grade">LV.5</div>
        </li>
        <li>
          <div class="task-bottom">
            <div>
              <p>Amazon</p>
              <p>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC"
                />
                3,000,000.00
              </p>
            </div>
            <div class="taskBg">
              <img
                src="https://api.theshoppers.app/files/admin/e6d544fed3ff5e0df41ed83c.jpg"
                alt=""
              />
              <span class="taskMb"
                ><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAACWklEQVRIS63VTYiXVRTH8c+x0gpTiwp8gUgEkRCstma4k1kYM/hClFgLQXxJwTZJFApSCxUEceNaEcW2ViSCQhAGLcxCJVuIbziizgxmlt04wy1nHv4vwzBn88C9z/3e37n3d84NbaKU8ip6sBQLMRWX8D1O4GxEPGguj+ZAKSXHXsMOvIXn8DQK/sEQrmAvjkTEHyMZo4AVNhcHqrKcv4nf8CfmYDam4Xd8guMR8fd/0CZwOrZjI57CN9iHX6rCGVhV51/CObyLXyMiM9AEvoFjeAWnsQEXIyJTHY5SyovYjK11/c7MKCLujwKWUibjfexGpvARjo6EjYDOw1dYkCljU0T0N4HP1FQ+xQDeiYifWpmgqjyI5TiJNRGRZ/045VLKSOAgeiPixw7A/ViBUxV4oxVwPT6r1uiLiLNtgHkh6YRefIe1rRQ+iXXYhVTYExHn2wCfr8CV+Bof/H+GpZRnq6/y+x4+rgo/REsg0j5f1Eo6gy24nV6NUso2LKs/vYxZtSKyzFLppIbK9NsTyAJIpXmBl6vxLyXwOhLUXNiuzDuNDyXwTlU3HkBzzTDwGmZ2oGWV5KZ/1RSndPj3Xjfgo1rHe5A+y0rqQ15gqxjoBrxVbzDLKxXOx2G8Pl7g1VoNP2Q3KaWkAw7h7WZjqRt0VZgdOQGfI9Vmq0r/tTvzrsDcOFWuxc/ZobGkg8XGBMwushoXaq9c3OGWxwRMy3yZjbamvqgbMFPKw24X6cO7eIgXkI24XQz7MA872/pExGACs7jzqZyIeJDAb/FmfeWGX65xRjaX/n8Blzzuxi24SrEAAAAASUVORK5CYII="
                  alt=""
              /></span>
            </div>
          </div>
          <p>
            <span>60 orders</span>
            <span>5%Reward</span>
          </p>
          <div class="grade">LV.6</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: "2345678",
      imagesArr: [
        {
          homePicLinkUrl:"https://api.theshoppers.app/files/admin/971be1df13d3d2979cb2e77a.jpg",
        },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // this.getSysConfig();
      // this.getHomePic();
    },
    /** 获取系统配置 */
    getSysConfig() {
      let params = {};
      this.fetchget("/api/getSysConfig", params).then((res) => {
        if (res.code == 200) {
          let lotteries = res.data.lotteries;
          // 我的彩种
          this.myLotteries = [];
          for (let i = 0; i < 3; i++) {
            this.myLotteries.push(lotteries["1"][i]);
          }
          // 设置彩票图标
          this.setIcon(this.myLotteries);
          // 热门彩种
          this.hotlotteryList = lotteries[2];
          // 设置彩票图标
          this.setIcon(this.hotlotteryList);
          // 真人体育
          this.thirdGameList = [];
          res.data.platforms.forEach((element) => {
            var tmp = this.allThird.filter((item) => item.name == element.name);
            if (tmp.length > 0) {
              this.thirdGameList.push(tmp[0]);
            }
          });

          // 提交作为全局数据
          this.$store.commit("setValue", {
            lotteries: res.data.lotteries,
          });

          console.log(this.$store);
        }
      });
    },
    getHomePic() {
      let params = {
        picType: 1,
      };
      this.fetchget("/api/getHomePicApp", params).then((res) => {
        if (res.code == 200) {
          this.imagesArr = res.data.homePics;
        }
      });
    },
    toShoppers() {
      this.$router.push({path: '/Shoppers'})
    },
    goShoppingAssistant() {
      this.$router.push({path: '/ShoppingAssistant'})
    },
    goRecharge() {
      this.$router.push({path: '/Recharge'})
    },
    goWithdrawal() {
      this.$router.push({path: '/Withdrawal'})
    },
    goInvite() {
      this.$router.push({path: '/Invite'})
    },
    goRules() {
      this.$router.push({path: '/Rules'})
    },
    goCooperative() {
      this.$router.push({path: '/Cooperative'})
    },
    goPlatform() {
      this.$router.push({path: '/Platform'})
    },
    goVideo() {
      alert(1)
      this.$router.push({path: '/Video'})
    }
  },
};
</script>

<style lang="scss" scoped>
.Home {
  background: #fff;
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    text-align: center;
    font-weight: 700;
    color: #000;
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      color: #333;
      text-align: left;
    }
    .right {
      color: #ff6a27;
      font-family: Impact;
    }
  }

  .banners {
    margin-top: 60px;
    .imgWrapper {
      margin: 10px;
      height: 155px;
      img {
        width: 100%;
        border-radius: 10px;
        height: 155px;
      }
    }
  }
  .home-menu {
    .menu-wrapper {
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      p {
        margin-top: 13px;
        text-align: center;
      }
    }
  }
  .noticebox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 25px;
    background: #f5f5f5;
    border-radius: 3px;
    .news {
      font-size: 12px;
      font-weight: 700;
    }
    .img {
      height: 15px;
      width: 5%;
      margin-left: 5px;
    }
  }
  .viptit {
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin: 14px 14px 10px;
    display: flex;
    align-items: center;
    background: url(../../static/img/BusinessLine.png) no-repeat 0 100%;
    background-size: 22% 22%;
    span {
      color: #ff6a23;
    }
  }
  .task {
    margin-bottom: 55px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.26667rem 0.37333rem 0;
      li {
        width: 48%;
        box-shadow: 5px 3px 10px #eee;
        border-radius: 7px;
        margin-bottom: 15px;
        position: relative;
        .task-bottom {
          display: flex;
          width: 100%;
          padding: 25px 12px 10px;
          box-sizing: border-box;
        }
        .task-bottom div:first-child {
          flex: 1;
          padding-top: 3px;
          p {
            line-height: 20px;
          }
          p:nth-child(2) {
            color: tomato;
            font-size: 12px;
            margin-top: 3px;
          }
          p:nth-child(2) img {
            width: 12px;
            height: 12px;
            margin-right: 3px;
          }
        }
        .task-bottom div:nth-child(2) {
          width: 40px;
          height: 40px;
          img {
            height: 100%;
          }
        }
        .taskBg {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 5px;
          overflow: hidden;
        }
        > p {
          padding: 0 2px;
          margin-top: 16px;
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          span:first-child {
            width: 44%;
          }
          span:nth-child(2) {
            width: 54%;
          }
          span {
            border: 1px solid #ff575c;
            border-radius: 3px;
            padding: 2px 1px;
            color: #f55200;
            font-size: 13px;
            text-align: center;
          }
        }
        .grade {
          width: 41px;
          height: 16px;
          color: #fff;
          background: #ff6a27;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 7px 0 0 0;
        }
      }
    }
  }
}
</style>