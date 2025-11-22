'use client'

import { Container } from '@mui/material'
import { ReactNode } from 'react'

export type LayoutProps = {
  header?: ReactNode
  main?: ReactNode
  allView?: ReactNode
  bottomView?: ReactNode
  footer?: ReactNode
}

export const SingleViewLayout = (props: LayoutProps) => {
  const { header, main, allView, bottomView, footer } = props

  return (
    <div>
      {header && <header className='fixed w-full h-16 z-50'>{header}</header>}
      <main className='min-h-[900px] flex flex-col'>
        {header && <div className='h-16'></div>}
        {allView}
        <div className='bg-white w-full'>
          <Container maxWidth='lg'>{main}</Container>
        </div>
        {bottomView}
      </main>
      <footer>{footer}</footer>
    </div>
  )
}
