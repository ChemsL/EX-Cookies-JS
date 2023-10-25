
if (!getCookie('cgu')) {
    window.location.href = 'index.html';
    exit()
}

document.getElementById("scales").addEventListener('click', function () {
    document.cookie = "cgu=on"
})
function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name + "="))
        ?.split('=')[1]
    if (value === undefined) {
        return false
    } else {
    return true
}
}