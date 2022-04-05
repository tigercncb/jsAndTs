//async Promise await
/**
var a=0;
var ps=new Promise((resolve,reject)=>{
    console.log("进入了promise");
    setInterval(function(){
        a++;
        console.log("time:"+a)
        resolve(a)
    },2000)
    console.log("这里执行了")
})
ps.then((vale)=>{
    console.log("第几个了："+vale)
}).catch(

    // 记录失败原因
    (reason) => {
        console.log("处理失败" + reason)
    }
)
 */
//-----------------------------------------------------------------------------------------------
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  asyncCall();

//-----------------------------------------------------------------------------------------------



// class a {


//     test() {

//         console.log("click!!!")
//         let x = this.f1();
//         // this.f2()
//         // this.testPromise();
//         console.log("end asyn!!!!")
//     }
//     testPromise() {
//         let lab = this.labs
//         let thisProCount = ++this.promiseCount;
//         lab.text += "同步代码开始!"

//         //新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
//         let p1 = new Promise((resolve, reject) => {

//             // resolver 函数在 Promise 成功或失败时都可能被调用
//             lab.text += "异步开始!"

//             // 创建一个异步调用
//             window.setTimeout(function () {

//                 // 填充 Promise
//                 resolve(thisProCount)
//             }, Math.random() * 2000 + 1000)
//         })

//         // Promise 不论成功或失败都会调用 then
//         // catch() 只有当 promise 失败时才会调用
//         p1.then(
//             function (val) {
//                 lab.text += val + "填充完毕，异步结束!"
//             }
//         )
//             .catch(

//                 // 记录失败原因
//                 (reason) => {
//                     console.log("处理失败" + reason)
//                 }
//             )
//         lab.text += "同步代码结束!"
//     }
//     /////////////////////////////////////////////////////////////////////////////////////////
//     resolveAfter2Seconds(x) {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(x);
//             }, 2000);
//         });
//     }

//     async f1() {
//         var x = await this.resolveAfter2Seconds(10);
//         console.log("await result:" + x); // 10
//         return x;
//     }
//     async f2() {
//         var y = await 20;
//         console.log("f2:" + y); // 20
//     }
// }