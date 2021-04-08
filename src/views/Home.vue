<template>
  <div class="w-full h-screen home flex flex-col justify-center items-center">
    <header class="flex justify-center items-center top-0 header">
      <h1 class="bg-text text-white">Amon Sûl</h1>
    </header>
    <weather-card>
      <section class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-full px-12">
          <input
            class="border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
          />
        </div>
      </section>
    </weather-card>
  </div>
</template>

<script>
import WeatherCard from "@/components/weather-card";
export default {
  name: "Home",
  components: {
    WeatherCard,
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
</style>
