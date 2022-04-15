import { Experimental_CssVarsProvider } from '@mui/material';
import {render, screen, cleanup } from '@testing-library/react'
import CarModels from '../Components/Search/CarModels';

afterEach(() => {
    cleanup();
});

test("renders without crashing", ()=>{
    render(<CarModels/>);
    const CarModelsComponent = screen.getByTestId('car-models');
    expect(CarModelsComponent).toBeInTheDocument();
 });