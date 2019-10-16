import React, { FunctionComponent } from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

type Props = {
  text: string
  TypographyProps?: TypographyProps
}

const MultiParagraph: FunctionComponent<Props> = props => {
  return (
    <>
      {props.text.split('\n').map(
        (paragraph, index) =>
          !!paragraph && (
            <Typography key={index} paragraph {...props.TypographyProps}>
              {paragraph}
            </Typography>
          )
      )}
    </>
  )
}

export default MultiParagraph
