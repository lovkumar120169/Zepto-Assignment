# Zepto Assignment - Chip Input Component

## Introduction

This repository contains a React component, `ChipInput`, developed as part of the Zepto assignment. The `ChipInput` component is designed to provide a user-friendly interface for selecting and managing a list of users. Users can be added as chips, removed, and filtered dynamically as per the user's input.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Bonus Task](#bonus-task)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

A video demonstration of the `ChipInput` component in action is available [here](https://drive.google.com/file/d/1sy-YAhX1FYFImjLj1uXNilb7DHlbuveh/view?usp=sharing).

## Features

1. **Dynamic Filtering:** As you type in the input field, the list of available items dynamically filters to match the user's input.

2. **Chip Management:** Clicking on an item adds it as a chip to the top of the component. Each chip can be removed by clicking on the "X" icon.

3. **Backspace Highlighting:** When the input is blank, pressing the backspace key highlights and removes the last chip.

## Installation

To use the `ChipInput` component in your project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/lovkumar120169/Zepto-Assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Zepto-Assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

Integrate the `ChipInput` component into your React application as follows:

```jsx
import React from 'react';
import ChipInput from './Components/ChipInput';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "100px", color: "#2656cf" }}>Pick Users</h1>
      <ChipInput />
    </div>
  );
}

export default App;
```

## Bonus Task

The `ChipInput` component includes a bonus task where pressing backspace with an empty input highlights and removes the last chip.

## Technologies Used

- React
- TypeScript
- CSS

