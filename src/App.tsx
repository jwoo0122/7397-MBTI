import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Options from './components/option';
import Department from './components/department';

interface Props {
    test: string;
}

class App extends React.Component<Props> {
    render() {
        const { test } = this.props;
        console.log({ test });

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/departmentMBTI" element={<Options />} />
                    <Route
                        path="/result/:departmentName"
                        element={<Department />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
