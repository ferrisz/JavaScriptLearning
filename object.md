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