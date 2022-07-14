//object literals

let user = {
    name : 'crystal',
    age : 30,
    email : 'alex.rubin2002@gmail.com',
    blogs : [
        {title: 'ligma balls', likes:30},
        {title: 'mind goblin', likes: 50}
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};


user.login();
user.logBlogs();


// const blogs = [
//     {title: 'ligma balls', likes:30},
//     {title: 'mind goblin', likes: 50}
// ];
// in order to use this, just write functions  as FUNCTIONNAME(){code here};


// console.log(user);
// console.log(user.name);
// console.log(user.age + 5);

// user.name = 'chun';
// console.log(user.name);
// user['name'] = 'li';
// console.log(user.name);

// console.log(typeof user);


//math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

//random nums

console.log(Math.round(Math.random()*100));

//primative types stored on the stack
//reference types are stored on the heap