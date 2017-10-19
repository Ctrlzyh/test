
import * as IAppImpl from './impl/IAppImpl.js';

const Interface = {
fetchImage:IAppImpl.fetchImage,//获取图片
register:IAppImpl.register,//注册
login:IAppImpl.login,//登录
resetpsd:IAppImpl.reserpsd,//重置密码
}

export default Interface;