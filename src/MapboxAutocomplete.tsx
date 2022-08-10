import React, { useState } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Item from './Item';
import { DataType, MapBoxProps } from './type';
import 'react-native-vector-icons'



const MapboxAutocomplete = ({ apiKey, country, getPlaceName }: MapBoxProps) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [data, setData] = useState<DataType[]>([])
    //console.log(apiKey)
    const renderItem = ({ item }: { item: DataType }) => {
        return (
            <TouchableOpacity onPress={getPlaceName ? () => getPlaceName(item.place_name) : () => { throw new Error('function not defined') }}>
                <Item data={item} />
            </TouchableOpacity>
        )
    }

    const searchFunction = async (text: string) => {
        setSearchValue(text)
        const header = { 'Content-Type': 'application/json' };
        let path = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${apiKey}`

        if (country) {
            path = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?access_token=${apiKey}&country=${country}`
        }
        if (searchValue.length > 1) {
            try {
                const response = await fetch(path, {
                    headers: header
                })
                if (!response.ok) throw new Error(response.statusText)
                const data = await response.json()
                setData(data.features)
            } catch (error) {
                console.log("ERROR" + error)
            }
        } else {
            //setData()
        }

    }

    return (
        <View>
            <SearchBar
                placeholder="Search"
                /* @ts-ignore */
                onChangeText={(text: string) => searchFunction(text)}
                value={searchValue}
                lightTheme
                searchIcon = {{type: 'ionicon', color: '#86939e', name: 'location' }}
            />
            {searchValue?<FlatList data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />:<Text></Text>}
        </View>
    )
}

export default MapboxAutocomplete

const styles = StyleSheet.create({})