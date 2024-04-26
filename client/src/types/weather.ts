// weather.ts
export interface WeatherData {
    name: string;
    time: string;
    main:{
        pressure: number;
        temp: number;
        humidity: number;
    }
    wind:{
        speed: number;
    }
    weather:[
        {
           "id":number;
           "main":string;
           "description":string;
           "icon":string;
        }
     ]
    weatherDescription: string;
    
  }
  