![Alt Virtual_Keyboard](https://github.com/solvman/virtual-keyboard/assets/4379350/947b49ba-c81d-484b-ae95-044452553101)

# Virtual Keyboard App

This is a React-based virtual keyboard app with support for multiple languages and emoji input.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Virtual keyboard with support for Hebrew, English, and Arabic languages.
- Emoji keyboard for expressive input.
- Stylish and customizable interface.
- Undo and redo functionality.

## Demo

![image](https://github.com/chavi362/virtual-keyboard/assets/140444217/1826a4d9-f853-43a3-a7fd-53f36ad57e1d)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/chavi362/virtual-keyboard.git
```
   
2. open the project in terminal and then run:
```bash
npm install
npm run dev
```

## Project Structure

The project follows a specific structure to organize its files and directories. Below is an overview of the main components:

```plaintext
virtual-keyboard/
│
├── src/                    # Source code directory
│   ├── assets/             # Static assets like images, icons, etc.
│   ├── components/         # React components
│   │   ├── VirtualKeyboard.jsx     # Main virtual keyboard component
│   │   ├── SpecialButtons.jsx      # Component for special buttons such as:redo, undo and clear all the text
|   |   ├── Screen.jsx      # the text the user typed
|   |   ├── EmojiKeyBoard.jsx             
|   |   ├── KeyBoard.jsx
|   |   ├── KeyBoardLanguage.tsx
|   |   ├── KeyBoardStylee.css  
│   │   ├── keyboardStyles.css    # Styles for the virtual keyboard
│   │   └── ...             # Other files
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
 ...                     # Other configuration files
```

## Contributing

We welcome contributions from the community to help improve the Virtual Keyboard App. If you would like to contribute, please follow these steps:

1. Fork the project.
2. Create your feature branch:
```bash
git checkout -b feature/NewFeature.
```
4. Commit your changes:
```bash
git commit -m 'Add a new feature'.
```
6. Push to the branch:
```bash
git push origin feature/NewFeature.
```

7. Open a pull request on the main repository, describing your changes and explaining why they are valuable.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details. 

Please ensure that your contributions adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). If you find this project helpful or interesting, please give it a ⭐️.
