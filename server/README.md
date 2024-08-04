# Server

## Project Overview

The server is structured into several main folders for organized and clear code.

### API Routes
The routes folder contains all the API endpoints for communication with the front-end. These routes handle HTTP requests and responses, interacting with the controllers to perform various operations.

### Database Models
The models folder contains the MongoDB schemas defined using Mongoose. These schemas define the structure of the data to be stored in the MongoDB database.

### Controllers
The controllers folder contains the logic behind the API routes. Controllers interact with the models to perform CRUD operations and implement the core functionality of the application.

### Scraper
The scraper folder is responsible for automating the data scraping process from various malls. The scraper is designed to handle multiple mall groups, each with its own configuration file and logic file for scraping.

- **logics/:** Contains the actual scraping functions for each mall group.
- **configs/:** Contains the scraping instructions for each mall group.
- **mainScraper.js:** Manages the overall scraping tasks and coordinates between different mall groups.

**Scraping Logic:**
For each mall group (e.g., Azrieli, Ofer), there are specific configuration files and logic files:

- **Config File:** Defines the scraping instructions (e.g., selectors for HTML elements).
- **Logic File:** Contains functions for scraping the mall list and store information.
- **The main scraper file:** (mainScraper.js) manages the entire scraping process, invoking the appropriate functions from the logic files based on the configuration.

### Future Steps
The next step for this project is to create a pipeline that allows the scraped data to flow directly into the MongoDB database. This will involve integrating the scraping logic with the database models and ensuring that the data is stored efficiently and accurately.