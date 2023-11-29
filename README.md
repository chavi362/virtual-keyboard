# Virtual Keyboard App

This is a React-based virtual keyboard app with support for multiple languages and emoji input.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Virtual keyboard with support for Hebrew, English, and Arabic languages.
- Emoji keyboard for expressive input.
- Stylish and customizable interface.
- Undo and redo functionality.
- ...

## Demo

![image](https://github.com/chavi362/virtual-keyboard/assets/140444217/1826a4d9-f853-43a3-a7fd-53f36ad57e1d)


## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/chavi362/virtual-keyboard.git
   
2. open the project in terminal and then run:

   npm install

# Project Structure

The project follows a specific structure to organize its files and directories. Below is an overview of the main components:

## Directory Structure

```plaintext
virtual-keyboard/
│
├── src/                    # Source code directory
│   ├── assets/             # Static assets like images, icons, etc.
│   ├── components/         # React components
│   │   ├── VirtualKeyboard.js     # Main virtual keyboard component
│   │   ├── SpecialButtons.js          # Component for special buttons such as:redo, undo and clear all the text
│   │   └── ...             # Other keyboard-related components
│   ├── styles/             # CSS or styling files
│   │   ├── keyboardStyles.css    # Styles for the virtual keyboard
│   │   └── ...             # Other styling files
│   ├── utils/              # Utility functions
│   │   ├── keyMappings.js  # Key mappings and configurations
│   │   └── ...             # Other utility functions
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point of the application
│
├── public/                 # Public directory for static files
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Favicon icon
│   └── ...
│
├── .gitignore              # Git ignore file
├── package.json            # Node.js project configuration
├── README.md               # Project documentation
├── ...                     # Other configuration files


## Contributing

We welcome contributions from the community to help improve the Icy Tower Game. If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:
3. Make your changes and ensure they are working properly.

4. Commit your changes:
5. Push your changes to your forked repository:
6. Open a pull request on the main repository, describing your changes and explaining why they are valuable.

Please ensure that your contributions adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).
