/*const ism = prompt("Ismingizni kiriting:")
const yosh = +prompt("Yoshinigizni kiriting:")
const result = `Qadrli ${ism}. Siz ${2023-yosh} yilda tugulgansiz. Va siz ${yosh * 12} 
oy, ${((yosh * 365)/7).toFixed(0)} hafta, ${yosh * 365} kun, ${yosh * 365 * 24} soat, ${yosh * 365 * 24 * 60} daqiqa,
${yosh * 365 * 24 * 60 * 60} soniya yashagansiz.`
alert(result)*/

/*const ism = prompt("Ism kiriting:")
const ismlar = ['Ahror', 'Sardor', 'Doniyor']

if(ismlar.includes(ism)) {
    alert(`Ha ${ism} bor`)
}else {
    alert(`Afsus ${ism} yuq`)
}*/

//const ismlar = ['Ahror', 'Sardor', 'Doniyor']

/*for (let i = 0; i < ismlar.length; i++) {
    let result = ismlar[i] + 'bek'
    console.log(result);
}*/

/*let i = 0

while (i < ismlar.length) {
    let result = ismlar[i] + 'bek'
    console.log(result);

    i++
}*/


/*const viloyatNomi = prompt('Qaysi viloyat nomi kerak ?')
switch (viloyatNomi) {
    case "Farg'ona":
        alert("Farg'ona viloyatida 2 mln aholi bor")
        break;  
}*/


const belgilar = prompt("Nimadirlar yozing")
console.log(belgilar.length);
let meyor = 20
if(belgilar.length > meyor) {
    alert(`Siz ${meyor}ta belgi kritishingiz mumkin lekin hozirda siz ${belgilar.length}ta belgi kiritdiz.
    Bu meyoridan ${belgilar.length - meyor}ta kup.`)
}else {
    alert(`Siz ${meyor}ta belgi kritishingiz mumkin lekin hozirda siz ${belgilar.length}ta belgi kiritdiz.
    Yana ${meyor - belgilar.length }ta belgi kiritishingiz mumkin.`)
}

