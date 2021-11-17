export interface MovieInfo {
    results: Movie
}

export interface Movie {
    imdb_id: string,
    title: string
    description: string
    trailer: string
    rating: number
    banner: string
}