# Readable Project

This is my project for React & Redux course (a second part of React Nanodegree Program in Udacity). It's a [React](https://facebook.github.io/react/) based web application that allows user to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users are also able to edit and delete posts and comments.

This repository includes the code for the backend API Server and for the frontend application.


## Installation

To start the project locally:

* clone the github repository
* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* Install and start the frontend app
    - `cd frontend`
    - `npm install`
    - `npm start`


## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Frontend App

The api endpoint for local API server is hardcoded in the `src/utils/api.js` file.
The user of the app is also hardcoded in ht `src/utils/api.js` file, so all the posts and comments will be created as "Rachele Bellis" (just some random name).

All the app state is stored in the redux store:
  
* there's a "categories" substore to store all categories loaded from server, as well as the current selected category and some additional state controlling if the category is ok (if the path from URL matches any existing category). 
  * The app only renders the UI once all the categories are fetched and current category is selected based on URL
* "posts" substore stores currently fetched posts (all for main page or by category for selected category)
  * when user navigates to a post detail, the posts are not cleared but kept in the store, so the navigation back (by clicking on "Readable" or any category) doesn't trigger another fetch


## Usage

### Main Page

When you start the app locally it'll automatically open the browser on the main page and show the list of all posts:

![readable_main](https://user-images.githubusercontent.com/611602/32148001-690e0e0c-bcf0-11e7-8810-70d157d59e88.jpg)

There's a navigation at the top, where you can select and filter posts by one of the existing predefined categories: "react", "redux" and "udacity". Clicking on "Readable" shows all the posts from all the categories.

At the right side of navigation bar there's an option to add new Post.

Below there's an option to sort posts by date and score.

Each Post card has options to upvote/downvote, editing and removing the post.

Clicking on the post title (in blue) opens the post details view.

### Post detail

Post detail screen displays post data with options to edit and delete and below it displays the list of comments (each comment also has options to edit/delete and vote). 

At the top of comments there's an inline form for adding new comment (only body needs to be provided)

![readable_postdetail](https://user-images.githubusercontent.com/611602/32148113-392ead84-bcf2-11e7-8a1c-516ce66b759b.jpg)

### Modals

All modals can be dismissed by clicking on the overlay, outside of the modal content.

#### Add new post modal

Add Post is available from the Main page and also from the post details page (as it's always visible in the main navigation bar)

When adding new post user is providing the category, title and body.
The category is prefilled from the current category selected in the app (or set to first one if user is viewing all posts). Other post data are not editable and filled in automatically (user is defined in api.js, timestamp=NOW)

After new post was added the app changes to added post screen.

![readable_addnote](https://user-images.githubusercontent.com/611602/32148065-4d390a78-bcf1-11e7-8a49-6bb6f90388ba.jpg)

### Edit post modal

Editing post is available from posts listing and from post detail screen. It allows for changing Title and Body. Save option is only enabled if there's any change in any of the field.

![readable_editpost](https://user-images.githubusercontent.com/611602/32148136-92e19da0-bcf2-11e7-9348-ee7bd42ec8cc.jpg)

#### Edit comment modal

Edit comment allows to update comment body.

![readable_editcomment](https://user-images.githubusercontent.com/611602/32148161-f2c38d82-bcf2-11e7-8dfb-aa49b62a593c.jpg)

### Delete content

User can remove posts and comments. The content is removed by clicking on the "Delete" button, there's no confirmation needed.
