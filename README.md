# Fridge to Glass

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Build Status](https://travis-ci.org/rwilliams659/fridge-to-glass.svg?branch=master)](https://travis-ci.org/rwilliams659/fridge-to-glass)


![logo](./src/assets/f2glogo.png)

## Table of Contents

- [Brief Description](#brief-description)
- [How to use](#how-to-use)
- [Installation](#installation)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [Acknowledgements and Resources](#acknowledgements-and-resources)

<!-- Brief Description -->

## Brief Description
We have created an app that allows a user to search for both alcoholic and non-alcoholic drink recipes that use an ingredient the user provides in the search. We wanted to create an app that helps people to see all of the drink options they have, often with ingredients they already have in their homes.

## How to use
User puts an ingredient they want to make a drink with in the search bar. They then choose the type of drinks they want (alcoholic, non-alcoholic, or both) and click 'Find Drinks' to get all the drinks that match their search. Users can click on the drink cards to get the full recipe.

Users can also click on the 'Random Drink' button to immediately see a recipe for a random drink.

## Built With

- React 16
- Redux 4
- CSS

## Installation

**Fork this repository:**

https://github.com/relyt4me/stretch-project

**Clone your forked repository**

`git clone` and the copied URL

**Change into the directory and install the project dependencies**

`cd` into directory and run `npm install` for dependencies

### How to see the product

In terminal, go to the project directory and run 'npm start' to open the project in the browser. Have fun finding a drink to try!

<!-- ### Live version -->

<!-- [Deployed Site](https://fridge-to-glass.herokuapp.com/) -->

## Functionality

### Searching for an ingredient to get a list and selecting one for the recipe  
![main app functionality](src/assets/main-functionality.gif)

### Random Drink Search 
![random drink functionality](src/assets/random-drink.gif)

### Error handling for no drinks in that filter 
![no recipes found error](src/assets/filter-no-recipes.gif)

### Error handing for an ingredient not found in any drinks 
![ingredient not found with search](src/assets/ingredient-not-found.gif)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.  

See the [open issues](https://github.com/relyt4me/stretch-project/issues) for a list of proposed features (and known issues).

- Fork the Project

- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

- Push to the Branch (`git push origin feature/AmazingFeature`)

- Open a Pull Request

## Authors

👤 **Tyler Haglund**
- Github: [relyt4me](https://github.com/relyt4me)
- LinkedIn: [Tyler](https://www.linkedin.com/in/tyler-haglund/)

👤 **Taryn Martin**
- Github: [tarynmartin](https://github.com/tarynmartin)
- LinkedIn: [Taryn](https://www.linkedin.com/in/tarynmartin919/)

👤 **Rachel Williams**
- Github: [rwilliams659](https://github.com/rwilliams659)
- LinkedIn: [Rachel](https://www.linkedin.com/in/rachelsarahwilliams/)

## Acknowledgements and Resources

[Original Project Link](https://frontend.turing.io/projects/module-3/stretch.html)

[Heather Faerber](https://github.com/hfaerber) for providing help and feedback on testing with Redux.

[Cocktail Database](https://www.thecocktaildb.com/api.php) API we used for our drink recipes.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/relyt4me/stretch-project.svg?style=flat-square
[contributors-url]: https://github.com/relyt4me/stretch-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/relyt4me/stretch-project.svg?style=flat-square
[forks-url]: https://github.com/relyt4me/stretch-project/network/members
[stars-shield]: https://img.shields.io/github/stars/relyt4me/stretch-project.svg?style=flat-square
[stars-url]: https://github.com/relyt4me/stretch-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/relyt4me/stretch-project.svg?style=flat-square
[issues-url]: https://github.com/relyt4me/stretch-project/issues
