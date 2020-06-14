import React, { createElement } from 'react'
import { routeNode, withRoute } from 'react-router5'
import { observer } from 'mobx-react'
import ST from './index.scss'
import Empty from '../Empty'
import ButtonStand from '../ButtonStand'


const Main = (props) => {
  const { route } = props
  const segment = route.name.split('.')[0]

  const components = {
    buttonStand: ButtonStand,
  }

  const SelectedElement = components[segment] || Empty

  return (
    <div className={ST.wrapper}>
      <SelectedElement />
    </div>
  )
}

export default routeNode('')(observer(Main))
