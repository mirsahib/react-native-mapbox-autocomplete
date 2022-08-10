export type DataType ={
    id:string;
    place_name:string,
}

export type MapBoxProps = {
    apiKey:string;
    country?:string;
    placeholder?:string;
    minLength?:number;
    autoFillOnNotFound?:boolean
    styles?:[];
    onPress?:(place_name:string) =>void
}