

function getUrl() {

    const url = document.getElementById("url").value
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`)
        .then(response => document.getElementById('qrCodeImage').src = response.url)
        .then(response => console.log(response))
        .catch(err => console.error(err));
    document.getElementById("yourLink").innerHTML = url
}