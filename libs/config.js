var configs = {
  routes: {
    /*getUserId: 'https://www.bafangjie.cn/wx_users/get_userid',
    updateUser: 'https://www.bafangjie.cn/wx_users/',
    getUserId: 'http://192.168.43.7:3000/wx_users/get_userid',*/
    host: 'http://192.168.43.7:3000/',
    nhost: 'http://192.168.43.7:3000',
    getUserId: 'http://192.168.43.7:3000/wx_users/get_userid',
    updateUser: 'http://192.168.43.7:3000/wx_users/',
    getUserInfo: 'http://192.168.43.7:3000/wx_users/get_user_info',
    fcts: 'http://192.168.43.7:3000/wx_users/fcts',
    status: 'http://192.168.43.7:3000/wx_users/status',
    set_fct: 'http://192.168.43.7:3000/wx_users/set_fct',
    img_upload: 'http://192.168.43.7:3000/wx_resources/img_upload',
    notice_query_latest: 'http://192.168.43.7:3000/wx_notices/query_latest',
    notice_query_show: 'http://192.168.43.7:3000/wx_notices/query_show',
    learn_ctg_all: 'http://192.168.43.7:3000/wx_learnctgs/query_all',
    learn_ctg_qes_bank: 'http://192.168.43.7:3000/wx_learnctgs/qes_bank',
    qes_bank_all: 'http://192.168.43.7:3000/wx_qesbanks/query_all',
    qes_bank_lib_all: 'http://192.168.43.7:3000/wx_qesbanks/query_lib_all',
    advise_create: 'http://192.168.43.7:3000/advises/create_advise',
    law_ctg_all: 'http://192.168.43.7:3000/wx_lawctgs/query_all',
    law_ctg_qes_bank: 'http://192.168.43.7:3000/wx_lawctgs/qes_bank',
    law_ctg_query_show: 'http://192.168.43.7:3000/wx_lawctgs/query_show',
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