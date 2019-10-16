import React, { FunctionComponent, HTMLProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLProps<HTMLInputElement>

const FileInput: FunctionComponent<Props> = props => {
  const { children, ...rest } = props

  return (
    <label>
      <input {...rest} type='file' hidden />
      {children}
    </label>
  )
}

export default FileInput
