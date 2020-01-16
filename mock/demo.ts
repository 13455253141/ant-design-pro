import { Request, Response } from 'express';

export default {
  'POST /api/demo/table': (req: Request, res: Response) => {
    res.send({
      status: 'ok',
      message: '操作成功',
      result: [
        {
          key: 1,
          name: 'zhangsan',
          age: 20,
          address: 'beijing'
        },
        {
          key: 2,
          name: 'lisi',
          age: 30,
          address: 'shanghai'
        },
        {
          key: 3,
          name: 'wangwu',
          age: 10,
          address: 'shenzhen'
        },
      ]
    });
  },
};
