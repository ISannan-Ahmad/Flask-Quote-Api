```markdown
# Quote API

A simple web application to manage quotes with CRUD operations (Create, Read, Update, Delete) using Flask and SQLAlchemy. This project allows users to view, add, update, and delete quotes.

## Features

- **View a Random Quote**: Displays a random quote from the database.
- **View All Quotes**: Lists all quotes in the database.
- **Add a Quote**: Allows users to add new quotes to the database.
- **Delete a Quote**: Allows users to delete quotes from the database.

## Tech Stack

- **Backend**: Flask, SQLAlchemy
- **Database**: SQLite
- **Frontend**: HTML, JavaScript, Tailwind CSS
- **API Routes**:
    - `GET /api/quote`: Fetch a random quote.
    - `POST /api/quote`: Add a new quote.
    - `DELETE /api/quote/<id>`: Delete a quote.
    - `GET /api/quotes`: Fetch all quotes.

## Setup Instructions

Follow these steps to get the project up and running locally.

### 1. Clone the repository

```bash
git clone https://github.com/ISannan-Ahmad/Flask-Quote-Api.git
cd quote-api
```

### 2. Create a Virtual Environment

Create a virtual environment using `venv`.

```bash
python -m venv .venv
```

### 3. Activate the Virtual Environment

- **Windows**:
  ```bash
  .venv\Scripts\activate
  ```

- **macOS/Linux**:
  ```bash
  source .venv/bin/activate
  ```

### 4. Install Dependencies

Install the required Python libraries using `pip`.

```bash
pip install -r requirements.txt
```

### 5. Set Up the Database

Run the following command to set up the SQLite database.

```bash
python app.py
```

This will create the `quotes.db` file for storing quotes.

### 6. Run the Application

After setting up everything, start the Flask application.

```bash
python app.py
```

By default, the application will run at `http://127.0.0.1:5000`.

### 7. Access the App

Open your browser and go to `http://127.0.0.1:5000` to start interacting with the application.

## Endpoints

### `GET /api/quote`

Fetch a random quote from the database.

#### Response:
```json
{
  "Quote": "This is a random quote."
}
```

### `POST /api/quote`

Add a new quote to the database.

#### Request Body:
```json
{
  "Quote": "This is a new quote."
}
```

#### Response:
```json
{
  "message": "Quote added successfully!"
}
```

### `PUT /api/quote/<id>`

Update an existing quote.

#### Request Body:
```json
{
  "Quote": "This is the updated quote."
}
```

#### Response:
```json
{
  "message": "Quote updated successfully!"
}
```

### `DELETE /api/quote/<id>`

Delete a quote from the database.

#### Response:
```json
{
  "message": "Quote deleted successfully!"
}
```

### `GET /api/quotes`

Fetch all quotes stored in the database.

#### Response:
```json
[
  {
    "id": 1,
    "quote": "This is the first quote."
  },
  {
    "id": 2,
    "quote": "This is the second quote."
  }
]
```

## Frontend

The frontend is simple and uses Tailwind CSS for styling. The app provides options to:

- View a random quote.
- View all quotes.
- Add a new quote.
- Delete an existing quote.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- Flask: A lightweight WSGI web application framework for Python.
- SQLAlchemy: SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

## Contact

Feel free to reach out via GitHub Issues or email for any questions or suggestions.
```