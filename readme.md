### env

    npm -v
        6.9.3
    node -v
        10.16.0

### run

> 修改上传地址 :  
> `/server/routes/admin/index.js :57`
>
> /web && /admin
>
> > `npm run build`

> then

> /server
>
> > `mongorestore`  
> > <font color=#a08060>Need: mongodb-server</font>
> >
> > `npm i`

> then

> `xxx run index`

    default user:
        username:admin
        password:123456

    address:
        front:'/'
        management: '/admin'

### 整体描述

    王者荣耀手机端官网与后台管理

### 工具环境

    *   node+npm
    *   vue+vue-cli3
    *   mongodb-server

### 后端管理流程

    1.基于element的后台管理界面element

    2.分类管理
    3.增删改查
    4.重构为动态接口
    5.道具管理
    6.图片及文件上传multer
    7.人物管理
    8.多选el-select+multiple
    9.文本信息
    10.富文本编辑器quill
    11.广告管理
    12.管理员管理+注册 bcrypt
    13.登录页面
    14.登录接口jwt:jsonwebtoken
    15.登录校验
    16.客户端路由限制beforeeach+meta

### 移动端流程

    1.后台接口对接
    2.scss
    3.字体图标iconfont
    4.图片轮播swiper
    5.通用组件sfc
    6.卡片组件
    7.菜单组件tab+swiper
    8.新闻资讯
    9.详情页
    10.人物列表
    11.人物详情

### 发布部署

    1.生产环境编译
    2.域名+服务器
    3.域名解析
    4.nginx
    5.mongodb
    6.git
    7.ssh-key
    8.拉取代码 pm2
    9.nginx反向代理
    10.ssl证书+htmls安全连接
    11.阿里云oss存储
