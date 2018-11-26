export interface Playlist {
    id: number | string;
    name: string;
    favourite: boolean;
    color: string;
    // tracks: Array<Track>;
    tracks?: Track[] | undefined; //optional parameter
}

export interface Track {
    id: number;
    name: string;
}