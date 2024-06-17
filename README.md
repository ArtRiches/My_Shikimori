# My Shikimori

My Shikimori is a web application that contains information about some anime. On the home page, you can find a list of all anime, a list of recommended anime and a list of currently airing anime. If you click on an anime poster, you will be redirected to the information page of that anime. There you find such information as genres or main characters. Clicking on each of them will redirect you to the corresponding details page.

## Requirements

- MySQL Server v8.0+. Official site for downloading [MySQL](https://www.mysql.com/). 
- NodeJS v20.11.0+. Official site for downloading [NodeJS](https://nodejs.org/en). 

## Preparing

1. File for creating DB [Migration](Migration.sql). 
2. Using file [.env.template](.env.template) create file '.env' and fill in the fields to access the DB.
3. Use this command to install dependencies:
```bash
npm install
```

## Usage

1. Start Server by using this command:
```bash
npm run start
```
2. Use this [link](http://localhost:8000/) to get to the website.