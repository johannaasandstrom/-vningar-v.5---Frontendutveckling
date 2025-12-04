import { getWeather } from "./services/weatherService.js";

async function showWeather() {
    try{

        const data = await getWeather(56.05, 12.70)

        const temp = data.current_weather.temperature

        document.body.textContent = temp

    } catch(error){
        console.error(error)
    }
    
}

showWeather();