import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  { widthPercentageToDP as wp ,heightPercentageToDP as hp  } from "react-native-responsive-screen"
import { router } from 'expo-router'


const index = () => {
  return (
  <SafeAreaView className="flex-1 px-4 bg-black flex justify-around" >

<View className="space-y-2 pt-5 items-center " >
<Text style={{fontSize:hp(6)}} className="
text-white font-bold [text-shadow:1px_1px_17px_#0284c7] tracking-widest
" >AI App</Text>
<Text style={{fontSize:hp(2.7)}} className="
text-white font-semibold [text-shadow:1px_1px_17px_#0ea5e9] tracking-widest

" >The Future is here, Powered by AI</Text>
</View>


<View className="items-center overflow-hidden " >
  <Image 
style={{height:wp(92),width:wp(92)}} 
resizeMode='contain' className="scale-125"
source={require("../assets/images/ai2.png")}   />

</View>

<TouchableOpacity 
onPress={()=> router.push("Home") }
style={{height:hp(8)}} className="bg-[#8D145B] rounded-full
justify-center items-center mb-6
" >
  <Text
  className="
text-white font-bold  tracking-widest
  
  "
  style={{fontSize:hp(3.3)}} >
    Get Started
  </Text>
</TouchableOpacity>


  </SafeAreaView>
  )
}

export default index