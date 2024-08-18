import { View, Text, Image, ScrollView,  TextInput, Keyboard, ActivityIndicator } from "react-native";
import React, {  useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Features from "./components/Features";
import { TouchableOpacity } from "react-native";
import {  handleRes } from "../api/geminiAi";
import { Ionicons } from "@expo/vector-icons";

import {speak ,stop} from "expo-speech"

const Home = () => {
  const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState(null)
const [userInput, setUserInput] = useState("")
const scrollViewRef =useRef()
const [isSpeaking , setIsSpeaking ] = useState(false)

const handleSpeech =(text)=>{

if(!isSpeaking){
   speak(text, {
        language: 'en',
        pitch: 1.0,
        rate: .85,
        onStart:()=>{
          setIsSpeaking(true)
        },
        onDone:()=>{
          setIsSpeaking(false)
          
        }
      });
}else{
  stop()
  setIsSpeaking(false)
}

   
   






}



const scrolling =()=>{
  setTimeout(() => {
  scrollViewRef.current.scrollToEnd({animated: true})
    
  }, 1000);
}

const handleText =async ()=>{

setLoading(true)
  // scrolling()
Keyboard.dismiss()
setLoading(true)
try{

 const GR = await handleRes(userInput)
messages.push({role:"user",content:userInput})
messages.push({role:"assistant",content:GR})



}catch(error){


console.log(error)
setErrors("Opps, something Wrong try again")
}finally{


  setUserInput("")
Keyboard.dismiss()
scrolling()
setLoading(false)
}




}



  const clear = () => {
    setMessages([]);
  };

 

  return (
    <SafeAreaView
      className="bg-[#05123d]
  flex-1 px-3 space-y-1
  "
    >
        <View className="items-center mt-3 ">
          <Image
            resizeMode="cover"
            className="rounded-full"
            style={{ height: wp(35), width: wp(35) }}
            source={require("../assets/images/homei.jpg")}
          />
        </View>

        {messages.length > 0 ? (
          <View className="flex-1 mx-2 space-y-1 ">
            <Text
              style={{ fontSize: hp(4.5) }}
              className="text-white   font-medium  "
            >
              Assistant
            </Text>

         <View 
              className=" overflow-hidden
bg-gray-400 rounded-3xl  p-3 pb-10
"
              style={{ height:hp(58) }}
         >
<ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}  >

              {messages.map((message, index) => {
                if (message.role === "user") {
                  // user response
                  return (
                    <View key={index} className="items-end  space-y-2 ">
                      <View
                        className=" 
 py-1 px-2 bg-white w-[75%] mb-2 rounded-xl rounded-tr-none
"
                      >
                        <Text
                          style={{ fontSize: hp(2.5) }}
                          className="text-gray-700 font-medium
  
  
  "
                        >
                          {message.content}
                        </Text>
                      </View>
                    </View>
                  );
                } else {
                  // ASSistant response
                  if (message.content.includes("http")) {
                    return (
                      <View key={index} className=" items-start space-y-3">
                        <View
                          className="
  bg-[#fce3b5] p-1
 w-[70%]  rounded-xl rounded-tl-none
 "
                        >
                          <Image
                            resizeMode="cover"
                            style={{ height: hp(29) }}
                            className="rounded-xl"
                            source={{ uri: message.content }}
                          />
                        </View>
                      </View>
                    );
                  } else {
                    return (
                      <View key={index} className="items-start mb-2 space-y-3 ">
                        <View
                          className=" 
 py-1 px-2 bg-[#fce3b5] w-[85%]  rounded-xl rounded-tl-none
"
                        >
                          <Text
                            style={{ fontSize: hp(2.5) }}
                            className="text-gray-700 font-medium
  
  
  "
                          >
                            {message.content}
                          </Text>

                          <TouchableOpacity onPress={()=> handleSpeech(message.content)}
                          className="self-end my-2 flex-1 "
                          >
                               <Ionicons
                          className=""
                          size={wp(7)} name={!isSpeaking ? "volume-high-outline":"volume-mute-outline"} />
                          </TouchableOpacity>
                       
                        </View>
                      </View>
                    );
                  }
                }
              })}




   
</ScrollView>
    


{    

loading ? (
<ActivityIndicator className="absolute my-3 inset-x-0 bottom-0 " color={"gray"} size={wp(6)} />
) : errors ?
(
<Text  className="absolute my-3 inset-x-0 bottom-0 text-center text-orange-700 font-bold " >{errors}</Text>
)

 :( <TouchableOpacity onPress={clear}
className="my-3 justify-end absolute inset-x-0 bottom-0   items-center "
>
<Ionicons name="trash"  size={wp(7)} />

</TouchableOpacity>)
      }
        </View>

          </View>
        ) : (
          <Features />
        )}

        <View className="flex-row justify-around
        border-t border-gray-700
        items-center bg-[#05123d]  ">
     <TextInput 
placeholder="Enter your message"
multiline={true}
onChangeText={setUserInput}
value={userInput}

     className="bg-slate-200 my-2 w-[70%] rounded-xl px-3 py-1
     text-black font-bold tracking-wider
      "
     style={{minHeight:hp(5),maxHeight:hp(15)}}
     />
     
      <TouchableOpacity
      onPress={handleText}
      >
        { !loading ?(
      <Ionicons name="send" size={hp(3.5)} color="white" />
):(
  <ActivityIndicator  size={hp(3.5)} color="gray"   />
)
}
      </TouchableOpacity>
      
      
        </View>
    </SafeAreaView>
  );
};

export default Home;
