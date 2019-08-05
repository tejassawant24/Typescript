
function Users() {
    let users = [{
        Author: 'tejas',
        title: 'legend',
        Published_date: '12|01|19',
        price:'1000000rs',
        avl:true
    },
    {
        Author:'tiger',
        title: 'forest',
        Published_date: '13|01|19',
        price:'100rs',
        avl:true
    },
    {
        Author: 'lion',
        title: 'king',
        Published_date: '14|01|19',
        price:'200rs',
        avl:false
    },
    
];
return users;
}

function CurrentUser(data:any):string {
    let storeData:string;
    for(let u of data){
        if(u.avl){
            storeData=u.Author;
            console.log(`storeData: ${storeData}`);
        }
    }
    return storeData;
}
let d = Users();
CurrentUser(d);
