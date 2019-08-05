module.exports = Option => {
    const assert = require("http-assert")
    const jwt = require('jsonwebtoken')
    const adminUser = require("../models/AdminUser")

    return async(req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, "请先登录(没有token)")

        const { id } = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, "请先登录(无效token)")

        req.user = await adminUser.findById(id)
        assert(req.user, 401, "请先登录(token对应用户不存在)")

        await next()
    }
}