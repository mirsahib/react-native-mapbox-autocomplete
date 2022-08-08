import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { DATA } from './data';
import Item from './Item';
import { DataType } from './type';


const MapboxAutocomplete = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [data,setData]=useState<DataType[]>([])

    const searchFunction = (text: string) => {
        const searchItem = DATA.filter((item:DataType)=>{
            const itemText = item.title.toUpperCase()
            const searchText = text.toUpperCase()
            return itemText.indexOf(searchText) > -1            
        })
        setSearchValue(text)
        setData(searchItem)
    }
    const renderItem = ({item}:{item:DataType})=>{
        return <Item data={item} />
    }

    return (
        <View>
            <SearchBar
                placeholder="Type Here..."
                /* @ts-ignore */
                onChangeText={(text: string) => searchFunction(text)}
                value={searchValue}
            />
            <FlatList data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default MapboxAutocomplete

const styles = StyleSheet.create({})