const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('foo'), 2000
    );
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() =>
        reject('Erorr, some bug '), 2000
    );
});

const getList = async () => {
    await fetch('https://github.com/ngnam2005/CRO101-Namhn/tree/main/lab2')
}

///
Promise.all([firstPromise,secondPromise,getList()])
.then((value)=>{
    console.log(value);
})
.catch((error) => {
    console.log(error)
})

// 
Promise.allSettled([firstPromise,secondPromise,getList()])
.then((result)=>{
    result.forEach((result)=>{
        if (result.status === 'rejected'){
            console.log(`promise thất bại`, result.reason);
        } else{
            console.log("promise thành công",result.value);
        }
    });
})