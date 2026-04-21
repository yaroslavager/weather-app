
export const getPreasureStatus=(hpa: number): string=>{
if(hpa>1020) return "high"
if(hpa<1000) return "low"
return "normal"

}