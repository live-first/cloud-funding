'use client'

import { Img } from '@/components/Image'
import { Modal } from '@/components/Modal'
import { Select } from '@/components/Select'
import { ChangeEventHandler } from 'react'
import { FaUser } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'

export const ReturnView = () => {
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
          onChange={() => {}}
        />
        <ItemPanel
          id='2'
          amount={5000}
          title='20秒動画+チェキ1枚'
          detail='券をお渡しします。他メンバーに変更可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={() => {}}
        />
        <ItemPanel
          id='3'
          amount={10000}
          title='お礼動画+20秒動画+チェキ券5枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={() => {}}
        />
        <ItemPanel
          id='4'
          amount={50000}
          title='プリ同+私物サイン+チェキ券15枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={() => {}}
        />
        <ItemPanel
          id='5'
          amount={100000}
          title='都内2時間個別オフ会+宿題チェキ券1枚+お手紙+チェキ券30枚'
          detail='チェキ券の使用は他メンバーでも可能です。'
          date='2026年1月中'
          supporterCount={1}
          onChange={() => {}}
        />
      </div>
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
