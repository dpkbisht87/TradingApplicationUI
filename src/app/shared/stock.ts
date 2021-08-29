export class Stock {
    id?: string;
    // name: string;
    // currentPrice: string;
    lastUpadate?: Date ;
    locked?: boolean;

    constructor(public name: string, public currentPrice: string){}

}
