import { Center, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Llights";
import { Suspense } from "react";
import Protine from "./Protine";

const ModelView = () => {
    return (
        <View>
            <ambientLight intensity={0.8} />
            <PerspectiveCamera position={[0, 0, 600]} />
            <ambientLight intensity={0.8} />
            <Suspense fallback={null}>
                <Center>
                    <Protine scale={[10, 10, 10]} />
                    <OrbitControls />
                </Center>
            </Suspense>
        </View>
    );
}

export default ModelView;