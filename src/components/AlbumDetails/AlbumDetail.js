import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../Card/Card';
import CardSection from '../CardSection/CardSection';
import Button from '../Button/Button';


const AlbumDetail = ( {album} ) => {
    const {title, artist, thumbnail_image, image, url } = album;
    return(
        // <View>
        //     <Text>{props.album.title}</Text>
        //     <Text>{props.album.artist} </Text>
        //     <Text>--------------------</Text>
        // </View>

        <Card>
            <CardSection>
                <View style={styles.imageContainer}>
                    <Image
                    style={styles.image} 
                    source={{uri:thumbnail_image}} />
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist} </Text>
                </View>
                
            </CardSection>  

            <CardSection>
                <Image
                style={styles.img} 
                source={{ uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}  >Buy Now</Button>
            </CardSection>

                  
        </Card>
    )

};

const styles={
    header:{
        flexDirection:'column',
        justifyContent: 'space-around',
    },

    headerText:{
        fontSize:18,
    },

    image:{
        height:50,
        width:50,
    },

    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 10,
        marginRight:10

    },

    img:{
        flex:1,
        height:300,
        width:null,

    }
}

export default AlbumDetail;