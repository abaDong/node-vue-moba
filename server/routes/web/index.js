module.exports = app => {
    const router = require("express").Router()
    const mongoose = require("mongoose")
    const Article = mongoose.model("Article")
    const Category = mongoose.model("Category")

    //模拟数据(记得删除[该接口慎用])
    router.get('/news/init', async(req, res) => {
        //查找Category中的新闻分类
        const parent = await Category.findOne({
            name: "新闻分类"
        });
        //以新闻分类为parent查找对应子分类 并转为json
        const cats = await Category.find().where({
                parent: parent
            }).lean()
            //模拟数据源
        const newstitles = ["Hero久诚在线解析干将莫邪玩法", "2019Chinajoy王者PK赛，十大明星主播巅峰对决", "《王者荣耀》公布 “天工”编辑器，即将上线王者模拟战", "《圣斗士星矢（腾讯）》周年庆重磅上线！巅峰赛事爆燃开启", "新英雄马超、ChinaJoy峡谷开放日...本文信息量有点大！", "8月6日全服不停机更新公告", "净化游戏环境声明及处罚公告（7月30日-8月5日）", "8月6日外挂专项打击公告", "8月6日“演员”惩罚名单", "王者时刻功能无法使用异常说明", "峡谷喜迎七夕节 大波福利来袭", "世界冠军杯 集卡赢壕礼活动公告", "炎炎夏日全新活动周 峡谷激战得好礼", "助力世冠赛 心愿单升级回馈公告", "夏日福利继续领 限定皮肤返场", "8月6日【比赛服】版本更新公告", "世冠总决赛看点揭秘，多重观赛惊喜邀你8月10日相聚深圳！", "你是赛评师：eStarPro强势进军世冠总决赛，深圳遭遇RW胜率有多少？", "第二周五省齐开战，王者荣耀城市赛省赛进行中！", "世冠四强出炉 8月2日半决赛拉开战幕"]

        //遍历插入数据 随机附加两个分类
        const newsList = newstitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) =>
                Math.random() - 0.5
            )
            return {
                categories: randomCats.slice(0, 2),
                title: title,
            }
        });
        //无条件清空Article数据库
        await Article.deleteMany({});
        //无条件将newsList数据导入Article数据库
        await Article.insertMany(newsList);
        //返回
        res.send(newsList);
    })

    app.use('/web/api', router)
}