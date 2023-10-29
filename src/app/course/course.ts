export class Course {

    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    public constructor(id: number, name: string, channel: string, seasons: number, description: string, webpager: string, poster: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpager;
        this.poster = poster;
    }
}
