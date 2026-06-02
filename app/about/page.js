'use client';

import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Nguyễn Ngọc Tú Uyên',
    role: 'Nhà Sáng Lập / Lập Trình Viên Front-end / Quản Lý Dự Án',
    description: 'Người dẫn dắt KitchenPro từ khái niệm đến hiện thực, kết hợp chiến lược sản phẩm sáng suốt với kỹ năng front-end chuyên nghiệp. Đam mê thiết kế giao diện sạch sẽ và trải nghiệm mua sắm tuyệt vời.',
    image: '2f4281f7eaca6b9432db.jpg',
  },
  {
    name: 'Võ Minh Tâm',
    role: 'Lập Trình Viên Back-end / Kỹ Sư Dữ Liệu',
    description: 'Xây dựng nền tảng ổn định và tối ưu cho trải nghiệm mua sắm. Chuyên về phát triển server, cơ sở dữ liệu và đảm bảo hiệu suất cao cho ứng dụng.',
    image: '2037af8cc4b145ef1ca0.jpg',
  },
  {
    name: 'Nguyễn Hoàng Phúc',
    role: 'Thiết Kế UI/UX / Kiểm Thử Chất Lượng',
    description: 'Tạo ra bố cục trực quan và hệ thống nhận diện thương hiệu thân thiện. Đảm bảo mọi tính năng hoạt động mượt mà trên mọi thiết bị và cung cấp trải nghiệm người dùng tối ưu.',
    image: '1ab3a809c334426a1b25.jpg',
  },
];

const statsData = [
  { label: 'Thành Viên Nhóm', value: 3, suffix: '+' },
  { label: 'Giờ Phát Triển', value: 1200, suffix: '+' },
  { label: 'Tính Năng Hoàn Thành', value: 48, suffix: '+' },
  { label: 'Mức Hài Lòng Người Dùng', value: 98, suffix: '%' },
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
            <span className="section-badge">Về KitchenPro</span>
            <h1>Về Chúng Tôi</h1>
            <p>
              KitchenPro là một nền tảng thương mại điện tử bán dụng cụ nhà bếp hiện đại được tạo ra để cung cấp cho người dùng trải nghiệm mua sắm tiện lợi và thú vị. Từ dụng cụ nhà bếp cao cấp đến các ý tưởng nhà bếp thông minh, chúng tôi xây dựng một điểm đến tuyệt vời cho các đầu bếp nhà và những người yêu thích nấu ăn.
            </p>
            <div className="hero-actions">
              <a href="#our-story" className="btn-primary">Đọc Câu Chuyện Của Chúng Tôi</a>
              <a href="#our-team" className="btn-secondary">Gặp Gỡ Nhóm</a>
            </div>
          </div>
          <div className="about-hero-visual">
            
          </div>
        </div>
      </section>

      <section id="our-story" className="about-section about-story">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Câu Chuyện Của Chúng Tôi</span>
            <h2>Câu Chuyện Của Chúng Tôi</h2>
          </div>
          <div className="story-grid">
            <article className="story-card">
              <span className="story-step">01</span>
              <h3>Khởi Đầu</h3>
              <p>KitchenPro bắt đầu từ niềm đam mê chung về dụng cụ nhà bếp và mong muốn giúp mọi người nấu những bữa ăn tuyệt vời với những công cụ họ yêu thích.</p>
            </article>
            <article className="story-card">
              <span className="story-step">02</span>
              <h3>Động Lực Thúc Đẩy</h3>
              <p>Chúng tôi muốn tạo một nền tảng kết hợp khám phá sản phẩm đẹp mắt, điều hướng mượt mà và dịch vụ chu đáo cho những người yêu thích nhà bếp.</p>
            </article>
            <article className="story-card">
              <span className="story-step">03</span>
              <h3>Mục Tiêu Của Chúng Tôi</h3>
              <p>Sứ mệnh của chúng tôi là cải thiện trải nghiệm mua sắm trực tuyến cho sản phẩm nhà bếp thông qua thiết kế hiện đại, trình bày rõ ràng và hỗ trợ đáng tin cậy.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="meet-founder" className="about-section founder-section">
        <div className="container founder-grid">
          <div className="founder-image-card">

          </div>
          <div className="founder-copy">
            <span className="section-badge">Gặp Gỡ Nhà Sáng Lập</span>
            <h2>Nhà Sáng Lập</h2>
            <h3>Nguyễn Ngọc Tú Uyên</h3>
            <p className="founder-role">Nhà Sáng Lập / Lập Trình Viên Front-end / Quản Lý Dự Án</p>
            <p>
              Nguyễn Ngọc Tú Uyên là sinh viên Công Nghệ Thông Tin tại Trường Đại Học Lạc Hồng, người đã dẫn dắt KitchenPro từ khái niệm đến hiện thực. Kết hợp chiến lược sản phẩm sáng suốt với kỹ năng lập trình front-end chuyên nghiệp, tú Uyên đam mê thiết kế giao diện sạch sẽ và tạo ra trải nghiệm mua sắm tuyệt vời cho người dùng.
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
            <span className="section-badge">Nhóm Của Chúng Tôi</span>
            <h2>Nhóm Của Chúng Tôi</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-avatar">
                  <img src={`/images/${member.image}`} alt={`${member.name} profile placeholder`} />
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

      <section className="about-section mission-vision-section">
        <div className="container mission-vision-grid">
          <article className="mission-card">
            <div className="icon-circle">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Sứ Mệnh Của Chúng Tôi</h3>
            <p>Tạo một cửa hàng kỹ thuật số cao cấp cho các sản phẩm nhà bếp dễ dàng duyệt, hấp dẫn về hình ảnh và đáng tin cậy cho mọi khách hàng.</p>
          </article>
          <article className="vision-card">
            <div className="icon-circle">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Tầm Nhìn Của Chúng Tôi</h3>
            <p>Trở thành điểm đến hàng đầu cho những đầu bếp nhà tìm kiếm những công cụ nhà bếp thanh lịch, dịch vụ xuất sắc và một hành trình mua sắm ngoài sức tưởng tượng.</p>
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
            <span className="section-badge">Liên Hệ</span>
            <h2>Liên Hệ Với Nhóm KitchenPro</h2>
            <p>Có câu hỏi hoặc muốn hợp tác? Các nhà sáng lập và lập trình viên của chúng tôi sẵn sàng kết nối và hỗ trợ hành trình nhà bếp của bạn.</p>
            <div className="contact-card">
              <div>
                <h4>Email</h4>
                <p>hello@kitchenpro.example</p>
              </div>
              <div>
                <h4>Kho Lưu Trữ</h4>
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
            <h3>Thông Tin Nhóm</h3>
            <p>KitchenPro được xây dựng bởi ba sinh viên Công Nghệ Thông Tin từ Đại Học Lạc Hồng, những người chú ý đến từng chi tiết và mỗi trải nghiệm mua sắm của khách hàng.</p>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-check"></i></div>
              <div>
                <h4>Phản Hồi Nhanh</h4>
                <p>Nhận hỗ trợ và cập nhật từ nhóm một cách nhanh chóng.</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-code"></i></div>
              <div>
                <h4>Thân Thiện Với Mã Nguồn Mở</h4>
                <p>Chúng tôi hoan nghênh các đóng góp và cải tiến trên kho lưu trữ của chúng tôi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
