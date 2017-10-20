import RNValidate from '../../util/RNValidate.js';

//登录信息校验
export async function formatChecks(params) {
    return new Promise(async (resolve, reject) => {
        try {
            await RNValidate.match(params.mobile, 'mobile', '手机号格式不正确');
            await RNValidate.match(params.password, 'password', '密码格式不正确');
            resolve();
        } catch (error) {
            global.modal.open('RNAlert', { tips: error });
        }
    })
}

//获取图片
export async function fetchImage(page = parseInt(190 * Math.random())) {
    let url = 'http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=' + page
    const result = await fetch(url);
    const res = await result.json();
    PPZ.cache.imageList = res.comments
}

//注册
export async function register(params, fn) {
    await formatChecks(params);
    return new Promise(async (resolve, reject) => {
        const res = await fetch(global.PPZ.host + '/account/register', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        const Data2Json = await res.json();
        console.log('res----->', Data2Json)
        if (Data2Json.code === 1) {
            //1.成功
            const _onLogin = () => {
                global.modal.close();
                PPZ.router.resetTo('welcome')(fn);
            }
            const _onClose = () => {
                global.modal.close();
            }
            const data = {
                tips: Data2Json.tip,
                buttons: [
                    { title: '登录', cb: _onLogin },
                    { title: '取消', cb: _onClose },
                ]
            }
            global.modal.open('RNAlert', data);
            resolve(Data2Json)
        }
        else {
            const tip = Data2Json.tip
            // await global.modal.close();
            //2.失败
            //2.1打开模态提示 失败
            global.modal.open('RNAlert', { tips: tip });
            return;
        }
    })
}

//登录
export async function login(params, fn) {
    await formatChecks(params);
    return new Promise(async (resolve, reject) => {
        const res = await fetch(global.PPZ.host + '/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        const data = await res.json();
        console.log('res------>', data)
        if (data.code === 1) {
            global.modal.close();
            PPZ.router.resetTo('dashboard')(fn)
            resolve(data);
        }
        else {
            const tip = data.tip
            global.modal.open('RNAlert', { tips: tip });
            return;
        }
    })
}

//重置密码
export async function reserpsd(params) {
    await formatChecks(params);
    const res = await fetch(global.PPZ.host + '/account/resetpsd', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)

    })
    const data = await res.json();
    console.log('res------>', data)
    const tip = data.tip
    global.modal.open('RNAlert', { tips: tip });
    return;
}






