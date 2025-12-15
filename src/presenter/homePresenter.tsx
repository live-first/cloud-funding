'use client'

import { CloudFundResponseType, useCloudFundApi } from '@/api/cloudApi'
import { returnItems } from '@/data/items/returnItems'

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
      supporterTotal: p.supporterTotal,
      total, // 売上金額
    }
  })

  // 目標金額
  const goal = 500000
  // 支援総額
  const grandTotal = result?.reduce((sum, item) => sum + item.total, 0) ?? 0
  // 支援者数
  const supporterTotal = result ? result[0].supporterTotal : 0
  // プロジェクト開始日時
  const startDate = new Date(2025, 11, 12, 18, 0, 0)
  // プロジェクト終了日時
  const endDate = new Date(2026, 0, 12, 22, 0, 0)
  // 現在日時
  const now = new Date()
  // 残り何日
  const restDay = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  // 開始前
  const isBeforeStart = now < startDate
  // 終了後
  const isClosedProject = endDate < now

  return {
    goal,
    grandTotal,
    supporterTotal,
    startDate,
    endDate,
    restDay,
    isBeforeStart,
    isClosedProject,
    res,
    isLoading, // 返り値に追加
  }
}
