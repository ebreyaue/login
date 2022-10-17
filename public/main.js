const dateInput = document.getElementById("date");
const batteryLevel = document.getElementById("batteryLevel");
const hostname = document.getElementById("hostname");
const cancel = document.getElementById("cancel_button");
const login = document.getElementById("login");

const body = document.querySelector("body");
const wifi = document.getElementById("wifi");
const passwordInput = document.getElementById("password");

const time = document.getElementById('time');

//external variables
let computername = "openbsd.emmanuel.lan"; //name of computer
let SSID = "Network2_Wlan"; // name of lan or eth connection

wifi.innerText = SSID;
hostname.innerText = computername;


navigator.getBattery().then((battery) => {
    const showBatteryLevel = () => {
        let level = Math.floor(battery.level * 100);
        batteryLevel.innerText = level;
    };

    showBatteryLevel();
    battery.ondischargingtimechange = () => {
        showBatteryLevel();
    };

    battery.onchargintimechange = () => {
        showBatteryLevel();
    };
});


function get_time() {
    return moment().format("ddd D MMM h:mm A");
}

dateInput.innerText = get_time();

setInterval(() => {
    dateInput.innerText = get_time()
}, 1000 * 60);


passwordInput.addEventListener('click', () => {
    body.requestFullscreen()
});






