import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Head } from 'next/document'
import IndexPage from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <IndexPage></IndexPage>
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col md:flex md:flex-row w-full items-center justify-center font-bold p-1'>
          <div className='flex items-center'>
            <div>
              <span className='font-bold mr-1'>+55 62 992295634</span>
            </div>
            <div>
              <Image src={'/phone.svg'} width={30} height={30} alt='phone logo'></Image>
            </div>
          </div>
          {/* <span className='wr-1 ml-1'>/</span> */}
          <div className='flex items-center'>
            <div>
              <span className='font-bold ml-1'>wesley@devwes.com.br</span>
            </div>
            <div className='m-1'>
              <Image src={'/email.svg'} width={30} height={30} alt='email logo'></Image>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row xl:flex-row items-center justify-between w-full h-full p-2'>
          <div className='flex flex-row md:flex md:flex-col'>
            <div className='mb-10 md:m-1'>
              <a href="https://github.com/swesley400">
                <Image src="/github.svg" alt="logo as github" width={50} height={50} />
              </a>
            </div>
            <div className='m-1'>
              <a href="https://www.linkedin.com/in/wessantos98/">
                <Image src="/likend.svg" alt="logo as linked" width={50} height={50} />
              </a>
            </div>
            <div></div>
          </div>

          <div>
            <div className='w-full h-full items-center'>
              <div className='mb-20'>
                <span className='bg-black text-white font-bold rounded p-1 '>Hello There!</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-xl font-bold'>
                  Wesley Santos
                </span>
                <span className='text-sm font-bold mb-1'>
                  Fullstack developer
                </span>
              </div>

              <dd className='w-80 mt-5'>
                Bem-vindo ao meu universo tecnológico! Sou Wesley, um apaixonado desenvolvedor com expertise em diversas tecnologias, desde a gestão eficiente de bancos de dados com SQL até a criação de interfaces dinâmicas com React.js. Com especialização em AWS, TypeScript, Node.js, e mais, trago uma abordagem inovadora e robusta ao desenvolvimento, construindo soluções escaláveis e impactantes. Juntos, exploraremos novas fronteiras da tecnologia e criaremos algo extraordinário!
              </dd>
            </div>
          </div>
          <div className='full h-full flex items-center'>
            <Image src="/eu.png" alt="my art" width={900} height={900} />
          </div>
        </div>
      </div>
    </>
  )
}
