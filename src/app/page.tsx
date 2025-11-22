import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { OutlineView } from '@/views/outline'
import { ReturnView } from '@/views/returns'
import { TopView } from '@/views/top'

export default function Home() {
  return (
    <SingleViewLayout allView={<TopView />} main={<OutlineView />} bottomView={<ReturnView />} />
  )
}
