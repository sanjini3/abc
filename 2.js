function multiply(num,callback){
    callback(num*2);
}
function subtract(num,callback){
    callback(num-3);
}
function add(num,callback){
    callback(num+10);
}
function operation(num){
    multiply(num,result1=>{
        subtract(result1,result2=>{
            add(result2,result3=>{
                console.log(result3);
            });
        });
    });
}
operation(3);