import { Provider } from 'react-redux'
import store from './Tuner/store'
import Tuner from './Tuner/Tuner'
import { StrictMode } from 'react'

export default function App() {
    return (
        <StrictMode>
            <Provider store={store}>
                <Tuner />
            </Provider>
        </StrictMode>
    )
}
