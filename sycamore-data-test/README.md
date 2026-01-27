# Sycamore Data Fetching Test

## Overview
This project demonstrates a simple Nuxt 4 application that fetches and displays data from an external API.
The endpoint used is `https://jsonplaceholder.typicode.com/users`,

## Key Decisions
- Used Nuxt's `useFetch` for data fetching to ensure SSR compatibility and simplicity.
- Extracted the data logic into a composable to keep components focused on presentation.
- Handled loading, error, and empty states explicitly to improve UX and reliability.
- Kept state management local since the data is page-specific and short-lived.

## Tradeoffs
- No global state management was used to avoid unnecessary complexity.
- Styling was kept minimal to focus on code clarity and structure.

## Improvements
- I Could Add pagination for large datasets
- Enhance the UI
- Introduce caching or retry logic
- Improve accessibility and testing
# sycamore-frontend-test-2
