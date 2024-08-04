"use client"
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import ModelView from "./ModelView";
import { Center, Environment, OrbitControls, View } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Protine from "./Protine"

const Model = () => {
    const model = useRef(null!)
    useGSAP(() => {
        gsap.fromTo("#heading",
            // first state
            {
                y: 100,
                opacity: 0,
                duration: 1.2
            },
            // second state
            {
                y: 0,
                duration: 1.2,
                // repeat: -1,
                // rotate: 90,
                // yoyo: true,
                opacity: 1,
                ease: "power1.inOut",
                // background: "pink",
                // borderRadius: "100"
            })

    }, [])
    return (
        <section>
            <div className="p-4">
                <div className="flex flex-col items-center">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative flex flex-col-reverse md:flex-row justify-around gap-y-56 items-center ">
                        <div id="heading" className="flex flex-col items-center tracking-wide gap-y-2 ">
                            <h1 className="text-xl">Transform Your Body, Transform Your Life</h1>
                            <p className="text-sm">High-Performance Supplements for a Stronger, Healthier You</p>
                        </div>
                        <Canvas className="w-full h-full"
                            frameloop="demand" gl={{ preserveDrawingBuffer: true }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden',
                            }}
                        >

                            <ambientLight intensity={0.5} />
                            <spotLight intensity={0.8} angle={1} penumbra={1} position={[10, 15, -5]} castShadow />
                            <Suspense fallback={null}>
                                <Center>
                                    {/* <ModelView /> */}

                                    <Protine ref={model} scale={[1, 1, 1]} />
                                    <OrbitControls

                                        makeDefault

                                        enableRotate={true}
                                        rotateSpeed={1}
                                        enableZoom={false}
                                    />
                                    <Environment preset="studio" environmentIntensity={0.2} />
                                </Center>
                            </Suspense>
                            <View.Port />
                        </Canvas>
                        <div>logo</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Model;