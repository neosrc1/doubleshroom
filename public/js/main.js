function changeIFrame(rootURL) {
        // @ts-ignore
        document.getElementById("iframe-mid").src = rootURL;
}

document.getElementById("btn-home").addEventListener("click", () => {changeIFrame("home.html")});
document.getElementById("btn-ocv").addEventListener("click", () => {changeIFrame("ocv.html")});