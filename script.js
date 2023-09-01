function getUrl() {
    const url = document.getElementById("url").value;
    const generateButton = document.getElementById("generateButton");
    const spinner = document.getElementById("spinner");
    const pleaseWait = document.getElementById("pleaseWait");

    spinner.classList.remove("hidden");
    pleaseWait.classList.remove("hidden");
    generateButton.disabled = true;

    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`)
        .then(response => {
            spinner.classList.add("hidden");
            pleaseWait.classList.add("hidden");
            generateButton.disabled = false;

            document.getElementById('qrCodeImage').src = response.url;
        })
        .then(response => console.log(response))
        .catch(err => {
            spinner.classList.add("hidden");
            pleaseWait.classList.add("hidden");
            generateButton.disabled = false;

            console.error(err);
        });

    document.getElementById("yourLink").innerHTML = url;
}
