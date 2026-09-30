# QYVRENZA AI Workspace Onboarding

## Introduction
A guided setup flow that welcomes new users and helps them shape a personal AI workspace.

## What the UI pattern is
Onboarding is a short, progressive introduction that gathers useful setup choices without presenting every decision at once.

## Common use cases
- First-run setup for AI and SaaS workspaces
- Choosing a role or team context
- Personalizing a product's starting view

## Relevance to modern web development
Well-paced onboarding reduces the initial cognitive load of complex products while making the experience feel relevant to each user.

## Design patterns researched
Progressive disclosure, a persistent progress indicator, selectable cards, inline form validation, a compact completion summary, and responsive split-panel layouts.

## What our implementation adds
A QYVRENZA-branded, five-screen wizard with role selection, workspace naming, optional team size, multi-select interests, step validation, and a generated summary. Data stays in page memory and is not submitted.

## Technologies used
HTML5, CSS3, and vanilla JavaScript. Google Fonts are optional; system sans-serif fallbacks are provided. No backend or paid API is required.

## Features
- Back and continue controls with animated transitions
- Required-field validation and accessible status messages
- Responsive rail-to-stack layout and reduced-motion support

## Instructions to run
Open `index.html` directly in a browser, or open this folder in VS Code and use the Live Server extension's **Open with Live Server** command.

## Screenshot placeholder
`![AI onboarding screenshot](./screenshot.png)`