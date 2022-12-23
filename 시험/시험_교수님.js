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
// 배열의 데이터로 태그 그리기
book123();
// 가격 총 금액
total();

list.addEventListener("click", function (ev) {
  let node = ev.target;
  if (node.nodeName == "BUTTON") {
    // node.closest("tr").remove()
    let no = ev.target.closest("tr").children[1].innerHTML;
    
    for(let i = 0; i < books.length; i++){
      if(books[i].no == no){
        books.splice(i, 1);
      }
    }
    book123();

    total()
  }
});

btn12345.addEventListener("click", function (ev) {

  if (!inputCheck()) {
    return;
  }; // 도서명 or 도서번호 체크

  // 배열 추가
  books.push({ no: no.value, title: title.value, writer: writer.value, price: parseInt(price.value) });



  total(); // 총금액 
  book123();  // 배열의 내용을 태그로 그리고  
  inputClear(); // 텍스트 필드 클리어

});

function inputClear() {
  no.value = '';
  title.value = '';
  writer.value = '';
  price.value = '';
}

function inputCheck() {
  if (no.value == '') {
    alert("도서번호");
    no.focus();
    return false;
  }
  if (title.value == '') {
    alert("도서명 등록");
    title.focus();
    return false;
  }
  return true;
}

function total() {
  let total = 0;
  for(let i=0; i<books.length; i++) {
    total += books[i].price;
  }
  totalPrice.innerHTML = total;
}

