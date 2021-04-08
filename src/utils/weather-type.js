export const WeatherCodes = [
  {
    WeatherCode: "395",
    Condition: "Moderate or heavy snow in area with thunder",
  },
  {
    WeatherCode: "392",
    Condition: "Patchy light snow in area with thunder",
  },
  {
    WeatherCode: "389",
    Condition: "Moderate or heavy rain in area with thunder",
  },
  {
    WeatherCode: "386",
    Condition: "Patchy light rain in area with thunder",
  },
  {
    WeatherCode: "377",
    Condition: "Moderate or heavy showers of ice pellets",
  },
  {
    WeatherCode: "374",
    Condition: "Light showers of ice pellets",
  },
  {
    WeatherCode: "371",
    Condition: "Moderate or heavy snow showers",
  },
  {
    WeatherCode: "368",
    Condition: "Light snow showers",
  },
  {
    WeatherCode: "365",
    Condition: "Moderate or heavy sleet showers",
  },
  {
    WeatherCode: "362",
    Condition: "Light sleet showers",
  },
  {
    WeatherCode: "359",
    Condition: "Torrential rain shower",
  },
  {
    WeatherCode: "356",
    Condition: "Moderate or heavy rain shower",
  },
  {
    WeatherCode: "353",
    Condition: "Light rain shower",
  },
  {
    WeatherCode: "350",
    Condition: "Ice pellets",
  },
  {
    WeatherCode: "338",
    Condition: "Heavy snow",
  },
  {
    WeatherCode: "335",
    Condition: "Patchy heavy snow",
  },
  {
    WeatherCode: "332",
    Condition: "Moderate snow",
  },
  {
    WeatherCode: "329",
    Condition: "Patchy moderate snow",
  },
  {
    WeatherCode: "326",
    Condition: "Light snow",
  },
  {
    WeatherCode: "323",
    Condition: "Patchy light snow",
  },
  {
    WeatherCode: "320",
    Condition: "Moderate or heavy sleet",
  },
  {
    WeatherCode: "317",
    Condition: "Light sleet",
  },
  {
    WeatherCode: "314",
    Condition: "Moderate or Heavy freezing rain",
  },
  {
    WeatherCode: "311",
    Condition: "Light freezing rain",
  },
  {
    WeatherCode: "308",
    Condition: "Heavy rain",
  },
  {
    WeatherCode: "305",
    Condition: "Heavy rain at times",
  },
  {
    WeatherCode: "302",
    Condition: "Moderate rain",
  },
  {
    WeatherCode: "299",
    Condition: "Moderate rain at times",
  },
  {
    WeatherCode: "296",
    Condition: "Light rain",
  },
  {
    WeatherCode: "293",
    Condition: "Patchy light rain",
  },
  {
    WeatherCode: "284",
    Condition: "Heavy freezing drizzle",
  },
  {
    WeatherCode: "281",
    Condition: "Freezing drizzle",
  },
  {
    WeatherCode: "266",
    Condition: "Light drizzle",
  },
  {
    WeatherCode: "263",
    Condition: "Patchy light drizzle",
  },
  {
    WeatherCode: "260",
    Condition: "Freezing fog",
  },
  {
    WeatherCode: "248",
    Condition: "Fog",
  },
  {
    WeatherCode: "230",
    Condition: "Blizzard",
  },
  {
    WeatherCode: "227",
    Condition: "Blowing snow",
  },
  {
    WeatherCode: "200",
    Condition: "Thundery outbreaks in nearby",
  },
  {
    WeatherCode: "185",
    Condition: "Patchy freezing drizzle nearby",
  },
  {
    WeatherCode: "182",
    Condition: "Patchy sleet nearby",
  },
  {
    WeatherCode: "179",
    Condition: "Patchy snow nearby",
  },
  {
    WeatherCode: "176",
    Condition: "Patchy rain nearby",
  },
  {
    WeatherCode: "143",
    Condition: "Mist",
  },
  {
    WeatherCode: "122",
    Condition: "Overcast",
  },
  {
    WeatherCode: "119",
    Condition: "Cloudy",
  },
  {
    WeatherCode: "116",
    Condition: "Partly Cloudy",
  },
  {
    WeatherCode: "113",
    Condition: "Clear/Sunny",
  },
];

/**
 * Returns the appropriate weather type based on code
 * @param code
 * @returns {{ Condition: string, WeatherCode: string }}
 */
export function getByCode(code) {
  return WeatherCodes.find((weather) => weather.WeatherCode === String(code));
}
