export interface Entity {
    id: string;
    name: string;
}

export interface Album extends Entity {
    images: AlbumImage[];
    artists?: Artist[]
}

export interface AlbumImage {
    url: string;
}

export type Artist = Entity;

export interface PagingObject<T> {
    items: T[];
    limit: number;
}

export interface AlbumResponse {
    albums: PagingObject<Album>;
}