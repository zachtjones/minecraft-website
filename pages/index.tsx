import Head from 'next/head'
import { Inter } from 'next/font/google'
import Cover from '@/components/sections/Cover'
import About from '@/components/sections/About'
import SkyBlock from '@/components/sections/SkyBlock'
import LetsPlay from '@/components/sections/LetsPlay'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import WorldInformation from '@/components/sections/WorldInformation'
import Footer from '@/components/sections/Footer'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#222',
    }
  }
})

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
        <ThemeProvider theme={theme} >
          <Cover />
          <About />
          <SkyBlock />
          <LetsPlay />
          <WorldInformation />
          <Footer/>
        </ThemeProvider>
      </main>
    </>
  )
}
