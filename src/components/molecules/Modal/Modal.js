import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CrossIcon from '@resources/svgs/cross.svg'
import { ESCAPE_BUTTON_KEYCODE } from '@constants'
import { Loading } from '@atoms'
import { Wrap, InnerWrap, CloseButton } from './styles'

const Modal = ({ isActive, isLoading, onClose, children }) => {
  if (!isActive) return null

  useEffect(() => {
    const close = (event) => {
      if (event.keyCode === ESCAPE_BUTTON_KEYCODE) {
        onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <Wrap onClick={onClose}>
      <InnerWrap role='dialog' onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CrossIcon />
        </CloseButton>
        {isLoading ? <Loading /> : children}
      </InnerWrap>
    </Wrap>
  )
}

Modal.propTypes = {
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default Modal
