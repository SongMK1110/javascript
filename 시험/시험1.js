let books = [
  {
    no: 'inbn0002', title: '스프링',
    writer: '김기자', price: 40000
  },
  {
    no: 'inbn0003', title: '자바',
    writer: '이순신', price: 25000
  },
  {
    no: 'inbn0004', title: 'SQL',
    writer: '을지문덕', price: 32000
  }
]
function book123() {
  list.innerHTML = '';

  for (let i = 0; i < books.length; i++) {

    let datas = `<tr>
    <td><input type="checkbox"></td>
    <td>${books[i].no}</td>
    <td>${books[i].title}</td>
    <td>${books[i].writer}</td>
    <td class="price">${books[i].price}</td>
    <td><button>삭제</button></td>
  </tr>`

    list.innerHTML += datas
  }
}

book123();

btn12345.addEventListener("click", function (ev) {

  if (no.value == '' || title.value == '') {
    alert("입력하세요");
    return;
  }
  books.push({ no: no.value, title: title.value, writer: writer.value, price: price.value });

  no.value = '';
  title.value = '';
  writer.value = '';
  price.value = '';

  book123();
  total();
});


list.addEventListener("click", function (ev) {
  let node = ev.target;
  if (node.nodeName == "BUTTON") {
    node.closest("tr").remove()
    // for(let i = 0; i < books.length; i++){
    //   let idx = 
    //   books[i] = 
    // }
    total()
  }
});

function total() {
  let price123 = list.querySelectorAll(".price");
  let sum = 0;
  for (let i = 0; i < price123.length; i++) {
    sum += parseInt(price123[i].innerHTML);
  }
  totalPrice.innerHTML = sum
}

total();