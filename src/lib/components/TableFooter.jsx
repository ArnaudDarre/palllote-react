import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CaretLeft, CaretRight, CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react'

import { Select } from './Select'
import { Text } from './Text'

export const TableFooter = ({
  dense,
  className,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'tableFooter',
        {
          'tableFooter--dense': dense
        },
        className
      ])}
      {...props}
    >
      <div className={classnames('tableFooter__rows')}>
        <Select dense id="rows">
          <option value="1" >10</option>
          <option value="2" >25</option>
          <option value="2" >50</option>
          <option value="2" >100</option>
          <option value="2" >All</option>
        </Select>
      </div>
      <div className={classnames('tableFooter__pages')}>
        <span className={classnames('tableFooter__button tableFooter__first')}><CaretDoubleLeft size={16} /></span>
        <span className={classnames('tableFooter__button tableFooter__prev')}><CaretLeft size={16} /></span>
        <button className={classnames('tableFooter__button tableFooter__button--active tableFooter__page')}><Text variant='caption'>1</Text></button>
        <button className={classnames('tableFooter__button tableFooter__page')}><Text variant='caption'>2</Text></button>
        <button className={classnames('tableFooter__button tableFooter__page')}><Text variant='caption'>3</Text></button>
        <button className={classnames('tableFooter__button tableFooter__dots')}><Text variant='caption'>…</Text></button>
        <button className={classnames('tableFooter__button tableFooter__page')}><Text variant='caption'>8</Text></button>
        <span className={classnames('tableFooter__button tableFooter__next')}><CaretRight size={16} /></span>
        <span className={classnames('tableFooter__button tableFooter__last')}><CaretDoubleRight size={16} /></span>
      </div>
    </div>
  )
}

TableFooter.propTypes = {
  dense: PropTypes.bool,
  className: PropTypes.node
}

TableFooter.defaultProps = {
}
