'use client';

import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Mai An',
    role: 'Front-end Developer',
    description: 'Thiết kế trải nghiệm người dùng và chuyển ý tưởng thành giao diện hiện đại.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+1',
  },
  {
    name: 'Linh Trần',
    role: 'UI/UX Designer',
    description: 'Tạo ra bố cục trực quan và hệ thống nhận diện thương hiệu thân thiện.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+2',
  },
  {
    name: 'Huy Phạm',
    role: 'Back-end Developer',
    description: 'Xây dựng nền tảng ổn định và tối ưu cho trải nghiệm mua sắm.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+3',
  },
  {
    name: 'Bảo Ngọc',
    role: 'Product Manager',
    description: 'Định hướng sản phẩm và đảm bảo mọi tính năng đều mang lại giá trị cho khách hàng.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+4',
  },
  {
    name: 'An Khang',
    role: 'QA Engineer',
    description: 'Kiểm tra chất lượng, đảm bảo mọi tính năng hoạt động mượt mà trên mọi thiết bị.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+5',
  },
  {
    name: 'Thảo Vy',
    role: 'Content Strategist',
    description: 'Xây dựng nội dung thuyết phục và tự nhiên giúp KitchenPro kết nối với khách hàng.',
    image: 'https://via.placeholder.com/360x360?text=Team+Member+6',
  },
];

const galleryImages = [
  'https://via.placeholder.com/520x360?text=Meeting',
  'https://via.placeholder.com/360x520?text=Brainstorm',
  'https://via.placeholder.com/420x420?text=Development',
  'https://via.placeholder.com/520x420?text=Presentation',
  'https://via.placeholder.com/360x360?text=Team+Activity',
];

const statsData = [
  { label: 'Team Members', value: 6, suffix: '+' },
  { label: 'Development Hours', value: 1200, suffix: '+' },
  { label: 'Completed Features', value: 48, suffix: '+' },
  { label: 'User Satisfaction', value: 98, suffix: '%' },
];

export default function AboutPage() {
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    const animation = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounters(
        statsData.map(({ value }) => Math.floor(value * progress))
      );

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="section-badge">About KitchenPro</span>
            <h1>About KitchenPro</h1>
            <p>
              KitchenPro is a modern kitchen and cookware e-commerce platform created to provide users with a convenient and enjoyable shopping experience.
              From premium cookware to smart kitchen ideas, we build a boutique destination for home chefs and culinary lovers.
            </p>
            <div className="hero-actions">
              <a href="#our-story" className="btn-primary">Read Our Story</a>
              <a href="#our-team" className="btn-secondary">Meet the Team</a>
            </div>
          </div>
          <div className="about-hero-visual">
            <img
              src="https://via.placeholder.com/900x600?text=KitchenPro+Team+Banner"
              alt="KitchenPro team banner placeholder"
            />
          </div>
        </div>
      </section>

      <section id="our-story" className="about-section about-story">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Story</span>
            <h2>Our Story</h2>
          </div>
          <div className="story-grid">
            <article className="story-card">
              <span className="story-step">01</span>
              <h3>Where it started</h3>
              <p>KitchenPro began as a shared passion for cookware and a desire to help people create better meals with tools they love.</p>
            </article>
            <article className="story-card">
              <span className="story-step">02</span>
              <h3>Driven by motivation</h3>
              <p>We wanted a platform that combined beautiful product discovery, smooth navigation, and thoughtful service for kitchen enthusiasts.</p>
            </article>
            <article className="story-card">
              <span className="story-step">03</span>
              <h3>Our goal</h3>
              <p>Our mission is to improve online shopping experiences for kitchen products through modern design, clear presentation, and reliable support.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="meet-founder" className="about-section founder-section">
        <div className="container founder-grid">
          <div className="founder-image-card">
            <img
              src="https://via.placeholder.com/520x620?text=Founder+Portrait"
              alt="Founder profile placeholder"
            />
          </div>
          <div className="founder-copy">
            <span className="section-badge">Meet the Founder</span>
            <h2>Meet the Founder</h2>
            <h3>Nguyễn Minh</h3>
            <p className="founder-role">Founder / Front-end Developer / Project Manager</p>
            <p>
              Nguyễn led KitchenPro from concept to reality, blending thoughtful product strategy with polished front-end craftsmanship.
              Passionate about clean UI and delightful shopping, the founder brings every design choice back to the customer experience.
            </p>
            <div className="social-links founder-socials">
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section id="our-team" className="about-section team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2>Our Team</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-avatar">
                  <img src={member.image} alt={`${member.name} profile placeholder`} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.description}</p>
                <div className="social-links">
                  <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="behind-scenes" className="about-section gallery-section">
        <div className="container">
          <div className="section-header left">
            <span className="section-badge">Behind The Scenes</span>
            <h2>Behind The Scenes</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div key={index} className={`gallery-item gallery-item-${index + 1}`}>
                <img src={src} alt={`Behind the scenes ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section mission-vision-section">
        <div className="container mission-vision-grid">
          <article className="mission-card">
            <div className="icon-circle">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p>To create a premium digital store for kitchen products that is easy to browse, visually compelling, and trustworthy for every customer.</p>
          </article>
          <article className="vision-card">
            <div className="icon-circle">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>To become the go-to destination for home cooks seeking elegant kitchen tools, great service, and an exceptional shopping journey.</p>
          </article>
        </div>
      </section>

      <section className="about-section stats-section">
        <div className="container">
          <div className="stats-grid">
            {statsData.map((item, index) => (
              <div key={item.label} className="stat-card">
                <span className="stat-number">{counters[index]}{item.suffix}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="about-section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="section-badge">Contact</span>
            <h2>Talk to the KitchenPro Team</h2>
            <p>Have a question or want to collaborate? Our founders and developers are ready to connect and support your kitchen journey.</p>
            <div className="contact-card">
              <div>
                <h4>Email</h4>
                <p>hello@kitchenpro.example</p>
              </div>
              <div>
                <h4>Repository</h4>
                <p><a href="#">github.com/kitchenpro/project</a></p>
              </div>
            </div>
            <div className="social-links contact-socials">
              <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div className="contact-card contact-details-card">
            <h3>Team Information</h3>
            <p>KitchenPro is built by a dedicated team of product strategists, designers, developers, and quality experts who care about every pixel and purchase.</p>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-check"></i></div>
              <div>
                <h4>Fast response</h4>
                <p>Get support and updates from the team quickly.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-code"></i></div>
              <div>
                <h4>Open source friendly</h4>
                <p>We welcome contributors and improvements on our repository.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
