# Aurelia Hello World

## Requisites
* NodeJS
* Gulp installed globally: `npm install -g gulp`
* jspm installed globally: `npm install -g jspm`
* Karma CLI installed globally: `npm install -g karma-cli`

## Running the App
Install npm packages
```
    npm install
```
Install jspm packages
```
    jspm install -y
```
Run the project with Gulp
```
    gulp watch
```
Browse to [http://localhost:9000](http://localhost:9000)

## Bundling
Bundle
```
    gulp bundle
```
Unbundle
```
    gulp unbundle
```

## Running the Unit Tests
Run the Unit Tests with Gulp
```
    gulp test
```

## Running the End-to-End Tests
Install the necessary webdriver
```
    gulp webdriver_update
```
Verify the path to the webdriver specified in the ```seleniumServerJar``` variable in ```protractor.conf.js``` and modify the version if necessary.

Run the app with Gulp
```
    gulp watch
```
Run the End-to-End Tests with Gulp
```
    gulp e2e
```

## Exporting bundled production version
Export the application with Gulp
```
    gulp export
```
The app will be exported into the ```export``` directory
