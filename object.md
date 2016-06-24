# 一些对象测操作

##字符串
```
var mystr = "I like JavaScript!";
var mylen = mystr.length;
var myup = mystr.toUpperCase();
var mylow = mystr.toLowerCase();
console.log("字符串长度：" + mylen);
console.log("大写转化后：" + myup);
console.log("小写转化后：" + mylow);
```

charAt() 方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。

使用语法：stringObject.charAt(index)

参数说明：index 必填的哦，表示字符串中某个位置的数字，即字符在字符串中的下标。

需要注意的是：字符串中第一个字符的下标是 0，最后一个字符的下标为字符串长度减一（string.length - 1）；如果参数 index 不在 0 与 string.length - 1 之间，该方法将返回一个空字符串。

在console.log( )中，使用 charAt() 方法取得字符串 mystr 的第 3 个字符（第 3 个字符下标是 2 哦~）。

```
var mystr = "I like JavaScript!";
console.log(mystr.indexOf("I"));
console.log(mystr.indexOf("v"));
console.log(mystr.indexOf("v", 8));
console.log(mystr.indexOf("a",mystr.indexOf("a") + 1));
```

与 charAt() 相对， indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。即：该方法将从头到尾地检索字符串 stringObject ，看它是否含有子串 substring ，如果找到一个 substring ，则返回 substring 的第一次出现的位置。

使用语法：stringObject.indexOf(substring, startpos)

参数说明：substring 必填的哦，就是你想搜索的子字符串。

startpos是可选填的整数参数，规定开始检索的位置，取值范围是 0 到 stringObject.length - 1。省略的话就从首字符开始检索。

需要注意的是： indexOf() 方法区分大小写。

如果要检索的字符串值没有出现，则该方法返回 -1。

考考你：使用 indexOf() 方法，检索第二个字符 a 出现的位置。

提示：可将 startpos 设为mystr.indexOf("a") + 1，这样就跳过第一个 a 了哦~

### 字符串分割

```
var mystr = "www.jisuanke.com";
console.log(mystr.split("."));
console.log(mystr.split(".",2));
```
[ 'www', 'jisuanke', 'com' ]                    
[ 'www', 'jisuanke' ]   

### 字符串的提取
```
var mystr = "I like JavaScript!";
console.log(mystr.substring(7));
console.log(mystr.substring(2,6));
```
JavaScript!                                     
like     

### 提取指定书目的字符串
```
var mystr = "I like JavaScript!";
console.log(mystr.substr(7));
console.log(mystr.substr(2,4));
```
JavaScript!                                     
like        

##Date
```
var now = new Date();
now.setTime(now.getTime() + 60 * 60 * 1000)// 一小时60分一分钟60秒一秒1000毫秒 所以推迟1小时
var myyear = now.getFullYear(); // 四位数年份，如 2015
var mymonth = now.getMonth(); // 月份 [0, 11]，要加 1，如 7 (8 月)
var mydate = now.getDate(); // 月中日期，如 1 (1 号)
var myhours = now.getHours(); // 小时，24 小时制
var myminutes = now.getMinutes(); // 分钟
var myseconds = now.getSeconds(); // 秒钟
var mynum = now.getDay();// getDay() 方法返回的是 0 - 6 的数字，其中， 0 表示星期天。如果要返回相对应 “星期” ，那就要配合使用数组一起完成~
var weekday=["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
console.log(weekday[mynum]);

```
## Math 对象

```
console.log(Math.PI);
console.log(Math.abs(-15));
```
3.141592653589793                               
15      

### 取整
```
console.log(Math.ceil(0.8)); //1
console.log(Math.floor(0.8)); //0
console.log(Math.round(0.8)); //1
```

### 随机数
random() 方法可返回介于 0 ~ 1（大于或等于 0 但小于 1 )之间的一个随机数。

使用语法：Math.random();

如果我还想在下面一行输出一个 0 至 10 之间的随机整数呢？提示：可以结合使用 random () 方法和 round() 方法。

```
console.log((Math.random()) * 10); //2.2717340756207705                              
console.log(Math.round((Math.random()) * 10)); //1   
```

