import { ChildrenType } from '@/types/common'
import React, { FC } from 'react'

const AuthLayout:FC<ChildrenType> = ({ children }) => {
	return (
		<section className='w-full h-full flex items-center justify-center'>
			{children}
		</section>
	)
}

export default AuthLayout
