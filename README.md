# My Portfolio

This is a simple, single-page portfolio website built to showcase skills, certificates, and contact information. It features smooth scrolling and on-scroll animations.

## Technologies Used

-   **Frontend:**
    -   [React](https://reactjs.org/)
    -   [Vite](https://vitejs.dev/)
    -   [Tailwind CSS](https://tailwindcss.com/)
-   **Animations & Scrolling:**
    -   [React Awesome Reveal](https://github.com/morellodev/react-awesome-reveal) (for on-scroll animations)
    -   [React Scroll](https://github.com/fisshy/react-scroll) (for smooth scroll navigation)
-   **Data:**
    -   [Axios](https://axios-http.com/) (for data fetching)
    -   [JSON Server](https://github.com/typicode/json-server) (for the mock backend)

## Project Setup and Running Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <repository-folder>
```

### 2. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following commands in the project root:

```bash
npm install axios
npm install json-server
npm install react-scroll react-awesome-reveal
npm install
```
This will install all project dependencies, including `axios` for API requests and `json-server` for the mock backend.

### 3. Set up the database

This project uses `json-server` to simulate a backend API.

-   Create a file named `db.json` in the root of the project.
-   Copy the structure below into your `db.json` file and fill it with your own data.

```json
{
  "user": {
    "nama": "Your Name",
    "email": "your.email@example.com",
    "foto": "/fotoProfil.jpg",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile"
  },
  "certificates": [
    { "id": 1, "title": "Certificate Title 1", "image": "/assets/sertif1.webp" }
  ],
  "tools": [
    { "id": 1, "name": "React", "image": "/tools/react.png" }
  ]
}
```
**Note:** Place your images in the `public/` folder according to the paths you specify in `db.json`. For example, `fotoProfil.jpg` should be at `public/fotoProfil.jpg`.

### 4. Run the application

You will need to run two commands in two separate terminals.

-   **Terminal 1: Start the JSON Server**

```bash
npx json-server db.json
```

-   **Terminal 2: Start the Vite Development Server**

```bash
npm run dev
```

Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).