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
            url: 'https://636c-cloud1-6gqvn1deb6d48dd5-1309064836.tcb.qcloud.la/swiper0001.png?sign=89fa09f3e3593a5e34d9a8d654ff9b5d&t=1642578888'
        }, {
            id: 1,
            type: 'image',
            url: 'https://636c-cloud1-6gqvn1deb6d48dd5-1309064836.tcb.qcloud.la/swiper0002.png?sign=00365bb2fbff48b399984d4773f8d2b8&t=1642578945'
        }, {
            id: 3,
            type: 'image',
            url: 'https://636c-cloud1-6gqvn1deb6d48dd5-1309064836.tcb.qcloud.la/swiper0005.png?sign=a6acf97e2e52dd236fcec81b689cfa6b&t=1642578963'
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