let getZippedArrays=function(names,properties){
    let result={}
    for(let i=0;i<names.length;i++){
        result[names[i]] = properties[i];
    }
    return result;
}