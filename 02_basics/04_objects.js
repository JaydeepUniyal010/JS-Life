// const tinderUser = new Object() //singleton
const tinderUser = {}  //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "yuviii"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jaydeep",
            lastname: "uniyal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//?  ==> protection (value exist or not)

const obj1 = {1: "a",
              2: "b"}

const obj2 = {3: "a", 
              4: "b"}

const obj4 = {5: "a",
              6: "b"}

// const obj3 = { obj1, obj2 } // object under object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //assign, {} target,source
//target {} source-obj

const obj3 = {...obj1, ...obj2} //spread operator-> glass broke
// console.log(obj3);

//database values
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //important ( output- keys===> arrays )
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check value or not? //important

//************************************ De-structure ***************************************************
const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "jaydeep"
}

// course.courseInstructor
//clean code

const {courseInstructor: instructor} = course //custom naming

// console.log(courseInstructor);
console.log(instructor);


//API- JSON  syntax intro 
// {
//     "name": "jaydeepJSON",
//     "coursename": "js for everyone",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
