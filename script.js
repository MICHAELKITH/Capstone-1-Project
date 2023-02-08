let wSize = window.innerWidth;
const courseOffer = document.querySelector('#performers');
const fundTeam = document.querySelector('#sponsors');
const footSection = document.querySelector('footer');

// NAVBAR
const btn = document.querySelector('.navbar-toggler');
const li = document.querySelectorAll('.navbar-nav a');
const menu = document.querySelector('.navbar-collapse');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});

li.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    btn.classList.remove('active');
  });
});

const programs = [
  {
    icon: './assets/images/JAVASCRIPT.jpg',
    head: 'Morning Session',
    info: 'Learning to code can be like preparing for a long battle..',
  },
  {
    icon: './assets/images/13th-Aug-DJ-Banner-Pair-Programming-Why-You-Should-Care-About-It-and-How-To-Do-It-Remotely.jpg',
    head: 'Program Time',
    info: '(Monday to Friday) in those time zones, but your daily schedule will differ based on your country relation to that time zone..',
  },
  {
    icon: './assets/images/13th-Aug-DJ-Banner-Pair-Programming-Why-You-Should-Care-About-It-and-How-To-Do-It-Remotely.jpg',
    head: 'Program Time',
    info: '(Monday to Friday) in those time zones, but your daily schedule will differ based on your countrys relation to that time zone.',
  },
  {
    icon: './assets/images/13th-Aug-DJ-Banner-Pair-Programming-Why-You-Should-Care-About-It-and-How-To-Do-It-Remotely.jpg',
    head: 'Stand Up Meeting',
    info: 'Every day, you will have a standup meeting with your support group to set goals for the day.',
  },
];

const skills = [
  {
    name: 'Javascript',
    pic: './assets/images/JAVASCRIPT.jpg',
    achievements: 'The Complete Vannila Course',
    info: 'This JavaScript course starts from scratch and goes on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum...',
    link: 'https://www.w3schools.com/js/',
  },
  {
    name: 'React',
    pic: './assets/images/REACT.JPG',
    achievements: 'Pure React',
    info: 'This is a pure react course without the fancy extras like redux, hooks and more. By the end of the course,',
    link: 'https://reactjs.org/tutorial/tutorial.html',
  },
  {
    name: 'Web Development',
    pic: './assets/images/Web development.jpg',
    achievements: 'Introduction to Web Development',
    info: 'This course covers the fundamental concepts of software engineering and the soft skills competencies that make a world-class software developer...',
    link: 'https://www.w3schools.com/whatis/',
  },
  {
    name: 'Quality Assurance',
    pic: './assets/images/Quality.jpg',
    achievements: 'Singer / Composer / Multi-Grammy Winner',
    info: 'Italian tenor and multi-instrumentalist. Born visually impaired, with congenital glaucoma, and at the age of 12, Bocelli became completely blind, following a brain hemorrhage resulting from a football accident.',
    link: 'https://www.techtarget.com/searchsoftwarequality/definition/quality-assurance',
  },
  {
    name: 'Ruby',
    pic: './assets/images/Ruby.jpg',
    achievements: 'The Complete Vanilla Ruby Course',
    info: 'As a general-purpose programming language, Ruby is limited only by the developer’s imagination. This course covers purely the Ruby programming .',
    link: 'https://rubyonrails.org/',
  },
  {
    name: 'Rails',
    pic: './assets/images/rails.png',
    achievements: 'Complete Ruby on Rails Course ',
    info: 'This is a complete Ruby on Rails course that will aim to demonstrate the power of the Ruby on Rails framework to build scalable and secure web application...',
    link: 'https://www.jetbrains.com/ruby/promo/?source=google&medium=cpc&campaign=10105984049&term=ruby&content=581709013173&gclid=CjwKCAiAioifBhAXEiwApzCztgVzLLIejhEXrlyBA2StI5Ai3BBrv2Les5gw27uh_9ZkDDOQlNVI4xoCQgIQAvD_BwE',
  },
  {
    name: 'Css',
    pic: './assets/images/Css.png',
    achievements: 'The Complete Vanilla CSS Course ',
    info: 'Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background',
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Interview',
    pic: './assets/images/Quality.jpg',
    achievements: 'How to an Interview Course',
    info: 'In this course, you will cover some key ideas that can help you ace any interview, such as tips on how to prepare for an interview,',
    link: 'https://hbr.org/1964/01/strategies-of-effective-interviewing',
  },
  {
    name: 'React Native',
    pic: './assets/images/native.png',
    achievements: 'React Native Course',
    info: 'This course is for developers who have a good understanding of JavaScript, web application developers that what want to use the same skills to building...',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Capstone Projects',
    pic: './assets/images/Quality.jpg',
    achievements: 'Rapper/ Singer / Songwriter / Actor ',
    info: 'In line with the Microverse Vision of connecting talented developers in World with international clients, this video workshop is brought to you by the Microverse..',
    link: 'https://github.com/microverseinc/curriculum-html-css/blob/main/articles/capstone_intro.md',
  },
];

