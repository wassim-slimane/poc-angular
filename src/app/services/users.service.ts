import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    
    private users: User[] = [
        {
            firstname: "wassim",
            lastname: "SLIMANE",
            email: "wass@email.fr",
            drinkPreference: "coca",
            hobbies: [
                "coder",
                "basketball"
            ],
        },
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice())
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}