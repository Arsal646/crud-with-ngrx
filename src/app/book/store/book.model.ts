export interface BookModel {

}

export interface IBook {
    id: any;
    name: string;
    writer:string
}

export interface IBookState {
    books: IBook[];
    isLoading: boolean;
}

