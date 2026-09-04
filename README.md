# Zain Amir Portfolio

A responsive personal portfolio for **Zain Amir**, a software engineering junior interested in web development, digital marketing, and social media management.

The site presents a short introduction, selected projects, technical skills, social profiles, a downloadable CV, and a contact form.

## Highlights

- Single-page navigation with Home, Projects, Skills, and Contact sections
- Responsive layout powered by Bootstrap 5
- Project showcase featuring portfolio, Netflix clone, and Spotify clone work
- Skills grid covering frontend, backend, and general programming technologies
- Social links for LinkedIn, Facebook, Instagram, and X
- Downloadable CV served from the app's local assets
- Contact form connected to [Formspree](https://formspree.io/)
- Smooth scrolling between page sections

## Built With

- [Angular](https://angular.dev/) 20
- [TypeScript](https://www.typescriptlang.org/) 5.8
- [Bootstrap](https://getbootstrap.com/) 5.3
- [Boxicons](https://boxicons.com/)
- [RxJS](https://rxjs.dev/) 7.8
- Jasmine and Karma for unit testing

## Getting Started

### Prerequisites

- Node.js LTS
- npm

### Installation

Clone the repository, move into the project directory, and install dependencies:

```bash
git clone https://github.com/zain-amirr/zain-portfolio-angular.git
cd zain-portfolio-angular
npm install
```

### Start the development server

```bash
npm start
```

Open `http://localhost:4200/` in a browser. The development server reloads automatically when source files change.

## Available Commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local Angular development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run watch` | Build continuously using the development configuration |
| `npm test` | Run the unit test suite with Karma |
| `npm run ng -- generate component name` | Run an Angular CLI command |

## Project Structure

```text
src/
├── app/
│   ├── navbar/       # Fixed site navigation
│   ├── home/         # Introduction, social links, and CV download
│   ├── projects/     # Featured project cards
│   ├── skills/       # Skills list and technology icons
│   └── contact/      # Formspree contact form
├── assets/           # Images and Zain Amir CV
├── app.html          # Page section composition
├── app.ts            # Root standalone component
└── styles.css        # Global styles and smooth scrolling
```

## Customization

Common portfolio updates can be made in these files:

- Update the introduction and social URLs in `src/app/home/home.html`.
- Add or edit featured work in `src/app/projects/projects.html`.
- Change the skills list and Boxicons classes in `src/app/skills/skills.ts`.
- Replace images or the CV in `src/assets/` and update their references as needed.
- Replace the Formspree `action` URL in `src/app/contact/contact.html` with your own endpoint before publishing.

## Production Build

Create a production bundle with:

```bash
npm run build
```

The generated files are placed in `dist/`. Deploy the built browser application to any static hosting provider that supports single-page applications. Configure the host to serve `index.html` for unknown routes if client-side routing is enabled later.

## Testing

Run the unit tests with:

```bash
npm test
```

The project uses Angular's Karma test builder and includes specs alongside the application components.

## License

No license has been specified for this repository. Contact the repository owner before reusing its code, copy, or media.
