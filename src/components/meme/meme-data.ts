export interface MemeResponse {
    success: boolean;
    data: MemeData;
}

interface MemeData {
    memes: MemeImage[];
}

export interface MemeImage {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

export interface Meme {
    image: MemeImage;
    upperText: string;
    lowerText: string;
}
