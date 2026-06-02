'use client';

import Script from 'next/script';

const pageHtml = `

<header>
    <nav class="navbar">
        <div class="logo">
            <i class="fas fa-utensils"></i> KitchenPro
        </div>
        <ul class="nav-links">
            <li><a href="#home"><i class="fas fa-home"></i> Trang chủ</a></li>
            <li><a href="#products"><i class="fas fa-shopping-bag"></i> Sản phẩm</a></li>
            <li><a href="#features"><i class="fas fa-star"></i> Ưu điểm</a></li>
            <li><a href="/about"><i class="fas fa-users"></i> Về Chúng Tôi</a></li>
            <li><a href="#testimonials"><i class="fas fa-comments"></i> Đánh giá</a></li>
            <li><a href="#contact"><i class="fas fa-envelope"></i> Liên hệ</a></li>
        </ul>
        <div class="nav-actions">
            <div class="search-box">
                <input type="text" id="search-input" placeholder="Tìm kiếm..." onkeyup="searchProducts()">
                <i class="fas fa-search"></i>
            </div>
            <div class="cart-icon" onclick="toggleCart()">
                <i class="fas fa-shopping-cart"></i>
                <span id="cart-count">0</span>
            </div>
            <div id="user-area" class="user-area">
                <button class="btn-login" onclick="openAuthModal('login')">
                    <i class="fas fa-user"></i> Đăng nhập
                </button>
            </div>
        </div>
        <div class="mobile-menu" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
</header>

<section id="home" class="hero">
    <div class="hero-slider">
        <div class="hero-slide active">
            <div class="hero-content">
                <span class="hero-badge">Chất lượng hàng đầu</span>
                <h1>Nâng Tầm Nghệ Thuật <span>Ẩm Thực</span></h1>
                <p>Khám phá bộ sưu tập dụng cụ làm bếp cao cấp, giúp bạn tạo nên những món ăn tuyệt vời</p>
                <div class="hero-buttons">
                    <a href="#products" class="btn-primary"><i class="fas fa-shopping-bag"></i> Mua ngay</a>
                    <a href="#features" class="btn-secondary"><i class="fas fa-play-circle"></i> Tìm hiểu thêm</a>
                </div>
            </div>
        </div>
    </div>
    <div class="hero-stats">
        <div class="stat-item">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Khách hàng</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">Sản phẩm</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">99%</span>
            <span class="stat-label">Hài lòng</span>
        </div>
    </div>
    <div class="scroll-indicator">
        <i class="fas fa-chevron-down"></i>
    </div>
</section>

<section id="categories" class="categories">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Danh mục</span>
            <h2>Khám Phá Theo Danh Mục</h2>
        </div>
        <div class="category-grid">
            <div class="category-card" onclick="filterProducts('noi-chao')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28h32v10a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V28z" />
                        <path d="M18 28V22a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6" />
                        <path d="M22 22h20" />
                        <path d="M16 34h-4" />
                        <path d="M48 34h4" />
                    </svg>
                </div>
                <h3>Nồi & Chảo</h3>
                <p>25 sản phẩm</p>
            </div>
            <div class="category-card" onclick="filterProducts('dao-thot')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 18l28 12-8 8-14 4-6-24z" />
                        <path d="M22 24l18 8" />
                        <path d="M26 44l10-2" />
                    </svg>
                </div>
                <h3>Dao & Thớt</h3>
                <p>18 sản phẩm</p>
            </div>
            <div class="category-card" onclick="filterProducts('dien')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <rect x="22" y="14" width="20" height="28" rx="3" />
                        <path d="M24 20h16" />
                        <path d="M28 34h8" />
                        <path d="M32 44v8" />
                    </svg>
                </div>
                <h3>Đồ Điện</h3>
                <p>20 sản phẩm</p>
            </div>
            <div class="category-card" onclick="filterProducts('phu-kien')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 16c0 8 8 12 12 16v14a4 4 0 0 0 8 0V32c4-4 12-8 12-16" />
                        <path d="M32 24h12" />
                        <path d="M32 34h12" />
                    </svg>
                </div>
                <h3>Phụ Kiện</h3>
                <p>30 sản phẩm</p>
            </div>
            <div class="category-card" onclick="filterProducts('luu-tru')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 24l16-10 16 10v24l-16 10L16 48V24z" />
                        <path d="M32 14v18" />
                        <path d="M16 24l16 10 16-10" />
                    </svg>
                </div>
                <h3>Lưu Trữ</h3>
                <p>15 sản phẩm</p>
            </div>
            <div class="category-card" onclick="filterProducts('nuong')">
                <div class="category-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 32c2-8 24-12 28 0 2 6 0 14-12 16-12 2-18-4-16-16z" />
                        <path d="M24 36h16" />
                        <path d="M26 44h12" />
                    </svg>
                </div>
                <h3>Nướng & Bánh</h3>
                <p>12 sản phẩm</p>
            </div>
        </div>
    </div>
</section>

<section id="products" class="products">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Sản phẩm</span>
            <h2>Sản Phẩm Nổi Bật</h2>
        </div>
        <div class="products-toolbar">
            <div class="filter-buttons">
                <button class="filter-btn active" onclick="filterProducts('all', event)">
                    <i class="fas fa-th"></i> Tất cả
                </button>
                <button class="filter-btn" onclick="filterProducts('noi-chao', event)">
                    <i class="fas fa-fire"></i> Nồi & Chảo
                </button>
                <button class="filter-btn" onclick="filterProducts('dao-thot', event)">
                    <i class="fas fa-cut"></i> Dao & Thớt
                </button>
                <button class="filter-btn" onclick="filterProducts('dien', event)">
                    <i class="fas fa-blender"></i> Đồ Điện
                </button>
                <button class="filter-btn" onclick="filterProducts('phu-kien', event)">
                    <i class="fas fa-spoon"></i> Phụ Kiện
                </button>
                <button class="filter-btn" onclick="filterProducts('luu-tru', event)">
                    <i class="fas fa-box"></i> Lưu Trữ
                </button>
                <button class="filter-btn" onclick="filterProducts('nuong', event)">
                    <i class="fas fa-bread-slice"></i> Nướng & Bánh
                </button>
            </div>
            <div class="sort-dropdown">
                <select onchange="sortProducts(this.value)">
                    <option value="default">Sắp xếp</option>
                    <option value="price-low">Giá: Thấp → Cao</option>
                    <option value="price-high">Giá: Cao → Thấp</option>
                    <option value="name">Tên A-Z</option>
                </select>
            </div>
        </div>
        <div class="product-grid" id="product-grid"></div>
    </div>
</section>

<section id="features" class="features">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Tại sao chọn chúng tôi</span>
            <h2>Ưu Điểm Vượt Trội</h2>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 6 12 16v18c0 18 10 26 20 30 10-4 20-12 20-30V16L32 6z" />
                        <path d="M24 28l8 8 12-12" />
                    </svg>
                </div>
                <h3>Chất Lượng Cao</h3>
                <p>Sản phẩm được chọn lọc kỹ càng từ các thương hiệu uy tín hàng đầu thế giới</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 40h30V24H10z" />
                        <path d="M40 24h10l8 10v10H40" />
                        <path d="M10 40h48" />
                        <circle cx="20" cy="48" r="6" />
                        <circle cx="46" cy="48" r="6" />
                    </svg>
                </div>
                <h3>Giao Hàng Nhanh</h3>
                <p>Miễn phí vận chuyển cho đơn hàng từ 500K, giao hàng trong 24h nội thành</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 18a14 14 0 0 1 14 14c0 1.5-.2 3-.5 4.4" />
                        <polyline points="50 20 58 20 58 28" />
                        <path d="M32 46a14 14 0 0 1-14-14c0-1.5.2-3 .5-4.4" />
                        <polyline points="14 44 6 44 6 36" />
                    </svg>
                </div>
                <h3>Đổi Trả Dễ Dàng</h3>
                <p>Chính sách đổi trả trong 30 ngày nếu sản phẩm có lỗi từ nhà sản xuất</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 34v10a6 6 0 0 0 6 6h2v-18a10 10 0 0 1 20 0v18h2a6 6 0 0 0 6-6V34" />
                        <path d="M16 34a16 16 0 0 1 32 0" />
                    </svg>
                </div>
                <h3>Hỗ Trợ 24/7</h3>
                <p>Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn mọi lúc mọi nơi</p>
            </div>
        </div>
    </div>
</section>

<section class="promo-banner">
    <div class="container">
        <div class="promo-content">
            <span class="promo-badge">Ưu đãi đặc biệt</span>
            <h2>Giảm Đến 50% Cho Đơn Hàng Đầu Tiên</h2>
            <p>Sử dụng mã: <strong>WELCOME50</strong></p>
            <a href="#products" class="btn-primary"><i class="fas fa-gift"></i> Nhận ưu đãi</a>
        </div>
    </div>
</section>

<section id="testimonials" class="testimonials">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Đánh giá</span>
            <h2>Khách Hàng Nói Gì</h2>
            <p class="section-desc">Đánh giá thực từ khách hàng đã mua sắm tại KitchenPro</p>
        </div>
        <div class="testimonials-summary" id="testimonials-summary"></div>
        <div class="testimonials-grid" id="testimonials-grid"></div>
        <div class="testimonials-actions">
            <button class="btn-secondary" onclick="openSiteReviewsModal()">
                <i class="fas fa-comments"></i> Xem tất cả đánh giá
            </button>
            <button class="btn-primary" onclick="openReviewModal()">
                <i class="fas fa-star"></i> Viết đánh giá
            </button>
        </div>
    </div>
</section>

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <div class="section-header left">
                    <span class="section-badge">Liên hệ</span>
                    <h2>Kết Nối Với Chúng Tôi</h2>
                </div>
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 58S12 38 12 24a20 20 0 0 1 40 0c0 14-20 34-20 34z" />
                                <circle cx="32" cy="24" r="6" />
                            </svg>
                        </div>
                        <div>
                            <h4>Địa chỉ</h4>
                            <p>123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect x="18" y="12" width="28" height="40" rx="6" />
                                <path d="M26 20h12" />
                                <path d="M26 30h12" />
                                <path d="M26 40h8" />
                            </svg>
                        </div>
                        <div>
                            <h4>Điện thoại</h4>
                            <p>0123 456 789</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect x="12" y="20" width="40" height="24" rx="4" />
                                <path d="M12 20l20 14 20-14" />
                            </svg>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>info@kitchenpro.vn</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="18" />
                                <path d="M32 18v12" />
                                <path d="M32 32h10" />
                            </svg>
                        </div>
                        <div>
                            <h4>Giờ làm việc</h4>
                            <p>8:00 - 21:00 (Thứ 2 - CN)</p>
                        </div>
                    </div>
                </div>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
            <div class="contact-form">
                <h3>Gửi Tin Nhắn</h3>
                <form id="contact-form" onsubmit="submitForm(event)">
                    <div class="form-group">
                        <input type="text" id="contact-name" placeholder="Họ và tên" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="contact-email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="contact-phone" placeholder="Số điện thoại">
                    </div>
                    <div class="form-group">
                        <textarea id="contact-message" placeholder="Nội dung tin nhắn" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-paper-plane"></i> Gửi tin nhắn
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<div id="cart-sidebar" class="cart-sidebar">
    <div class="cart-header">
        <h3><i class="fas fa-shopping-cart"></i> Giỏ Hàng</h3>
        <button onclick="toggleCart()"><i class="fas fa-times"></i></button>
    </div>
    <div id="cart-items" class="cart-items"></div>
    <div class="cart-footer">
        <div class="cart-total">
            <span>Tổng cộng:</span>
            <span id="cart-total">0đ</span>
        </div>
        <button class="btn-checkout" onclick="checkout()">
            <i class="fas fa-credit-card"></i> Thanh toán
        </button>
    </div>
</div>
<div id="cart-overlay" class="cart-overlay" onclick="toggleCart()"></div>

<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h3><i class="fas fa-utensils"></i> KitchenPro</h3>
                <p>Địa chỉ tin cậy cho mọi nhu cầu dụng cụ làm bếp của bạn.</p>
            </div>
            <div class="footer-col">
                <h4>Liên kết</h4>
                <ul>
                    <li><a href="#home">Trang chủ</a></li>
                    <li><a href="#products">Sản phẩm</a></li>
                    <li><a href="#features">Ưu điểm</a></li>
                    <li><a href="#contact">Liên hệ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Hỗ trợ</h4>
                <ul>
                    <li><a href="#">Chính sách đổi trả</a></li>
                    <li><a href="#">Hướng dẫn mua hàng</a></li>
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                    <li><a href="#">Điều khoản sử dụng</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Đăng ký nhận tin</h4>
                <p>Nhận thông tin ưu đãi mới nhất</p>
                <div class="newsletter">
                    <input type="email" placeholder="Email của bạn">
                    <button><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 KitchenPro. All rights reserved.</p>
        </div>
    </div>
</footer>

<button id="back-to-top" onclick="scrollToTop()"><i class="fas fa-arrow-up"></i></button>

<div id="auth-modal" class="auth-modal">
    <div class="auth-modal-content">
        <button class="auth-close" onclick="closeAuthModal()"><i class="fas fa-times"></i></button>
        <div id="login-form" class="auth-form active">
            <div class="auth-header">
                <div class="auth-icon"><i class="fas fa-user-circle"></i></div>
                <h2>Đăng Nhập</h2>
                <p>Chào mừng bạn quay lại!</p>
            </div>
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="login-email" placeholder="Nhập email của bạn" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-lock"></i> Mật khẩu</label>
                    <input type="password" id="login-password" placeholder="Nhập mật khẩu" required>
                </div>
                <div class="form-options">
                    <label class="remember-me">
                        <input type="checkbox" id="remember-me"> Ghi nhớ đăng nhập
                    </label>
                    <a href="#" onclick="openForgotPasswordModal()" class="forgot-password">Quên mật khẩu?</a>
                </div>
                <button type="submit" class="btn-auth">
                    <i class="fas fa-sign-in-alt"></i> Đăng nhập
                </button>
            </form>
            <div class="auth-divider"><span>hoặc</span></div>
            <div class="social-auth">
                <button class="btn-social google" onclick="loginWithGoogle()"><i class="fab fa-google"></i> Google</button>
                <button class="btn-social facebook" onclick="loginWithFacebook()"><i class="fab fa-facebook-f"></i> Facebook</button>
            </div>
            <p class="auth-switch">
                Chưa có tài khoản? <a href="#" onclick="switchAuthForm('register')">Đăng ký ngay</a>
            </p>
        </div>
        <div id="register-form" class="auth-form">
            <div class="auth-header">
                <div class="auth-icon"><i class="fas fa-user-plus"></i></div>
                <h2>Đăng Ký</h2>
                <p>Tạo tài khoản mới</p>
            </div>
            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label><i class="fas fa-user"></i> Họ và tên</label>
                    <input type="text" id="register-name" placeholder="Nhập họ và tên" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="register-email" placeholder="Nhập email của bạn" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-phone"></i> Số điện thoại</label>
                    <input type="tel" id="register-phone" placeholder="Nhập số điện thoại">
                </div>
                <div class="form-group">
                    <label><i class="fas fa-lock"></i> Mật khẩu</label>
                    <input type="password" id="register-password" placeholder="Tạo mật khẩu" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-lock"></i> Xác nhận mật khẩu</label>
                    <input type="password" id="register-confirm" placeholder="Nhập lại mật khẩu" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-heart"></i> Sở thích nấu ăn</label>
                    <div class="preference-tags">
                        <label class="pref-tag"><input type="checkbox" value="noi-chao"> Nồi & Chảo</label>
                        <label class="pref-tag"><input type="checkbox" value="dao-thot"> Dao & Thớt</label>
                        <label class="pref-tag"><input type="checkbox" value="dien"> Đồ Điện</label>
                        <label class="pref-tag"><input type="checkbox" value="nuong"> Nướng & Bánh</label>
                        <label class="pref-tag"><input type="checkbox" value="phu-kien"> Phụ Kiện</label>
                        <label class="pref-tag"><input type="checkbox" value="luu-tru"> Lưu Trữ</label>
                    </div>
                </div>
                <label class="terms">
                    <input type="checkbox" required> Tôi đồng ý với <a href="#">điều khoản sử dụng</a>
                </label>
                <button type="submit" class="btn-auth">
                    <i class="fas fa-user-plus"></i> Đăng ký
                </button>
            </form>
            <p class="auth-switch">
                Đã có tài khoản? <a href="#" onclick="switchAuthForm('login')">Đăng nhập</a>
            </p>
        </div>
    </div>
</div>
<div id="auth-overlay" class="auth-overlay" onclick="closeAuthModal()"></div>

<div id="forgot-modal" class="auth-modal">
    <div class="auth-modal-content">
        <button class="auth-close" onclick="closeForgotPasswordModal()"><i class="fas fa-times"></i></button>
        <div class="auth-form active">
            <div class="auth-header">
                <div class="auth-icon"><i class="fas fa-key"></i></div>
                <h2>Quên Mật Khẩu</h2>
                <p>Đặt lại mật khẩu của bạn</p>
            </div>
            <form onsubmit="handleForgotPassword(event)">
                <div class="form-group">
                    <label><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" id="forgot-email" placeholder="Nhập email của bạn" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-lock"></i> Mật khẩu mới</label>
                    <input type="password" id="forgot-password" placeholder="Nhập mật khẩu mới" required>
                </div>
                <div class="form-group">
                    <label><i class="fas fa-lock"></i> Xác nhận mật khẩu</label>
                    <input type="password" id="forgot-confirm" placeholder="Nhập lại mật khẩu" required>
                </div>
                <button type="submit" class="btn-auth">
                    <i class="fas fa-sync-alt"></i> Đặt lại mật khẩu
                </button>
            </form>
            <p class="auth-switch">
                <a href="#" onclick="closeForgotPasswordModal(); openAuthModal('login')">Quay lại đăng nhập</a>
            </p>
        </div>
    </div>
</div>
<div id="forgot-overlay" class="auth-overlay" onclick="closeForgotPasswordModal()"></div>

<div id="recommendations-section" class="recommendations-section" style="display: none;">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><i class="fas fa-magic"></i> Dành cho bạn</span>
            <h2>Gợi Ý Sản Phẩm</h2>
            <p id="welcome-user"></p>
        </div>
        <div class="recommendation-grid" id="recommendation-grid"></div>
    </div>
</div>

<div id="order-history-modal" class="modal">
    <div class="modal-content modal-large">
        <div class="modal-header">
            <h2><i class="fas fa-history"></i> Lịch Sử Giao Dịch</h2>
            <button class="modal-close" onclick="closeOrderHistory()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div id="order-history-list" class="order-history-list"></div>
        </div>
    </div>
</div>
<div id="order-history-overlay" class="modal-overlay" onclick="closeOrderHistory()"></div>

<div id="admin-panel" class="modal">
    <div class="modal-content modal-fullscreen">
        <div class="modal-header admin-header">
            <h2><i class="fas fa-shield-alt"></i> Admin Panel</h2>
            <button class="modal-close" onclick="closeAdminPanel()"><i class="fas fa-times"></i></button>
        </div>
        <div class="admin-body">
            <div class="admin-sidebar">
                <button class="admin-nav-btn active" onclick="showAdminTab('dashboard', event)">
                    <i class="fas fa-chart-line"></i> Dashboard
                </button>
                <button class="admin-nav-btn" onclick="showAdminTab('orders', event)">
                    <i class="fas fa-shopping-bag"></i> Đơn hàng
                </button>
                <button class="admin-nav-btn" onclick="showAdminTab('products', event)">
                    <i class="fas fa-box"></i> Sản phẩm
                </button>
                <button class="admin-nav-btn" onclick="showAdminTab('users', event)">
                    <i class="fas fa-users"></i> Người dùng
                </button>
                <button class="admin-nav-btn" onclick="showAdminTab('messages', event)">
                    <i class="fas fa-envelope"></i> Tin nhắn <span id="unread-badge" class="unread-badge"></span>
                </button>
            </div>
            <div class="admin-content">
                <div id="admin-dashboard" class="admin-tab active">
                    <h3>Tổng quan</h3>
                    <div class="admin-stats">
                        <div class="admin-stat-card">
                            <i class="fas fa-shopping-cart"></i>
                            <div>
                                <span id="stat-orders">0</span>
                                <p>Đơn hàng</p>
                            </div>
                        </div>
                        <div class="admin-stat-card">
                            <i class="fas fa-money-bill-wave"></i>
                            <div>
                                <span id="stat-revenue">0đ</span>
                                <p>Doanh thu</p>
                            </div>
                        </div>
                        <div class="admin-stat-card">
                            <i class="fas fa-users"></i>
                            <div>
                                <span id="stat-users">0</span>
                                <p>Người dùng</p>
                            </div>
                        </div>
                        <div class="admin-stat-card">
                            <i class="fas fa-box"></i>
                            <div>
                                <span id="stat-products">36</span>
                                <p>Sản phẩm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="admin-orders" class="admin-tab">
                    <h3>Quản lý đơn hàng</h3>
                    <div id="admin-orders-list" class="admin-table-container"></div>
                </div>
                <div id="admin-products" class="admin-tab">
                    <div class="admin-tab-header">
                        <h3>Quản lý sản phẩm</h3>
                        <button class="btn-primary" onclick="openAddProductModal()">+ Thêm sản phẩm mới</button>
                    </div>
                    <div id="admin-products-list" class="admin-table-container"></div>
                </div>
                <div id="admin-users" class="admin-tab">
                    <h3>Quản lý người dùng</h3>
                    <div id="admin-users-list" class="admin-table-container"></div>
                </div>
                <div id="admin-messages" class="admin-tab">
                    <h3>Tin nhắn từ khách hàng</h3>
                    <div id="admin-messages-list" class="admin-table-container"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="admin-overlay" class="modal-overlay" onclick="closeAdminPanel()"></div>

<div id="edit-image-modal" class="modal">
    <div class="modal-content modal-small">
        <div class="modal-header">
            <h2><i class="fas fa-image"></i> Cập Nhật Hình Ảnh</h2>
            <button class="modal-close" onclick="closeEditImageModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div class="edit-image-preview">
                <img id="preview-current-image" src="" alt="Preview">
            </div>
            <div class="form-group">
                <label><i class="fas fa-link"></i> Link hình ảnh mới</label>
                <input type="url" id="new-image-url" placeholder="Dán link hình ảnh vào đây..." onpaste="handleImagePaste(event)">
            </div>
            <div class="form-group">
                <label><i class="fas fa-eye"></i> Xem trước</label>
                <div class="edit-image-preview new-preview">
                    <img id="preview-new-image" src="" alt="New Preview" style="display: none;">
                    <span id="preview-placeholder"><i class="fas fa-image"></i> Dán link để xem trước</span>
                </div>
            </div>
            <button class="btn-auth" onclick="saveProductImage()">
                <i class="fas fa-save"></i> Lưu hình ảnh
            </button>
        </div>
    </div>
</div>
<div id="edit-image-overlay" class="modal-overlay" onclick="closeEditImageModal()"></div>

<div id="add-product-modal" class="modal">
    <div class="modal-content modal-small">
        <div class="modal-header">
            <h2><i class="fas fa-plus-circle"></i> Thêm Sản Phẩm Mới</h2>
            <button class="modal-close" onclick="closeAddProductModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label><i class="fas fa-tag"></i> Tên sản phẩm</label>
                <input type="text" id="new-product-name" placeholder="Tên sản phẩm" required>
            </div>
            <div class="form-group">
                <label><i class="fas fa-dollar-sign"></i> Giá</label>
                <input type="number" id="new-product-price" min="0" placeholder="Giá" required>
            </div>
            <div class="form-group">
                <label><i class="fas fa-box"></i> Số lượng kho</label>
                <input type="number" id="new-product-stock" min="0" placeholder="Số lượng" required>
            </div>
            <div class="form-group">
                <label><i class="fas fa-list"></i> Danh mục</label>
                <select id="new-product-category">
                    <option value="noi-chao">Nồi & Chảo</option>
                    <option value="dao-thot">Dao & Thớt</option>
                    <option value="dien">Đồ Điện</option>
                    <option value="phu-kien">Phụ Kiện</option>
                    <option value="luu-tru">Lưu Trữ</option>
                    <option value="nuong">Nướng & Bánh</option>
                </select>
            </div>
            <div class="form-group">
                <label><i class="fas fa-file-image"></i> Ảnh sản phẩm</label>
                <input type="file" id="new-product-image-file" accept="image/*">
            </div>
            <div class="form-group">
                <label><i class="fas fa-align-left"></i> Mô tả</label>
                <textarea id="new-product-description" placeholder="Mô tả sản phẩm"></textarea>
            </div>
            <button class="btn-auth" onclick="handleAddProduct()">
                <i class="fas fa-save"></i> Lưu sản phẩm
            </button>
        </div>
    </div>
</div>
<div id="add-product-overlay" class="modal-overlay" onclick="closeAddProductModal()"></div>

<div id="review-modal" class="modal">
    <div class="modal-content modal-small">
        <div class="modal-header">
            <h2><i class="fas fa-star"></i> Đánh Giá Website</h2>
            <button class="modal-close" onclick="closeReviewModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body review-modal-body">
            <p class="review-prompt">Bạn đánh giá trải nghiệm mua sắm tại KitchenPro như thế nào?</p>
            <div class="star-rating" id="star-rating">
                <i class="far fa-star" data-rating="1"></i>
                <i class="far fa-star" data-rating="2"></i>
                <i class="far fa-star" data-rating="3"></i>
                <i class="far fa-star" data-rating="4"></i>
                <i class="far fa-star" data-rating="5"></i>
            </div>
            <p class="rating-text" id="rating-text">Chọn số sao</p>
            <div class="form-group">
                <label><i class="fas fa-comment"></i> Nhận xét của bạn</label>
                <textarea id="review-comment" placeholder="Chia sẻ trải nghiệm của bạn..." rows="4"></textarea>
            </div>
            <button class="btn-auth" onclick="submitReview()">
                <i class="fas fa-paper-plane"></i> Gửi đánh giá
            </button>
        </div>
    </div>
</div>
<div id="review-overlay" class="modal-overlay" onclick="closeReviewModal()"></div>

<button id="review-btn" class="floating-review-btn" onclick="openReviewModal()">
    <i class="fas fa-star"></i>
    <span>Đánh giá</span>
</button>

<div id="site-reviews-modal" class="modal">
    <div class="modal-content modal-large">
        <div class="modal-header">
            <h2><i class="fas fa-comments"></i> Đánh Giá Từ Khách Hàng</h2>
            <button class="modal-close" onclick="closeSiteReviewsModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body">
            <div class="reviews-summary" id="reviews-summary"></div>
            <div class="reviews-list" id="reviews-list"></div>
        </div>
    </div>
</div>
<div id="site-reviews-overlay" class="modal-overlay" onclick="closeSiteReviewsModal()"></div>

<div id="checkout-modal" class="modal">
    <div class="modal-content modal-medium">
        <div class="modal-header">
            <h2><i class="fas fa-shopping-bag"></i> Xác Nhận Đơn Hàng</h2>
            <button class="modal-close" onclick="closeCheckoutModal()"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body checkout-body">
            <div class="checkout-summary">
                <h4><i class="fas fa-receipt"></i> Tóm tắt đơn hàng</h4>
                <div id="checkout-items"></div>
                <div class="checkout-total">
                    <span>Tổng cộng:</span>
                    <span id="checkout-total-amount">0đ</span>
                </div>
            </div>
            <div class="checkout-address">
                <h4><i class="fas fa-map-marker-alt"></i> Địa chỉ giao hàng</h4>
                <div class="form-group">
                    <label>Họ tên người nhận</label>
                    <input type="text" id="checkout-name" placeholder="Nhập họ tên">
                </div>
                <div class="form-group">
                    <label>Số điện thoại</label>
                    <input type="tel" id="checkout-phone" placeholder="Nhập số điện thoại">
                </div>
                <div class="form-group">
                    <label>Địa chỉ giao hàng</label>
                    <div class="address-input-wrapper">
                        <input type="text" id="checkout-address" placeholder="Nhập địa chỉ hoặc chọn trên bản đồ">
                        <button type="button" class="btn-map" onclick="openMapPicker()">
                            <i class="fas fa-map-marked-alt"></i>
                        </button>
                    </div>
                </div>
                <div id="map-container" class="map-container" style="display: none;">
                    <iframe id="google-map" width="100%" height="250" frameborder="0" style="border:0; border-radius: 10px;" allowfullscreen></iframe>
                    <p class="map-hint"><i class="fas fa-info-circle"></i> Nhập địa chỉ và nhấn nút bản đồ để xem vị trí</p>
                </div>
                <div class="form-group">
                    <label>Ghi chú</label>
                    <textarea id="checkout-note" placeholder="Ghi chú cho đơn hàng (tùy chọn)" rows="2"></textarea>
                </div>
            </div>
            <button class="btn-auth btn-confirm-order" onclick="confirmOrder()">
                <i class="fas fa-check-circle"></i> Xác nhận đặt hàng
            </button>
        </div>
    </div>
</div>
<div id="checkout-overlay" class="modal-overlay" onclick="closeCheckoutModal()"></div>

<div id="product-detail-modal" class="modal">
    <div class="modal-content modal-large">
        <button class="modal-close" onclick="closeProductDetail()"><i class="fas fa-times"></i></button>
        <div id="product-detail-content" class="product-detail-content"></div>
    </div>
</div>
<div id="product-detail-overlay" class="modal-overlay" onclick="closeProductDetail()"></div>
`;

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
      <Script src="./script.js" strategy="afterInteractive" />
    </>
  );
}
