'use client'

import { Img } from '@/components/Image'
import { Modal } from '@/components/Modal'
import { Options, Select } from '@/components/Select'
import { returnItems, ReturnItemType } from '@/data/items/returnItems'
import { useHomePresenter } from '@/presenter/homePresenter'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'

export type ItemContent = {
  id: string
  amount: number
  count: string //いくつか
}

export const ReturnView = () => {
  const [items, setItems] = useState<ItemContent[]>()
  const [show, setShow] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const router = useRouter()
  const store = useStore('return-items')
  const { res } = useHomePresenter()

  useEffect(() => {
    setShow(items ? items.length !== 0 : false)
    const totalAmount =
      items?.reduce((sum, item) => {
        return sum + item.amount * Number(item.count)
      }, 0) ?? 0
    setTotal(totalAmount)
  }, [items, items?.length])

  const onChangeHandler = (id: string, count: string, amount: number) => {
    setItems((prev) => {
      const list = prev ? [...prev] : []

      const index = list.findIndex((item) => item.id === id)

      // ▼ count が "0" の場合 → リストから削除
      if (count === '0') {
        if (index !== -1) {
          list.splice(index, 1) // ← 削除
        }
        return list
      }

      // ▼ それ以外は追加 or 更新
      if (index === -1) {
        list.push({ id, amount, count })
      } else {
        list[index] = {
          ...list[index],
          count,
        }
      }

      store.setItem(list)

      return list
    })
  }

  const onClickHandler = () => {
    router.push('/checkout')
  }

  return (
    <div className='flex flex-col pt-12 mb-24 pb-24 items-center gap-12'>
      <h2 id='return' className='font-bold text-3xl text-pink-400 drop-shadow-sm scroll-mt-24'>
        ♥ リターンを選ぶ ♥
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {returnItems.map((item, index) => {
          return (
            <ItemPanel
              key={index}
              id={item.id}
              amount={item.amount}
              title={item.title}
              detail={item.detail}
              date={item.date}
              supporterCount={res?.find((r) => r.id === item.id)?.supporterCount}
              maxCount={[1, 2, 3, 4, 5]}
              onChange={(e) => {
                onChangeHandler(item.id, e.target.value, item.amount)
              }}
            />
          )
        })}
      </div>
      {show && (
        <button
          // justify-between を justify-center に変更して中央寄せ
          className='fixed bottom-6 w-11/12 md:w-8/12 px-4 md:px-12 bg-gradient-to-r from-pink-400 to-blue-300 hover:from-pink-500 hover:to-blue-400 shadow-xl shadow-pink-200 rounded-full h-[80px] flex justify-center items-center text-white transition-all duration-300 transform hover:scale-105 z-50'
          onClick={onClickHandler}
        >
          {/* 文言を「支援する」に変更し、サイズを調整 */}
          <p className='text-xl md:text-3xl font-bold whitespace-nowrap'>支援する</p>
          
          {/* 金額表示部分は削除しました */}
        </button>
      )}
    </div>
  )
}

type ItemProps = {
  supporterCount?: number
  maxCount: number[]
  onChange: ChangeEventHandler<HTMLSelectElement>
} & ReturnItemType

const ItemPanel = (props: ItemProps) => {
  const { id, img, amount, title, detail, date, supporterCount, maxCount, onChange } = props

  return (
    <div className='flex flex-col gap-2 bg-white w-full rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl transition-shadow'>
      <p className='font-bold text-pink-500 text-4xl text-center'>
        {amount.toLocaleString()}
        <span className='text-2xl ml-1 text-gray-400'>円</span>
      </p>
      <div className="h-px w-full bg-gray-100 my-2"></div>
      {title && <p className='text-lg font-bold leading-6 text-gray-700'>{title}</p>}
      
      <Modal 
        button={<span className='border-b border-pink-300 text-pink-500 font-bold'>もっと見る</span>}
        cName="w-fit text-left p-1 hover:opacity-70 transition-opacity"
      >
        <div className='flex flex-col gap-4 p-2' id={id}>
          {img && <Img src={img} />}
          <p className='font-bold text-pink-500 text-4xl'>
            {amount.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </p>
          {title && <p className='text-xl font-bold text-gray-700'>{title}</p>}
          <div className="text-gray-600 leading-7">{detail}</div>
          <div className='flex flex-col pt-4 gap-2 bg-blue-50 p-4 rounded-xl'>
            <p className='flex text-sm text-gray-600'>
              <FaUser className="text-blue-400" style={{ transform: 'translateY(3px)', marginRight: '6px' }} />
              現在の支援者：<span className="font-bold ml-1">{supporterCount}</span>人
            </p>
            <p className='flex text-sm text-gray-600'>
              <GiPresent className="text-pink-400" style={{ transform: 'translateY(3px)', marginRight: '6px' }} />
              お届け予定：<span className="font-bold ml-1">{date}</span>
            </p>
          </div>
        </div>
      </Modal>

      <div className='flex flex-col pt-2 gap-1'>
        <p className='flex text-sm text-gray-400'>
          <FaUser style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
          支援者：{supporterCount}人
        </p>
        <p className='flex text-sm text-gray-400'>
          <GiPresent style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
          お届け予定：{date}
        </p>
      </div>
      <div className="mt-auto pt-4">
        <Select
          id={id}
          options={maxCount.map((count) => {
            return { value: count, label: `${count}個` } as Options
          })}
          onChange={onChange}
          className="w-full bg-pink-50 border-pink-200 text-gray-700 rounded-xl"
        />
      </div>
    </div>
  )
}