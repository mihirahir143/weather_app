// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login() {
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout() {
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has score of ${this.score}`);
//         return this;
//     }
// }
function User(username, email){
    this.username = username;
    this.email = email;
}
User.prototype.login = function() {
    console.log(`${this.username} just logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} just logged out`);
    return this;
};

function Admin(username, email, title){
    User.call(this, username, email);
    this.title =title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.username != user.username);
}
// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user) {
//        
//     }
// }
const  userOne = new User('mihirrrrrrrrrrrr', 'hdhd@gmail.com');
const  userTwo = new User('mihirrr', 'uaua@gmail.com');
const userThree = new Admin("xxxxxxxxxxx", "haajja@gmail.com", 'black-belt');
let users = [userOne, userTwo, userThree];
console.log(userOne, userTwo, userThree);
userThree.login()

// console.log(userThree);
