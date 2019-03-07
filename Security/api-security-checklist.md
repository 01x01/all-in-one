# Authentication 
- [x] 确认是否使用了标准的认证方式(如：JWT,OAuth),尽量避免使用基础认证(用户名+密码)
- [x] 确认是否使用最大认证尝试次数,并且在一定次数登陆失败之后禁止继续登陆/认证
- [x] 敏感数据最好使用POST/PUT方式进行传输，并且数据应该放置在request的数据体中
- [x] 如果使用 GET 方式传输敏感数据，敏感数据最好放置于 HTTP header 里面


# JWT
- [x] 一般来说 JWT 只用于一次认证功能，所以其token的存活时间应该尽可能的短，比如1分钟，但是如果用于前后端分离时，作为用户认证管理，为了用户体验，可以适当延迟其存活之间，比如一个小时左后
- [x] 不能存储任何敏感的数据在JWT token 之中，因为JWT本身只通过 base64 编码，很容易可以进行解码，还原其包含的内容

# 连接  
- [x] 需要分清哪些API是外部可访问的，哪些API只限于内部访问
- [x] 如果一些 API 含有特别敏感的数据，或者有着特别隐私的功能，又不得不暴露在外网，那么就需要强力的认证，比如： 多重认证方式
- [x] 通过防火墙规则或者白名单的方式，限制极其重要的API的访问
- [x] API 需要使用HTTPS，避免中间人攻击
- [x] API 需要设置HSTS头，避免第一次访问时使用http访问，在跳转到https的时候，受到中间人攻击

# 输入
- [x] 使用合适的http方法，GET/POST/PUT/DELETE, 如果使用了不正确访问方法的时候， 并且返回 405 状态码
- [x] 验证是否`content-type`是否正确，一个API应该正确申明其接受的`content-type`，比如，直接收 `application/json`，那么当传入 `application/xml`的时候，应当返回 406 状态码
- [x] 任何敏感数据都不应该直接在url上面体现，并进行传输。这是十分不安全的做法
- [x] 验证输入数据的类型/长度/转换 等等。 也称之为 fuzzing， 可以通过测试各个参数不同的值，来寻找API的漏洞

# 输出
- [x] 设置以下header头
```
X-Content-Type-Options: nosniff
X-Frame-Options: deny 
Content-Security-Policy: default-src 'none'
```
- [x] 移除指纹，如： `X-Powered-By`, `Server`, `X-AspNet-Version`, 
- [x] 指定明确的返回类型，如： 你返回的是json格式的数据，那么返回的header，应该明确包含`application/json`
- [x] 返回合适的状态码，`(e.g. 200 OK, 400 Bad Request, 401 Unauthorized, 405 Method Not Allowed, etc.).`

# 流程
- [x] 确认所有的API端都执行了认证授权保护
- [x] 使用UUID来表示增长的ID数据
- [x] 尽量避免在路径上使用资源ID，比如： 使用`/me/orders` 代替 `/me/654321/orders`
- [x] 如果使用了XML解析，注意避免XXE漏洞
- [x] 上传的文件，最好使用CDN进行处理

# 错误处理
- [x] 不应该在API返回任何的技术细节，堆栈。在API设计时，应该设计好技术架构，尽可能考虑并捕捉到发生的异常错误，然后使用 errorID 来映射详细的错误信息，只返回简略的错误信息

Error ID | Detail Error Message | Generic Message
------------ | ------------- | --------
0001 | Error updating database. Cause: java.sql.SQLException: ORA-12899: value too large for column  | Database Error
... | ... | System error...
100 | Error. The username exists in our database	| Business error

# 审计错误日志
- [x] 确保日志存留，并且可以进行审计
- [x] 考虑记录敏感操作，用于检测攻击

# 跨域
- [x] 禁止不必要的跨域
- [x] 尽可能详细的设置可进行跨域调用的网站地址

# 敏感数据处理
- [x] 确认所有的数据都经过加密
- [x] 确认API返回的数据经过了脱敏处理
