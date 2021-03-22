
const DateBuilder=(d)=>{

    let months=['January','February','March','April','May','June','July','August','September','October','November','December']
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let day=days[new Date().getDay()]
    let date=new Date().getDate()
    let month=months[new Date().getMonth()]
    let year=new Date().getFullYear()

    return (`${day} ${date} ${month} ${year}`)

}
export default DateBuilder