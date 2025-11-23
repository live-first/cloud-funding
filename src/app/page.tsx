import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { Header } from '@/views/header'
import { OutlineView } from '@/views/outline'
import { ReturnView } from '@/views/returns'
import { TopView } from '@/views/top'

export default function Home() {
  return (
    <SingleViewLayout
      header={<Header />}
      allView={<TopView />}
      main={<OutlineView />}
      bottomView={<ReturnView />}
    />
  )
}
