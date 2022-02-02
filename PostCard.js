import React, { Component } from 'react';
import { View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component{
render(){
    return(
        <View style = {styles.container}>
         <View style = {styles.cardContainer}>
        <View style = {styles.authorContainer}>
         <View style = {styles.authorImageContainer}>
        <Image>
         source = {require('../assets/profile_img.png')}
         style = {styles.profileImage}   
        </Image>
        </View>
        <View style = {styles.authorNameContainer}>
        <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
        </View>   
        </View>
        <Image source = {require('../assets/post.jpeg')} style = {styles.postImage} />  
        <View style = {styles.captionContainer}>
        <Text styles = {styles.captionText}>{this.props.post.caption}</Text>
        </View>
        <View style = {styles.actionContainer}>
        <View style = {styles.likeButton}>
        <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
        <Text style = {styles.likeText}>12K</Text>
        </View>
        </View>
        </View>   
        </View>
    )
}
}
export default PostCard;