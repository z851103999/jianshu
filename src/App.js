import React from 'react'
import {Provider} from 'react-redux'
import Header from './common/header'
import {GlobalIcon} from './statics/iconfont/iconfont.js';
import store from './store/index.js'
import 'normalize-url'

// import './styple.css'
function App() {
    return (
        <Provider store={store}>
            <div>
                <GlobalIcon/>
                <Header/>
            </div>
        </Provider>
    )
}

export default App