// components/bottomBar/bottomBar.js
var app = getApp()
import global from '../../utils/global.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bottombarData: {   //navbarData   由父页面传递的数据，变量名字自命名
      type: Array,
      value: [],
      observer: function (newVal, oldVal) { }
    },
    isIphoneX:{
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX:'',//适配iphone手机底部
    bottombarData: [
      {
        name: "首页",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: '/static/img/tab/home_s.png',  //不同图标
        fn: 'gotoShopIndex'   //对应处理函数
      }, {
        name: "购物车",
        current: 0,
        style: 0,
        ico: '/static/img/tab/shoping_cart_n.png',
        fn: 'gotoShopCart'
      }, {
        name: "我的",
        current: 0,
        style: 0,
        ico: '/static/img/tab/mine_n.png',
        fn: 'gotoMine'
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoShopIndex: function () {
      wx.redirectTo({
        url: '/pages/home/index/index',
      });
    },
    gotoShopCart: function () {
      wx.redirectTo({
        url: '/pages/shop/cart/lists/lists',
      });
    },
    gotoMine: function () {
      wx.redirectTo({
        url: '/pages/user/index/index',
      });
    },
  }
})
