export interface IBooks {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    name: string
}

export interface ICategories{
    id:number,
    name: string
}