# College Event Management System

A simple responsive college event management application built using HTML, CSS and JavaScript. Events can be added, viewed, registered for and deleted. Browser localStorage stores changes in the browser.

## Run locally
Open `index.html` in a browser.

## Build Docker image
```bash
docker build -t college-event-app:v1 .
```

## Run container
```bash
docker run -d --name college-event-container -p 8080:80 college-event-app:v1
```
Open http://localhost:8080

## Container operations
```bash
docker ps
docker stop college-event-container
docker start college-event-container
docker rm -f college-event-container

## GitHub
```bash
git init
git add .
git commit -m "Initial college event management application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/college-event-management.git
git push -u origin main
```
