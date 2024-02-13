'use client'
import React, {useState} from 'react';
import Image from "next/image";
import DULMe from '../public/image/love-love-you.gif'
import Yay from '../public/image/yay.gif'
import Flower from '../public/image/flower.gif'
import Loveuforever from '../public/image/love-you-forever.gif'
import Dontlovemelater from '../public/image/dontlovemelater.gif'
import lovemealittle from '../public/image/lovemealittel.gif'
import Snack from '../public/image/snack.jpg'
const MyComponent = () => {
    const [love,setLove] = useState(false)
    const img = [DULMe,lovemealittle,Flower,Loveuforever,Dontlovemelater,Snack]
    const [count,setCount] = useState(0)
    const [bigButton,setBigButton] = useState(4)
    const arr = ['ချစ်တယ်','နည်းနည်းလေးရောမချစ်ပေးနိုင်ဘူးလား','ပန်းပေးမယ်လေမချစ်ဘူးလား','နည်းနည်းလေးပဲချစ်ခိုင်းတာပါ','နောက်မှချစ်ပါတယ်လာမလုပ်နဲ့နော်','မုန့်ကျွေးမယ်လေမချစ်ဘူးလား']
    const yes = () => {
        setLove(true)
    }

    const no = () => {
        if(count < arr.length-1){
            setBigButton(prevState => prevState + 4);
            setCount(count + 1)
        }
    }
    return (
        <div className={'flex justify-center items-center w-full h-screen flex-col'}>
            {
                love?
                    <>
                        <span className={'text-4xl font-bold'}>Thanks for being my Valentine!!!</span>
                        <Image src={Yay} alt="Do you Love me?" className={'w-96 h-96'}></Image>
                    </>
                    :
                    <Image src={img[count]} alt="Do you Love me?" className={'w-96 h-96'}></Image>
            }
            <div className={`mt-10 ${love && 'hidden'}`}>
                <button className={'bg-red-600 text-white px-5 py-3 rounded-md mr-4'} onClick={no}>မချစ်ဘူး</button>
                <button className={`bg-green-600 text-white px-${bigButton} py-3 rounded-md`} onClick={yes}>{arr[count]}</button>
            </div>

        </div>
    );
};

export default MyComponent;
