const Mock = require("mockjs")

export const note = Mock.mock({
    "data|20": [{
        // 创建时间
        "moment": new Date(),
        "myKey|2": "@cword",
        // id
        "id|+1": 1,
        // userId
        "userId|+1": 10,
        // 内容content
        "content|48-196": "@cword",
        // 标签
        "label|0-10": 0,
        // name
        "name": "@cname",
        // like
        "like|0-120": 0,
        // 背景色
        "imgurl|1-4": 0,
        // 评论
        "comment|0-120": 0,
        // 是否撤销
        "revoke|0-20": 0,
        // 是否举报
        "report|0-20": 0,
    }]
})