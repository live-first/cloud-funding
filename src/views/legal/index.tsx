import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const LegalView = () => {
  const Th = ({ children }: PropsWithChildren) => (
    <th className='text-start p-4 bg-blue-100 border border-gray-300 w-40'>{children}</th>
  )
  const Td = ({ children }: PropsWithChildren) => (
    <td className='text-start p-4 bg-white border border-gray-300'>{children}</td>
  )
  return (
    <div className='flex flex-col items-center py-3 gap-4 mb-12'>
      <h1 className='font-bold text-2xl'>特定商取引法に基づく表記</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <Th>運営事業者</Th>
              <Td>合同会社LIVE FIRST</Td>
            </tr>
            <tr>
              <Th>運営責任者</Th>
              <Td>坂本　梨夏</Td>
            </tr>
            <tr>
              <Th>所在地</Th>
              <Td>〒150-0044 東京都渋谷区円山町5-3 MIEUX渋谷ビル８階</Td>
            </tr>
            <tr>
              <Th>メールアドレス</Th>
              <Td>contact@live-first.info</Td>
            </tr>
            <tr>
              <Th>ホームページ</Th>
              <Td>
                <Link href='https://live-first.info'>https://live-first.info</Link>
              </Td>
            </tr>
            <tr>
              <Th>リターン内容</Th>
              <Td>リターン選択一覧をご確認ください。</Td>
            </tr>
            <tr>
              <Th>お届け日時</Th>
              <Td>リターン情報に記載の通り</Td>
            </tr>
            <tr>
              <Th>支援金内訳</Th>
              <Td>
                開催者に95%
                <br />
                決済手数料が最大5%
              </Td>
            </tr>
            <tr>
              <Th>支払い方法</Th>
              <Td>クレジットカード・国内の銀行振込</Td>
            </tr>
            <tr>
              <Th>返品・キャンセル</Th>
              <Td>
                いかなる理由であっても、返品・キャンセルは受け付けておりません。一切お断りさせていただきます。
              </Td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
