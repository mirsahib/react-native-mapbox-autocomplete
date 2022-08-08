import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { DataType } from './type'

const Item = ({ data }: { data: DataType }) => {
    return (
        <View style={tw`bg-slate-300 p-2 m-2 rounded-lg`}>
            <Text style={tw`text-slate-500`}>{data.title}</Text>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({})