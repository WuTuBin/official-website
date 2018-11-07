<template>
  <div>
    <h2>1.块级作用域的引入</h2>
    <span>在ES6之前，js只有全局作用域和函数作用域，ES6中let关键字为其引入了块级作用域。</span>
    <pre class="code"><code>
    {
    var a = 5;
    let  b = 6;
    }
    console.log(a);     //5
    console.log(b);     //b is undefined  
    </code></pre>
    <span>let声明的变量只能在其所在的代码块内才能访问，var声明的变量由于是全局变量，因此可以在代码块外访问</span>
    <h2>2.暂时性死区</h2>
    <span>var声明的变量可以在声明之前使用，相当于默认为其声明其值为undefined了,但是，let声明的变量一旦用let声明，那么在声明之前，此变量都是不可用的，术语称为“暂时性死区”。</span>
    <pre class="code"><code>
    console.log(a);                     //undefined
    var a=8;
    console.log("----------");
    console.log(b);                     //控制台报错
    let b=9; 
    </code></pre>
    <span>所以我们要养成变量先声明再使用的好习惯。</span>
    <h2>3.const命令</h2>
    <span>const用来定义常量，相当于java中的final关键字。并且const声明常量之后就必须立即初始化！</span>
    <h2>4.解构赋值</h2>
    <pre class="code"><code>
    let [a,b,c] = [1,2,3];
    let{x1,x2} = {x2:5,x1:6};
    const [a,b,c,d,e]= "hello";
    function  add([i,j]) {}---add([5,6]);
    </code></pre>
    <span>可以理解为“模式匹配”。</span>
    <h2>5.字符串</h2>
    <span>Unicode表示法</span>
    <pre class="code"><code>
    "\u{码点}"
    "\u{41}\u{42}\u{43}"                 //"ABC"
    
    let str = "書剑恩仇录";
    str.codePointAt(0).toString(16);    //返回字符的码点并由十进制转到16进制---66f8
    String.fromCodePoint(0x66f8);       //返回码点对应的字符---書
    for (let a of str){
      console.log(a);
    }                                   //for...of循环遍历字符串中每个字符挨个输出字符
    str.at(0);                          //返回指定位置的字符，目前只是提案
    str.startsWith('書',0);             //从指定位置往后开始检查，是否以“書”开始，位置参数可省略，默认为0
    str.endsWith('剑',1);               //从指定位置向前检查，是否以“剑”结束
    str.includes('恩',1);               //同上，不再啰嗦
    str.repeat(2);                      //字符串重复指定次数“書剑恩仇录書剑恩仇录”，小数取整，Infinity和负数报错
    str.padStart(8,'ab');               //指定字符从前开始补直到字符串长度符合要求，"aba書剑恩仇录"
    str.padEnd(8,'ab');                 //指定字符从后开始补直到字符串长度符合要求，"書剑恩仇录aba"，若长度小于原长度，返回原字符串，上同
    </code></pre>
    <h2>6.模板字符串</h2>
    <span>模板字符串采用反引号（`）标识，并且模板字符串中的空格、换行将在输出时有所保留。</span>
    <pre class="code"><code>
    // 普通字符串
    `In JavaScript '\n' is a line-feed.`

    // 多行字符串
    `In JavaScript this is
    not legal.`

    console.log(`string text line 1
    string text line 2`);

    // 字符串中嵌入变量
    let name = "Bob", time = "today";
    `Hello ${name}, how are you ${time}?`
    </code></pre>
    <span>${主体}，其中主体可以是表达式、运算、对象属性还可以是函数，若是字符串将直接输出该字符串。</span>
    <h2>7.含参函数的调用</h2>
    <pre class="code"><code>
    function say(something){
        console.log("she say"+" '"+something+"'" );
    }
    say`hello`;                             //she say 'hello'
    </code></pre>
    <span>等同于say('hello')。</span>
    <h2>8.数值拓展</h2>
    <span>和字符串对象类似的，ES6也为数值类对象例如Number、Math添加了新的方法以及属性（常量），在这里就不多作记录。</span>
    <h2>9.函数function</h2>
    <pre class="code"><code>
    function show(name="jack",sex="boy"){
        console.log(name+" is a "+sex+"!");
    }
    show();                                  //jack is a boy!
    show('judy');                            //judy is a boy!
    show('judy','girl');                     //judy is a girl!
    </code></pre>
    <span>为函数的参数添加默认值，执行函数时如果不传该参数，那么就用默认值代替。</span>
    <h2>箭头函数: var 变量名/函数名 = （参数，参数）=>{代码块}</h2>
    <pre class="code"><code>
    var f = v => v;
    //等同于
    var f = function(v) {
      return v;
    };

    var f = () => 5;
    // 等同于
    var f = function () { return 5 };

    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function(num1, num2) {
      return num1 + num2;
    };
    </code></pre>
    <span>注意：如果return的是一个对象{id:id,age:age},那么箭头右边要用括号包起来().</span>
    <h2>10.数组的扩展</h2>
    <span>扩展运算符为三个点（...）,将一个数组转化为参数序列，通常与函数一起使用，show(...['judy','girl'])。</span>
    <span>数组合并：[...arr1,...arr2,...arr3]</span><br>
    <span>字符串转字符数组：[..."hello"]--------------["h","e","l","l","o"]</span><br>
    <span>将实现Iterator接口的对象转化为真正的数组：[...nodelist]，这里的nodelist是一个类似于数组的nodelist对象</span><br>
    <span>Generator 函数：该函数执行后返回一个遍历器对象，拓展运算符也可将其转化为数组。</span>
    <pre class="code"><code>
    let a =function*(){
        yield 3;
        yield 4;
        yield 5;
        return 6;
    };
    console.log([...a()]);              //[3,4,5]
    </code></pre>
    <h2>11.数组的方法</h2>
    <pre>
    Array.from(对象，对新数组各项的改动规则)

    这里的对象只适合①类数组对象②实现Iterator接口的对象；后面的规则可选

    e.g:

    Array.from([1, 2, 3], (x) => x * x)          //这里将数组每项按一定规则改变生成新数组[1,4,9]

    Array.of(数据1，数据2，数据3)

    将一组数据转化为数组

    e.g：

    Array.of(1,2,3,4,5)                               //[1,2,3,4,5]

    copyWithin(被覆盖起始位置，选取的数据起始位置，选取额数据结束位置)

    截取数组的一段数据，并覆盖到指定位置

    e.g：

    [1,2,3,4,5].copyWithin(0,2,4)               //被截取数据位置为[2,4）---[3,4],替换起始位置是0，所以结果是[3,4,3,4,5]

    find(规则)、findIndex(规则)

    这里的规则是一个回调函数，找到了就返回这个数组项/索引，找不到返回undefined/-1

    e.g：

    [9,8,7,6,5,4,3].find(n=>n &lt; 5)                //返回4

    还可以添加第二个参数，如下 
    </pre>
    <pre class="code"><code>
    function f(v){
        return v > this.age;
    }
    let  c =function(v){
        return v > this.age;
    }
    let person = {name: 'John', age: 20};
    let a  =[10, 12, 26, 15].find(c, person);            //c、f都可以  
    console.log(a);  
    </code></pre>
  </div>
</template>
