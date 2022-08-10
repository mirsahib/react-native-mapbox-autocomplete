export type DataType ={
    id:string;
    place_name:string,
}

export type MapBoxProps = {
    apiKey:string;
    country?:string
    getPlaceName?:(place_name:string) =>void
}