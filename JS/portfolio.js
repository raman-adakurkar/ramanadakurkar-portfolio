const texts = ["RAMAN ADAKURKAR", "A SOFTWARE ENGINEER", "A FULL STACK DEVELOPER"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

//Open Contact Links
const myGithubUrl = "https://github.com/raman-adakurkar";
const myYoutubeUrl = "https://www.youtube.com/channel/UCwtQkyrGX3SQot6UXqW1ydA";
const myLinkedinUrl = "https://www.linkedin.com/in/raman-adakurkar-6b85971b8/";
const myGmailUrl = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfmrkhsWfLjGDXkXVRBnMFXNHQqDgRpksFTcTjQBNVPCddDrHnKSnDCfSBKWVBJbrtsWnV";

function openLink(platform) {
  switch (platform) {
    case 'github':
      window.open(myGithubUrl, '_blank');
      break;
    case 'linkedin':
      window.open(myLinkedinUrl, '_blank');
      break;
    case 'youtube':
      window.open(myYoutubeUrl, '_blank');
      break;
    case 'gmail':
      window.open(myGmailUrl, '_blank');
      break;
    default:
      window.open('www.google.in', '_blank');
  }
}

function handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target.id + ' entered the viewport');
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection);
  
  // Select all divs you want to observe
  const divsToObserve = document.querySelectorAll('.section');
  
  divsToObserve.forEach(div => {
    observer.observe(div);
  });

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById("typing-text").textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        setTimeout(type, 3000); // Delay before starting to delete
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        setTimeout(type, 1000); // Delay before starting the next text
    } else {
        setTimeout(type, isDeleting ? 50 : 50); // Typing and deleting speed
    }
})();

document.getElementById('scroll-left').addEventListener('click', function() {
    document.getElementById('experience-section').scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.getElementById('experience-section').scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: 'smooth'
    });
});

const cards = document.querySelectorAll('.skills-section-card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
    cards.forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.style.opacity = '0.3';
        }
    });
});

card.addEventListener('mouseout', () => {
        cards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});

document.getElementById('ssc-bubble').addEventListener('mouseover', function() {
    let sscBanner = document.getElementById('ssc-banner');
    sscBanner.style.display = 'flex';
    sscBanner.classList.add('fade-in');
});

document.getElementById('ssc-bubble').addEventListener('mouseout', function() {
    document.getElementById('ssc-banner').style.display = 'none';
});

document.getElementById('hsc-bubble').addEventListener('mouseover', function() {
    let sscBanner = document.getElementById('hsc-banner');
    sscBanner.style.display = 'flex';
    sscBanner.classList.add('fade-in');
});

document.getElementById('hsc-bubble').addEventListener('mouseout', function() {
    document.getElementById('hsc-banner').style.display = 'none';
});

document.getElementById('engg-bubble').addEventListener('mouseover', function() {
    let sscBanner = document.getElementById('engg-banner');
    sscBanner.style.display = 'flex';
    sscBanner.classList.add('fade-in');
});

document.getElementById('engg-bubble').addEventListener('mouseout', function() {
    document.getElementById('engg-banner').style.display = 'none';
});

document.getElementById('coditas-bubble').addEventListener('mouseover', function() {
    let sscBanner = document.getElementById('coditas-banner');
    sscBanner.style.display = 'flex';
    sscBanner.classList.add('fade-in');
});

document.getElementById('coditas-bubble').addEventListener('mouseout', function() {
    document.getElementById('coditas-banner').style.display = 'none';
});