const createElem = (eName, cName) => {
  const d = document.createElement(eName);
  if (cName) {
    d.classList.add(cName);
  }
  return d;
};

// adding skills dyncamically

const desktop = () => {
  fundTeam.classList.remove('inactive');
  footSection.classList.remove('inactive');
  if (courseOffer.hasChildNodes()) {
    courseOffer.innerHTML = '';
  }

  const con = courseOffer.appendChild(createElem('div', 'container'));
  const h2 = con.appendChild(createElem('h2', 'text-center'));
  h2.classList.add('py-2');
  h2.innerText = 'Our Courses';
  con.appendChild(createElem('hr', 'red'));
  const drow = con.appendChild(createElem('div', 'row'));
  drow.classList.add('gx-3');
  drow.classList.add('pt-1');
  drow.classList.add('pb-5');
  skills.forEach((singer) => {
    const {
      name,
      pic,
      achievements,
      info,
      link,
    } = singer;
    const dcol = drow.appendChild(createElem('div', 'col-md-6'));
    dcol.classList.add('p-3');
    const inDiv = dcol.appendChild(createElem('div', 'card'));
    inDiv.classList.add('mb-3');
    inDiv.classList.add('perf_item');
    const cd = inDiv.appendChild(createElem('div', 'row'));
    cd.classList.add('g-0');
    const left = cd.appendChild(createElem('div', 'col-sm-4'));
    left.classList.add('p-3');
    const img = left.appendChild(createElem('img', 'img-fluid'));
    img.classList.add('rounded-start');
    img.src = pic;
    img.alt = name;
    const right = cd.appendChild(createElem('div', 'col-sm-8'));
    right.classList.add('item');
    const cBody = right.appendChild(createElem('div', 'card-body'));
    const h4 = cBody.appendChild(createElem('h3', 'card-title'));
    h4.innerText = name;
    let p = cBody.appendChild(createElem('p', 'card-text'));
    p.classList.add('text-danger');
    p.innerText = achievements;
    cBody.appendChild(createElem('hr', 'inside'));
    p = cBody.appendChild(createElem('p', 'card-text'));
    p.innerText = info;
    const anchor = cBody.appendChild(createElem('a'));
    anchor.href = link;
    anchor.innerText = 'Read More';
  });
};

const mobileAdd = (drow, start, end) => {
  for (let i = start; i < end; i += 1) {
    const {
      name,
      pic,
      achievements,
      info,
      link,
    } = skills[i];
    const dcol = drow.appendChild(createElem('div', 'col-md-6'));
    dcol.classList.add('p-3');
    const inDiv = dcol.appendChild(createElem('div', 'card'));
    inDiv.classList.add('mb-3');
    inDiv.classList.add('perf_item');
    const cd = inDiv.appendChild(createElem('div', 'row'));
    cd.classList.add('g-0');
    const left = cd.appendChild(createElem('div', 'col-sm-4'));
    left.classList.add('p-3');
    const img = left.appendChild(createElem('img', 'img-fluid'));
    img.classList.add('rounded-start');
    img.src = pic;
    img.alt = name;
    const right = cd.appendChild(createElem('div', 'col-sm-8'));
    right.classList.add('item');
    const cBody = right.appendChild(createElem('div', 'card-body'));
    const h4 = cBody.appendChild(createElem('h3', 'card-title'));
    h4.innerText = name;
    let p = cBody.appendChild(createElem('p', 'card-text'));
    p.classList.add('text-danger');
    p.innerText = achievements;
    cBody.appendChild(createElem('hr', 'inside'));
    p = cBody.appendChild(createElem('p', 'card-text'));
    p.innerText = info;
    const anchor = cBody.appendChild(createElem('a'));
    anchor.href = link;
    anchor.innerText = 'Read More';
  }
};

