// yarn add react-spinners

//yarn add @emotion/core

import React from 'react'
import {css} from '@emotion/core'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

const loaderCss = css`
  margin-top: 25px;
  margin-bottom : 25px;
`

function LoadingIndicator() {
    return (
        <div>
            <BounceLoader css={loaderCss} size={24} color='red' loading />
            <BarLoader css={loaderCss} size = {48} color='orange' loading />
            <BeatLoader  css={loaderCss} size={72} color='blue' loading />
        </div>
    )
}

export default LoadingIndicator
