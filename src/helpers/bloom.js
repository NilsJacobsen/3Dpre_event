import * as THREE from "three";
import React, { useRef, useMemo, useEffect, Suspense } from "react";
import { render } from "react-dom";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
  useResource
} from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export default function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const ref = useResource();
  const composer = useRef();
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
    size
  ]);
  useEffect(
    () => void ref.current && composer.current.setSize(size.width, size.height),
    [ref, size]
  );
  useFrame(() => ref.current && composer.current.render(), 1);
  return (
    <>
      <scene ref={ref}>{children}</scene>
      <EffectComposer ref={composer} args={[gl]}>
        <RenderPass attachArray="passes" scene={ref.current} camera={camera} />
        <UnrealBloomPass attachArray="passes" args={[aspect, 3, 0.8, 0]} />
      </EffectComposer>
    </>
  );
}