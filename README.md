# CS180Project

This project is for the "CS180: Introduction to Software Engineering" class at the University of California, Riverside for Spring 2022.

Group Members:

1. Raghav Gupta
2. Brij Shah
3. Dhruv Parmar
4. Harshi Doddapaneni
5. Yug Patel

## Features

We are performing data analytics on the used car dataset to achieve following results:

1. Given make and model and/or year of a car, the average price distribution among the regions. (Shows a bar graph)
2. Given make and model and/or year of a car, average price of the selected entries.
3. Given make and model and/or year of a car, the average odometer distribution among the regions. (This is perfomed with incremental analysis. Shows a pie chart)

Other Features:

- Search for cars by entering make of a car and additional filters by model and/or year.
- Add car entries to the dataset
- Export the results as a csv file.
- Delete car entries from the dataset.

## Installation/Usage

> Install NPM packages

     $ cd server
     $ npm i --force
     $ cd ..
     $ cd client
     $ npm i --force
     $ cd ..

> Start the back-end server

     $ cd server
     $ npm run dev

> Start the front-end

     $ cd client
     $ npm start

