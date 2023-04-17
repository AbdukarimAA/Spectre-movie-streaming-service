export interface IMovie {
    _id?: string,
    userId?: any
    title: string,
    shortDesc: string,
    fullDesc: string,
    audioLyrics: string,
    posterImg: string,
    titleImg: string,
    rating: any,
    totalStars: number,
    starNumber: number,
    year: string,
    country: string,
    duration: string,
    typeOfMovie: string,
    ageLimit: string,
    language: string,
    trailer: string,
    video: string,
    reviews?: any,
    genre: string,
    originalTitle: string,
    releaseDate: string,
    director: string,
    actors: [string],
    producers: [string],
    screenWriters: [string],
    operators: [string],
    quality: [string],
    isCartoon: boolean,
    _doc?: any
    reverse?: any
}

export interface IList{
    id: string,
    title: string,
    type: string,
    genre: string,
    content?: [string],
    _doc?: any
}