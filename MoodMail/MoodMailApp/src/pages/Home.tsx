import React, { useState } from 'react'
import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'
const Home = () => {

const [mood,setMood] = useState("");
const [subject,setSubject] = useState("");
const [footer,setFooter] = useState("");
const [generator,setGenerator] = useState(false);

const handleGenerate = () => {
   const lowerMood = mood.toLowerCase();
   if(lowerMood.includes("happy")){
    setSubject("Feeling Great Today!");
    setFooter("Stay Awesome");
   }
   else if(lowerMood.includes("sad")){
    setSubject("Just another tough day..");
    setFooter("Sending Hugs");
   }
   else if(lowerMood.includes("angry")){
    setSubject("Calm down bro");
    setFooter("Take a Deep Breathe");
   }
   else{
    setSubject("Mood Update");
    setFooter("Catch you Later");
   }
   setGenerator(true)
   }

const handleReset = () => {
  setMood("");
  setSubject("");
  setFooter("");
  setGenerator(false);
}

  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
    <h2 className='text-2xl font-bold text-gray-800'> MoodMail Generator </h2>

   {!generator ? (
     <MoodInput mood={mood} setMood={setMood} 
     onGenerate={handleGenerate}
     disabled={generator}
     />
   ) : (
    <MoodOutput subject={subject} footer={footer} onReset={handleReset}/>
   )}
    </div>
 
  )
}

export default Home
