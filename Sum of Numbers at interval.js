/*function getSum( a,b ){
    let sum=0;
    if(a<b){

        for(i=a;i<=b;i++){
            sum+=i;
        }
        return sum;
    }
    if(a===b){
        return sum=a;
    }
    else {
        for(i=b;i<=a;i++){
            sum+=i;
        }
        return sum;
    }
}*/

function getSum( a,b ){
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}