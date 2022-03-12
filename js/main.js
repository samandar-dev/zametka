const Input = document.querySelector('input[type="text"]');
const Form = document.querySelector('#form');
const elList = document.querySelector('#list');
const elBtnAll = document.querySelector('#all');
const elBtnComp = document.querySelector('#complete');
const elBtnInCom = document.querySelector('#incomplete');

Form.addEventListener('submit', addItems);

function addItems(e) {
  e.preventDefault();

  let InputValue = Input.value;

  let li = document.createElement('li');
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let i = document.createElement('i')
  let noInput = document.createElement('p')
  let coment = "Empty input ?"

  li.className = "tudu__item anim_item pb-4 d-flex align-items-center justify-content-between";

  p.className = "tudu__item_tit";
  p.appendChild(document.createTextNode(InputValue));

  btn.className = "tudu__item_btn";
  i.className = 'bx bx-x';

  noInput.className = ("com")
  noInput.appendChild(document.createTextNode(coment))

  Input.addEventListener('click', () => {
    noInput.remove();
  })

  if (InputValue == "" || InputValue == " " || InputValue == "  ") {
    Form.appendChild(noInput);
  }
  else {
    btn.appendChild(i)
    li.appendChild(p);
    li.appendChild(btn);
    elList.appendChild(li);
  }


  Input.value = "";

  let Ctit = false;
  let remov = true;
  let Completee = false;
  let Incompletee = false;
  let alll = false;

  p.addEventListener('click', () => {
    remov = false

    if (Ctit == false) {
      p.classList.add("tit")
      btn.classList.add("t_btn")
      i.classList.remove("bx-x")
      i.classList.add("bx-check")

      Completee = true
      Ctit = true
      alll = true
    } else {
      p.classList.remove("tit")
      btn.classList.remove("t_btn")
      i.classList.remove("bx-check")
      i.classList.add("bx-x")

      Ctit = false
    }
  })

  btn.addEventListener('click', () => {
    if (remov == true) {
      li.remove();
    } else {
      p.classList.remove("tit");
      btn.classList.remove("t_btn")
      i.classList.remove("bx-check")
      i.classList.add("bx-x")

      remov = true
    }
  })


  elBtnComp.addEventListener('click', () => {
    if (Completee == true) {
      li.classList.add('complete')
    }
    alll = true
  })

  elBtnInCom.addEventListener('click', () => {
    if (Incompletee == false) {
      li.classList.add('in-comp')
    }
    alll = true
  })

  elBtnAll.addEventListener('click', () => {
    if (alll == true) {
      li.classList.add('all')
    }
  })



}




