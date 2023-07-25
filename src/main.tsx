import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app.component";
import {Provider} from "react-redux";
import {store} from "./store/index.store";
import {BrowserRouter} from "react-router-dom";
import {StableNavigateContextProvider} from "./context/stable-navigate.context";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StableNavigateContextProvider>
                    <Toaster/>
                    <App/>
                </StableNavigateContextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
