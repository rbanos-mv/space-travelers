![](https://img.shields.io/badge/Microverse-blueviolet)

# Space Travelers' Hub website

> This is a web application for a company that provides commercial and scientific space travel services. The application has three pages: Rockets, Missions and My Profile.
> <br>
> <br>
> **Rockets**:
> The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking.
> <br>
> <br>
> **Missions**:
> The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.
> <br>
> <br>
> **My Profile**:
> The My Profile section displays all reserved rockets and space missions.
> <br>
> <br>
> It also allow users to book rockets and join selected space missions. The data in the application is fetched from the real live data from the [SpaceX REST API](https://github.com/r-spacex/SpaceX-API).

## Built With

- JavaScript-ES6
- CSS3
- ReactJS
- Redux

## Live Demo

[GitHub Live Demo Link](https://rbanos-mv.github.io/space-travelers/)

### Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

Open your terminal and navigate to the folder you would like to save the project.

### Setup

Type these commands into the terminal:

```
git clone https://github.com/rbanos-mv/space-travelers.git
cd space-travelers
```

You will need a `.env` file before you install and run the project. The `.env` file contains environment variables needed to deploy the webpage. There is a commented `.env.example` file you can use as a guide to configure your own. Type the following command into the terminal (or Git Bash, if using Windows) to create your `.env` file:

```
cp .env.example .env
```

### Install

Type this command into the terminal:

```
npm install
```

### Build

Type these commands into the terminal:

```
npm run build
```

- Open `build/index.html` in your web browser.

### Run dev server

Type these commands into the terminal:

```
npm run start
```

- Your web browser will open on [http://localhost:3000](http://localhost:3000)

### Run tests

Type this command into the terminal:

```
npm run test
```

### Deployment

```
npm run deploy
```

## Authors

👤 **Roberto A. Baños Alvarez**

- GitHub: [@rbanos-mv](https://github.com/rbanos-mv)
- Twitter: [@RobertoBanosMV](https://twitter.com/RobertoBanosMV)
- LinkedIn: [Roberto A Baños Alvarez](https://linkedin.com/in/roberto-a-baños-alvarez-500766234)

👤 **Mahmoud Makhlouf**

- GitHub: [@devMahmoud](https://github.com/devMahmoud)
- LinkedIn: [Mahmoud Makhlouf](https://www.linkedin.com/in/mahmoud-makhlouf-844271211/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/) for the motivation.
- [SpaceX REST API](https://github.com/r-spacex/SpaceX-API)

## 📝 License

This project is [MIT](./MIT.md) licensed.
