export const getHumidityStatus=(humidity: number): string=>{
if(humidity <=30) return "low"
if(humidity <=60) return "normal"
return "high"
}