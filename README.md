# Next.js API Route Error: Empty Request Body

This repository demonstrates a common error in Next.js API routes when handling requests with empty bodies.  The issue occurs because the code attempts to access a property (`name`) from `req.body` without checking if `req.body` is defined or contains the expected property.

**Error:** The API route throws an error if the request body is empty.

**Solution:** The improved code handles the case of an empty request body gracefully, preventing the error. It checks if `req.body` exists and contains the `name` property before accessing it.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Send a POST request to `/api/hello` with an empty body. You should see an error in the console.

## How to fix the bug

1. Implement the solution provided in `bugSolution.js`.
2. Run `npm run dev` again.
3. Send a POST request to `/api/hello` with an empty body. This time, it should return a response without throwing an error.