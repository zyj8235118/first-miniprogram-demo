//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        title: '精英贷',
        shortDesc:'22周岁以上即可\n最快3小时下款\n件均8万,最高20万',
        tell:'18926569267',
        img:'/images/pro_01.jpg',
        banner:'images/banner_01.jpg',
        introduce:'1.打卡工资2000以上，或者社保公积金2000以上\n' + '2.22-60周岁\n'
        + '带工作证明来公司就可以,最快3小时下款',
      },
      {
        title: '月供贷',
        shortDesc: '22周岁以上即可\n最快3小时下款\n件均8万,最高20万',
        tell: '18926569267',
        img: '/images/pro_02.jpg',
        banner: 'images/banner_02.jpg',
        introduce: '1.打卡工资2000以上，或者社保公积金2000以上\n' + '2.22-60周岁\n'
          + '带工作证明来公司就可以,最快3小时下款',
      },
      {
        title: '保单贷',
        shortDesc: '22周岁以上即可\n最快3小时下款\n件均8万,最高20万',
        tell: '18926569267',
        img: '/images/pro_03.jpg',
        banner: 'images/banner_03.jpg',
        introduce: '1.打卡工资2000以上，或者社保公积金2000以上\n' + '2.22-60周岁\n'
          + '带工作证明来公司就可以,最快3小时下款',
      }
    ]
  },
  onLoad: function () {
  
  }
})
