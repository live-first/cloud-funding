'use client'

import { CloudFundResponseType, useCloudFundApi } from '@/api/cloudApi'
import { returnItems } from '@/data/items/returnItems'

export const homePresenter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getCloudFund } = useCloudFundApi()
  const res = getCloudFund.data?.data as CloudFundResponseType[]

  console.log(res)

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

  // 支援総額
  const grandTotal = result?.reduce((sum, item) => sum + item.total, 0) ?? 0
  // 支援者数
  const supporterTotal = result?.reduce((sum, item) => sum + item.supporter, 0) ?? 0

  return {
    grandTotal,
    supporterTotal,
    res,
  }
}
