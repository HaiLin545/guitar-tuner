import style from './Dial.module.less'
import { useMemo } from 'react'

const needleArr = Array.from({ length: 3 }, (_, i) => i)

export default function Dial() {
    const targetPitch = 'E'
    const renderNeedles = useMemo(() => {
        return (
            <div className={style.bg}>
                {needleArr.map((idx) => (
                    <div className={style.s} key={idx}></div>
                ))}
                <div className={style.l}></div>
                {needleArr.map((idx) => (
                    <div className={style.s} key={idx}></div>
                ))}
            </div>
        )
    })
    return (
        <div className={style.dial}>
            <div className={style.container}>
                <div className={style.lowSymbol}>
                    <i>b</i>
                </div>
                <div className={style.main}>
                    <span className={style.targetPitch}>{targetPitch}</span>
                    {renderNeedles}
                </div>
                <div className={style.highSymbol}>#</div>
            </div>
        </div>
    )
}
