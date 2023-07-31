import Pitchfinder from 'pitchfinder'

const constraint = {
    audio: true,
}
let audioCtx = null

export async function getUserMedia() {
    const stream = await navigator.mediaDevices.getUserMedia(constraint)
    if (!audioCtx) {
        audioCtx = new AudioContext()
    }
    const source = audioCtx.createMediaStreamSource(stream)
    const analyser = audioCtx.createAnalyser()
    const buffer = new Float32Array(analyser.fftSize)
    const detectPitch = Pitchfinder.AMDF({
        sampleRate: audioCtx.sampleRate,
    })
    source.connect(analyser)

    const getPitch = () => {
        analyser.getFloatTimeDomainData(buffer)
        console.log('getPitch')
        const start = Date.now()
        const pitch = detectPitch(buffer) ?? 0
        const end = Date.now()
        console.log('pitch = ', pitch, 'get pitch time: ', end - start, 'ms')
        return pitch
    }
    return getPitch
}
