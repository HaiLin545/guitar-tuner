import { Provider } from "react-redux";
import store from "./Tuner/store/store";
import Tuner from "./Tuner/Tuner";

export default function App() {
    return (
        <Provider store={store}>
            <Tuner />
        </Provider>
    );
}
