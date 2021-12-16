module.exports = {
    'POST /api/login/account': (req, res) => {
        const { password, username } = req.body
        if (password === '88888888' && username === 'admin') {
            return res.send({
                code: 10000,
                data: {
                    username: "❤️aimmarc",
                    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    role: "admin",
                },
                message: '登录成功'
            })
        } else {
            return res.send({ message: '登录失败', code: 403 })
        }
    },
}