module.exports = app => {
    const express = require("express")
    const assert = require("http-assert")
    const jwt = require('jsonwebtoken')
    const adminUser = require("../../models/AdminUser")

    const router = express.Router({
        mergeParams: true
    })

    //引用中间件
    const auth = require('../../middleWare/auth')
    const resource = require('../../middleWare/resource')

    //增
    router.post("/", async(req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model);
    })

    //改
    router.put("/:id", async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model);
    })

    //删
    router.delete("/:id", async(req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({ success: true });
    })

    //查
    router.get("/", async(req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === "Category") {
            queryOptions.populate = "parent"
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items);
    })

    //查-详细
    router.get("/:id", async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model);
    })

    //增删改查中间件
    app.use("/admin/api/rest/:resource", auth(), resource(), router)

    //文件上传
    const multer = require("multer")
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.use("/admin/api/upload", auth(), upload.single("file"), async(req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file);
    })

    //登录
    app.post("/admin/api/login", async(req, res) => {
        const { username, password } = req.body
        const user = await adminUser.findOne({ username }).select('+password')
        assert(user, 422, "用户不存在")
        const isValid = require("bcrypt").compareSync(password, user.password)
        assert(isValid, 422, "密码错误")
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({
            token
        });
    })

    //捕获异常
    app.use(async(err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}