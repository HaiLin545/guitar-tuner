import style from './ConfigPanel.module.less'
import Switch from '@mui/material/Switch'
import { transformIndexToPitch } from '../../utils/tools'

const appName = 'Tuner'

export default function ConfigPanel(props) {
    const { pitchModeList } = props

    const renderMode = (pitch) => {
        console.log('render mode', pitch)
        const pitchList = transformIndexToPitch(pitch)
        return (
            <div className={style.pitchMode} key={pitch.id}>
                <div className={style.modeName}>{pitch.modeName}</div>
                <div className={style.pitchNameList}>
                    {pitchList.map((p) => (
                        <span key={p.index} className={style.pitchName}>
                            {p.pitch}
                            <sub>{p.number}</sub>
                        </span>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className={style.configPanel}>
            <div className={style.appName}>{appName}</div>
            <div className={style.configList}>
                <div className={style.autoDetect}>
                    <div>自动识别琴弦</div>
                    <Switch />
                </div>
                <div className={style.pitchModeGroup}>
                    {pitchModeList.map((p) => renderMode(p))}
                </div>
                <div className={style.settingBtn}></div>
            </div>
        </div>
    )
}
