# 获取属性

```$xslt
object.getAttribute(attribute)
```
getAttribute不方法不属于document对象，所以不能通过document对象调用，只能通过元素节点对象调用

与getElementByTagName方法合用
```$xslt
var paras = document.getElementsByTagName("p");
for (var i=0; i < paras.length; i++) {
    alert(paras[i].getAttribute("title"));
}
```
改进，把空值去掉
```$xslt
var paras = document.getElementsByTagName("p");
for (var i=0; i < paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    if (title_text != null){
        alert(title_text);
    }
}
```
等价改进
```$xslt
var paras = document.getElementsByTagName("p");
for (var i=0; i < paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    if (title_text) alert(title_text);
}
```