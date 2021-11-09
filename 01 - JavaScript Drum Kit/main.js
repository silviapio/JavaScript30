class App {
    constructor() {
        console.log("App ok");

        this.keyA = document.querySelector(".key[data-key='KeyA']");

        this.addEventListeners();
    }

    addEventListeners() {
        addEventListener("keydown", (e) => {
            if (e.code === "KeyA") {
                console.log(this.keyA);
                this.keyA.classList.add("playing");
                setTimeout(() => {
                    this.keyA.classList.remove("playing");
                }, 2000);
            };
        })
    }

}

new App();