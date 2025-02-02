# React Router v6 Trailing Slash Bug

This repository demonstrates a common issue encountered when using React Router v6 and routes with trailing slashes.  Navigating to a route with a trailing slash (e.g., `/about/`) can lead to unexpected rendering behavior or a blank screen if not handled correctly.  The solution provided addresses this issue using the `useLocation` hook and demonstrates how to handle trailing slashes effectively.

## Bug

The primary issue is the ambiguity caused by identical routes with and without trailing slashes (`/about` and `/about/`).  React Router v6's default behavior doesn't always handle this elegantly, resulting in rendering glitches or errors.