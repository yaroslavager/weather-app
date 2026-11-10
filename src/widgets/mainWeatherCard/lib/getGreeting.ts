
export const getGreeting=(localtime: string) : string =>{
if(!localtime) return ""

const time =localtime.split(" ")[1]
const hour =Number(time.split(":")[0])

console.log(hour)

if(hour<12) return "Good Morning"
if(hour >=12 && hour<18) return "Good Afternoon"
if(hour>=18)return "Good Evening"
return ""
}