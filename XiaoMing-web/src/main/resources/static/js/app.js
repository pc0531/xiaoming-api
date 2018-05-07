import React from 'react';
import {render} from 'react-dom';
import {Router, useRouterHistory} from 'react-router';

import {createHashHistory} from 'history';
const history = useRouterHistory(createHashHistory)({queryKey: true})

const rootRoute={
  component:'',
  childRoutes:[{
      path:'/',
      component:require('./modules/main'),
      indexRoute: [{
          getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                  cb(null, require('./modules/index'))
              })
          }
      }],
      childRoutes:[
          {
              path:'/login',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/login'))
                      })
                  }
              }]
          },
          {
              path:'/my',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/my'))
                      })
                  }
              }]
          },
          {
              path:'/register',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/login/register'))
                      })
                  }
              }]
          },
          {
              path:'/product/:value',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/product'))
                      })
                  }
              }]
          },
          {
              path:'/productDetail/:goodsId',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/productDetail'))
                      })
                  }
              }]
          },
          {
              path:'/submitOrder/:goodsId',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/submitOrder'))
                      })
                  }
              }]
          },
          {
              path:'/payResult/:payId',
              indexRoute: [{
                  getComponent: (nextState, cb) => {
                      require.ensure([], (require) => {
                          cb(null, require('./modules/payResult'))
                      })
                  }
              }]
          },
          {
              path: '/shopping/goods-order-list',
              getComponent: (nextState, cb) => {
                  require.ensure([], (require) => {
                      cb(null, require('./modules/shopping/goods-order-list'))
                  })
              }
          },
      ]
  }]
};
render(<Router history={history} routes={rootRoute}/>,document.getElementById('wx-XiaoMing'));