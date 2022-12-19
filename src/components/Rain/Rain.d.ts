import { extend, ReactThreeFiber } from '@react-three/fiber'
import { Line } from 'three'


extend({ Line_: Line })

declare global {
  declare module JSX {
    interface IntrinsicElements {
      line_: ReactThreeFiber.Object3DNode<Line, typeof Line>
    }
  }
}

