import { useState, useEffect } from 'react'
import Guitar from './components/Guitar/Guitar'
import Pitcher from './components/Pitcher/Pitcher'
import PitchMap from './assets/pitch.json'
import { getUserMedia, getClosestPitch, getPointerLeft } from './utils/getPitch'
import GuitarSVG from './GuitarWrapper/GuitarSVG/GuitarSVG'

const getPitchInterval = 200
const targetPitchIdx = [40, 45, 50, 55, 59, 64]

export default function Tuner() {
    const [pitch, setPitch] = useState(-1)
    const [target, setTarget] = useState(-1)
    const [pointerLeft, setPointerLeft] = useState(50)

    useEffect(() => {
        let interval = null
        async function init() {
            const getPitch = await getUserMedia()
            interval = setInterval(() => {
                setPitch(getPitch())
            }, getPitchInterval)
        }
        init()
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (pitch == -1) {
            setTarget(-1)
        } else {
            const newTarget = getClosestPitch(pitch, targetPitchIdx)
            const pointerLeft = getPointerLeft(pitch, newTarget)
            console.log(pitch, PitchMap[newTarget]['frequency'], pointerLeft)
            setTarget(newTarget)
            setPointerLeft(pointerLeft)
        }
    }, [pitch])

    return (
        <>
            <GuitarSVG />
        </>
    )
}
