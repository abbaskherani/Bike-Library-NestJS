## Setup and Running the API;

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run start:dev
   ```

The API will be available on `http://localhost:3000`.

## API Documentation

Swagger documentation on  `http://localhost:3000/api` when the server is running.

## API Endpoints

- GET /bikes: Fetch a list of all bikes in the library.
- POST /bikes: Add a new bike to the library.
- PUT /bikes/{id}: Update the details of an existing bike.
- DELETE /bikes/{id}: Delete a bike from the library.

## Project Structure

- src/bikes/bikes.controller.ts   Route handling
- src/bikes/bikes.service.ts      Business logic
- src/bikes/dto/                  Data Transfer Objects for input validation
- src/bikes/bike.entity.ts        Data model

## Error Handling

The API includes error handling for invalid or non-existent bike IDs, as well as input validation using DTOs Error handling done using class validator package using `IsNotEmpty, IsNumber, IsString`