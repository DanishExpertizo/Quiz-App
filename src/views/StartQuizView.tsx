import { ArrowRightIcon } from '@/icons/Icons'
import Link from 'next/link';

const StartQuiz = () => {
    return (
        <div className='flex items-center justify-center h-screen gap-5'>
            <img className='fixed -z-20 bg-contain h-screen w-screen' src="/bg-img.jpg" alt="Background Image" />
            <div className='h-screen w-screen bg-black opacity-50 absolute top-0 -z-10'></div>
            <div className='flex flex-col items-center gap-5 scale-125'>
                <h1 className='text-[32px]'>Start <span className='text-blue-500'>Quiz</span></h1>
                <h3>Welcom to <span className='text-blue-500'>Expertizo</span>Quiz, Click on the button below to start you quiz.</h3>
                <Link href='/expertizo-quiz'>
                    <button className='border-none flex items-center px-6 py-2 rounded-lg hover:scale-105 duration-300 ease-out bg-blue-600 hover:bg-blue-700 text-white transition-all group text-lg'>Start <ArrowRightIcon /></button>
                </Link>
            </div>
        </div>
    )
}

export default StartQuiz;