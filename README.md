# Wedding Invitation Cover

A ready-to-run React + Vite wedding invitation with an animated ribbon and golden wax seal.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract this ZIP.
2. Open a terminal in the extracted `wedding-invitation-cover` folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Customize
- Edit names, date, and venue in `src/components/WeddingCover.jsx`.
- The wax seal click opens the invitation page after the ribbon animation.
- The example invitation page is in `src/pages/WeddingInvitation.jsx`; replace its contents with your existing invitation design.
- Google Fonts are loaded from Google Fonts; the app otherwise uses CSS for the visual effects.

## Production build
```bash
npm run build
npm run preview
```
