const date= new Date();

const calanderRender=() =>{
    const today=date.getDate();
    const prvious_month=new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const current_month=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

    const current_month_last_day=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const month_first_day=date.getDay()+1;

    const lastday=7-current_month_last_day-1;
    console.log(month_first_day)


    const month=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    document.querySelector('.date h1').innerHTML=month[date.getMonth()];
    document.querySelector('.date p').innerHTML=date.toDateString();



    let days="";
    // create monthe dates
    for(let i=month_first_day;i>0 && i<7;i--){
        days+=`<div class="prev-date">${prvious_month-i-1}</div>`
        document.querySelector('.days').innerHTML=days;
    }
    for(let i=1;i<=current_month;i++){
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
          ) {
            days += `<div class="today">${i}</div>`;
          } else {
            days += `<div>${i}</div>`;
          }
        document.querySelector('.days').innerHTML=days;
    }
    for(let i=1;i<=lastday;i++){
        days+=`<div class="next-date">${i}</div>`
        document.querySelector('.days').innerHTML=days;
    }
};


document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    calanderRender();
})
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    calanderRender();
})


calanderRender(); 