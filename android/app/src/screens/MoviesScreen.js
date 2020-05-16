
import React, {useEffect, useState} from 'react';

import {Button, FlatList, StyleSheet, Text,TouchableOpacity, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import AlertCommon from "../components/AlertCommon";

import {addDataGenre, addDataMovies} from "../action/actions";

import  ShowScreen from './ShowScreen';



export default MoviesScreen = (props) => {

    const dispatch = useDispatch();

    const [searchString, setSearchString] = useState("");

    const dataReducerState = useSelector(state => state.dataReducer);

    const {gen, movies} = dataReducerState;

    console.log(JSON.stringify(movies))

    const API_KEY = "fd568a18";



    useEffect(() => {

        getData();

        getMoviesList(28);

        return () => {

            console.log("This will be logged on unmount");

        }

    }, []);





    const getData = async () => {

        let url = "https://api.themoviedb.org/3/genre/movie/list?" + API_KEY

        try {

            let response = await fetch(url, {

                method: 'GET',

            });

            let res = await response.json();

            let data = res.genres;

            // console.log(JSON.stringify(res.genres))a

            dispatch(addDataGenre(data));

        } catch (error) {

            AlertCommon("something went wrong", error)

        }

    };



    const getMoviesList = async (id) => {

        let url = `https://api.themoviedb.org/3/genre/${id}/movies?api_key=fd568a18`

        try {

            let response = await fetch(url, {

                method: 'GET',

            });

            let res = await response.json();

            let data = res.results;

            // console.log(JSON.stringify(res.results))

            dispatch(addDataMovies(data));

        } catch (error) {

            AlertCommon("something went wrong", error)

        }

    };

    const renderItem = (item) => {

        return <View style={{padding: 10, backgroundColor: 'w'}}>

            <Button title={item.name} onPress={() => {

                getMoviesList(item.id);

            }}/>

        </View>

    }

    const renderItemMovies = (item) => {

        return <TouchableOpacity onPress={() => {

            props.navigation.navigate("ShowScreen", {data: item})

        }}>

            <View style={styles.movieCard}>

                <Text style={styles.heading}>

                    <Text style={styles.content}>MOVIE TITLE :</Text> {item.original_title}</Text>



                <Text style={styles.heading}>

                    <Text style={styles.content}>MOVIE Popularity :</Text> {item.popularity}</Text>



                <Text style={styles.heading}>

                    <Text style={styles.content}>Vote_count</Text> {item.popularity}</Text>



                <Text style={styles.heading}>

                    <Text style={styles.content}>Vote average:</Text> {item.vote_average}</Text>



                <Text style={styles.heading}>

                    <Text style={styles.content}>Release date:</Text> {item.release_date}</Text>

            </View>

        </TouchableOpacity>

    }



    return <View style={styles.container}>

        <View style={{height: 80}}>



            <FlatList

                horizontal={true}

                keyExtractor={item => (item.id).toString()}

                data={gen}

                renderItem={({item}) => {

                    return renderItem(item);

                }}/>



        </View>



        <View style={{flex: 1}}>

            <FlatList

                style={{flex: 1}}

                showsVerticalScrollIndicator={false}

                keyExtractor={item => (item.id).toString()}

                data={movies}

                renderItem={({item}) => {

                    return renderItemMovies(item);

                }}/>



        </View>

    </View>



};



const styles = StyleSheet.create({

    movieCard: {

        backgroundColor: 'white', elevation: 6, margin: 15, padding: 10

    },

    container: {

        padding: 10,

        flex: 1,

        backgroundColor: 'white'

    },

    heading: {fontSize: 15, color: 'purple',},

    content: {fontSize: 20, color: 'purple', fontWeight: 'bold'}

});