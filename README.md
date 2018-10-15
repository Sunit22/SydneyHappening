# SydneyHappening

Sydney Happening is web-application which allows registered users to create and register to events posted. <br>
Some of the functionalities include: <br>
 * Register User<br>
 * Login<br>
 * Register to events<br>
 * Create new events<br>
 * Send email to site admins.<br>
 * Update events (Admin functionality)<br>
 * Delete events (Admin functionality)<br>
Non-functional features include:<br>
 * JWT token validation for login and server calls<br>
 * Authentication for accessing site urls<br>
 * Responsive UI.<br>

## Table of contents
<!--ts-->
   * [Getting Started](#getting-started)
   * [Development Server](#development-server)
   * [Code Scaffolding](#code-scaffolding)
   * [Build](#build)
   * [Deployment](#deployment)
<!--te-->

## Getting Started

If you want to work with with Sydney Happening project, you can checkout the code. 
You need git for cloning the project into your system Follow [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)for Git installation. For cloning the the project: <br/>
`git clone https://github.com/Sunit22/SydneyHappening.git` <br>

The client side is developed using Angular CLI and the server-side uses Node.js. Please follow these instruction to download and install 
[Node Package Manager(npm) and Node.js](https://www.npmjs.com/get-npm). Once Node Package Manager (npm) has been installed, download and install [Angular CLI](https://cli.angular.io/) <br>

After completing the installation, navigate to the `SydneyHappening/server/` folder and give command <br>
`npm intall`<br>
This would install all the package dependencies for the server from `package.json file`. <br>  

Once the installation has finished, navigate to `SydneyHappening/server/server.js` and verify the server port address. By default the port would be 3000, however it can be changed as per requirement. Start the server using command: <br>
`node server.js`<br>
If the port has not been changed, by default, the server should start at `http://localhost:3000` <br>

Navigate to `SydneyHappening/client/` and give command `npm install` to install all the dependencies present in `package.json` <br>
Once the installation has been completed run command: <br>
`ng serve` <br> Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deployment

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
