const oldData = [
    {code : 'ab' , name : 'Son môi'},
    {code : 'ac' , name : "Sửa rữar mặt"},
    {code : null , name : null},
    {code : null , name : ''}
]
// convert array to object
const newData = Object.fromEntries(oldData.map((item, index) => [index, item])); 
console.log('Type of newData:', typeof newData);

// check data object
const cleanObject = {}; 
const filterObject = obj => { 
    Object.keys(obj).forEach(key => { 
        if (obj[key].code && obj[key].name) {
            cleanObject[key] = obj[key]; 
        } 
    }); 
    return cleanObject
}
const result = filterObject(newData)
console.log(result);