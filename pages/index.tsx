import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI 法律助手</title>
        <meta name="description" content="AI 法律助手" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BTGGPV7BPL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BTGGPV7BPL');
        `}
      </Script>
      <main className={styles.main}>
        <h1 className="text-slate-700 font-bold text-2xl mb-12 flex items-center gap-3 dark:text-slate-400">
          <Image src={'/logo.png'} width="32" height="32" alt="MagickPen logo" /> AI 法律助手
        </h1>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        <div className="mt-28 md:mt-40 text-center w-full">
          <h2 className="text-slate-500">更多好玩</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 max-w-2xl mx-auto text-xs">
            <li>
              <Link
                href="https://www.aigc2d.com/"
                className=" 
              dark:bg-white/30
              dark:text-slate-900
              dark:border-slate-900
               text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'https://www.aigc2d.com/logo/logo-bg-512.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="AIGC2D"
                />
                AIGC2D
              </Link>
            </li>
            <li>
              <Link
                href="https://chat.aigc2d.com/?ref=lawcnai"
                className="dark:bg-white/30
              dark:border-slate-900
              dark:text-slate-900 text-slate-400  border border-slate-300/30 transition-all hover:bg-white/50 hover:backdrop-blur-md py-2.5 rounded-md block"
              >
                <Image
                  src={'/ReviewGPT.png'}
                  width={100}
                  height="20"
                  className="w-full mb-1 h-5 object-contain"
                  alt="在线对话ChatGPT"
                />
                在线对话ChatGPT
              </Link>
            </li>
          </ul>
        </div>

        <div className="py-10 w-full md:flex items-center justify-center md:space-x-6">
          <div className="flex items-center justify-center space-x-6 mt-4 md:m-0">
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://github.com/aigc2d/law-cn-ai"
                className="flex items-center justify-center"
              >
                <Image src={'/github.svg'} width="24" height="24" alt="Github logo" />
              </Link>
            </div>
            <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
              <Link
                href="https://www.aigc2d.com"
                className="flex items-center justify-center"
              >
                <Image src={'https://www.aigc2d.com/logo/logo-bg-512.png'} width="24" height="24" alt="AIGC2D" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
