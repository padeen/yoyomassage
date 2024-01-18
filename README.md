# Project description

Promotional website for Yoyomassage built with svelte + sveltekit

## Npm scripts

Run Vite dev server on port 5173

```
npm run dev
```

Build project for manual deployment

```
npm run build
```

## Docker commands

**With Docker and Docker-compose installed you can run these commands**

Start container with Vite dev server on port 5173

```
docker-compose up
```

Run commands manually inside throwaway container

```
docker-compose run --rm -p 5173:5173 svelte bash
```

## Deployment instructions for Vercel

Automatic deployment for Vercel because of auto adapter. No custom project settings required.