# RBC Backend

A lightweight, efficient Node.js (Express) + MongoDB backend for the Ruaraka Baptist Church website.

## Setup

1. Install [MongoDB](https://www.mongodb.com/try/download/community) and run it locally (default port 27017).
2. In this backend folder, run:
   ```sh
   npm install
   npm run dev
   ```
3. The API will be available at `http://localhost:5000/`

## API Endpoints

### Ministries
- `GET    /api/ministries`         — List ministries (paginated)
- `GET    /api/ministries/:id`     — Get one ministry
- `POST   /api/ministries`         — Add ministry
- `PUT    /api/ministries/:id`     — Update ministry
- `DELETE /api/ministries/:id`     — Delete ministry

### Events
- `GET    /api/events`             — List events (paginated)
- `GET    /api/events/:id`         — Get one event
- `POST   /api/events`             — Add event
- `PUT    /api/events/:id`         — Update event
- `DELETE /api/events/:id`         — Delete event

### Announcements
- `GET    /api/announcements`      — List announcements (paginated)
- `GET    /api/announcements/:id`  — Get one announcement
- `POST   /api/announcements`      — Add announcement
- `PUT    /api/announcements/:id`  — Update announcement
- `DELETE /api/announcements/:id`  — Delete announcement

### Media
- `GET    /api/media`              — List media (paginated)
- `GET    /api/media/:id`          — Get one media item
- `POST   /api/media`              — Add media
- `PUT    /api/media/:id`          — Update media
- `DELETE /api/media/:id`          — Delete media

### Contact
- `POST   /api/contact`            — Submit contact form
- `GET    /api/contact`            — List contact messages (paginated)

## Notes
- All list endpoints support `?page=` and `?limit=` query params.
- No authentication is required.
- All responses are JSON. 