// ini javascript

console.log("hello world");

function formvallidation() {
    let name = document.getElementById("name").value;
    console.log(name);
    var email = document.getElementById("email").value;
    var options = document.getElementById("options").value;

    if (name == "") {
        alert("Maaf inputan anda kosong");
     } else {
        alert("Sukses mengimput")
     }
}
