import { HTMLProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLProps<HTMLInputElement>

const FileInput = (props: Props) => {
  const { children, ...rest } = props

  return (
    <label>
      <input {...rest} type='file' hidden />
      {children}
    </label>
  )
}

export default FileInput
