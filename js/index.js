// Bài 1:
// Bước 1: Xác định đầu vào:
1;
document.getElementById("sort").onclick = function () {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  var numberPse = number1;
  if (number1 > number2) {
    number1 = number2;
    number2 = numberPse;
  }
  if (number2 > number3) {
    numberPse = number2;
    number2 = number3;
    number3 = numberPse;
  }
  document.getElementById(
    "result1"
  ).innerHTML = `Thứ tự tăng dần là: ${number1}, ${number2}, ${number3}`;
};

// Bài 2:

document.getElementById("greeting").onclick = function () {
  var person = document.getElementById("doiTuong").value;
  switch (person) {
    case "bo":
      person = "Bố";
      break;
    case "me":
      person = "Mẹ";
      break;

    case "anhTrai":
      person = "Anh Trai";
      break;
    case "emGai":
      person = "Em Gái";
      break;
    default:
      break;
  }
  document.getElementById(
    "result2"
  ).innerHTML = `Xin chào ${person} đang sử dụng máy `;
};

// Bài 3:
// Bước 1: Xác định đầu vào: + 3 số nguyên: int1, int2, int3
// evenNumbers, oddNumbers
// Bước 2:
// TH1: Nếu int1%2 ===0 thì evenNumbers = 1;
// ngược lại thì oddNumbers =1;
// TH2: Nếu int2%2 === 0 thì evenNumbers+=1
// Ngược lại thì oddNumbers +=1
// TH3: Nếu int3%2 === 0 thì evenNumbers+=1
// ngược lại thì oddnumbers +=1

// Bước 3: Kết quả:
// Có evenNumbers số chẵn và oddNumbers số lẻ

document.getElementById("evenOdd").onclick = function () {
  var int1 = +document.getElementById("int1").value;
  var int2 = +document.getElementById("int2").value;
  var int3 = +document.getElementById("int3").value;
  var evenNumbers = 0;
  var oddNumbers = 0;

  if (int1 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }

  if (int2 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }

  if (int3 % 2 === 0) {
    evenNumbers += 1;
  } else {
    oddNumbers += 1;
  }
  document.getElementById(
    "result3"
  ).innerHTML = `Có ${evenNumbers} số chẵn và ${oddNumbers} số lẻ`;
};

document.getElementById("triangle").onclick = function () {
  var edge1 = +document.getElementById("edge1").value;
  var edge2 = +document.getElementById("edge2").value;
  var edge3 = +document.getElementById("edge3").value;
  var triangleShape;
  var vuong1, vuong2, vuong3;
  vuong1 = edge1 * edge1 + edge2 * edge2 - edge3 * edge3;
  vuong2 = edge1 * edge1 + edge3 * edge3 - edge2 * edge2;
  vuong3 = -edge1 * edge1 + edge2 * edge2 + edge3 * edge3;

  if (edge1 === edge2 && edge2 === edge3) {
    triangleShape = "Đều";
  } else if (edge1 === edge2 || edge2 === edge3 || edge1 === edge3) {
    triangleShape = "Cân";
  } else if (vuong1 === 0 || vuong2 === 0 || vuong3 === 0) {
    triangleShape = "vuông";
  } else {
    triangleShape = "thường";
  }
  document.getElementById(
    "result4"
  ).innerHTML = `Tam giác trên là tam giác ${triangleShape}`;
};