### 最大值与最小值
```
console.log(Math.min(0.8, 6.3, 5, 3.5, -5.1, -5.9)); // -5.9 
console.log(Math.max(0.8, 6.3, 5, 3.5, -5.1, -5.9)); // 6.3 
```

## 数组
###定义数组的方法
* 定义了一个空数组：```var 数组名 = new Array();```

* 定义时指定有 n 个空元素的数组：```var 数组名 = new Array(n);```

* 定义数组的时候，直接初始化数据：```var 数组名 = [<元素 1>, <元素 2>, <元素 3>...];```

### 数组属性
length 用法：```<数组对象>.length```

### 数组连接
数组连接但不改变原数组

```
var mya1 = new Array("hello!");
var mya2 = new Array("I", "love");
var mya3 = new Array("JavaScript", "!");
console.log(mya1.concat(mya2,mya3));
console.log(mya1);
```

[ 'hello!', 'I', 'love', 'JavaScript', '!' ]    
[ 'hello!' ]          

### 数组连接成字符串

```
var myarr = new Array(3);
myarr[0] = "www";
myarr[1] = "jisuanke";
myarr[2] = "com";
console.log(myarr.join("."));
```

www.jisuanke.com     

数组之间用.号连接（那个参数可选）

 
###颠倒数组元素顺序

```
var myarr = new Array(3);
myarr[0] = "www";
myarr[1] = "jisuanke";
myarr[2] = "com";
console.log(myarr.reverse());
console.log(myarr);
```

[ 'com', 'jisuanke', 'www' ]                    
[ 'com', 'jisuanke', 'www' ]                    

该方法会改变原来数组而不创建新的数组

### 选取子数组
slice() 方法可从已有的数组中返回一个新的数组，包含从 start 到 end （不包括该元素）的 所有元素。

使用语法：arrayObject.slice(start, end)

参数说明：start 必填的哦，规定从何处开始选取。如果是负数，就从数组尾部开始算起始位置，比如 -1 指最后一个元素，-2 指倒数第二个元素。

end 可选，规定从何处结束选取。该参数是子数组结束处的父数组下标。如果不指定，则一直选取到 arrayObject 末尾。如果为负数，则从数组尾部开始算结束位置，同 start。

需要注意的是：

1.可使用负值从数组的尾部选取元素。

2.如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

3.String.slice() 与 Array.slice() 相似。

4.该方法并不会修改数组，而是返回一个子数组。

```
var myarr = new Array(3);
myarr[0] = "www";
myarr[1] = "jisuanke";
myarr[2] = "com";
console.log(myarr.slice(0,2));
```
[ 'www', 'jisuanke' ]      

###数组排序
sort() 方法使数组中的元素按照一定的顺序排列。

使用语法：arrayObject.sort (方法函数)

参数说明：方法函数可选，如果不指定方法函数，则按 unicode 码顺序排列。

需要注意的是：该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下： 若返回值 <= -1，则表示 A 在排序后的序列中出现在 B 之前。若返回值 >-1 && <1，则表示 A 和 B 具有相同的排序顺序。若返回值 >= 1，则表示 A 在排序后的序列中出现在 B 之后。

“结果怎么不对呀，字母好像是排序了，但是数字并没有排序呀。”

“是呀，因为我们没有填写方法参数，所以还是按照 unicode 码排序，如果想实现数字排序的话，得填写一个方法参数。”

另起一行，写下console.log(myarr2.sort(sortNum));，将方法函数名 sortNum 写在括号中。

```
function sortNum(a,b) {
    return a - b;
    //升序，如降序，把“a - b”该成“b - a”
}
var myarr1 = new Array("Hello", "John", "love", "JavaScript");
var myarr2 = new Array("80", "16", "50", "6", "100", "1");
console.log(myarr1.sort());
console.log(myarr2.sort());
console.log(myarr2.sort(sortNum));
```

[ 'Hello', 'JavaScript', 'John', 'love' ]       
[ '1', '100', '16', '50', '6', '80' ]           
[ '1', '6', '16', '50', '80', '100' ]           
                                                
                    
                                                
