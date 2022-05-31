// pages/todos/process/process.js
const init = require('../../../libs/syinit')
const app = getApp()

Component({
    options: {
        addGlobalClass: true
    },
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        notice: '',
        article_url: '',
        skin: false,
        cardCur: 0,
        swiperList: [{
            id: 0,
            type: 'image',
            url: '/images/swiper0001.png'
        }, {
            id: 1,
            type: 'image',
            url: '/images/swiper0002.png'
        }, {
            id: 3,
            type: 'image',
            url: '/images/swiper0005.png'
        }],
        iconList: [],
        lawList: [],
        gridCol: 4
    },
    lifetimes: {
        attached: function () {
            var that = this;
            init.notice(that);
            //init.qes_banks(that);
            init.learnctgs(that);
            init.lawctgs(that);
        },

    },
    methods: {
        DotStyle: function (e) {
            this.setData({
                DotStyle: e.detail.value
            })
        },
        cardSwiper: function (e) {
            this.setData({
                cardCur: e.detail.current
            })
        }
    }
})