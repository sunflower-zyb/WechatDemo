// pages/demo/demo.js
const templateMessageUrl = require('../../config').templateMessageUrl

var app = getApp()

const formData = {
  // address: 'T.I.T 造舰厂',
  // time: '2017.01.09',
  name: '',
  // serial: '123456789'
  sex: '',
  phone: '',
  id_card: ''
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  submitForm: function (e) {
    var self = this
    var form_id = e.detail.formId
    var formData = e.detail.value

    console.log('form_id is:', form_id)

    self.setData({
      loading: true
    })

    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: templateMessageUrl,
          method: 'POST',
          data: {
            form_id,
            openid,
            formData
          },
          success: function (res) {
            console.log('submit form success', res)
            wx.showToast({
              title: '发送成功',
              icon: 'success'
            })
            self.setData({
              loading: false
            })
          },
          fail: function ({ errMsg }) {
            console.log('submit form fail, errMsg is:', errMsg)
          }
        })
      } else {
        console.log('err:', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // formData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})