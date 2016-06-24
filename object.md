# 一些对象测操作

###字符串
```
var mystr = "I like JavaScript!";
var mylen = mystr.length;
var myup = mystr.toUpperCase();
var mylow = mystr.toLowerCase();
console.log("字符串长度：" + mylen);
console.log("大写转化后：" + myup);
console.log("小写转化后：" + mylow);
```

###Date
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