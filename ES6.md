# Promise 对象
## 含义
简单来说就是一个容器，保存着未来才会结束的事件
有三种状态：
1. pending   进行中
2. fulfilled 成功
3. rejected  失败

两种可能：
1. 从pending 到 fulfilled
2. 从pending 到 rejected


缺点：
1. 一旦新建，立即执行无法取消
2. 不设置回调函数，无法反应得到的结果/错误
3. 无法得知具体在哪一个状态

## 基本用法

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## Promise.prototype.then()
promise实例生成以后，可以使用then分别指定 `resolved` 和 `rejected` 状态的回调函数

```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```
## Promise.prototype.catch()
catch 用于 then 之后捕捉错误
```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```
## promise.prototype.finally()
不管 Promise 对象最后状态如何，都会执行的操作。
```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});

```
# async 
