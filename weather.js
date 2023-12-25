let sidebar = document.querySelector(".sidebar");
let openSidebar = document.querySelector(".open");
let closeSidebar = document.querySelector(".close");
let menu = document.querySelector(".menu");
openSidebar.addEventListener("click", () => {
    openSidebar.style.display = "none";
    closeSidebar.style.display = "block";
    menu.style.left = "0";
    sidebar.style.borderRadius = "0";
});
closeSidebar.addEventListener("click", () => {
    closeSidebar.style.display = "none";
    openSidebar.style.display = "block";
    menu.style.left = "-1000px";
    sidebar.style.borderTopRightRadius = "5px";
    sidebar.style.borderBottomRightRadius = "5px";

});

let url = 'https://api.openweathermap.org/data/2.5/';
let key = '4ac125c3cead0ab707544840eae7021f';



let setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value);
        getResponse(searchBar.value);
    }

}

let getResult = (cityName) => {
    let query = ` ${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query).then(weather => {

        return weather.json()
    }).then(displayResult)
}


let displayResult = (result) => {
    console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`
    let degree = document.querySelector('.degree');
    degree.innerText = `${Math.round(result.main.temp)}°C`
    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;


    let i_fLike = document.querySelector('.FeelsLike span i');
    let feelsSpan = document.querySelector('.feelsSpan');
    feelsSpan.innerText = "Feels Like";
    i_fLike.className = "fa-solid fa-temperature-three-quarters";
    let feelLikes = document.querySelector('.rFeel');
    feelLikes.innerText = ` ${Math.round(result.main.feels_like)}°C`;
    let i_wind = document.querySelector('.wind span i');
    i_wind.className = "fa-solid fa-wind";
    let windSpan = document.querySelector('.windSpan');
    windSpan.innerText = "Wind";
    let wind = document.querySelector('.windSpeed');
    wind.innerText = `${result.wind.speed} km/sa`;
    let i_hum = document.querySelector('.humidity span i');
    i_hum.className = "fa-solid fa-droplet";
    let humSpan = document.querySelector('.humSpan');
    humSpan.innerText = "Humidity";
    let hum = document.querySelector('.hum');
    hum.innerText = `%${result.main.humidity}`;
    let i_sun = document.querySelector('.sunrise_sunset span i');
    i_sun.className = "fa-regular fa-sun";
    let sunSpan = document.querySelector('.sunSpan');
    sunSpan.innerText = "Sunrise/Sunset";
    let sun = document.querySelector('.sun');
    let sunrise = new Date((result.sys.sunrise * 1000));
    let sunset = new Date((result.sys.sunset * 1000))
    sun.innerText = `${sunrise.getHours()}:${sunrise.getMinutes()} / ${sunset.getHours()}:${sunset.getMinutes()}`;

    let image = document.querySelector('.top-left img').setAttribute("src", `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`);
    let first = document.querySelector('.first');
    first.classList.add('active')


}
let getResponse = (cityName) => {
    let response = `${link}forecast?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(response).then(res => {
        return res.json();
    }).then(displayResponse);
}
let displayResponse = (result) => {
    console.log(result)
    let image = document.querySelectorAll('.bottom-container div img');
    image.forEach((imageWeather, index) => {
        imageWeather.setAttribute("src", `https://openweathermap.org/img/wn/${result.list[index].weather[0].icon}@2x.png`);
    })
    let wdescription = document.querySelectorAll('.description');
    wdescription.forEach((day, index) => {
        day.innerText = result.list[index].weather[0].description;
    });
    let dayName = document.querySelectorAll('.bottom-container div .day');
    dayName.forEach((dName, index) => {
        dName.innerText = hour((result.list[index].dt_txt), 16);
    });
    let min_max = document.querySelectorAll('.bottom-container div .min-max-temp');
    min_max.forEach((minMax, index) => {
        minMax.innerText = `${Math.round(result.list[index].main.temp)}°C / ${Math.round(result.list[index].main.feels_like)}°C`
    });
    let activeDiv = document.querySelectorAll('.bottom-container div');
    activeDiv.forEach(active_div => {
        active_div.classList.add('active')
    });



}


