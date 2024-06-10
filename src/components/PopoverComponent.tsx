'use client';
import React from 'react'
import {
    Input,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent
  } from '@nextui-org/react';
  import { IoSpeedometer } from "react-icons/io5";
import { useUserStore } from '@/store/userStore';


function PopoverComponent(props: {name: string}) {
    let value;
    if(props.name === "BMI") {
        value = useUserStore((state)=> state.BMI);
    }
    else if(props.name === "Weight") {
        value = useUserStore((state)=> state.Weight);
    }
    if(props.name === "Height") {
        value = useUserStore((state)=> state.Height);
    }
    if(props.name === "Blood_P") {
        value = useUserStore((state)=> state.Blood_P);
    }

  return (
    <Popover placement='left'>
      <PopoverTrigger>
                <div className="col-span-1 Card cursor-pointer">
                    <IoSpeedometer className='text-bluish text-3xl' />
                    <div className='flex flex-col items-center text-xl'>
                        <h3>{value}</h3>
                        <span className='text-gray-500 text-[12px]'>{props.name}</span>
                    </div>
                </div>
      </PopoverTrigger>

      <PopoverContent>
        <form>
          <div className="flex flex-col gap-4 p-4 w-80 bg-bluish rounded-[10px]">
            {/* We give them name so we can access the data from server-side */}
            <Input name={props.name} label="" labelPlacement='outside' placeholder={props.name} className='p-2' />  

            <Button className='text-white'>Save</Button>

          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverComponent