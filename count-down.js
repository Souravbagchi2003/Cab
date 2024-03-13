let drive = 0
function runDriven() {
    setInterval(function () {
        if (drive <= 8800) {
            drive+= 50
            document.getElementById("driven").textContent = drive
        }
    }, 5)
}
runDriven()

let people1 = 0
function runPeople1() {
    setInterval(function () {
        if (people1 <= 500) {
            people1++
            document.getElementById("pdropped").textContent = people1
        }
    }, 25)
}
runPeople1()

let driver = 0
function runTaxi() {
    setInterval(function () {
        if (driver <= 59) {
            driver++
            document.getElementById("taxidriver").textContent = driver
        }
    }, 25)
}
runTaxi()

let people2 = 0
function runPeople2() {
    setInterval(function () {
        if (people2 <= 299) {
            people2++
            document.getElementById("phappy").textContent = people2
        }
    }, 25)
}
runPeople2()