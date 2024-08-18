import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import  { widthPercentageToDP as wp ,heightPercentageToDP as hp  } from "react-native-responsive-screen"
import Animated, { FadeInDown, FadeInLeft, FadeInRight} from 'react-native-reanimated'

const Features = () => {
  return (

<ScrollView  bounces={false} >
       <View  
    className="space-y-3 py-7 "
    >
      <Text className="
      text-white ml-1 font-semibold tracking-wide
      "style={{fontSize:hp(5.5)}}
      >Features</Text>



{/*  feature card chatgpt */}
<Animated.View entering={FadeInLeft.duration(500).delay(200).springify()} className="bg-emerald-200 
p-2 rounded-xl
" >
<View className="flex-row items-center space-x-1 " >
    <Image
    className="w-12 h-12 rounded-full"
    source={require("../../assets/images/chatgpt1.png")}  />
<Text className="
      text-gray-700  font-bold tracking-wide
      "style={{fontSize:hp(3)}}
      >ChatGPT</Text>
</View>

<Text  className="font-medium pl-1  text-gray-700 "
 style={{fontSize:hp(2.55)}}>
ChatGPT can provide you with instant and knowledgeable responses
,assest you with creative ideas on a wide range of topics.
</Text>
</Animated.View>

{/*  feature card 2 dall-e */}
<Animated.View entering={FadeInRight.duration(500).delay(400).springify()}  className="bg-sky-200 
p-2 rounded-xl 
" >
<View className="flex-row items-center space-x-1 " >
    <Image
    className="w-12 h-12 rounded-full"
    source={require("../../assets/images/dall1.png")}  />
<Text className="
      text-black  font-bold tracking-wide
      "style={{fontSize:hp(3)}}
      >DALL-E</Text>
</View>

<Text  className="font-medium pl-1  text-gray-700 "
 style={{fontSize:hp(2.55)}}>
DALL-E can generate imaginative and diverse images from textual descriptions
,expanding the boundaries of visual creativity.
</Text>
</Animated.View>

{/*  feature card 3 smart-ai */}
<Animated.View entering={FadeInDown.duration(500).delay(600).springify()}  className="bg-purple-200 
p-2 rounded-xl
" >
<View className="flex-row items-center space-x-1 " >
    <Image
    className="w-12 h-12 rounded-full"
    source={require("../../assets/images/smartai1.png")}  />
<Text className="
      text-gray-700  font-bold tracking-wide
      "style={{fontSize:hp(3)}} 
      >Smart AI </Text>
</View>

<Text  className="font-medium pl-1 text-gray-700 "
 style={{fontSize:hp(2.55)}}>
ChatGPT can provide you with instant and knowledgeable responses
,assest you with creative ideas on a wide range of topics.
</Text>
</Animated.View>




    </View>
</ScrollView>


 
  )
}

export default Features