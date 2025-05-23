'use client';
import React from 'react';

import { useEffect, useState } from 'react';
import type { Engine } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useMemo } from 'react';

const ParticlesClient = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
  const options = useMemo(() => ({
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "#040D12",
      },
    },
    particles: {
      color: {
        value: "#93B1A6",
      },
      links: {
        enable: true,
        color: "#5C8374",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: "bounce"
      },
      number: {
        value: 50,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.7,
          },
        },
      },
    },
  }), []);

  return (
    <Particles
      id="tsparticles"
      // init={init as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options={options as any}
      className="absolute inset-0 -z-10"
    />
  );
};

export default React.memo(ParticlesClient);
