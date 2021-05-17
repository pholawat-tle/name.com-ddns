<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Node.js DDNS</h3>

  <p align="center">
    A Node.js application that acts as a Dynamic Domain Name Server
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#to-do-list">To-Do List</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/pholawat-tle/name.com-ddns
    ```
2. Install NPM packages
    ```sh
    npm install
    ```

<!-- USAGE EXAMPLES -->

## Usage

1. In the application folder, copy the .env.example file and create a file called .env
    ```sh
    cp .env.example .env
    ```
2. Open .env with a text editor of your choice and correct the environment variables
    ```
    domainName=<--YOUR DOMAIN NAME-->
    namedotcom_username=<--YOUR NAME.COM USERNAME-->
    namedotcom_apiToken=<--YOUR NAME.COM API TOKEN-->
    ```
3. Start the application with **npm**
    ```sh
    npm run start
    ```
    _or with **Docker**_
    ```sh
    docker-compose up
    ```

<!-- ROADMAP -->

## To-Do List

-   [x] Set up a cron job
-   [x] Retrieve Public IP function
-   [x] Update Name.com API when Public IP change

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
