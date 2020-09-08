import React from 'react'
import Header from './common/header'
import { GlobalIcon } from './statics/iconfont/iconfont.js';
import 'normalize-url'
// import './styple.css'
function App(){
    return(
            <div>
                <div>
                    <GlobalIcon />
                  <Header />
                </div>
            </div>
    )
}

export default App