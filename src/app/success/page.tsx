import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { Header } from '@/views/header'
import { SuccessView } from '@/views/success'

export default function Success() {
  return <SingleViewLayout header={<Header />} allView={<SuccessView />} />
}
