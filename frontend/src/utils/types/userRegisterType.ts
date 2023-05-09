export interface IUserRegister {
    _id?: string,
    email: string,
    username: string,
    password: string,
    img: string,
    age: string,
    phone: string,
    isAdmin: boolean,
    likedMovies?: []
}