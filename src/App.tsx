import React from 'react';
import Button from "./components/Atom/Button/button";
import {ThemeId} from "./utill/theme";


function App() {
    return (
        <div style={{display: 'flex'}}>
            <Button themeId={ThemeId.DARK_GRAY} onClick={() => null}>
                <h1> hello world </h1>
            </Button>
        </div>
    );
}

export default App;
