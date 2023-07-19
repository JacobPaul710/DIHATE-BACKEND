# DIHATE-FRONTEND

DIHATE stands for "Do I have anything to eat?" Agile and robust, this single-page MERN-stack application can be utilized by several different user's to keep track of meals they have stored in the freezer. Using JWT auth, user's can register a new account. After creating an account, they will automatically be signed-in with that account, and can immediately begin adding new meals to their "Icebox" database. The "Icebox" database will store the meals entered by the user with foreign-keys, so that only the data relative to the user who is currently logged in, will be shown in the "Icebox" page. User's also have the ability to edit and delete meals they have previously entered into the database. User's can log-out, to switch accounts in order to render other data.  

## Technologies Used

- Express
- Mongoose
- MongoDB
- Cors
- Bcrypt
- Cookie-parser
- JSON Web Tokens
- Validator
- Dotenv
- Node

### Icebox

- Ability for user to delete account.
- Add 2nd field for new user sign-up that accepts password for 2nd time and compares to first password field. Includes error handling.
- Add additional error handling.
- Update, Delete, and Edit from the index page using React Context.