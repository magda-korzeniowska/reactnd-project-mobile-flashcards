# Mobile Flashcards

Project created for the Udacity React Nanodegree Program.

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [Create React Native App](#create-react-native-app)
* [Dependencies](#dependencies)
* [Sources](#sources)
* [Additional Information](#additional-information)
* [Contributing](#contributing)

## Project Description

For the **Mobile Flashcards** Project, students had to build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards.
The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. The project's goal was to strenghten the understanding of how to use React Native to build an iOS and Android application.

There was no starter code for the **Mobile Flashcards** Project.

The app uses React Native and Redux with react-native, react-redux, react-navigation packages. The complete list of dependencies can be found below.

## Installation
1. Clone repository using:

    `$ git clone https://github.com/magda-korzeniowska/reactnd-project-mobile-flashcards.git`

2.  Install all dependencies:

    `$ npm install` or `$ yarn install`

3. Run application:

    `$ npm start` or `$ yarn start`

4. Follow the instructions to open the app in iOS or Android simulators / devices

## Create React Native App
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)

## Dependencies
- [create-react-native-app](https://github.com/react-community/create-react-native-app)
- [redux](https://www.npmjs.com/package/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-navigation](https://reactnavigation.org/)

## Sources
- icons: [@expo/vector-icons](https://expo.github.io/vector-icons/)

## Additional information
* AsyncStorage is used to store data - there are two default decks set initially: JavaScript and React, any additionally added decks can be removed by clearing the emulator memory cache
* Local Notifications are added - the app will remind user at 8 p.m. to take at least one quiz if the user doesn't take any (if the user allows Expo notifications).

## Testing
This application has been tested on expo on both iOS and Android simulator and also on iOS device (iPhone 8).

## Contributing
This is a Udacity student's project. Therefore, no pull requests will be accepted.
