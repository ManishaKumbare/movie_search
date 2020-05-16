
import React, {useEffect, useState} from "react";

import {StyleSheet, Text, View} from 'react-native';

import {addDataGenre} from "../action/actions";



const ShowScreen = (data) => {

    const API_KEY = "api_key=fd568a18";

    const[result,setResult ] = useState({});

    const item = data.route.params.data;

    console.log(item.id);



    useEffect(() => {

        getData()

    }, []);





    const getData = async () => {

        let url = `https://api.themoviedb.org/3/movie/${item.id}?` + API_KEY

        try {

            let response = await fetch(url, {

                method: 'GET',

            });

            let res = await response.json();

            setResult(res);

        } catch (error) {

        }

    };





    return <View style={styles.card}>



        <View style={styles.details}>





            <Text style={styles.heading}>

                <Text style={styles.content}>MOVIE TITLE :</Text> {result.original_title}</Text>

            <View style={styles.lineStyle}/>



            <Text style={styles.heading}>

                <Text style={styles.content}>MOVIE Popularity :</Text> {result.popularity}</Text>



            <Text style={styles.heading}>

                <Text style={styles.content}>Release date</Text> {result.release_date}</Text>



            <Text style={styles.heading}>

                <Text style={styles.content}>revenue</Text> {result.revenue}</Text>



            <Text style={styles.heading}>

                <Text style={styles.content}>status</Text> {result.status}</Text>



            <Text style={styles.heading}>

                <Text style={styles.content}>tagline</Text> {result.tagline}</Text>



            <Text style={styles.heading}>

                <Text style={styles.content}>overview</Text> {result.overview}</Text>







        </View>

    </View>

}

const styles = StyleSheet.create({



    titlePrice: {

        paddingVertical: 15,

        flexDirection: 'row',

        justifyContent: 'space-between'

    },

    details: {

        marginTop: 10, padding: 10, backgroundColor: 'white'

    },

    textStyle: {

        flex: 9,

        fontSize: 20,

        fontWeight: 'bold',

        color: "purple"

    },

    textStyle3: {

        flex: 2,

        fontSize: 20,

        fontWeight: 'bold',

        color: "blue"

    },

    subtitle: {

        paddingVertical: 15,

        fontSize: 20,

        color: "purple"

    },

    lineStyle: {

        borderStyle: 'dashed',

        borderWidth: 0.8,

        borderRadius: 0.1,

        borderColor: '#D3D3D3',

    },

    card: {

        padding: 10,

        margin: 10,

        backgroundColor: "#fff",

        elevation: 10

    },

    heading: {fontSize: 20, color: 'purple',},

    content: {fontSize: 20, color: 'purple', fontWeight: 'bold'}

});

export default ShowScreen;