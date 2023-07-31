import allPitch from '../data/allPitch'

export const getPitchListWithState = (modeList, index) => {
    return modeList[index].pitchIndexList.map((idx) => ({
        ...allPitch[idx],
        state: 0,
    }))
}
export const transformIndexToPitch = (mode) => {
    return mode.pitchIndexList.map((idx) => allPitch[idx])
}
