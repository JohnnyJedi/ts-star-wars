export interface SWContextValue {
    hero: string,
    changeHero: (name: string) => void,
    error:boolean,
    changeToError:(error: boolean) => void,
}


export interface HeroInfo {
    // [key: string]: string;
    name: string,
    gender: string,
    birth_year: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string
}

export interface  Item {
    title: string,
    path: string,
}



export interface Hero {
    name: string,
    img: string,
    url: string,
}
export interface Characters {
    [key: string]: Hero,
}