import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess } from '@vben/utils/mock-util'

export function createFakeTableData() {
  return {
    items: [
      {
        userId: '1',
        username: 'vben',
        realname: 'Vben Admin',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
        desc: 'manager',
        password: '123456',
        accessToken: 'fakeToken1',
        address:'呼伦贝尔市',
        startTime:'1997-01-26 10:45:00',
        endTime:'2022-08-08 17:02:15',
        roles: [
          {
            name: 'Super Admin',
            value: 'super',
          },
        ],
      },
      {
        userId: '2',
        username: 'test',
        password: '123456',
        realname: 'test user',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
        desc: 'tester',
        accessToken: 'fakeToken2',
        address:'鹤壁市',
        startTime:'2010-07-29 09:23:46	',
        endTime:'1998-02-27 02:14:58',
        roles: [
          {
            name: 'Tester',
            value: 'test',
          },
        ],
      },
    ],
    total: 2,
  }
}

export default [
  // mock user login
  {
    url: '/basic-api/demo/table',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      return resultSuccess(createFakeTableData())
    },
  },
] as MockMethod[]
