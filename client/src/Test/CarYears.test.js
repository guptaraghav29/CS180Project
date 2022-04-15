import { Experimental_CssVarsProvider } from '@mui/material';
import {render, screen, cleanup } from '@testing-library/react'
import CarYears from '../Components/Search/CarYears';

afterEach(() => {
    cleanup();
});

test("renders without crashing", ()=>{
    render(<CarYears/>);
    const CarYearsComponent = screen.getByTestId('car-years');
    expect(CarYearsComponent).toBeInTheDocument();
 });