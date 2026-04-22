/* =============================================
   SIVA SUBRAMANIYEN — Portfolio main.js
   ============================================= */

// ── Custom Cursor ──────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ── Navbar Scroll Effect ───────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Reveal on Scroll ───────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children within same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ── Active Nav Link Highlight ──────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));

// ── Smooth nav link clicks ─────────────────────
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Hero name letter animation on load ─────────
window.addEventListener('load', () => {
  const lines = document.querySelectorAll('.hero-name .line');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(40px)';
    line.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    line.style.transitionDelay = (0.2 + i * 0.15) + 's';
    requestAnimationFrame(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    });
  });

  // Trigger hero reveals immediately
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 300 + i * 100);
  });
});

// ── Skill tag hover tilt ────────────────────────
document.querySelectorAll('.skill-tags span').forEach((tag) => {
  tag.addEventListener('mousemove', (e) => {
    const rect = tag.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    tag.style.transform = `perspective(200px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});

// ── Project card tilt effect ───────────────────
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease, border-color 0.3s, background 0.3s';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease, border-color 0.3s, background 0.3s';
  });
});

// ── Typed tag cycling in hero ──────────────────
const tags = [
  'M.Tech AI Engineering · Chennai, India',
  'Deep Learning · NLP · Computer Vision',
  'Open to AI/ML Roles & Research',
];
let tagIdx = 0;
const heroTag = document.querySelector('.hero-tag');

if (heroTag) {
  setInterval(() => {
    heroTag.style.opacity = '0';
    heroTag.style.transform = 'translateY(-8px)';
    heroTag.style.transition = 'opacity 0.4s, transform 0.4s';
    setTimeout(() => {
      tagIdx = (tagIdx + 1) % tags.length;
      heroTag.textContent = tags[tagIdx];
      heroTag.style.opacity = '1';
      heroTag.style.transform = 'translateY(0)';
    }, 400);
  }, 3200);
}
