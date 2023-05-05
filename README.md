# Instagram Homepage

## Description

This project is developed using ReactJS. 

## What's inside

- Adminpanel based on [CoreUI theme](https://coreui.io/): with default one admin user (_admin@admin.com/password_) and two roles
- Users/Roles/permissions management function (based on our own code similar to Spatie Roles-Permissions)
- One demo CRUD for Products management - name/description/price
- Everything that is needed for CRUDs: model+migration+controller+requests+views

- Listing of posts from API
- Actions on each post (like, add comment, share, save)
- Each post show comments from API
- Display stories list from API
- Current user name and profile icon (the display)
- Header with search, explore, reels, messages, favourite, and profile (the display)
- API using dummy API call from https://private-4838f9-sesdika.apiary-mock.com/
  - GET /igs_complete
  - GET /stories
  - GET /suggestions 

## Deployment
Make sure active directory is on root project. Execute following commands:
- ``git pull origin main`
- Done

## How to use

- Install the packages __npm install__
- Run the project __npm start__
- Open this URL at your browser : http://localhost:3000/