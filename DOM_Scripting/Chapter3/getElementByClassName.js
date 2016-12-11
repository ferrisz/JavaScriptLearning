/**
 * Created by zhoufeiyu on 2016/12/11.
 */
// 这个函数适用于新老浏览器
function getElementByClassName(node, classname) {
    if (node.getElementByClassName) {
        //使用现有方法
        return node.getElementByClassName(classname)
    } else {
        var results = new Array();
        var elems = node.getElementsByTagName("*")
        for (var i=0; i<elems.length; i++) {
            if(elems[i].className.indexOf(classname) != -1) {
                results[results.length] = elems[i]
            }
        }
        return results;
    }
}