# Routine Guards

Routine Guards is a utility library for TypeScript projects that automates the generation of type guards. It provides
robust type checking and eliminates the need for repetitive manual implementations, making your code cleaner and more
reliable.

## Features

- **Automatic Type Guards:** Generate type guards for complex types automatically.
- **Improved Type Safety:** Enhance your TypeScript projects with strong runtime type validations.
- **Ease of Use:** Simple integration with your existing TypeScript codebase.

## Installation

You can install Routine Guards via npm:

```bash
npm install routine-guards
```

Or using yarn:

```bash
yarn add routine-guards
```

## Usage

Here's a basic example of how to use Routine Guards:

```typescript
import {isNumber, isString} from 'routine-guards';

const value: unknown = 42;

if (isNumber(value)) {
    console.log('Value is a number');
} else if (isString(value)) {
    console.log('Value is a string');
} else {
    console.log('Unknown type');
}
```

### Building the Project

If you want to contribute or modify the source code, follow these steps:

Clone the repository:

```bash
git clone https://github.com/ownger/routine-guards.git
cd routine-guards
```

Install the dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

### Running Tests

Tests are run using Jest. To execute the tests, run:

```bash
npm test
```

### Contributing

Contributions are welcome!

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact

For any issues or inquiries, please open an issue on our GitHub repository.


