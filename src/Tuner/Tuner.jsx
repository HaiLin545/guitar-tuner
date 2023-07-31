import ConfigPanel from '../modules/ConfigPanel/ConfigPanel'
import TuningPanel from '../modules/TuningPanel/TuningPanel'
import style from './Tuner.module.less'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserMedia } from '../utils/getPitch'
import { setPitchList, setPitchModeList } from './slice'

export default function Tuner() {
    const [pitch, setPitch] = useState(0)
    const pitchList = useSelector(setPitchList)
    const pitchModeList = useSelector(setPitchModeList)

    const dispatch = useDispatch()
    console.log('pitchList', pitchList)
    useEffect(() => {
        let interval = 0
        async function initGetPitch() {
            const getPitch = await getUserMedia()
            console.log('init get pitch')
            interval = setInterval(() => {
                setPitch(getPitch())
            }, 50)
        }
        // initGetPitch()
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className={style.tuner}>
            <ConfigPanel pitchModeList={pitchModeList} />
            <TuningPanel pitchList={pitchList} />
        </div>
    )
}
