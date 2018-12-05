import axios from 'axios'
// 自定义实例
// 创建 axios 实例 设置配置的默认值
var service = axios.create({
    baseURL: 'http://localhost:8080'
})

// 设置拦截器在.then.catch之前拦截