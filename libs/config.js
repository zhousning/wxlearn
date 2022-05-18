var configs = {
  routes: {
    /*getUserId: 'https://www.bafangjie.cn/wx_users/get_userid',
    updateUser: 'https://www.bafangjie.cn/wx_users/',
    getUserId: 'https://aqbz.sdgykg.com:9191/wx_users/get_userid',*/
    host: 'https://aqbz.sdgykg.com:9191/',
    nhost: 'https://aqbz.sdgykg.com:9191',
    getUserId: 'https://aqbz.sdgykg.com:9191/wx_users/get_userid',
    updateUser: 'https://aqbz.sdgykg.com:9191/wx_users/',
    getUserInfo: 'https://aqbz.sdgykg.com:9191/wx_users/get_user_info',
    fcts: 'https://aqbz.sdgykg.com:9191/wx_users/fcts',
    status: 'https://aqbz.sdgykg.com:9191/wx_users/status',
    set_fct: 'https://aqbz.sdgykg.com:9191/wx_users/set_fct',
    img_upload: 'https://aqbz.sdgykg.com:9191/wx_resources/img_upload',
    notice_query_latest: 'https://aqbz.sdgykg.com:9191/wx_notices/query_latest',
    notice_query_show: 'https://aqbz.sdgykg.com:9191/wx_notices/query_show',
    learn_ctg_all: 'https://aqbz.sdgykg.com:9191/wx_learnctgs/query_all',
    learn_ctg_qes_bank: 'https://aqbz.sdgykg.com:9191/wx_learnctgs/qes_bank',
    qes_bank_all: 'https://aqbz.sdgykg.com:9191/wx_qesbanks/query_all',
    qes_bank_lib_all: 'https://aqbz.sdgykg.com:9191/wx_qesbanks/query_lib_all',
    advise_create: 'https://aqbz.sdgykg.com:9191/wx_advises/create_advise',
    law_ctg_all: 'https://aqbz.sdgykg.com:9191/wx_lawctgs/query_all',
    law_ctg_qes_bank: 'https://aqbz.sdgykg.com:9191/wx_lawctgs/qes_bank',
    law_ctg_query_show: 'https://aqbz.sdgykg.com:9191/wx_lawctgs/query_show',
    essay_all:  'https://aqbz.sdgykg.com:9191/wx_essays/query_all',
    essay_show:  'https://aqbz.sdgykg.com:9191/wx_essays/query_show',
  },
  getNetwork() {
    return new Promise((resolve, reject) => {
      wx.getNetworkType({
        success(res) {
          const networkType = res.networkType
          if (res.networkType === 'none') {
            reject()
          } else {
            resolve()
          }
        }
      })
    })
  },
}

module.exports = configs