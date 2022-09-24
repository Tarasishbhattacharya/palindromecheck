var ans_arr=[]
for(var i=100;i<=100000;i++){
    if(palindrome(i)){
        ans_arr.push(i)
    }
}
// To check palindrom or not
function palindrome(num){
    var bag="";
  var new_num=num;
    while(num!=0){
        var remain=num%10;
        bag+=remain;
        num=parseInt(num/10)
    }
    // console.log(bag)
    if(new_num!=bag){
        return false;
    }else{
        return true
    }
    
}
// To sort
ans_arr.sort(function(a,b){
    return a-b;
})
console.log(ans_arr)