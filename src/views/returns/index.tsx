'use client'

import { Img } from '@/components/Image'
import { Modal } from '@/components/Modal'
import { Select } from '@/components/Select'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'

type ItemContent = {
  id: string
  amount: number
  count: string //いくつか
}

export const ReturnView = () => {
  const [items, setItems] = useState<ItemContent[]>()
  const [show, setShow] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)

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

      return list
    })
  }

  return (
    <div className='flex flex-col pt-12 mb-24 pb-24 items-center gap-12'>
      <h2 id='return' className='font-bold text-3xl text-gray-600'>
        リターンを選ぶ
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 px-4'>
        <ItemPanel
          id='1'
          amount={3000}
          title='オンライントーク3分'
          detail='オンラインでトークを実施します。'
          date='2026年1月中'
          supporterCount={1}
          onChange={(e) => {
            onChangeHandler('1', e.target.value, 3000)
          }}
        />
        <ItemPanel
          id='2'
          amount={5000}
          title='20秒動画+チェキ1枚'
          detail='券をお渡しします。他メンバーに変更可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={(e) => {
            onChangeHandler('2', e.target.value, 5000)
          }}
        />
        <ItemPanel
          id='3'
          amount={10000}
          title='お礼動画+20秒動画+チェキ券5枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={(e) => {
            onChangeHandler('3', e.target.value, 10000)
          }}
        />
        <ItemPanel
          id='4'
          amount={50000}
          title='プリ同+私物サイン+チェキ券15枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={(e) => {
            onChangeHandler('4', e.target.value, 50000)
          }}
        />
        <ItemPanel
          id='5'
          amount={100000}
          title='都内2時間個別オフ会+宿題チェキ券1枚+お手紙+チェキ券30枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={(e) => {
            onChangeHandler('5', e.target.value, 100000)
          }}
        />
      </div>
      {show && (
        <button className='fixed bottom-4 w-10/12 bg-[#001190] hover:bg-[#ff7a05] rounded-full h-[80px] flex justify-between items-center text-white px-12'>
          <p className='text-2xl font-bold'>支援金額</p>
          <div className='font-bold text-4xl'>
            {total.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </div>
        </button>
      )}
    </div>
  )
}

type ItemProps = {
  id: string
  img?: string
  amount: number
  title?: string
  detail: string
  date?: string
  supporterCount?: number
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const ItemPanel = (props: ItemProps) => {
  const { id, img, amount, title, detail, date, supporterCount, onChange } = props

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
        options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
          { value: 5, label: '5' },
          { value: 6, label: '6' },
          { value: 7, label: '7' },
          { value: 8, label: '8' },
          { value: 9, label: '9' },
          { value: 10, label: '10' },
        ]}
        onChange={onChange}
      />
    </div>
  )
}
