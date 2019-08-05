function User(){
   let user= [{
    Author: 'tejas',
    title: 'legend',
    Published_date: '12|01|19',
    price:'1000000rs',
    avl:true,
    country:Arealocation.India
    },
    {
    Author:'tiger',
    title: 'forest',
    Published_date: '13|01|19',
    price:'100rs',
    avl:true,
    country:Arealocation.Usa

    },
    {
    Author: 'lion',
    title: 'king',
    Published_date: '14|01|19',
    price:'200rs',
    avl:false,
    country:Arealocation.Uk
    }];

    return user;
}

enum Arealocation{'India','Usa','Uk'};

function UserAreaLocation(country:Arealocation): string[] {
    console.log(`user country : ${Arealocation[country]}`);
    let storedata:string[] =[];
   
    let x = User();
    for( let getuser of x ){
       storedata=[getuser.Author, getuser.price, getuser.title];
       console.log(storedata);
       
       /* if(getuser.avl){
           storedata.push(getuser.Author, getuser.title)
           break; 
        }  */
    }
   
   
    return storedata;

}

UserAreaLocation(Arealocation.India);