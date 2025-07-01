"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Load the slim version

const ParticlesTemplate = () => {
    const [init, setInit] = useState(false);

    // Initialize tsParticles engine
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            // Load the Slim version of tsParticles
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Particles loaded callback
    const particlesLoaded = useCallback(async (container?: Container) => {
        if (container) {
            // console.log("Particles Loaded", container);
        }
    }, []);

    // Return particles only after initialization
    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#0a0a0a", // Background color
                            },
                        },
                        fpsLimit: 120, // FPS Limit
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push", // Click event mode
                                },
                                onHover: {
                                    enable: true,
                                    mode: "attract", // Hover event mode
                                },
                                // resize: true, // Resize the particles on window resize
                            },
                            modes: {
                                push: {
                                    quantity: 4, // Particles to push on click
                                },
                                repulse: {
                                    distance: 200, // Repulse distance on hover
                                    duration: 0.4, // Repulse duration
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff", // Particle color
                            },
                            links: {
                                color: "#ffffff", // Links color between particles
                                distance: 150, // Link distance
                                enable: true,
                                opacity: 0.5, // Link opacity
                                width: 1, // Link width
                            },
                            move: {
                                direction: "none", // No particular direction for movement
                                enable: true,
                                outModes: {
                                    default: "bounce", // Bounce particles off screen edges
                                },
                                random: false,
                                speed: 1, // Movement speed
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    // area: 800, // Area of particles density
                                },
                                value: 100, // Number of particles
                            },
                            opacity: {
                                value: 0.5, // Particle opacity
                            },
                            shape: {
                                type: "polygon", // Particle shape
                            },
                            size: {
                                value: { min: 1, max: 5 }, // Particle size range
                            },
                        },
                        detectRetina: true, // Retina display support
                    }}
                />
            )}
        </>
    );
};

export default ParticlesTemplate;
