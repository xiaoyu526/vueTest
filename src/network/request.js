import axios from 'axios'
export function request(config){
  //1:创建axios的实例
  const instance = axios.create({
    baseURL:''
  })
  //2:拦截器的使用
  instance.interceptors.request.use(config=>{
    console.log(config);
    //1:比如config中的一些信息不符合服务器的要求
    //2:每次发送网络请求时，显示加载中动画
    //3:某些网络请求（比如登陆必须携带token）必须携带一些特殊的信息
    return config;
  },error=>{
    console.log(error);
  }
  )
  //2.2响应拦截器
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data;
  },error=>{
    console.log(error);
  })
  //3:dsfsdf
  return instance(config);
}
//拦截器的使用
