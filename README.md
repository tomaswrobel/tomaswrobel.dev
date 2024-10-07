# Tomáš Wróbel's Portfolio

This is the source code for Tomáš Wróbel's personal portfolio website. The website showcases various sections including Home, About Me, Certificates, Services, Blog, and Contact.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Scripts](#scripts)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies using `pnpm`:

```sh
git clone https://github.com/tomaswrobel/tomaswrobel.dev.git
cd tomaswrobel.dev
pnpm install
```

## Project Structure

```py
.
├── .vscode/
│   ├── extensions.json		# Recommended extensions
│   └── settings.json		# Workspace settings
├── app/
│   ├── blog/				
│   │   ├── posts/			# Blog posts in MDX format
│   │   ├── page.tsx		# Blog page
│   │   └── ...
│   ├── certificates/		# Certificates
│   ├── components/
│   │   ├── section.tsx		# Parts of the main page
│   │   ├── header.tsx		# Header component
│   │   ├── paginated.tsx	# Common layout for certificates and blog
│   │   └── ...
│   ├── layout.scss			# All the styles
│   ├── layout.tsx			# Main layout (with header)
│   ├── ngl/
│   │   └── route.ts		# NGL API route
│   ├── page.tsx			# Main page
│   ├── sitemap.ts
│   └── utils.ts			
├── mdx-components.tsx		# MDX components
├── package.json
├── public/
│   ├── documents/
│   └── images/
├── tsconfig.json
└── ...
```

## Scripts

- `pnpm dev`: Runs the development server.
- `pnpm build`: Builds the project for production.
- `pnpm start`: Starts the production server.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.