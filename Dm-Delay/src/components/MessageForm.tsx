import React, { useState } from 'react';

import {Textarea} from './ui/textarea'
import {Input} from './ui/input'
import {Button} from './ui/button'
const MessageForm = () => {

     const[message,setMessage] = useState<string>("");
        const[delay,setDelay] = useState<number>(10);
        const[isSending,setIsSending] = useState<boolean>(false);
        const[timer,setTimerId] = useState<NodeJS.Timeout | null>(null);
        const [sentMessage, setSentMessage] = useState<string>("");

        const handleSend = () => {
            setIsSending(true)
            const id = setTimeout(() => {
                setSentMessage(message);
                setMessage(" ");
                setIsSending(false);
            }, delay * 1000);
            setTimerId(id);
        }

        const handleCancel = () => {
            if (timer) {
                clearTimeout(timer);
                setTimerId(null); 
            }
            setIsSending(false);
        }
        

  return (
    <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
     <h2 className='text-2xl font-bold text-gray-800'>Dm delay Button</h2>
     <Textarea
     placeholder='Type your message...'
     value={message}
     onChange={(e)=> setMessage(e.target.value)}
     />
    <Input
        type='number'
        placeholder='delay in seconds'
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={isSending}
        />


    {!isSending ? (
        <Button className='w-full' onClick={handleSend} disabled={!message.trim()}>
        Sent with delay
    </Button>
    ) : (
        <Button className='w-full' variant="destructive" onClick={handleCancel}>
            Cancel Sending
            </Button>
        )}

        {sentMessage && (
              <div className='bg-green-100 border rounded p-3 text-green-900'>
              <p className='font-semibold'>Message Sent:</p>
              <p>{sentMessage}</p>
          </div>
          )}

    </div>
  )
}

export default MessageForm
