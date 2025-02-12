# Website

This directory contains the source code for the website, which includes a landing page, blog, and other pages.

Built using Astro, Tailwind CSS and shadcn/ui

## Project Structure

```
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── icons/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Details
- UI Components built using **shadcn/ui**
- Documentation and blog using **MDX** and **Content Collections**
- Styled using **Tailwind CSS**
- RSS Feed support
- Sitemap support

## To do
- Open graph image: Add og.jpg to `public` folder.

## Running Locally
To get started with running this locally, just clone the repository. 

Then move into this directory and install the dependencies.

1. Install dependencies:

```sh
npm install
```

2. Start the development server:

```sh
npm run dev
```

The website will then be live at `localhost:4321`

Happy coding!

## License

Licensed under the Apache 2.0 license