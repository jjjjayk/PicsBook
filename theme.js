const body = document.querySelector("body"),
    cogwheel = document.querySelector(".settings"),
    settingsUI = document.querySelector(".settings-ui"),
    settingsCheckbox = document.getElementById("settings-toggle"),
    lightButton = document.getElementById("lightButton"),
    darkButton = document.getElementById("darkButton"),
    lightOn = function() {
    body.className = "";
    localStorage.removeItem("data-theme");
    },
    darkOn = function() {
    body.className = "";
    body.classList.add("darkModeOn");
    localStorage.setItem("data-theme", "dark");
    },
    settingsToggle = function() {
        if (settingsCheckbox.checked == false) {
            settingsUI.classList.remove("hidden");
        } else {
             settingsUI.classList.add("hidden");
        };
    },
    getTheme = function() {
        if (localStorage.getItem("data-theme") == "dark") {
            darkOn();
        } else {
            lightOn();
        };
    };
lightButton.addEventListener("click", lightOn);
darkButton.addEventListener("click", darkOn);
cogwheel.addEventListener("click", settingsToggle);