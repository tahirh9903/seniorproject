import {Image, View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';


const app = () => {
  
  return (
    <View style={styles.container}>
       <View style={styles.textWrapper}>
      <Image source={{ uri: 'https://static.thenounproject.com/png/354384-200.png' }} style={styles.profileImage}/>
      <Text style={styles.blackText}>Hi, Welcome Back</Text>
    </View>
  </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',       // Centers the inner wrapper horizontally
    padding:40,
  },
  textWrapper: {
    width: '100%',              // Makes the wrapper full-width
  },
  blackText: {
    textAlign: 'left',          // Aligns the text to the left within textWrapper
    textAlignVertical: 'top',
    fontSize: 18,
    color: 'black',
  },
  dateText: {
    textAlign: 'left',
    fontSize: 16,
    color: 'gray',
    marginTop: 10,  // Add some spacing above the date
  },
  profileImage: {
    width: 50,                   // Set the width of the circle
    height: 50,                  // Set the height of the circle
    borderRadius: 25,            // Makes the image circular (width and height should be equal)
    marginRight: 10,             // Adds spacing between the image and text
  },
})