const mobile = () => {
  if (courseOffer.hasChildNodes()) {
    courseOffer.innerHTML = '';
  }

  fundTeam.classList.add('inactive');
  footSection.classList.add('inactive');
  const con = courseOffer.appendChild(createElem('div', 'container'));
  const h2 = con.appendChild(createElem('h2', 'text-center'));
  h2.classList.add('py-2');
  h2.innerText = 'Our Courses';
  con.appendChild(createElem('hr', 'red'));
  const drow = con.appendChild(createElem('div', 'row'));
  drow.classList.add('gx-3');
  drow.classList.add('pt-1');
  drow.classList.add('pb-5');

  mobileAdd(drow, 0, skills.length / 2);

  const btn = courseOffer.appendChild(createElem('button', 'btn'));
  btn.classList.add('more');
  btn.classList.add('p-2');
  btn.innerText = 'Show More';
  let sp = btn.appendChild(createElem('span'));
  let thumb = sp.appendChild(createElem('img'));
  thumb.src = './assets/images/Disabled.png';
  thumb.alt = 'Arrow';
  btn.addEventListener('click', () => {
    mobileAdd(drow, skills.length / 2, skills.length);
    btn.innerText = 'Show Less';
    fundTeam.classList.remove('inactive');
    footSection.classList.remove('inactive');
    sp = btn.appendChild(createElem('span'));
    thumb = sp.appendChild(createElem('img'));
    thumb.src = './assets/images/Disabled.png';
    thumb.style.transform = 'rotate(180deg)';
    btn.addEventListener('click', () => {
      mobile();
    });
  });
};

if (wSize < 768) {
  mobile();
} else {
  desktop();
}

let check = false;
window.onresize = () => {
  wSize = window.innerWidth;
  if (wSize < 768 && !check) {
    check = true;
    mobile();
  } else if (wSize >= 768 && check) {
    check = false;
    desktop();
  } else {
    console('Approve');
  }
};

// adding programs dynamically
const parent = document.querySelector('#programs');
const con = parent.appendChild(createElem('div', 'container'));
con.classList.add('pb-5');
con.classList.add('pt-3');
const h2 = con.appendChild(createElem('h2', 'text-center'));
h2.innerText = 'Main Program';
con.appendChild(createElem('hr', 'red'));
const drow = con.appendChild(createElem('div', 'row'));
drow.classList.add('justify-content-center');
drow.classList.add('g-2');
programs.forEach((program) => {
  const {
    icon,
    head,
    info,
  } = program;
  const dcol = drow.appendChild(createElem('div', 'col-lg-2'));
  dcol.classList.add('col-md-3');
  dcol.classList.add('col-sm-4');
  const ins = dcol.appendChild(createElem('div', 'border'));
  const img = ins.appendChild(createElem('img', 'img-fluid'));
  img.src = icon;
  img.alt = 'N/A';
  const right = ins.appendChild(createElem('div'));
  const h3 = right.appendChild(createElem('h3'));
  h3.innerText = head;
  const p = right.appendChild(createElem('p'));
  p.innerText = info;
});
const anc = con.appendChild(createElem('a', 'prog_end'));
anc.href = '/';
anc.innerText = 'See The Whole Program';
const lastBtn = con.appendChild(createElem('button', 'last_btn'));
lastBtn.innerText = '';