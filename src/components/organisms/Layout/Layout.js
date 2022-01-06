import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Logo from '@resources/svgs/logo.svg'
import { SearchInput } from '@atoms'
import { Wrapper, Header, Main } from './styles'

const Layout = ({ children, onSearch }) => {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <SearchInput onSearch={onSearch} placeHolder='Search here...' />
      </Header>
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default memo(Layout)
