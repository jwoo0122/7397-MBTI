import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';
import Options from './components/option';
import Department from '../src/components/department';

class app extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/departmentMBTI" element={<Options />} />
                    <Route
                        path="/result/:departmentName"
                        element={<Department />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default app;
