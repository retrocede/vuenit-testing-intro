import * as WeatherTypes from "@/utils/weather-type";

describe("WeatherTypes Utility", () => {
  it("returns the appropriate weather type by code", () => {
    expect(WeatherTypes.getByCode("119")).toMatchObject({
      Condition: "Cloudy",
    });
    expect(WeatherTypes.getByCode(143)).toMatchObject({
      Condition: "Mist",
    });
  });
});
