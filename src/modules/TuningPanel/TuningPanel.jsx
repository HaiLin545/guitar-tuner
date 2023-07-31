import { useState } from 'react'
import Degree from '../Degree/Degree'
import Guitar from '../Guitar/Guitar'
import style from './TuningPanel.module.less'
import { useSelector, useDispatch } from 'react-redux'
import { updatePitchList, patchList } from './slice'
import classnames from 'classnames'

export default function TuningPanel({ pitch }) {
    const pitchList = useSelector(patchList)
    const dispatch = useDispatch()

    const renderSinglePitch = (name, state) => {
        if (state == 0) {
            return <div className={classnames(style.singlePitch)}>{name}</div>
        } else if (state == 1) {
            return (
                <div className={classnames(style.singlePitch, style.tuning)}>
                    {name}
                </div>
            )
        } else if (state == 2) {
            return (
                <div className={classnames(style.singlePitch, style.finished)}>
                    {name}
                </div>
            )
        }
    }

    const renderLeft = () => {
        return (
            <div className={classnames(style.leftList, style.pitchList)}>
                {pitchList.slice(0, 3).map((p) => {
                    console.log('render', p.pitch)
                    return (
                        <div key={p.pitch}>
                            {renderSinglePitch(p.name, p.state)}
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderRight = () => {
        return (
            <div className={classnames(style.rightList, style.pitchList)}>
                {pitchList.slice(3).map((p) => {
                    console.log('render', p.pitch)
                    return (
                        <div key={p.pitch}>
                            {renderSinglePitch(p.name, p.state)}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={style.tuningPanel}>
            <Degree />
            <div className={style.tracker}>tracker{pitch}</div>
            <div className={style.mainbox}>
                <div className={style.left}>{renderLeft()}</div>
                <Guitar />
                <div className={style.right}>{renderRight()}</div>
            </div>
        </div>
    )
}
