import * as userdetails from "../../assets/logindetails.json";

export class AuthService {

    loggedIn: any;
    authUser(user) {
        let users = [{ email: 'kamatchiamman224@gmail.com', password: "Kamatchi@123" },
        { email: 'srimathi123@gmail.com', password: '00000000' },
        { email: '19cse015builderscollege.com', password: '12345678' }];
        localStorage.setItem("users", JSON.stringify(users));

        let UserArray = [];
        if (localStorage.getItem('users')) {
            UserArray = JSON.parse(localStorage.getItem('users'));
            console.log(UserArray);
            console.log(user);
        }
        if (users.find(p => p.email == user.email && p.password == user.password)) {
            this.loggedIn = 1;
            console.log(users.find(p => p.email == user.email && p.password == user.password));

        }
        return (users.find(p => p.email == user.email && p.password == user.password));
    }

    IsAuthenticated() {
        return this.loggedIn;

    }
}
