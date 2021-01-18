import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { ImageUtils } from 'three';

const Box = ({ position }) => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const Particle = ({ position }) => {
  const mesh = useRef();
  const rotation = useMemo(() => [0, 0, Math.random() * 360], []);

  const smokeTexture = useMemo(() => {
    ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    return ImageUtils.loadTexture(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'
    );
  }, []);

  useFrame((_, delta) => {
    mesh.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh position={position} rotation={rotation} ref={mesh}>
      <planeGeometry args={[300, 300]} />
      <meshLambertMaterial
        args={{ color: 0xffffff, map: smokeTexture, transparent: true }}
      />
    </mesh>
  );
};

const Smoke = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 150 }, () => [
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        -500,
      ]),
    []
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        {particles.map((p, i) => (
          <Particle key={i} position={p} />
        ))}
      </Canvas>
    </div>
  );
};

export default Smoke;
