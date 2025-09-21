import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { UnLoginHeader } from '@/views/header/UnLogintHeader'
import { LoginView } from '@/views/login'

export default function Login() {
  return <SingleViewLayout header={<UnLoginHeader />} main={<LoginView />} />
}
