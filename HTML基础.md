# 常用标签
* 换行标签  `<br />`
* 水平线标签 `<hr />`
* 段落标签：`<p>文本内容</p>`
* 标题标签：`h1-h6 标签等级h1~h6，字体大小逐级递减`
* 文本标签：`<font>文本内容</font>`
* 文本加粗标签：`<strong></strong> <b></b>` 推荐使用 `strong`
* 文本倾斜标签：`<em></em> <i></i>` 推荐使用 `em`
* 删除线标签：`<del></del> <s></s>` 推荐使用 `del`
* 下划线标签：`<ins></ins> <u></u>` 推荐使用 `ins`
* 定义锚点：`<p id = "md">`
* 音乐标签：`<embed src="" type="" hidden="">`

# 图片标签
```html
<img src="" slt="" title="" width="" height="" />
```
* src：图片来源，不可省略。
* Alt：替换文本，图片不显示的时候显示的文字。
* title：提示文本，把鼠标放到图片上显示的文字。
* width：图片宽度 。height：图片高度。 （图片没有定义宽高的时候，图片按照百分之百比例显示，如果只更改图片的宽度或者高度，图片等比例缩放。）

# 超链接
```html
<a href="" title="" target="">标签显示的文字</a>
```
* href：将跳转的页面。
* title：提示文本，鼠标放到链接上显示的文字。
* target=”_self”:默认值，在自身页面打开。 Target=”_blank” 打开新页面 （自身页面不关闭，打开一个新的链接页面）

# 列表

* 无序列表
```html
<ul>
    <li>type=”square”      小方块</li>
    <li>Type=”disc”       实心小圆圈</li>
    <li>Type=”disc”       空心小圆圈</li>
</ul>
```
* 有序列表
```html
<ol type="1" start="3">
    <li>type=”1,a,A” type的值可以为1,a,A</li>
    <li>start=”3”  决定了开始的位置。</li>
</ol>
```

# 表格
```html
<table border="" width="" height="" cellspacing="" cellpadding=""  align="" bgcolor="">   
    <caption>表头</caption>
    <tr> 
        <td> 列</td>
        <td></td>
        <td></td>
    </tr>
    <tr> 
        <td> 列</td>
        <td colspan="2"></td>
    </tr>
    <tr> 
        <td rowspan="2"> 列</td>
        <td></td>
        <td></td>
    </tr>
</table>
```
* Border=”” 边框。 
* Width=”” 宽度。 
* Height=”” 高。 
* cellspacing=”” 单元格与单元格的距离。 
* cellpadding=”” 内容距边框的距离。
* align=”left | right | center” 如果直接给表格用align=”center” 表格居中，如果给tr或者td使用 ，tr或者td内容居中.
* bgcolor=”” 背景颜色。
* 表头 <caption></caption>。colspan=”2” 合并同一行上的单元格
* rowspan=”2” 合并同一列上的单元格。

# 表单
```html
<form action="x.php" method=""></form>
```
* action:处理信息
* Method=”get | post”：Get通过地址栏提供（传输）信息，安全性差。Post 通过1.php来处理信息，安全性高。

# 文本输入框
```html
<input type="text" maxlength="" readonly="" disabled="" name="" value="" >
```
* maxlength="6" 限制输入字符长度
* disabled="disabled" 输入框未激活状态
* readonly=”readonly” 将输入框设置为只读状态（不能编辑）
* name="username" 输入框的名称
* value="大前端" 将输入框的内容传给处理文件

# 单选框
```html
<label for="gender">性别：</label>
<input type="radio" name="gender" value="男" checked="checked">男
<input type="radio" name="gender" value="女">女
```
* 只有将name的值设置相同的时候，才能实现单选效果。
* checked=”checked” 设置默认选择项。

# 多选框
```html
<label for="interest">爱好：</label>
<input type="checkbox" name="interest" value="运动">运动
<input type="checkbox" name="interest" value="艺术">艺术
<input type="checkbox" name="interest" value="科学">科学
```
# 下拉列表
```html
<select Multiple="multiple">
<option>下拉列表选项</option>
<option Selected="selected">下拉列表选项</option>
</select>
```
* <optgroup></optgroup> 对下拉列表进行分组。
* Multiple=”multiple” 将下拉列表设置为多选项。
* Selected=”selected” 设置默认选中项目。

# 多行文本
```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```
* Cols 控制输入字符的长度。
* Rows 控制输入的行数。

# 按钮
```html
<input type="submit" value="确认提交">
<button>submit</button>
```

# 原文
http://ife.baidu.com/2017/note/detail/id/189