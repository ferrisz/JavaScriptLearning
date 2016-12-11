# 设置属性

```$xslt
object.setAttribute(attribute, value)
```
也只能用于元素节点

```$xslt
var shopping = document.getElementById("puechases")
alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a list of goods");
alert(shopping.getAttribute("title");
```

设置如果重复则替换

```$xslt
var paras = document.getElementByTagName("p");
for (var i=0; i< paras.length; i++) {
    var title_text = para[i].getAttribute("title");
    if (title_text){
        paras[i].setAttribute("title","brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}
```

