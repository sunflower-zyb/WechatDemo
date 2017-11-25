// pages/demo/demo.js
const templateMessageUrl = require('../../config').templateMessageUrl
const AV = require('../../utils/av-weapp-min.js')
var app = getApp()

const formData = {
  name: '',
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
    console.log(e.detail.value)
    self.setData({
      loading: true
    })
    var Person = AV.Object.extend("MVPPerson");
    var person = new Person();
    // console.log(formData.name);
    person.set("name", formData.name)
    person.set("sex", formData.sex)
    person.set("phone", formData.phone)
    person.set("idCcard", formData.id_card)
    person.save().then(function (person) {
      console.log(person.toJSON())
      wx.showToast({
        title: '保存成功',
        // icon: 'success'
      })
      self.setData({
        loading: false
      })
    }, function (error) {
      console.log("" + error)
      wx.showToast({
        title: '保存成功',
      })
      self.setData({
        loading: false
      })
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
    console.log("TAG", "onShow")
    // var ToDo = AV.Object.extend('ToDo');
    // var todo = new ToDo();
    // todo.set("title", "This is title1");
    // todo.set("cntent", "This is content1");
    // todo.save().then(function (todo) {
    //   // console.log('New object created with objectId: ' + todo.id);
    //   console.log(todo.toJSON())
    // }, function (error) {
    //   console.error('Failed to create new object, with error message: ' + error.message);
    // });
    // 'testCloudFunction'
    AV.Cloud.run('testCloudFunction').then(function (data) {
      console.log(data)
    }, function (error) {
      console.log(error)

    });

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