import style from './ConfigPanel.module.less'
import Switch from '@mui/material/Switch'
import { transformIndexToPitch } from '../../utils/tools'
import { Button } from '@mui/material'
import SettingIcon from '@mui/icons-material/Settings'
import { setPitchModeList } from '../../Tuner/slice'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

const appName = 'Tuner'

export default function ConfigPanel() {
    const pitchModeList = useSelector(setPitchModeList)

    const renderMode = (pitchMode) => {
        const pitchList = transformIndexToPitch(pitchMode)
        return (
            <div className={style.pitchMode} key={pitchMode.id}>
                <div className={style.modeName}>{pitchMode.modeName}</div>
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

    const renderPitchModeGroup = useMemo(() => {
        console.log('render pitch mode group')
        return (
            <div className={style.pitchModeGroup}>
                {pitchModeList.map((p) => renderMode(p))}
                {pitchModeList.map((p) => renderMode(p))}
            </div>
        )
    }, pitchModeList)

    return (
        <div className={style.configPanel}>
            <div className={style.appName}>{appName}</div>
            <div className={style.configList}>
                <div className={style.autoDetect}>
                    <div>自动识别琴弦</div>
                    <Switch />
                </div>
                {renderPitchModeGroup}
                <div className={style.btnWrapper}>
                    <Button
                        className={style.settingBtn}
                        startIcon={<SettingIcon />}
                        variant="outlined"
                    >
                        设置
                    </Button>
                </div>
            </div>
        </div>
    )
}
