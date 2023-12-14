let address = document.getElementById("address");;
let link = document.getElementsByTagName("a")[1];
address.addEventListener("keyup", (e) => {
  e.preventDefault(); // handle auto reload
  console.log(address.value);
  link.setAttribute('href',`/weather?address=${address.value}`)
});
