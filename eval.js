// eval 函数会将传入的字符串当做 javascript 进行执行

console.log(eval('2+2'));

{
    const res = eval(new String("2+2"));
    console.log(res);
}
{
    const res1 = eval("2+2"), res2 = eval("4")
    console.log(res1 === res2) // true
}
{
    const res = eval('2+2'), res2 = eval(new String('2+2'))
    console.log(res === res2);
}

// 语法 ：  eval(string)
// 参数： string： 一个表示JavaScript 表达式、语句或一系列语句的字符串，表达式可以包含变量与已存在对象的属性
// eval() 是全局对象的一个函数属性
// eval 的参数是一个字符串，如果字符串表示的是表达式，eval() 会对表达式进行求职，如果参数表示一个活多个javascript语句,
// 那么 eval 就会执行这些语句，不需要用 eval（）来执行一个算数表达式，因为 javascript 可以自动为算数表达式求值。

// 如果 eval的参数不是一个字符串，eval() 会将参数原封不动地返回，在下面的例子中，String构造器被指定，而eval返回了String对象而不是执行字符串
{
    const res1 = eval(new String("2+2"));
    const res2 = eval("2+2")
    console.log(res1); // [String: '2+2']
    console.log(res2); // 4
}

{
    const expression = new String("2+2");
    const res = eval(expression.toString())
    console.log(res); // 4
}
{
    const res = eval("/a/.test('a')")
    console.log(res); // true
}