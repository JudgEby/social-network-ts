import React from 'react'

type PropsType = {
	children: React.ReactElement
	loader?: React.ReactElement
}

const SuspenseLoading = (props: PropsType) => {
	const { children } = props

	return (
		<React.Suspense fallback={props.loader || <div>Loading...</div>}>
			{children}
		</React.Suspense>
	)
}

export default SuspenseLoading