let link = "https://api.openweathermap.org/data/2.5/";







let searchBar = document.querySelector('.searchCity');
searchBar.addEventListener('keypress', setQuery);


function page_loading() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Sivas&appid=4ac125c3cead0ab707544840eae7021f&units=metric&lang=tr").then(res => {
        return res.json();
    }).then(result => {
        console.log(result)
        let city = document.querySelector('.city');
        city.innerText = `${result.name}, ${result.sys.country}`
        let degree = document.querySelector('.degree');
        degree.innerText = `${Math.round(result.main.temp)}°C`
        let desc = document.querySelector('.desc');
        desc.innerText = result.weather[0].description;


        let i_fLike = document.querySelector('.FeelsLike span i');
        let feelsSpan = document.querySelector('.feelsSpan');
        feelsSpan.innerText = "Feels Like";
        i_fLike.className = "fa-solid fa-temperature-three-quarters";
        let feelLikes = document.querySelector('.rFeel');
        feelLikes.innerText = ` ${Math.round(result.main.feels_like)}°C`;
        let i_wind = document.querySelector('.wind span i');
        i_wind.className = "fa-solid fa-wind";
        let windSpan = document.querySelector('.windSpan');
        windSpan.innerText = "Wind";
        let wind = document.querySelector('.windSpeed');
        wind.innerText = `${result.wind.speed} km/sa`;
        let i_hum = document.querySelector('.humidity span i');
        i_hum.className = "fa-solid fa-droplet";
        let humSpan = document.querySelector('.humSpan');
        humSpan.innerText = "Humidity";
        let hum = document.querySelector('.hum');
        hum.innerText = `%${result.main.humidity}`;
        let i_sun = document.querySelector('.sunrise_sunset span i');
        i_sun.className = "fa-regular fa-sun";
        let sunSpan = document.querySelector('.sunSpan');
        sunSpan.innerText = "Sunrise/Sunset";
        let sun = document.querySelector('.sun');
        let sunrise = new Date((result.sys.sunrise * 1000));
        let sunset = new Date((result.sys.sunset * 1000))
        sun.innerText = `${sunrise.getHours()}:${sunrise.getMinutes()} / ${sunset.getHours()}:${sunset.getMinutes()}`;

        let image = document.querySelector('.top-left img').setAttribute("src", `https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`);
        let first = document.querySelector('.first');
        first.classList.add('active')
    });

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Sivas&appid=4ac125c3cead0ab707544840eae7021f&units=metric&lang=tr").then(res => {
        return res.json();
    }).then(result => {
        console.log(result)
        let image = document.querySelectorAll('.bottom-container div img');
        image.forEach((imageWeather, index) => {
            imageWeather.setAttribute("src", `https://openweathermap.org/img/wn/${result.list[index].weather[0].icon}@2x.png`);
        })
        let wdescription = document.querySelectorAll('.description');
        wdescription.forEach((day, index) => {
            day.innerText = result.list[index].weather[0].description;
        });
        let dayName = document.querySelectorAll('.bottom-container div .day');
        dayName.forEach((dName, index) => {

            dName.innerText = hour((result.list[index].dt_txt), 16);
        });
        let min_max = document.querySelectorAll('.bottom-container div .min-max-temp');
        min_max.forEach((minMax, index) => {
            minMax.innerText = `${Math.round(result.list[index].main.temp)}°C / ${Math.round(result.list[index].main.feels_like)}°C`
        });
        let activeDiv = document.querySelectorAll('.bottom-container div');
        activeDiv.forEach(active_div => {
            active_div.classList.add('active')
        });
    })


}

function hour(txt, max) {
    return txt = txt.substring(10, max);
}


