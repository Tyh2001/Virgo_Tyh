import require from '@/utils/require'

/**
 * 注册账号
 * @param { object } data 用户注册信息
 * @returns
 */
export const onRegister = data => {
  return require({
    method: 'POST',
    url: 'index/User/Register',
    data
  })
}

/**
 * 登录
 * @param { object } data 用户名和密码的对象
 * @returns
 */
export const onUserLogin = data => {
  return require({
    method: 'POST',
    url: 'index/User/Login',
    data
  })
}

/**
 * 获取用户个人资料
 * @param { number } userID 用户的 id
 * @returns 用户个人资料
 */
export const getUserInfo = userID => {
  return require({
    method: 'GET',
    url: 'index/User/getUserInfo',
    params: {
      id: userID
    }
  })
}

/**
 * 更改用户资料
 * @param { object } data 用户资料
 * @returns
 */
export const changeUserInfo = data => {
  return require({
    method: 'POST',
    url: 'index/User/changeUserInfo',
    data
  })
}

/**
 * 更改用户密码
 * @param { object } data 用户密码
 * @returns
 */
export const changeUserPass = data => {
  return require({
    method: 'POST',
    url: 'index/User/changeUserPass',
    data
  })
}

/**
 * 上传用户头像
 * @param { formData } data 头像
 * @returns
 */
export const uploadUserPhoto = (data, userID) => {
  return require({
    method: 'POST',
    url: 'index/User/uploadPhoto',
    data,
    params: {
      id: userID
    }
  })
}
