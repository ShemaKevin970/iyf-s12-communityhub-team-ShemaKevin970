# CommunityHub

CommunityHub is a team-built React application developed as part of the IYF Season 12 Weekend Academy.

## Project Overview

CommunityHub is a simple community platform where users can:
- View community posts.
- Search and browse posts.
- Open individual post details.
- Create posts.
- Navigate between Home, Posts, Create Post, and About pages.

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- CSS Modules
- JSONPlaceholder API
- Local Storage

## Week 9 Features

- Implemented five pages: Home, Posts, Post Detail, Create Post, and About.
- Added navigation using React Router.
- Used `useParams` to display individual post details.
- Created reusable custom hooks: `useFetch` and `useLocalStorage`.
- Added loading and error states for data fetching.
- Added local post creation with Local Storage persistence.
- Implemented CSS Modules for scoped component and page styling.
- Added responsive styling for mobile and desktop screens.

## Testing and Quality Checks

The following checks were completed:

- `npm test` — passed.
- `npm run build` — passed.
- `npm run lint` — passed with no warnings or errors.

## Lighthouse Accessibility Audit

Lighthouse Accessibility audit results:

| Device | Before Improvements | After Improvements |
|---|---:|---:|
| Mobile | 100/100 | 100/100 |
| Desktop | 100/100 | 100/100 |

The application maintained a perfect accessibility score before and after the accessibility review.

## Contributors

See [CONTRIBUTORS.md](./CONTRIBUTORS.md) for team members and their contributions.

## Week 9 - Lighthouse Audit (by Shema Kevin)

**Before:** Accessibility 100/100
**After:** Accessibility 100/100

Verified no regressions after Week 9 review.

### Fixes made:
- Added alt text to images
- Fixed button labels for screen readers
- Improved color contrast for text
- Verified responsive layout on mobile
