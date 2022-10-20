export class AuthService {

    isAuth: boolean = false;

    signIn() {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve();
            }, 2000);
        });
    }

    signOut() {
        this.isAuth = false;
    }
}