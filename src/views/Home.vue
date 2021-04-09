<template>
  <div class="flex flex-col items-center justify-center w-full h-screen home">
    <header class="top-0 flex items-center justify-center header">
      <h1 class="text-white bg-text">Amon Sûl</h1>
    </header>
    <weather-card>
      <section class="flex flex-col items-center justify-center w-full h-full">
        <div
          class="flex justify-center w-full px-12 my-4 text-2xl text-gray-300"
        >
          <h2>Where are you?</h2>
        </div>
        <div class="w-full px-12 my-4">
          <input
            type="text"
            class="block w-full px-4 py-2 text-white border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700"
            :value="location"
            @input="test"
          />
        </div>
        <div class="flex justify-center w-full px-12 my-4 text-white">
          <button class="p-4 text-white">Get Weather</button>
        </div>
      </section>
    </weather-card>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    WeatherCard,
  },
  computed: {
    ...mapState("forecast", ["location"]),
  },
  methods: {
    ...mapMutations("forecast", ["setLocation"]),
    ...mapActions("forecast", ["fetchWeather"]),
    test(a, b) {
      console.log(a, b);
    },
  },
};
</script>

<style lang="postcss">
.home {
  background-color: #000;
  background-image: radial-gradient(at top left, #52294c, transparent),
    radial-gradient(at top right, #7c90ac, transparent),
    radial-gradient(at bottom left, #284b52, transparent);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.header {
  margin-bottom: -200px;
  font-family: Helvetica;
}

.bg-text {
  user-select: none;
  font-size: 128px;
}

input {
  outline: none;
  background: transparent;
  width: 200px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
input:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
}
input:focus {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
  width: 150px;
  outline: none;
  background: transparent;
  margin-bottom: 2em;
  border: none;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
button:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
button:active {
  background: rgba(255, 255, 255, 0.2);
}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

a,
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none !important;
}
</style>
