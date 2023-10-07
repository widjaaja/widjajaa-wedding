import React, { useCallback, useMemo } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { motion } from "framer-motion";

import config from "../../assets/Json/multiplePolygonMasks.json";
import classes from './CoverParticles.module.scss';


const CoverParticles: React.FC<any> = () => {
    const particlesData : any = config;
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles 
            className={classes.CoverPagesContainer} 
            id="tsparticles" 
            options={particlesData}
            init={particlesInit} 
            loaded={particlesLoaded} 
        />

    );
};

export default CoverParticles;