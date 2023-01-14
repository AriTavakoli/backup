import { useAutoAnimate } from "@formkit/auto-animate/react"
import {useRef} from 'react'

export default function DropDown({ children }) {

  const [animationParent] = useAutoAnimate()

  return (
    <div className="dropdown" ref = {animationParent} style={{ zIndex: '499' }} >
      {children}
    </div>
  )
}