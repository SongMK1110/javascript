let books = [
  {
    no: 'inbn002',
    title: '스프링',
    writer: '김기자',
    price: 40000
  },
  {
    no: 'inbn003',
    title: '자바',
    writer: '이순신',
    price: 25000
  },
  {
    no: 'inbn004',
    title: 'SQL',
    writer: '을지문덕',
    price: 32000
  }
]

addBooks();
total();

// books 배열대로 테이블 추가
function addBooks() {
  list.innerHTML = '';

  for (let i = 0; i < books.length; i++) {
    let datas =
      `<tr>
      <td><input type="checkbox"></td>
      <td>${books[i].no}</td>
      <td>${books[i].title}</td>
      <td>${books[i].writer}</td>
      <td class="price">${books[i].price}</td>
      <td><button>삭제</button></td>
      </tr>`;
    list.innerHTML += datas;

  };
};

// 삭제
list.addEventListener('click', function (ev) {
  if (ev.target.nodeName == 'BUTTON') {
    ev.target.closest('tr').remove();

    let no = ev.target.closest("tr").children[1].innerHTML;
    for (let i = 0; i < books.length; i++) {
      if (no == books[i].no) {
        books.splice(i, 1);
      };
    };
    // addBooks();

    total();
  };

});

// 추가 버튼 누르면 books 배열에 추가
btn12345.addEventListener('click', function () {
  // 도서번호, 도서명 입력 x 경고창 출력
  if (no.value == '') {
    alert("도서번호 입력하세요");
    return;
  }
  else if (title.value == '') {
    alert("도서명 입력하세요");
    return;
  };

  let datas = {
    no: no.value,
    title: title.value,
    writer: writer.value,
    price: price.value
  };

  books.push(datas);

  addBooks();
  total();

  no.value = '';
  title.value = '';
  writer.value = '';
  price.value = '';

});

function total() {
  let price = list.querySelectorAll(".price");
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += parseInt(price[i].innerHTML);
  }
  totalPrice.innerHTML = sum;
};