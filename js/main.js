const Form = document.querySelector('#form');
const Input = document.querySelector('input[type="text"]');
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

  li.className = "tudu__item anim_item pb-4 d-flex justify-content-between";

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
  } else {
    btn.appendChild(i)
    li.appendChild(p);
    li.appendChild(btn);
    elList.appendChild(li);
  }

  Input.value = "";


  let Ctit = false;
  let remov = true;
  let Completee = true;
  let InComp = true
  let alll = false;


  p.addEventListener('click', () => {
    remov = false

    if (Ctit == false) {
      p.classList.add("tit")
      btn.classList.add("t_btn")
      i.classList.remove("bx-x")
      i.classList.add("bx-check")

      Completee = false
      InComp = false
      Ctit = true
      alll = true
    }
    else {
      p.classList.remove("tit")
      btn.classList.remove("t_btn")
      i.classList.remove("bx-check")
      i.classList.add("bx-x")

      Completee = true
      InComp = true
      Ctit = false
      alll = false
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

      Completee = true
      InComp = true
      remov = true
    }
  })


  elBtnAll.addEventListener('click', () => {
    if (alll == false) {
      li.classList.remove('complete')
    } else {
      li.classList.remove('complete')
    }
  })


  elBtnComp.addEventListener('click', () => {
    if (Completee == true) {
      li.classList.add('complete')
    }
    if (InComp == false) {
      li.classList.remove('complete')
    }
  })


  elBtnInCom.addEventListener('click', () => {
    if (InComp == false) {
      li.classList.add('complete')
    }
    if (Completee == true) {
      li.classList.remove('complete')
    }
  })
}