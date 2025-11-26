'use client'

import { Img } from '@/components/Image'
import { Modal } from '@/components/Modal'
import { Options, Select } from '@/components/Select'
import { returnItems, ReturnItemType } from '@/data/items/returnItems'
import { homePresenter } from '@/presenter/homePresenter'
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
  const { res } = homePresenter()

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
      <h2 id='return' className='font-bold text-3xl text-gray-600'>
        リターンを選ぶ
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 px-4'>
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
          className='fixed bottom-4 w-11/12 md:w-10/12 px-6 md:px-12 bg-[#001190] hover:bg-[#ff7a05] focus:bg-[#ff7a05] rounded-full h-[80px] flex justify-between items-center text-white'
          onClick={onClickHandler}
        >
          <p className='text-2xl font-bold whitespace-nowrap'>支援する</p>
          <div className='font-bold text-4xl whitespace-nowrap'>
            {total.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </div>
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

  const DetailButton = () => {
    return <div className='p-1 text-cyan-800'>詳細はこちら</div>
  }

  return (
    <div className='flex flex-col gap-2 bg-white w-full rounded-2xl p-4 shadow-xl'>
      <p className='font-bold text-gray-800 text-4xl'>
        {amount.toLocaleString()}
        <span className='text-2xl ml-1'>円</span>
      </p>
      {title && <p className='text-lg font-bold leading-5'>{title}</p>}
      <Modal button={<DetailButton />}>
        <div className='flex flex-col gap-2' id={id}>
          {img && <Img src={img} />}
          <p className='font-bold text-gray-800 text-4xl'>
            {amount.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </p>
          {title && <p className='text-lg font-bold leading-5'>{title}</p>}
          <div>{detail}</div>
          <div className='flex flex-col pt-4'>
            <p className='flex text-sm text-gray-500'>
              <FaUser style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
              支援者：{supporterCount}人
            </p>
            <p className='flex text-sm text-gray-500'>
              <GiPresent style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
              お届け予定：{date}
            </p>
          </div>
        </div>
      </Modal>
      <div className='flex flex-col pt-4'>
        <p className='flex text-sm text-gray-500'>
          <FaUser style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
          支援者：{supporterCount}人
        </p>
        <p className='flex text-sm text-gray-500'>
          <GiPresent style={{ transform: 'translateY(3px)', marginRight: '4px' }} />
          お届け予定：{date}
        </p>
      </div>
      <Select
        id={id}
        options={maxCount.map((count) => {
          return { value: count, label: `${count}` } as Options
        })}
        onChange={onChange}
      />
    </div>
  )
}
