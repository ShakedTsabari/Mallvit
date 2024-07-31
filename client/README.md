# Client

## Project Overview

The project is structured into several main components to provide a seamless user experience.

## Project Structure
your-project/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── AppHomePage/
│   │   │   ├── AppHomePage.jsx
│   │   │   ├── AppHomePage.css
│   │   │   └── ...
│   │   │
│   │   ├── MallPage/
│   │   │   ├── MallPage.jsx
│   │   │   ├── MallPage.css
│   │   │   ├── Forum.jsx
│   │   │   ├── Forum.css
│   │   │   ├── MapPage.jsx
│   │   │   ├── MapPage.css
│   │   │   ├── Stores.jsx
│   │   │   ├── Stores.css
│   │   │   └── ...
│   │   │
│   │   └── ...
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
│
└── README.md

## Components

### AppHomePage

Includes:
- A list of all available Azrieli malls.
- An about section providing information about the application.

Files:
- `AppHomePage.jsx`
- `AppHomePage.css`

### MallPage

This is the main page for each individual mall. It includes the following subcomponents:

#### Forum

A section where users can add and view posts of the current day. posts like sales, events, and more.

Files:
- `Forum.jsx`
- `Forum.css`

#### MapPage

A section displaying the interactive map of the mall.
Helps users navigate the mall and find stores.

Files:
- `MapPage.jsx`
- `MapPage.css`

#### Stores

A section listing all the stores in the mall, with the option to filter by floor.

Files:
- `Stores.jsx`
- `Stores.css`
