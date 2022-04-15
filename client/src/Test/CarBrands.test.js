import { Experimental_CssVarsProvider } from '@mui/material';
import {render, screen, cleanup } from '@testing-library/react'
import CarBrands from '../Components/Search/CarBrands';

afterEach(() => {
   cleanup();
});

test("renders without crashing", ()=>{
   render(<CarBrands/>);
   const CarBrandsComponent = screen.getByTestId('car-brands');
   expect(CarBrandsComponent).toBeInTheDocument();
});