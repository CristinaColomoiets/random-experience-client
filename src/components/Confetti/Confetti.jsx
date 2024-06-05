import React, { useRef } from 'react'
import Confetti from 'react-canvas-confetti'

const ConfettiComponent = ({ fire }) => {
    const refAnimationInstance = useRef(null)

    const getInstance = (instance) => {
        refAnimationInstance.current = instance
    }

    const makeShot = () => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                particleCount: 900,
                spread: 100,
                origin: { y: 0.6 },
            });
    }

    if (fire) {
        makeShot();
    }

    return <Confetti refConfetti={getInstance} />
}

export default ConfettiComponent;
