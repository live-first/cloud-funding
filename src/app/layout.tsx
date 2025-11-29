import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Provider from './Provider'

// Noto Sans JP の設定
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp', 
  display: 'swap',
})

export const metadata: Metadata = {
  title: '来桜アイドルプロデュースプロジェクト',
  description:
    '来桜がプロデュースするアイドルグループをデビューまで導くために、クラウドファンディングを実施しています。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      {/* 定義したフォント変数をbodyに適用 */}
      <body className={`${notoSansJP.variable} antialiased font-sans`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}