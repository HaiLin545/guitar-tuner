import { useState } from 'react'
import Degree from '../Degree/Degree'
import Guitar from '../Guitar/Guitar'
import style from './TuningPanel.module.less'
import classnames from 'classnames'

export default function TuningPanel({ pitchList }) {
    console.log('tuning panel pitchlist', pitchList)
    const renderPitchName = (pitch, number) => {
        return (
            <div className={style.pitchName}>
                {pitch}
                <sub>{number}</sub>
            </div>
        )
    }

    const renderSinglePitch = (p) => {
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
                {renderPitchName(p.pitch, p.number)}
            </div>
        )
    }

    const renderLeft = () => {
        return (
            <div className={classnames(style.leftList, style.pitchList)}>
                {pitchList.slice(0, 3).map((p) => {
                    return <div key={p.index}>{renderSinglePitch(p)}</div>
                })}
            </div>
        )
    }

    const renderRight = () => {
        return (
            <div className={classnames(style.rightList, style.pitchList)}>
                {pitchList.slice(3).map((p) => {
                    return <div key={p.index}>{renderSinglePitch(p)}</div>
                })}
            </div>
        )
    }

    return (
        <div className={style.tuningPanel}>
            <Degree />
            <div className={style.tracker}>tracker</div>
            <div className={style.mainbox}>
                <div className={style.left}>{renderLeft()}</div>
                <Guitar />
                <div className={style.right}>{renderRight()}</div>
            </div>
        </div>
    )
}
