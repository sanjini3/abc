function sum(){
    let res=0;
    console.log(arguments)
    for(let i=0;i<arguments.length;i++)
        res+=arguments[i]
    return res;

}

console.log(sum(10,20,30,40))