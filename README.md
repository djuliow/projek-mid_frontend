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
-   **Form Submission:**
    -   [Formspree](https://formspree.io/) (for handling contact form submissions)
-   **Data:**
    -   [Axios](https://axios-http.com/) (for data fetching)
    -   [JSON Server](https://github.com/typicode/json-server) (for the mock backend)
-   **Icons:**
    -   [React Icons](https://react-icons.github.io/react-icons/) (for social media icons)

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
npm install react-scroll react-awesome-reveal react-icons
npm install
```
This will install all project dependencies, including `axios` for API requests, `json-server` for the mock backend, and `react-icons` for scalable icons.

### 3. Set up the database

This project uses `json-server` to simulate a backend API.

-   Create a file named `db.json` in the root of the project.
-   Copy the structure below into your `db.json` file and fill it with your own data.

```json
{
  "user": {
    "nama": "Your Name",
    "umur": Your Age,
    "tanggal_lahir": "DD Month YYYY",
    "foto": "/fotoProfil.jpg",
    "github": "https://github.com/yourusername",
    "linkedin": "https://www.linkedin.com/in/yourlinkedinprofile/",
    "email": "your.email@example.com",
    "phone": "+6281234567890",
    "subheading": "Your Professional Subheading Here",
    "description": "Your brief introduction and what you do.",
    "cta_projects_text": "View My Certificates",
    "cta_cv_text": "Download CV",
    "profile_image_hero": "/fotoProfil.jpg",
    "about_description_full": "Hi! I’m [Your Name], a [Your Profession] who enjoys [Your Passion]. I specialize in [Your Specialization] using [Technologies]. My approach focuses on [Your Approach].\n\nBeyond [Your Profession], I’m deeply passionate about [Other Interests] — exploring how [How your interests connect]. I love discovering ways to [What you love to do].\n\nFor me, technology is more than just code — it’s a medium to [Your Philosophy]. I strive to build solutions that are [Your Goals]."
  },
  "icons": {
    "gmail": "/icons/Gmail.svg",
    "whatsapp": "/icons/WhatsApp.svg",
    "phone": "/icons/Phone.svg",
    "linkedin": "/icons/LinkedIn.svg",
    "github": "/icons/GitHub.svg"
  },
  "certificates": [
    { "id": 1, "title": "Certificate Title 1", "image": "/assets/sertif1.webp" }
  ],
  "tools": [
    { "id": 1, "name": "React", "image": "/tools/react.png" }
  ]
}
```
**Note:** Place your images and custom SVG icons in the `public/` folder according to the paths you specify in `db.json`. For example, `fotoProfil.jpg` should be at `public/fotoProfil.jpg`, and `Gmail.svg` at `public/icons/Gmail.svg`.

### 4. Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io/) to handle email submissions without a backend.

-   **Create a Formspree Account:** Go to [Formspree.io](https://formspree.io/) and create a free account.
-   **Create a New Form:**
    -   Click the "+ New Form" button.
    -   Give your form a name (e.g., "Portfolio Contact Form").
    -   Enter the email address where you want to receive messages.
    -   Click "Create Form".
-   **Get Your Endpoint URL:** After creating the form, Formspree will provide you with a unique endpoint URL (e.g., `https://formspree.io/f/xxxxxxxx`).
-   **Update `ContactSection.jsx`:** Open `src/components/sections/ContactSection.jsx` and replace the placeholder URL in the `handleSubmit` function with your actual Formspree endpoint URL.

### 5. Run the application

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