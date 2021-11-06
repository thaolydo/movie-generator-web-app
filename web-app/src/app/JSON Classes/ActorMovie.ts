export interface ActorMovie {
    results: Array<Array<MovieInfo>>;
}

export interface MovieInfo {
    imdb_id: string;
    title:   string;
    rating:  number;
}

