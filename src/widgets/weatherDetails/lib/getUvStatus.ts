export const getUvStatus=(uv: number): string=>{
 
if(uv<=2) return "low" 
if(uv<=5) return "moderate"
if(uv<=8) return "high"
if(uv<=11) return "very high"
return "extreme"
}