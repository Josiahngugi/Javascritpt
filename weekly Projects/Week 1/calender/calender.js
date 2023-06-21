const date = new Date()

const events = [
    {title:"zindua", date:new Date('2023-06-21'), location:"Nairobi", attendees:(["kabura", "maureen"])},
    {title:"Lovington", date:new Date('2023-06-23'), location:"Nairobi", attendees:(["kabura", "maureen"])},
    {title:"Westie", date:new Date('2021-06-25'), location:"Nairobi", attendees:(["kabura", "maureen"])},
    {title:"Westie", date:new Date('2022-06-25'), location:"Nairobi", attendees:(["kabura", "maureen"])},
    
]
currentDate = new Date()

const nextSevenDays =new Date( currentDate.getTime() + 7 * 24 * 60 * 60* 1000)

// upcoming events in seven days

function geUpcomingEvent(){
    return events.filter((event=>(event.date>= currentDate && event.date<=nextSevenDays)))
}

// console.log(geUpcomingEvent())

//  weakmap
const storedEvent =events[0]
const Eventorganizer = new WeakMap();
Eventorganizer.set(storedEvent, "admin")

// console.log(Eventorganizer.get("admin"))

// destructuring array


events.forEach(({title,date,location})=>{
    console.log(`${title}\t\t${date}\t\t${location}`)
})