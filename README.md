### Eng/Ru

### About the Project

Weather App is a single-page React application that shows current weather and a one-day forecast for a selected city. It’s my second React project. I built it to practise fetching data asynchronously and sharing state across components with Zustand.

- **Status:** Work in Progress 

### Tech Stack:

- **UI library:** React
- **Build tool:** Vite
- **Language:** JavaScript, TypeScript
- **Styles:** CSS/SCSS
- **State Management:** Zustand 
- **API:**  Weather API

### What I built

- City search that loads weather data from WeatherAPI.com using the Fetch API.

- A current weather card with temperature, feels-like temperature, and the day’s high and low.

- A forecast displayed in three-hour intervals, plus details for wind speed, humidity, UV index, and atmospheric pressure.

- Light and dark themes. Zustand shares weather data between components and saves the selected theme in the browse

### Run Locally

Install Node.js 24 and get an API key from your [WeatherAPI.com account](https://www.weatherapi.com/my/).

```bash
git clone https://github.com/yaroslavager/weather-app.git
cd weather-app
npm ci
```

Create a `.env` file in the project root, next to `package.json`. Add the following lines and replace `your_api_key` with your own API key:

```dotenv
VITE_API_URL=https://api.weatherapi.com/v1
VITE_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

---

### О проекте

Weather App — одностраничное приложение на React, которое показывает текущую погоду и прогноз на день для выбранного города. Это мой второй проект на React. На нём я практикую асинхронные запросы и учусь работать с общим состоянием компонентов через Zustand.

- **Статус:** В процессе

### Технологии:

- **UI library:** React
- **Build tool:** Vite
- **Language:** JavaScript, TypeScript
- **Styles:** CSS/SCSS
- **State Management:** Zustand 
- **API:**  Weather API

### Реализовано:

- Поиск по городу с загрузкой данных из WeatherAPI.com через Fetch API.

- Карточку текущей погоды с температурой, ощущаемой температурой, минимумом и максимумом за день.

- Прогноз с шагом в три часа и отдельный блок со скоростью ветра, влажностью, УФ-индексом и атмосферным давлением.

- Светлую и тёмную темы. Zustand хранит данные о погоде для разных компонентов и сохраняет выбранную тему в браузере.

### Как запустить локально

Установи Node.js 24 и получи ключ API в [личном кабинете WeatherAPI.com](https://www.weatherapi.com/my/).

```bash
git clone https://github.com/yaroslavager/weather-app.git
cd weather-app
npm ci
```

Создай файл `.env.local` рядом с `package.json`. Вставь в него эти строки и замени `your_api_key` своим ключом:

```dotenv
VITE_API_URL=https://api.weatherapi.com/v1
VITE_API_KEY=your_api_key
```

Запусти приложение:

```bash
npm run dev
```