import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { HomeView } from '@/views/home'

export default function Home() {
  return (
    <SingleViewLayout header={<></>} main={<HomeView />} />
  )
}
