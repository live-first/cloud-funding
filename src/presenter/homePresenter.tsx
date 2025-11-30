'use client'

import { CloudFundResponseType, useCloudFundApi } from '@/api/cloudApi'
import { returnItems } from '@/data/items/returnItems'
import { formatDate } from '@/utils/stringUtils'

export const useHomePresenter = () => {
  const { getCloudFund } = useCloudFundApi()
  const res = getCloudFund.data?.data as CloudFundResponseType[]
  // ローディング状態を取得
  const isLoading = getCloudFund.isLoading

  // 商品毎の売り上げを計算する
  const result = res?.map((p) => {
    const item = returnItems.find((r) => r.id === String(p.id))

    const amount = item?.amount ?? 0
    const total = amount * p.count

    return {
      id: p.id,
      title: item?.title,
      amount,
      supporter: p.supporterCount,
      count: p.count,
      total, // 売上金額
    }
  })

  // 目標金額
  const goal = 500000
  // 支援総額
  const grandTotal = result?.reduce((sum, item) => sum + item.total, 0) ?? 0
  // 支援者数
  const supporterTotal = result?.reduce((sum, item) => sum + item.supporter, 0) ?? 0
  // 締切日時
  const deadline = new Date(2026, 0, 12, 22, 0, 0)
  console.log(
    `開催終了日：${formatDate(`${deadline.toUTCString()}`, 'YYYY年MM月DD日 hh時mm分ss秒')}`,
  )
  const now = new Date()
  // 残り何日
  const restDay = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  // 終了している
  const isClosedProject = restDay < 0

  return {
    goal,
    grandTotal,
    supporterTotal,
    deadline,
    restDay,
    isClosedProject,
    res,
    isLoading, // 返り値に追加
  }
}
