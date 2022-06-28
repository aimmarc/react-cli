const Mock = require('mockjs');

module.exports = {
    'GET /api/dashboard/rankList': (req, res) => {
        const data = Mock.mock({
            total: 999,
            'list|5': [
                {
                    'rank|+1': 1,
                    'keyword|1-2': '关键字',
                    'userCount|1-999': 1,
                    'weekRate|0-100': 1,
                },
            ],
        });
        return res.send({
            message: '成功',
            code: 10000,
            data,
        });
    },
    'GET /api/list/table': (req, res) => {
        const data = Mock.mock({
            total: 999,
            'list|10': [
                {
                    'id|+1': 10000000,
                    'temp|100-5999': 1,
                    'title|1-3': '标题',
                    'status|0-3': 1,
                    lastDate: () => {
                        return Mock.Random.time('yyyy-MM-dd HH:mm:ss');
                    },
                    desc: () => {
                        return Mock.Random.csentence(0, 16);
                    },
                    date: '@now',
                },
            ],
        });
        return res.send({
            message: '成功',
            code: 10000,
            data,
        });
    },
};
