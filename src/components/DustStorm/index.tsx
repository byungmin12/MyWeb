import React, { useEffect, useRef, useState } from 'react'
import { OBJLoader } from 'three-stdlib'
import { Fog, MeshPhysicalMaterial, Object3D } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

function DustStorm() {
  return (
    <div></div>
  )
}


const url = 'https://raw.githubusercontent.com/iondrimba/images/master/buildings.obj'
const loader = new OBJLoader()


const color = '#353c3c'

const CityFog = () => {
  const [group, setGroup] = useState<Object3D>()
  const buildingRef = useRef<any[]>([])
  const { scene } = useThree()

  useEffect(() => {
    loader.load( url, (obj) => {
      obj.castShadow = true
      obj.receiveShadow = true
      const models = [...obj.children].map((model) => {
        const scale = 0.01

        model.scale.set(scale, scale, scale)
        model.receiveShadow = true
        model.castShadow = true

        return model
      })

      const boxSize = 3
      const meshParams = {
        metalness: 0,
        roughness: 0.77,
      }
      const max = 0.009
      const min = 0.001
      const material = new MeshPhysicalMaterial({ ...meshParams, transparent: true })

      const buildings = new Object3D()
      const gridSize = 40

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const model = models[Math.floor(Math.random() * Math.floor(models.length))].clone()
          ;(model as any).material = material
          model.scale.y = Math.random() * (max - min + 0.01)
          model.position.x = i * boxSize
          model.position.z = j * boxSize

          buildingRef.current.push(model)
          buildings.add(model)
        }
      }
      buildings.castShadow = true
      buildings.receiveShadow = true
      setGroup(buildings)
    })
  }, [])

  useFrame(() => {
    const near = 1
    const far = 208 * (props.style?.opacity.get() ?? 0)
    scene.fog = new Fog(color, near, far)
    if (buildingRef.current) {
      buildingRef.current.forEach((building) => {
        building.material.opacity = props.p?.phase === 'leave' ? 0 : props.style?.opacity.get() ?? 1
      })
    }
  })
  const scale = props.style?.scale.to([0, 1], [0.8, 1])
  return (
    <a.group scale={scale as any}>
      <a.mesh material-opacity={props.style?.opacity}>
        {group ? (
          <primitive castShadow={true} receiveShadow={true} object={group} dispose={null} />
        ) : null}
      </a.mesh>
    </a.group>
  )
}

export default DustStorm