let getSortedArray=function(array,keyname){

    for(let i=0;i<=array.length-2;i++){
        let min=array[i];
        for(let j=i+1;j<=array.length-1;j++){
            if(array[j][keyname]<array[i][keyname]){
                min=array[j];

                let swap=array[i];
                array[i]=min;
                array[j]=swap;
            }
        }
    }

    return (array);
}