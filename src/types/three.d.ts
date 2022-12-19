import { extend, ReactThreeFiber } from '@react-three/fiber'
import { Line } from 'three'


extend({ Line_: Line })

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      line_: ReactThreeFiber.Object3DNode<Line, typeof Line>
    }
  }
}

