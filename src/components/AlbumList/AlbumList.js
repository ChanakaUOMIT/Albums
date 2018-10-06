import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from '../AlbumDetails/AlbumDetail';

class AlbumList extends Component{

    state={ albums: [] };

    componentWillMount(){
        console.log('componentWillMount in Album List');
        //debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        /*.then(response => console.log(response))*/
        .then(response => this.setState({ albums: response.data}))
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        // <Text key={album.title}>{album.title} </Text>);
        <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render(){
        console.log(this.state);

        return(
            <ScrollView>
                
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;