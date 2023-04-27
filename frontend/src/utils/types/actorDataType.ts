export interface IActorDataType {
    _id?: string,
    nameRus: string,
    nameEng: string,
    totalMovies: number,
    img: string,
    shortBio: string,
    bio: string,
    fullBio: string,
    reviews?: any,
    movies?: any,
    _doc?: any
}

export interface IActorReview {
    _id?: string,
    id?: string,
    actorId: string,
    userId: any,
    review: string,
    _doc?: any
}