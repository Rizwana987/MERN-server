//test/async.js
//how we can perform unit tests on async or call back
//function
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);//1sec
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
//return call admin after 1 seconds
module.exports={fetchData,MyData};