# Task Manager Backend Application

This is a backend application for managing tasks built using Express, Mongoose, and MongoDB.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- MongoDB installed locally or accessible remotely.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using npm: npm install

## Configuration

Create a .env file in the root directory of the project.
Add the following environment variable to the .env file:

- MONGODB_URL=your_mongodb_connection_string

Replace your_mongodb_connection_string with your MongoDB connection string.

## API Documentation

The following endpoints are available:

- GET /tasks: Get all tasks.
- POST /tasks: Create a new task.
- GET /tasks/:id: Get a task by ID.
- PATCH /tasks/:id: Update a task by ID.
- DELETE /tasks/:id: Delete a task by ID.
