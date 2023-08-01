import { useMemo } from 'react'
import Dial from '../Dial/Dial'
import Guitar from '../Guitar/Guitar'
import style from './TuningPanel.module.less'
import classnames from 'classnames'
import { setPitchList, setPitchValue } from '../../Tuner/slice'
import { useSelector } from 'react-redux'

export default function TuningPanel() {
    const pitchList = useSelector(setPitchList)
    const pitchValue = useSelector(setPitchValue)

    const renderSinglePitch = (p) => {
        console.log('render single pitch')
        return (
            <div
                className={classnames(
                    style.singlePitch,
                    p.state == 0
                        ? ''
                        : p.state == 1
                        ? style.tuning
                        : style.finished,
                )}
            >
                <div className={style.pitchName}>
                    {p.pitch}
                    <sub>{p.number}</sub>
                </div>
            </div>
        )
    }

    const renderLeft = useMemo(() => {
        console.log('render left')
        return (
            <div className={classnames(style.leftList, style.pitchList)}>
                {pitchList.slice(0, 3).map((p) => {
                    return <div key={p.index}>{renderSinglePitch(p)}</div>
                })}
            </div>
        )
    }, pitchList)

    const renderRight = useMemo(() => {
        console.log('render right')
        return (
            <div className={classnames(style.rightList, style.pitchList)}>
                {pitchList.slice(3).map((p) => {
                    return <div key={p.index}>{renderSinglePitch(p)}</div>
                })}
            </div>
        )
    }, pitchList)

    return (
        <div className={style.tuningPanel}>
            <Dial />
            <div className={style.dynamic}>
                <div className={style.pointer}>
                    <div className={style.triangle}></div>
                    <div className={style.tail}></div>
                </div>
            </div>
            <div className={style.mainbox}>
                <div className={style.left}>{renderLeft}</div>
                <Guitar />
                <div className={style.right}>{renderRight}</div>
                <div className={style.frequency}>{pitchValue}</div>
            </div>
        </div>
    )
}
