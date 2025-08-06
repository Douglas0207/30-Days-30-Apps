import React from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Textarea} from '@/components/ui/textarea'

type Props = {
  subject:string,
  footer:string,
  onReset:() => void
}

const MoodOutput = ({subject,footer,onReset}:Props) => {
  return (
    <div className='space-y-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>Subject:</label>
        <Input value={subject} readOnly className='mt-1' />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>Footer Signature:</label>
        <Textarea value={footer} readOnly className='mt-1' />
      </div>
      <Button variant="destructive" className='w-full' onClick={onReset}>
        Reset
      </Button>
    </div>
  )
}

export default MoodOutput
