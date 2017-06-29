
        var app = new Vue({
            el: '#app',
            data: {
                isActive: false,
                logoSrc: './imgs/payment/logo/logo.png',
                nav: [{
                    class: 'left',
                    list: [{
                        name: '首页',
                        url: './index.html',
                    }, {
                        name: '聚合支付',
                        url: './payment.html',
                    }, {
                        name: '银行分账',
                        url: './sub-account.html',
                    }, {
                        name: '电子发票',
                        url: './invoice.html',
                    }, {
                        name: '解决方案',
                        url: '/',
                    },],
                }, {
                    class: 'right',
                    list: [{
                        name: '成为服务商',
                        url: '/',
                    }, {
                        name: '开发者中心',
                        url: '/',
                    }, {
                        name: '关于我们',
                        url: './aboutus.html',
                    },],
                }],
                contentQuestion: {
                    title: '常见问题'
                },
                questionList: [{
                    subtitle: '1.什么是D0,T0,T1？',
                    desc0: 'D0是交易当天到账，不分工作日或休息日',
                    desc1: 'T0是交易当天到账，仅限制于工作日',
                    desc2: 'T1是交易日的下一个工作日到账，休息日、节假日往后顺延',
                }, {
                    subtitle: '2.需要什么申请资料？',
                    desc0: '(1)营业执照盖',
                    desc1: '(2)法人身份证正反面',
                    desc2: '(3)开户许可证',
                    desc3: '(4)税务登记证',
                    desc4: '(5)组织机构代码证',
                    desc5: '以上资料均需要盖公章复印件',
                    desc6: '(6)经营场所照片',
                    desc7: '(7)合作协议',
                    desc8: '(8)商户信息调查表',
                }, {
                    subtitle: '3.什么是银行联行号？',
                    desc0: '银行联行号就是一个地区银行的唯一识别标志。用于跨区域银行间的结算和资金清算。可通过https://www.hebbank.com/corporbank/otherBankQueryWeb.do按地区查询联行号。',
                }, {
                    subtitle: '4.支付限额是多少？',
                    desc0: '请打开“微信”－“钱包”－“银行卡”，点击绑定的银行卡查看该银行卡的单笔限额、每日限额额度。',
                }, {
                    subtitle: '5.资金如何结算？',
                    desc0: '平台只负责交易的处理，不参与资金结算，所有的资金都是由合作银行扣除相应的交易手续费后，按照固定的结算周期直接结算到商户的对应账户。',
                    desc1: '（资金是直接由支付渠道结算给商户，结算账户为支付渠道申请入网时提供的企业账户）'
                }, {
                    subtitle: '6.系统安全吗？',
                    desc0: '商户通过银行接入支付渠道，均为真实身份实名入网，交易资金直接由合作银行结算到商户账户，我司不参与资金结算。我司不会要求商户提供任何可能导致商户资金风险的安全信息，用于',
                    desc1: '标示商户身份的信息及数字证书均加密存储在数据库中。交易报文均通过 https 进行传输，最大程度保证商户身份信息的安全。'
                }, {
                    subtitle: '7.微信公众号报错？对支付渠道的请求未能成功。来自 wx_pub 渠道的错误信息：商户号mch_id与appid不匹配怎么办？',
                    desc0: '对比申请配置表上的 appid 与微信公众平台上的 appid 是否一致，联系商务经理解决情况。'
                }, {
                    subtitle: '8.微信公众号 AppID？',
                    desc0: '登录微信公众平台，点击左侧底部的「开发 - 基本配置」，可查看到开发者ID（AppID）。'            
                }, {
                    subtitle: '9.如何修改商户名称？',
                    desc0: '暂不支持修改商户名称，请在申请时确定好商户名称、商户简称。'
                }, {
                    subtitle: '10.登录商户后台页面无反应？',
                    desc0: '请清除当前浏览器的缓存后，重新打开登录页面； 推荐使用谷歌浏览器登录如何修改结算账户信息。'
                }, {
                    subtitle: '11.修改结算费率的生效时间说明？',
                    desc0: '结算费率修改后，不会立即生效，交易费率会在次日生效，结算费率会第三天生效。'
                }
                ],

                footer: {
                    logo: './imgs/payment/logo/pooul.com.png',
                    weicologo: './imgs/weico.png',
                    weicotext: '普尔瀚达官方微信',
                    weibologo: './imgs/weibo.png',
                    weibotext: '普尔瀚达官方微博',
                    company: 'Copyright(c)2017普尔瀚达科技有限公司版权所有.保留所有权利',
                    code: '粤ICP备12012050号',
                    list: [{
                        title: '产品服务',
                        list: [{
                            url: '#',
                            name: '聚合支付',
                        }, {
                            url: '#',
                            name: '分账',
                        }, {
                            url: '#',
                            name: '电子发票',
                        }, {
                            url: '#',
                            name: '开发者中心',
                        },],
                    }, {
                        title: '解决方案',
                        list: [{
                            url: '#',
                            name: '餐饮行业',
                        }, {
                            url: '#',
                            name: '连锁店',
                        }, {
                            url: '#',
                            name: '银行',
                        }, {
                            url: '#',
                            name: '财税行业',
                        },],
                    }, {
                        title: '安全保障',
                        list: [{
                            url: '#',
                            name: '技术保障',
                        }, {
                            url: '#',
                            name: '法律法规',
                        }, {
                            url: '#',
                            name: '隐私保障',
                        },],
                    }, {
                        title: '关于我们',
                        list: [{
                            url: '#',
                            name: '关于我们',
                        }, {
                            url: '#',
                            name: '联系我们',
                        },],
                    },],
                },
            }
        });
   