import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { Header } from '@/views/header'
import { LegalView } from '@/views/legal'

export default function Success() {
  return <SingleViewLayout header={<Header />} main={<LegalView />} />
}
