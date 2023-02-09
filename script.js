const hamburgerButton = document.querySelector('#hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu-modal');
const mobileMenuLink = document.querySelectorAll('.mobile-menu a');

const courseProgram = [
  {
    name: 'Javascript',
    title: 'The Complete Vannila Coursel',
    description: 'This JavaScript course starts from scratch and goes on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum...',
    image: 'assets/images/JAVASCRIPT.jpg',
  },
  {
    name: 'React',
    title: 'Pure React',
    description: 'This is a pure react course without the fancy extras like redux, hooks and more. By the end of the course,',
    image: 'assets/images/REACT.jpg',
  },
  {
    name: 'Web Development',
    title: 'Introduction to Web Development',
    description: 'This course covers the fundamental concepts of software engineering and the soft skills competencies that make a world-class software developer.',
    image: 'assets/images/Quality.jpg',
  },
  {
    name: 'Ruby',
    title: 'The Complete Vanilla Ruby Course',
    description: 'As a general-purpose programming language, Ruby is limited only by the developer’s imagination. This course covers purely the Ruby programming .',
    image: 'assets/images/ruby.jpg',
  },
  {
    name: 'Rails',
    title: 'Complete Ruby on Rails Course',
    description: 'This is a complete Ruby on Rails course that will aim to demonstrate the power of the Ruby on Rails framework to build scalable and secure web application...',
    image: 'assets/images/rails.png',
  },
  {
    name: 'Css',
    title: 'The Complete Vanilla CSS Course',
    description: 'Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background',
    image: 'assets/images/Css.png',
  },
];

const generateCard = (cardData) => {
  const markup = document.createElement('div');
  markup.classList.add('course-card');
  markup.innerHTML = `  <div class="image-container">
    <img src=${cardData.image} alt="${cardData.name}-picture">
  </div>
  <div class="courses-detail">
    <p class ="courses-name">${cardData.name}</p>
    <p class="courses-title">${cardData.title}</p>
    <div class="courses-separator"></div>
    <p class="courses-description">${cardData.description}</p>
  </div>`;
  return markup;
};

const generateMentorCard = () => {
  if (document.querySelector('.units-container')) {
    const courseContainer = document.querySelector('.units-container');
    for (let i = 0; i < courseProgram.length; i += 1) {
      courseContainer.appendChild(generateCard(courseProgram[i]));
    }
  }
};

generateMentorCard();

const toggleMenuDisplay = () => {
  document.body.classList.toggle('toggle-modal-body');
  hamburgerButton.classList.toggle('change');
  mobileMenu.classList.toggle('toogleModalDisplay');
};

hamburgerButton.addEventListener('click', toggleMenuDisplay);

mobileMenuLink.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});