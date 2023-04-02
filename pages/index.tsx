import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cover from '@/components/sections/Cover'
import About from '@/components/sections/About'
import SkyBlock from '@/components/sections/SkyBlock'
import LetsPlay from '@/components/sections/LetsPlay'

const inter = Inter({ subsets: ['latin'] })

// https://www.youtube.com/@zacari_mc

export default function Home() {
  return (
    <>
      <Head>
        <title>Zacari Minecraft</title>
        <meta name="description" content="Zacari's Minecraft Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Cover />
        <About />
        <SkyBlock />
        <LetsPlay />
      </main>
    </>
  )
}
