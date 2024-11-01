
import { useGLTF } from '@react-three/drei';

function MacContainer() {
  const model = useGLTF("robot_arm.glb");

  return (
    <group position={[0.4, -4, 0.7]} >
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer;