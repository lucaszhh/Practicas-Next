export type data = {
    results: faqs[]
}

export type faqs = {
    name : {title: string, first:string, last:string},
    id : { value : string},
    picture : {large:string, meedium:string, thumbnail: string},
    email: string,
    login: {username : string}
}