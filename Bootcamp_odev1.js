let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 }
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];

//----------1
arr1.unshift("a");
console.log(arr1);

//----------2
arr1.push(6);
console.log(arr1);

//----------3
arr1.pop();
console.log(arr1);

//----------4
arr1.splice(0, 1); //0. indisten başla bir eleman sil.
console.log(arr1);

//----------5
//---a)
const newArr = arr1.concat(arr2); //concat kullanarak 2 arrayi birleştirdim ve yeni bir arreye atadım.
console.log(newArr);

//---b)
const newArr2 = [...arr1, ...arr2];
console.log(newArr2);

//--------------6
const includes = (arr, value) => {
  console.log(arr.includes(value));
};
includes(arr1, "a");

//--------------7
console.log("h elemanının indexi: " + arr2.indexOf("h"));

//--------------8
//---a
arr2.splice(3, 4);
console.log(arr2);
/*arr2' yi eski haline döndürelim*/
arr2.push("1", "1", "1", "4");

//---b
/*şimdi slice ile arrayin belirli indexleri arasından üç elemanı seçelim.*/
arr2 = arr2.slice(3, 6);
console.log(arr2);

//---------------9
const sumOfNumbers = (arr) => {
  let newArr = arr.filter((value) => typeof value == typeof 1);
  let summary = newArr.reduce((val1, val2) => val1 + val2);
  return summary;
};
console.log(sumOfNumbers(arr1));

//-----------10
const stringIt = arr1.map((val) => val.toString());
console.log(stringIt);

//-----------11
const el = arr3.find((user) => user.id === 221);
console.log(el);

//------------12
const e = arr3.filter((user) => user.name === "ali");
console.log(e);

//-----------13
const sumOfIds = arr3.reduce((a,b) => {
  return a += b.id;
},0);
console.log(sumOfIds);



/* 
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın
*/
