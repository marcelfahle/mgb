import { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

export const mq = generateMedia({
  veryhuge: '1920px',
  huge: '1440px',
  large: '1280px',
  medium: '1024px',
  tablet: '960px',
  small: '768px',
  mini: '450px',
})

export const rem = px => (px / 16).toFixed(2)

export const Left = css`
  left: 8%;
`

export const WrapperPadding = css`
  padding-left: 20px;
  padding-right: 20px;
  ${mq.greaterThan('large')`
    padding-left: 40px;
    padding-right: 40px;
  `};
  ${mq.greaterThan('huge')`
    padding-left: 80px;
    padding-right: 80px;
    `};
`
