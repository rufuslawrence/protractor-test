
<h1 align="center">Alfresco ADF AppsManager</h1>

## Installing

To correctly use this demo check that on your machine is running Node version 6.9.2 LTS or higher.

```sh
npm install
```
## Running with Docker
0. You need to have an alfresco lisence file in: (user home)/.activiti/enterprise-license/activiti.lic
1. Install Docker
2. cd docker/
3. docker login (enter your credentials)
4. docker-compose up -d
5. ./load-apps.sh -> to load all the apps inside the apps/ directory. Add more apps by copying exported apps into that directory. 
6. after running npm start, make sure to change the bpm url to http://localhost:9999, which should be the default one. 

## Development build

```sh
npm start
```

This command compiles and starts the project in watch mode.
Browser will automatically reload upon changes.
Upon start you can navigate to `http://localhost:3000` with your preferred browser.
Navigate to settings page(`http://localhost:3000/settings`) to configure the activiti url.

## Production build

```sh
npm run build
```

This command builds project in `production` mode.
All output is placed to `dist` folder and can be served your preferred activiti web server.
You should need no additional files outside the `dist` folder

Create a folder structure `alfresco/apps` inside `activiti tomacat webapps` folder.
Copy the content from `dist` folder to `alfresco/apps` folder.
use following url to access the app `<activiti-server-ip>:<activiti-server-port>/alfresco/apps`

## Test build

```sh
npm test
```

This command run unit test cases written in the project.
It will show all the test cases and its output in command prompt.
