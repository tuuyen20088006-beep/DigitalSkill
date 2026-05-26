// Product Data - Hình ảnh từ Unsplash (phù hợp với tên sản phẩm)
const products = [
    // Nồi & Chảo
    { id: 1, name: "Bộ Nồi Inox 5 Món Cao Cấp", price: 1500000, oldPrice: 2000000, category: "noi-chao", badge: "sale", rating: 5, reviews: 128, image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mg35hqdiai2z57", stock: 10, description: "Bộ nồi inox 5 món cao cấp, chất liệu inox 304 an toàn cho sức khỏe. Đáy từ 3 lớp dẫn nhiệt đều, tiết kiệm năng lượng. Phù hợp mọi loại bếp." },
    { id: 2, name: "Chảo Chống Dính GreenCook ", price: 450000, category: "noi-chao", badge: "new", rating: 4.5, reviews: 89, image: "https://product.hstatic.net/200000061070/product/gcp06-28ih-1_84c03bff386b47df83cec4993e3a0646_master.jpg", stock: 15, description: "Chảo chống dính ceramic cao cấp, lớp phủ ceramic an toàn không chứa PFOA. Tay cầm cách nhiệt, thiết kế hiện đại." },
    { id: 3, name: "Nồi Áp Suất Điện Đa Năng", price: 1200000, oldPrice: 1500000, category: "noi-chao", badge: "sale", rating: 5, reviews: 256, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-4ryebeqc3ukv70", stock: 8, description: "Nồi áp suất điện đa năng 6L, 12 chế độ nấu tự động. Tiết kiệm thời gian nấu ăn, giữ nguyên dinh dưỡng." },
    { id: 4, name: "Chảo Gang Đúc Truyền Thống", price: 680000, category: "noi-chao", rating: 4.5, reviews: 67, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll90qh1nhcc602", stock: 5, description: "Chảo gang đúc nguyên khối, giữ nhiệt tốt, bền bỉ theo thời gian. Lý tưởng cho các món xào, chiên." },
    { id: 5, name: "Nồi Lẩu Điện 2 Ngăn Mishio", price: 890000, category: "noi-chao", badge: "hot", rating: 4, reviews: 145, image: "https://source.unsplash.com/400x300/?hotpot,kitchen", stock: 12, description: "Nồi lẩu điện 2 ngăn tiện lợi, nấu 2 vị cùng lúc. Điều chỉnh nhiệt độ riêng biệt, dung tích 5L." },
    { id: 6, name: "Bộ Xoong Nồi Inox 304", price: 2200000, oldPrice: 2800000, category: "noi-chao", badge: "sale", rating: 5, reviews: 312, image: "https://down-vn.img.susercontent.com/file/sg-11134202-22110-orzytxma2zjvc2", stock: 3, description: "Bộ xoong nồi inox 304 cao cấp 7 món, đáy 5 lớp dẫn nhiệt siêu nhanh. Nắp kính cường lực, tay cầm chống nóng." },
    
    // Dao & Thớt
    { id: 7, name: "Bộ Dao Thép Không Gỉ", price: 890000, category: "dao-thot", badge: "best", rating: 5, reviews: 234, image: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-rabwk0wjqyovca", stock: 20, description: "Bộ dao 8 món thép không gỉ cao cấp, lưỡi sắc bén, tay cầm ergonomic. Kèm kệ để dao gỗ sang trọng." },
{ id: 8, name: "Thớt Gỗ Teak Cao Cấp", price: 350000, category: "dao-thot", rating: 4.5, reviews: 78, image: "https://wallpaperaccess.com/full/9345389.jpg", stock: 25, description: "Thớt gỗ teak nguyên khối, kháng khuẩn tự nhiên, không thấm nước. Bề mặt mịn, không làm cùn dao." },
    { id: 9, name: "Dao Chef Nhật Bản 21cm", price: 1200000, category: "dao-thot", badge: "new", rating: 5, reviews: 156, image: "https://chefstore.vn/images/product/large/dao-chef-miyabi-1020089-luoi-203mm-birchwood-handle_3.webp", stock: 7, description: "Dao chef Nhật Bản lưỡi thép Damascus 67 lớp, sắc bén vượt trội. Tay cầm gỗ pakka chống trượt." },
    { id: 10, name: "Bộ 3 Thớt Nhựa Kháng Khuẩn TECH", price: 280000, category: "dao-thot", rating: 4, reviews: 92, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8372h8pew6m56", stock: 30, description: "Bộ 3 thớt nhựa kháng khuẩn, 3 màu phân biệt thực phẩm. Chất liệu PP an toàn, dễ vệ sinh." },
    { id: 11, name: "Dao Gọt Trái Cây Ceramic", price: 150000, category: "dao-thot", rating: 4.5, reviews: 203, image: "https://cf.shopee.vn/file/vn-11134207-7qukw-lgwe4s993yuq9c", stock: 50, description: "Dao gọt ceramic siêu sắc, không gỉ sét, không làm oxy hóa trái cây. Nhẹ nhàng, dễ sử dụng." },
    { id: 12, name: "Kệ Để Dao Gỗ Tre", price: 420000, category: "dao-thot", rating: 4, reviews: 45, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ly1qvlpvwwyjbb", stock: 18, description: "Kệ để dao gỗ tre tự nhiên, thiết kế nghiêng an toàn. Chứa được 6 dao các loại, tiết kiệm không gian." },

    // Đồ Điện
    { id: 13, name: "Máy Xay Sinh Tố Đa Năng", price: 750000, oldPrice: 950000, category: "dien", badge: "sale", rating: 4.5, reviews: 189, image: "https://www.sunhouse.com.vn/pic/general/images/1000x670_3(11).jpg", stock: 22, description: "Máy xay sinh tố đa năng 1000W, 2 cối xay. Xay nhuyễn mọi loại thực phẩm, làm sinh tố, nước ép." },
    { id: 14, name: "Nồi Cơm Điện Thông Minh", price: 1800000, category: "dien", badge: "new", rating: 5, reviews: 423, image: "https://miworld.vn/upload_images/images/noi-com-dien-thong-minh-xiaomi-mijia-mfb2bm-4l-18-.jpeg", stock: 15, description: "Nồi cơm điện thông minh 1.8L, công nghệ IH nấu cơm ngon. 10 chế độ nấu, hẹn giờ 24h." },
    { id: 15, name: "Máy Ép Trái Cây Chậm", price: 2500000, category: "dien", rating: 4.5, reviews: 167, image: "https://down-vn.img.susercontent.com/file/vn-11134208-7r98o-lypx4vmiara9be", stock: 6, description: "Máy ép chậm 150W, giữ nguyên vitamin và enzyme. Ép được rau củ, trái cây, làm sữa hạt." },
{ id: 16, name: "Ấm Siêu Tốc Inox 1.8L", price: 380000, category: "dien", rating: 4, reviews: 298, image: "https://th.bing.com/th/id/OIP.WEfNx9kXHHyxDSTAYeVHIQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", stock: 40, description: "Ấm siêu tốc inox 304, dung tích 1.8L. Đun sôi nhanh trong 3 phút, tự ngắt khi sôi." },
    { id: 17, name: "Máy Xay Thịt Đa Năng", price: 650000, category: "dien", badge: "hot", rating: 4.5, reviews: 134, image: "https://down-vn.img.susercontent.com/file/56fe89bb9ee38351e8ae3eba6a8185f9", stock: 28, description: "Máy xay thịt 2L, motor 500W mạnh mẽ. Xay thịt, rau củ, làm patê, giò chả tại nhà." },
    { id: 18, name: "Lò Vi Sóng Inverter 25L", price: 3200000, oldPrice: 3800000, category: "dien", badge: "sale", rating: 5, reviews: 267, image: "https://meta.vn/Data/Image/2024/10/05/lo-vi-song-lg-25l-inverter-ms2535gik-12.jpg", stock: 4, description: "Lò vi sóng Inverter 25L, công nghệ nấu đều không cần đĩa xoay. 30 chế độ nấu tự động." },
    
    // Phụ Kiện
    { id: 19, name: "Bộ Muỗng Đũa Inox", price: 280000, category: "phu-kien", rating: 4.5, reviews: 156, image: "https://down-vn.img.susercontent.com/file/8786ba6cd8cc465ee5484fab7c6671fc", stock: 35, description: "Bộ muỗng đũa inox 304 cao cấp 24 món cho 6 người. Thiết kế sang trọng, bền đẹp theo thời gian." },
    { id: 20, name: "Bộ Gia Vị 12 Món Thủy Tinh", price: 320000, category: "phu-kien", badge: "new", rating: 4, reviews: 89, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ls5au5gvpdlv22", stock: 20, description: "Bộ 12 lọ gia vị thủy tinh kèm kệ xoay. Nắp inox kín, giữ gia vị thơm lâu." },
    { id: 21, name: "Găng Tay Cách Nhiệt Silicon", price: 120000, category: "phu-kien", rating: 4.5, reviews: 234, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhxh49ze5x8l09", stock: 60, description: "Găng tay silicon chịu nhiệt 250°C, chống trượt. Bảo vệ tay khi nấu nướng, lấy đồ từ lò." },
    { id: 22, name: "Bộ Dụng Cụ Nấu Ăn 10 Món", price: 450000, category: "phu-kien", badge: "best", rating: 5, reviews: 312, image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdvj-lxwcx2t4u9fs30", stock: 25, description: "Bộ dụng cụ nấu ăn silicon 10 món, chịu nhiệt cao. Không trầy xước chảo chống dính." },
    { id: 23, name: "Cân Điện Tử Nhà Bếp", price: 180000, category: "phu-kien", rating: 4, reviews: 178, image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxv1ktz9beft5c", stock: 45, description: "Cân điện tử nhà bếp độ chính xác 1g, tải trọng 5kg. Màn hình LCD, chức năng trừ bì." },
{ id: 24, name: "Nhiệt Kế Thực Phẩm Điện Tử", price: 150000, category: "phu-kien", rating: 4.5, reviews: 98, image: "https://source.unsplash.com/400x300/?food+thermometer", stock: 38, description: "Nhiệt kế thực phẩm điện tử, đo nhanh trong 3 giây. Phạm vi -50°C đến 300°C." },
    
    // Lưu Trữ
    { id: 25, name: "Bộ Hộp Đựng Thực Phẩm 10 Cái", price: 350000, category: "luu-tru", badge: "hot", rating: 4.5, reviews: 267, image: "https://source.unsplash.com/400x300/?food+storage+containers", stock: 30, description: "Bộ 10 hộp đựng thực phẩm các size, nắp kín 4 khóa. Chất liệu PP an toàn, dùng được lò vi sóng." },
    { id: 26, name: "Kệ Gia Vị Xoay 360°", price: 420000, category: "luu-tru", rating: 4, reviews: 145, image: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-bxln9cgwsjlvfe", stock: 15, description: "Kệ gia vị xoay 360° 2 tầng, chứa được 16 lọ. Tiết kiệm không gian, dễ dàng lấy gia vị." },
    { id: 27, name: "Hộp Đựng Gạo Thông Minh 6kg & 11kg", price: 280000, category: "luu-tru", rating: 4.5, reviews: 189, image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rep2-m2t89r84ohkr9c", stock: 22, description: "Hộp đựng gạo 10kg có vòi xả định lượng. Chống ẩm, chống côn trùng, giữ gạo luôn khô ráo." },
    { id: 28, name: "Túi Hút Chân Không 50 Cái", price: 150000, category: "luu-tru", rating: 4, reviews: 234, image: "https://www.namthiensang.com/datafiles/12634/upload/files/VP/PE/tui-hut-chan-khong-khoa-zip.jpg", stock: 100, description: "Bộ 50 túi hút chân không các size, dùng cho máy hút. Bảo quản thực phẩm tươi lâu gấp 5 lần." },
    { id: 29, name: "Kệ Để Nồi Chảo 3 Tầng", price: 380000, category: "luu-tru", badge: "new", rating: 4.5, reviews: 78, image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-mbten79fj6oee6", stock: 12, description: "Kệ để nồi chảo 3 tầng có thể điều chỉnh. Khung thép sơn tĩnh điện chống gỉ, chịu lực 30kg." },
    { id: 30, name: "Hộp Bảo Quản Rau Củ", price: 220000, category: "luu-tru", rating: 4, reviews: 156, image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rcck-ltergrr7ly0j91", stock: 28, description: "Hộp bảo quản rau củ có lưới thoát nước. Giữ rau tươi xanh trong tủ lạnh đến 2 tuần." },
    
    // Nướng & Bánh
{ id: 31, name: "Khuôn Bánh Silicon 6 Cái", price: 180000, category: "nuong", rating: 4.5, reviews: 123, image: "https://source.unsplash.com/400x300/?silicone+baking+molds", stock: 40, description: "Bộ 6 khuôn bánh silicon các hình dạng, chịu nhiệt -40°C đến 230°C. Dễ tháo khuôn, dễ vệ sinh." },
    { id: 32, name: "Khay Nướng Chống Dính", price: 250000, category: "nuong", badge: "best", rating: 5, reviews: 198, image: "https://product.hstatic.net/200000487445/product/sn1314_7576c1286c48424297ab4e608df4cba5_master.jpg", stock: 35, description: "Khay nướng chống dính cao cấp 40x30cm, lớp phủ Teflon. Phân bố nhiệt đều, bánh chín vàng đẹp." },
    { id: 33, name: "Bộ Dụng Cụ Làm Bánh", price: 520000, category: "nuong", badge: "hot", rating: 4.5, reviews: 267, image: "https://i.pinimg.com/736x/2e/28/9d/2e289da739901ddb29c07392f0358954.jpg", stock: 18, description: "Bộ dụng cụ làm bánh 15 món đầy đủ: cây cán, rây bột, đầu bắt kem, khuôn cutter..." },
    { id: 34, name: "Máy Đánh Trứng Cầm Tay", price: 350000, category: "nuong", rating: 4, reviews: 145, image: "https://source.unsplash.com/400x300/?hand+mixer", stock: 25, description: "Máy đánh trứng cầm tay 300W, 5 tốc độ. Đánh kem, trộn bột nhẹ nhàng, êm ái." },
    { id: 35, name: "Khuôn Pizza Đá Nướng", price: 450000, category: "nuong", rating: 4.5, reviews: 89, image: "https://minhhouseware.com.vn/wp-content/uploads/2023/04/Da-Nuong-Pizza-Vario-Roesle-25424-30cm-2.jpg", stock: 10, description: "Khuôn pizza đá cordierite 33cm, hấp thụ độ ẩm. Pizza đế giòn như nhà hàng Ý." },
    { id: 36, name: "Bộ Túi Bắt Kem 6 Đầu", price: 280000, category: "nuong", badge: "new", rating: 4, reviews: 178, image: "https://source.unsplash.com/400x300/?pastry+bag", stock: 32, description: "Bộ túi bắt kem 24 đầu inox các kiểu, kèm 2 túi silicone. Trang trí bánh chuyên nghiệp." }
];

let cart = [];
let currentFilter = 'all';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = '121212';


// Format price to VND
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

// Get badge text
function getBadgeText(badge) {
    const badges = {
        'sale': 'Giảm giá',
        'new': 'Mới',
        'hot': 'Hot',
        'best': 'Bán chạy'
    };
    return badges[badge] || '';
}

// Get badge class
function getBadgeClass(badge) {
    return badge === 'sale' ? 'sale' : '';
}

// Render stars
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Get category name
function getCategoryName(category) {
    const categories = {
        'noi-chao': 'Nồi & Chảo',
        'dao-thot': 'Dao & Thớt',
        'dien': 'Đồ Điện',
        'phu-kien': 'Phụ Kiện',
        'luu-tru': 'Lưu Trữ',
        'nuong': 'Nướng & Bánh'
    };
    return categories[category] || category;
}

// Run callback when DOM is ready, even if script loads after DOMContentLoaded
function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// Render products
function renderProducts(productsToRender) {
    const grid = document.getElementById('product-grid');
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<div class="empty-cart"><i class="fas fa-search"></i><p>Không tìm thấy sản phẩm</p></div>';
        return;
    }
    
    grid.innerHTML = productsToRender.map(product => {
        const stock = getProductStock(product.id);
        const isOutOfStock = stock <= 0;
        
        return `
        <div class="product-card ${isOutOfStock ? 'out-of-stock' : ''}" data-category="${product.category}">
            ${product.badge ? `<span class="badge ${getBadgeClass(product.badge)}">${getBadgeText(product.badge)}</span>` : ''}
            ${isOutOfStock ? '<span class="badge out-of-stock-badge">Hết hàng</span>' : ''}
            <div class="wishlist" onclick="toggleWishlist(${product.id}, event)">
                <i class="far fa-heart"></i>
            </div>
            <div class="image-wrapper" onclick="openProductDetail(${product.id})" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300/e67e22/ffffff?text=${encodeURIComponent(product.name.substring(0,15))}'">
                <div class="image-overlay">
                    <i class="fas fa-eye"></i> Xem chi tiết
                </div>
            </div>
            <div class="product-info">
                <span class="category">${getCategoryName(product.category)}</span>
                <h3 onclick="openProductDetail(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <div class="rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="stock-info ${stock <= 5 ? 'low-stock' : ''}">
                    <i class="fas fa-box"></i> ${isOutOfStock ? 'Hết hàng' : `Còn ${stock} sản phẩm`}
                </div>
                <div class="price-row">
                    <span class="price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <button class="btn-add-cart ${isOutOfStock ? 'disabled' : ''}" onclick="${isOutOfStock ? 'showNotification(\'Sản phẩm đã hết hàng!\', \'error\')' : `addToCart(${product.id})`}" ${isOutOfStock ? 'disabled' : ''}>
                    <i class="fas fa-${isOutOfStock ? 'times' : 'cart-plus'}"></i> ${isOutOfStock ? 'Hết hàng' : 'Thêm vào giỏ'}
                </button>
            </div>
        </div>
    `}).join('');
}

// Filter products
function filterProducts(category, e) {
    currentFilter = category;
    
    // Update filter buttons active state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category) || 
            (category === 'all' && btn.textContent.includes('Tất cả'))) {
            btn.classList.add('active');
        }
    });
    
    // If called from event, update that specific button
    if (e && e.target) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const btn = e.target.closest('.filter-btn');
        if (btn) btn.classList.add('active');
    }
    
    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Sort products
function sortProducts(sortBy) {
    let filtered = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);
    
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    renderProducts(filtered);
}

// Search products
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (!query) {
        // If empty, show current filter
        const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
        renderProducts(filtered);
        return;
    }
    
    // Reset filter to all when searching
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const allBtn = document.querySelector('.filter-btn');
    if (allBtn) allBtn.classList.add('active');
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        getCategoryName(p.category).toLowerCase().includes(query) ||
        p.price.toString().includes(query)
    );
    
    renderProducts(filtered);
    
    // Show search result count
    if (filtered.length === 0) {
        showNotification(`Không tìm thấy sản phẩm "${query}"`, 'error');
    } else if (query) {
        showNotification(`Tìm thấy ${filtered.length} sản phẩm`, 'success');
    }
}

// Toggle wishlist
function toggleWishlist(productId, e) {
    if (e) e.stopPropagation();
    const wishlistBtn = e ? e.target.closest('.wishlist') : document.querySelector(`[onclick*="toggleWishlist(${productId})"]`);
    if (wishlistBtn) {
        const icon = wishlistBtn.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        icon.style.color = icon.classList.contains('fas') ? '#e74c3c' : '';
    }
}


// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const stock = getProductStock(productId);
    
    // Check stock
    if (stock <= 0) {
        showNotification('Sản phẩm đã hết hàng!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    const currentInCart = existingItem ? existingItem.quantity : 0;
    
    // Check if adding more exceeds stock
    if (currentInCart >= stock) {
        showNotification(`Chỉ còn ${stock} sản phẩm trong kho!`, 'error');
        return;
    }
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    // Decrease stock
    decreaseStock(productId, 1);
    
    updateCart();
    showNotification(`Đã thêm "${product.name}" vào giỏ hàng!`);
    
    // Refresh products display to show updated stock
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    renderProducts(filtered);
    
    // Open cart sidebar
    if (!document.getElementById('cart-sidebar').classList.contains('open')) {
        toggleCart();
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (change > 0) {
            // Adding more - check stock
            const stock = getProductStock(productId);
            if (stock <= 0) {
                showNotification('Không còn hàng trong kho!', 'error');
                return;
            }
            decreaseStock(productId, 1);
        } else {
            // Removing - return to stock
            increaseStock(productId, 1);
        }
        
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
        
        // Refresh products display
        const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
        renderProducts(filtered);
    }
}

// Remove from cart
function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        // Return stock
        increaseStock(productId, item.quantity);
    }
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    
    // Refresh products display
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    renderProducts(filtered);
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng trống</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="price">${formatPrice(item.price)}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle cart sidebar
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
    document.body.style.overflow = document.getElementById('cart-sidebar').classList.contains('open') ? 'hidden' : '';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Đặt hàng thành công! Tổng: ${formatPrice(total)}`, 'success');
    cart = [];
    updateCart();
    toggleCart();
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Submit form
function submitForm(e) {
    e.preventDefault();
    
    // Check if user is logged in
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để gửi tin nhắn!', 'error');
        openAuthModal('login');
        return;
    }
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!message) {
        showNotification('Vui lòng nhập nội dung tin nhắn!', 'error');
        return;
    }
    
    // Save message
    const messages = getContactMessages();
    const newMessage = {
        id: Date.now(),
        userId: currentUser.id,
        userName: name || currentUser.name,
        userEmail: email || currentUser.email,
        userPhone: phone || currentUser.phone || '',
        message: message,
        date: new Date().toISOString(),
        read: false
    };
    
    messages.push(newMessage);
    localStorage.setItem('kitchenpro_messages', JSON.stringify(messages));
    
    showNotification('Tin nhắn đã được gửi! Chúng tôi sẽ phản hồi sớm nhất.', 'success');
    e.target.reset();
    
    // Auto-fill user info for next time
    if (currentUser) {
        document.getElementById('contact-name').value = currentUser.name;
        document.getElementById('contact-email').value = currentUser.email;
        if (currentUser.phone) {
            document.getElementById('contact-phone').value = currentUser.phone;
        }
    }
}

// Get contact messages
function getContactMessages() {
    return JSON.parse(localStorage.getItem('kitchenpro_messages') || '[]');
}

// Auto-fill contact form when logged in
function autoFillContactForm() {
    if (currentUser) {
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const phoneInput = document.getElementById('contact-phone');
        
        if (nameInput && !nameInput.value) nameInput.value = currentUser.name;
        if (emailInput && !emailInput.value) emailInput.value = currentUser.email;
        if (phoneInput && !phoneInput.value && currentUser.phone) phoneInput.value = currentUser.phone;
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('mobile-open');
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Back to top button visibility
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .nav-links.mobile-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
`;
document.head.appendChild(style);

// ==================== AUTH SYSTEM ====================
let currentUser = null;

function normalizeEmail(email) {
    return (email || '').trim().toLowerCase();
}

function dedupeUsers(users) {
    const unique = {};
    return users.reduce((acc, user) => {
        const email = normalizeEmail(user.email);
        if (!email) return acc;

        if (unique[email]) {
            const existing = unique[email];
            unique[email] = {
                ...existing,
                ...existing,
                ...user,
                email,
                isAdmin: existing.isAdmin || user.isAdmin,
                provider: existing.provider || user.provider,
                avatar: existing.avatar || user.avatar,
                password: existing.password || user.password
            };
            return acc;
        }

        unique[email] = { ...user, email };
        acc.push(unique[email]);
        return acc;
    }, []);
}

function getUsers() {
    return dedupeUsers(JSON.parse(localStorage.getItem('kitchenpro_users') || '[]'));
}

function saveUsers(users) {
    localStorage.setItem('kitchenpro_users', JSON.stringify(dedupeUsers(users)));
}

// Check if user is logged in on page load
function checkAuth() {
    let savedUser = localStorage.getItem('kitchenpro_user');
    let storageType = 'local';
    if (!savedUser) {
        savedUser = sessionStorage.getItem('kitchenpro_user');
        storageType = 'session';
    }
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        currentUser.email = normalizeEmail(currentUser.email);
        if (currentUser.email === ADMIN_EMAIL) {
            currentUser.isAdmin = true;
        }

        const users = getUsers();
        const storedUser = users.find(u => u.email === currentUser.email);
        if (storedUser) {
            currentUser = {
                ...storedUser,
                ...currentUser,
                isAdmin: currentUser.email === ADMIN_EMAIL || storedUser.isAdmin === true
            };
            if (storageType === 'local') {
                localStorage.setItem('kitchenpro_user', JSON.stringify(currentUser));
            } else {
                sessionStorage.setItem('kitchenpro_user', JSON.stringify(currentUser));
            }
        }

        updateUserUI();
        showRecommendations();
    }
}

// Open auth modal
function openAuthModal(type) {
    document.getElementById('auth-modal').classList.add('open');
    document.getElementById('auth-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    switchAuthForm(type);
}

// Close auth modal
function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('open');
    document.getElementById('auth-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Open forgot password modal
function openForgotPasswordModal() {
    document.getElementById('forgot-modal').classList.add('open');
    document.getElementById('forgot-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    // Clear form fields
    document.getElementById('forgot-email').value = '';
    document.getElementById('forgot-password').value = '';
    document.getElementById('forgot-confirm').value = '';
}

// Close forgot password modal
function closeForgotPasswordModal() {
    document.getElementById('forgot-modal').classList.remove('open');
    document.getElementById('forgot-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Switch between login and register forms
function switchAuthForm(type) {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.remove('active');
    document.getElementById(type + '-form').classList.add('active');
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value.trim();
    const remember = document.getElementById('remember-me').checked;
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
    let user = users.find(u => u.email === email);

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        if (!user) {
            user = {
                id: 'admin_' + Date.now(),
                name: 'Administrator',
                email: ADMIN_EMAIL,
                phone: '',
                password: ADMIN_PASSWORD,
                preferences: [],
                viewedProducts: [],
                purchasedCategories: [],
                createdAt: new Date().toISOString(),
                isAdmin: true
            };
            users.push(user);
        } else {
            user.password = ADMIN_PASSWORD;
            user.isAdmin = true;
        }
        localStorage.setItem('kitchenpro_users', JSON.stringify(users));
    } else {
        if (!user) {
            showNotification('Email không tồn tại! Vui lòng đăng ký.', 'error');
            return;
        }

        if (user.password !== password) {
            showNotification('Mật khẩu không đúng!', 'error');
            return;
        }
    }

    // Login successful
    currentUser = user;
    if (remember) {
        localStorage.setItem('kitchenpro_user', JSON.stringify(user));
    } else {
        sessionStorage.setItem('kitchenpro_user', JSON.stringify(user));
    }
    
    closeAuthModal();
    updateUserUI();
    showRecommendations();
    autoFillContactForm();
    showNotification(`Chào mừng ${user.name} quay lại! 🎉`, 'success');
}

// Handle register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const phone = document.getElementById('register-phone').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirm = document.getElementById('register-confirm').value.trim();
    
    // Get preferences
    const preferences = [];
    document.querySelectorAll('.pref-tag input:checked').forEach(input => {
        preferences.push(input.value);
    });
    
    // Validation
    if (password !== confirm) {
        showNotification('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }
    
    // Prevent registering the admin email and check if email exists
    const users = getUsers();
    if (email === ADMIN_EMAIL) {
        showNotification('Email này đã được bảo vệ và không thể đăng ký!', 'error');
        return;
    }
    if (users.find(u => u.email === email)) {
        showNotification('Email đã được sử dụng!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        preferences,
        viewedProducts: [],
        purchasedCategories: [],
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    // Auto login
    currentUser = newUser;
    localStorage.setItem('kitchenpro_user', JSON.stringify(newUser));
    
    closeAuthModal();
    updateUserUI();
    showRecommendations();
    autoFillContactForm();
    showNotification(`Chào mừng ${name} đến với KitchenPro! 🎉`, 'success');
}

// Handle forgot password
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = normalizeEmail(document.getElementById('forgot-email').value);
    const password = document.getElementById('forgot-password').value;
    const confirm = document.getElementById('forgot-confirm').value;
    
    // Validation
    if (password !== confirm) {
        showNotification('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }
    
    if (email === ADMIN_EMAIL) {
        showNotification('Không thể đặt lại mật khẩu admin tại đây. Vui lòng sử dụng thông tin admin chính chủ.', 'error');
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (!user) {
        showNotification('Email không tồn tại trong hệ thống!', 'error');
        return;
    }
    
    // Update password
    user.password = password;
    localStorage.setItem('kitchenpro_users', JSON.stringify(users));
    
    showNotification('Mật khẩu đã được đặt lại thành công! Vui lòng đăng nhập.', 'success');
    
    // Clear form
    document.getElementById('forgot-email').value = '';
    document.getElementById('forgot-password').value = '';
    document.getElementById('forgot-confirm').value = '';
    
    // Close forgot password modal and open login modal
    setTimeout(() => {
        closeForgotPasswordModal();
        openAuthModal('login');
    }, 1500);
}

// ==================== SOCIAL LOGIN ====================

// Login with Google
function loginWithGoogle() {
    // Show loading
    showNotification('Đang kết nối với Google...', 'success');
    
    // Simulate Google OAuth popup
    setTimeout(() => {
        // In real implementation, this would use Google OAuth API
        // For demo, we'll create a simulated Google user
        const googleUser = {
            id: 'google_' + Date.now(),
            name: 'Google User ' + Math.floor(Math.random() * 1000),
            email: 'user' + Math.floor(Math.random() * 10000) + '@gmail.com',
            phone: '',
            password: '', // Social login doesn't need password
            provider: 'google',
            avatar: 'https://lh3.googleusercontent.com/a/default-user',
            preferences: [],
            viewedProducts: [],
            purchasedCategories: [],
            createdAt: new Date().toISOString()
        };
        
        // Show name input modal for first time
        const userName = prompt('Nhập tên hiển thị của bạn:', googleUser.name);
        if (userName === null) {
            showNotification('Đã hủy đăng nhập', 'error');
            return;
        }
        googleUser.name = userName || googleUser.name;
        
        // Save user
        completeSocialLogin(googleUser);
    }, 1000);
}

// Login with Facebook
function loginWithFacebook() {
    // Show loading
    showNotification('Đang kết nối với Facebook...', 'success');
    
    // Simulate Facebook OAuth popup
    setTimeout(() => {
        // In real implementation, this would use Facebook OAuth API
        const fbUser = {
            id: 'fb_' + Date.now(),
            name: 'Facebook User ' + Math.floor(Math.random() * 1000),
            email: 'user' + Math.floor(Math.random() * 10000) + '@facebook.com',
            phone: '',
            password: '',
            provider: 'facebook',
            avatar: 'https://graph.facebook.com/default/picture',
            preferences: [],
            viewedProducts: [],
            purchasedCategories: [],
            createdAt: new Date().toISOString()
        };
        
        // Show name input modal for first time
        const userName = prompt('Nhập tên hiển thị của bạn:', fbUser.name);
        if (userName === null) {
            showNotification('Đã hủy đăng nhập', 'error');
            return;
        }
        fbUser.name = userName || fbUser.name;
        
        // Save user
        completeSocialLogin(fbUser);
    }, 1000);
}

// Complete social login
function completeSocialLogin(socialUser) {
    socialUser.email = normalizeEmail(socialUser.email);
    const users = getUsers();
    
    // Check if user with this email already exists
    let existingUser = users.find(u => u.email === socialUser.email);
    
    if (existingUser) {
        // Update existing user with social info
        existingUser.provider = socialUser.provider;
        existingUser.avatar = socialUser.avatar;
        saveUsers(users);
        currentUser = existingUser;
    } else {
        // Create new user
        users.push(socialUser);
        saveUsers(users);
        currentUser = socialUser;
    }
    
    // Save login session
    localStorage.setItem('kitchenpro_user', JSON.stringify(currentUser));
    
    closeAuthModal();
    updateUserUI();
    showRecommendations();
    autoFillContactForm();
    
    const providerName = socialUser.provider === 'google' ? 'Google' : 'Facebook';
    showNotification(`Đăng nhập ${providerName} thành công! Chào ${currentUser.name} 🎉`, 'success');
}

// Update UI after login
function updateUserUI() {
    const userArea = document.getElementById('user-area');
    const initial = currentUser.name.charAt(0).toUpperCase();
    
    userArea.innerHTML = `
        <div class="user-profile">
            <div class="user-avatar">${initial}</div>
            <span class="user-name">${currentUser.name.split(' ')[0]}</span>
            <i class="fas fa-chevron-down" style="font-size: 0.8rem; color: var(--gray);"></i>
            <div class="user-dropdown">
                <a href="#"><i class="fas fa-user"></i> Tài khoản</a>
                <a href="#"><i class="fas fa-shopping-bag"></i> Đơn hàng</a>
                <a href="#"><i class="fas fa-heart"></i> Yêu thích</a>
                <a href="#"><i class="fas fa-cog"></i> Cài đặt</a>
                <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
            </div>
        </div>
    `;
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('kitchenpro_user');
    sessionStorage.removeItem('kitchenpro_user');
    
    document.getElementById('user-area').innerHTML = `
        <button class="btn-login" onclick="openAuthModal('login')">
            <i class="fas fa-user"></i> Đăng nhập
        </button>
    `;
    
    document.getElementById('recommendations-section').style.display = 'none';
    showNotification('Đã đăng xuất thành công!', 'success');
}

// ==================== RECOMMENDATION SYSTEM ====================

// Show recommendations based on user preferences
function showRecommendations() {
    if (!currentUser) return;
    
    const section = document.getElementById('recommendations-section');
    const grid = document.getElementById('recommendation-grid');
    const welcomeText = document.getElementById('welcome-user');
    
    welcomeText.innerHTML = `Xin chào <strong>${currentUser.name}</strong>! Dựa trên sở thích của bạn, chúng tôi gợi ý:`;
    
    // Get recommended products
    const recommendations = getRecommendedProducts();
    
    if (recommendations.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    grid.innerHTML = recommendations.map(item => `
        <div class="recommendation-card">
            <div class="recommendation-image" onclick="openProductDetail(${item.product.id})" style="cursor: pointer;">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="image-overlay">
                    <i class="fas fa-eye"></i> Xem chi tiết
                </div>
            </div>
            <div class="product-info">
                <span class="category">${getCategoryName(item.product.category)}</span>
                <h3 onclick="openProductDetail(${item.product.id})" style="cursor: pointer;">${item.product.name}</h3>
                <div class="rating">
                    ${renderStars(item.product.rating)}
                    <span>(${item.product.reviews})</span>
                </div>
                <div class="price-row">
                    <span class="price">${formatPrice(item.product.price)}</span>
                    ${item.product.oldPrice ? `<span class="old-price">${formatPrice(item.product.oldPrice)}</span>` : ''}
                </div>
                <div class="recommendation-reason">
                    <i class="fas fa-lightbulb"></i> ${item.reason}
                </div>
                <button class="btn-add-cart" onclick="addToCart(${item.product.id})" style="margin-top: 10px;">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        </div>
    `).join('');
    
    // Show section and move it after hero
    section.style.display = 'block';
    const hero = document.getElementById('home');
    hero.parentNode.insertBefore(section, hero.nextSibling);
}

// Get recommended products based on user data
function getRecommendedProducts() {
    const recommendations = [];
    const addedIds = new Set();
    
    // 1. Based on preferences (selected during registration)
    if (currentUser.preferences && currentUser.preferences.length > 0) {
        currentUser.preferences.forEach(pref => {
            const categoryProducts = products.filter(p => p.category === pref && !addedIds.has(p.id));
            const topProducts = categoryProducts.sort((a, b) => b.rating - a.rating).slice(0, 2);
            topProducts.forEach(p => {
                recommendations.push({
                    product: p,
                    reason: `Phù hợp sở thích "${getCategoryName(pref)}"`
                });
                addedIds.add(p.id);
            });
        });
    }
    
    // 2. Based on viewed products (similar category)
    if (currentUser.viewedProducts && currentUser.viewedProducts.length > 0) {
        const viewedCategories = [...new Set(currentUser.viewedProducts.map(id => {
            const p = products.find(prod => prod.id === id);
            return p ? p.category : null;
        }).filter(Boolean))];
        
        viewedCategories.forEach(cat => {
            const similar = products.filter(p => p.category === cat && !addedIds.has(p.id));
            if (similar.length > 0) {
                const best = similar.sort((a, b) => b.reviews - a.reviews)[0];
                recommendations.push({
                    product: best,
                    reason: 'Dựa trên sản phẩm bạn đã xem'
                });
                addedIds.add(best.id);
            }
        });
    }
    
    // 3. Best sellers (if not enough recommendations)
    if (recommendations.length < 4) {
        const bestSellers = products
            .filter(p => !addedIds.has(p.id))
            .sort((a, b) => b.reviews - a.reviews)
            .slice(0, 4 - recommendations.length);
        
        bestSellers.forEach(p => {
            recommendations.push({
                product: p,
                reason: 'Sản phẩm bán chạy'
            });
            addedIds.add(p.id);
        });
    }
    
    // 4. Sale items
    const saleItems = products.filter(p => p.badge === 'sale' && !addedIds.has(p.id)).slice(0, 2);
    saleItems.forEach(p => {
        recommendations.push({
            product: p,
            reason: 'Đang giảm giá đặc biệt'
        });
        addedIds.add(p.id);
    });
    
    return recommendations.slice(0, 8);
}

// Track viewed products
function trackProductView(productId) {
    if (!currentUser) return;
    
    if (!currentUser.viewedProducts) {
        currentUser.viewedProducts = [];
    }
    
    if (!currentUser.viewedProducts.includes(productId)) {
        currentUser.viewedProducts.push(productId);
        // Keep only last 20 viewed products
        if (currentUser.viewedProducts.length > 20) {
            currentUser.viewedProducts.shift();
        }
        
        // Update storage
        localStorage.setItem('kitchenpro_user', JSON.stringify(currentUser));
        
        // Update users list
        const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('kitchenpro_users', JSON.stringify(users));
        }
    }
}

// Update addToCart to track views
const originalAddToCart = addToCart;
addToCart = function(productId) {
    trackProductView(productId);
    originalAddToCart(productId);
};

// Initialize on page load
// Initialize admin user
function initializeAdminUser() {
    const users = getUsers();
    const adminExists = users.find(u => u.email === ADMIN_EMAIL);
    
    if (!adminExists) {
        const adminUser = {
            id: 'admin_' + Date.now(),
            name: 'Administrator',
            email: ADMIN_EMAIL,
            phone: '',
            password: ADMIN_PASSWORD,
            preferences: [],
            viewedProducts: [],
            purchasedCategories: [],
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(adminUser);
        saveUsers(users);
    } else {
        // Ensure existing admin account remains admin and password stays synced
        adminExists.password = ADMIN_PASSWORD;
        adminExists.isAdmin = true;
        saveUsers(users);
    }
}

onReady(() => {
    loadSavedProducts();
    loadSavedProductImages();
    initializeAdminUser();
    renderProducts(products);
    updateCart();
    checkAuth();
    renderTestimonials();
});


// ==================== ORDER HISTORY SYSTEM ====================

// Get all orders
function getAllOrders() {
    return JSON.parse(localStorage.getItem('kitchenpro_orders') || '[]');
}

// Save order
function saveOrder(order) {
    const orders = getAllOrders();
    orders.push(order);
    localStorage.setItem('kitchenpro_orders', JSON.stringify(orders));
}

// Open order history modal
function openOrderHistory() {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để xem lịch sử!', 'error');
        openAuthModal('login');
        return;
    }
    
    document.getElementById('order-history-modal').classList.add('open');
    document.getElementById('order-history-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderOrderHistory();
}

// Close order history modal
function closeOrderHistory() {
    document.getElementById('order-history-modal').classList.remove('open');
    document.getElementById('order-history-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Render order history
function renderOrderHistory() {
    const container = document.getElementById('order-history-list');
    const allOrders = getAllOrders();
    const userOrders = allOrders.filter(o => o.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="fas fa-shopping-bag"></i>
                <p>Bạn chưa có đơn hàng nào</p>
            </div>
        `;
        return;
    }
    
    // Sort by date descending
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = userOrders.map(order => `
        <div class="order-card">
            <div class="order-card-header">
                <span class="order-id">#${order.id}</span>
                <span class="order-date">${formatDate(order.date)}</span>
                <span class="order-status ${order.status}">${getStatusText(order.status)}</span>
            </div>
            ${order.address ? `
                <div class="order-address">
                    <i class="fas fa-map-marker-alt"></i> ${order.address}
                </div>
            ` : ''}
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="order-item-info">
                            <strong>${item.name}</strong>
                            <span>x${item.quantity}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <div class="order-total">
                    <span>Tổng cộng:</span>
                    <span class="order-total-amount">${formatPrice(order.total)}</span>
                </div>
                ${order.status === 'pending' ? `
                    <button class="btn-cancel-order" onclick="cancelOrder(${order.id})">
                        <i class="fas fa-times-circle"></i> Hủy đơn
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Cancel order
function cancelOrder(orderId) {
    if (!confirm('Bạn có chắc muốn hủy đơn hàng này?')) return;
    
    const orders = getAllOrders();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
        showNotification('Không tìm thấy đơn hàng!', 'error');
        return;
    }
    
    if (order.status !== 'pending') {
        showNotification('Chỉ có thể hủy đơn hàng đang xử lý!', 'error');
        return;
    }
    
    order.status = 'cancelled';
    localStorage.setItem('kitchenpro_orders', JSON.stringify(orders));
    
    renderOrderHistory();
    showNotification(`Đã hủy đơn hàng #${orderId}`, 'success');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get status text
function getStatusText(status) {
    const statuses = {
        'completed': 'Hoàn thành',
        'pending': 'Đang xử lý',
        'cancelled': 'Đã hủy'
    };
    return statuses[status] || status;
}

// ==================== ADMIN SYSTEM ====================

// Check if user is admin
function isAdmin() {
    return currentUser && currentUser.email === ADMIN_EMAIL;
}

// Open admin panel
function openAdminPanel() {
    if (!isAdmin()) {
        showNotification('Bạn không có quyền truy cập!', 'error');
        return;
    }
    
    document.getElementById('admin-panel').classList.add('open');
    document.getElementById('admin-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    loadAdminData();
}

// Close admin panel
function closeAdminPanel() {
    document.getElementById('admin-panel').classList.remove('open');
    document.getElementById('admin-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Show admin tab
function showAdminTab(tabName, e) {
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById('admin-' + tabName).classList.add('active');
    
    // Find the clicked button
    if (e && e.target) {
        e.target.closest('.admin-nav-btn').classList.add('active');
    } else {
        // Fallback: find button by tab name
        document.querySelectorAll('.admin-nav-btn').forEach(btn => {
            if (btn.textContent.toLowerCase().includes(tabName === 'dashboard' ? 'dashboard' : tabName)) {
                btn.classList.add('active');
            }
        });
    }
    
    if (tabName === 'orders') loadAdminOrders();
    if (tabName === 'products') loadAdminProducts();
    if (tabName === 'users') loadAdminUsers();
    if (tabName === 'messages') loadAdminMessages();
}

// Load admin dashboard data
function loadAdminData() {
    const orders = getAllOrders();
    const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    
    document.getElementById('stat-orders').textContent = orders.length;
    document.getElementById('stat-revenue').textContent = formatPrice(totalRevenue);
    document.getElementById('stat-users').textContent = users.length;
    document.getElementById('stat-products').textContent = products.length;
}

// Load admin orders
function loadAdminOrders() {
    const orders = getAllOrders();
    const container = document.getElementById('admin-orders-list');
    
    if (orders.length === 0) {
        container.innerHTML = '<p style="padding: 2rem; text-align: center; color: var(--gray);">Chưa có đơn hàng nào</p>';
        return;
    }
    
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Mã đơn</th>
                    <th>Khách hàng</th>
                    <th>Ngày đặt</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${orders.map(order => `
                    <tr>
                        <td>#${order.id}</td>
                        <td>${order.userName || 'Khách'}</td>
                        <td>${formatDate(order.date)}</td>
                        <td><strong>${formatPrice(order.total)}</strong></td>
                        <td><span class="order-status ${order.status}">${getStatusText(order.status)}</span></td>
                        <td>
                            <button class="admin-action-btn edit" onclick="updateOrderStatus(${order.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Load admin products
function loadAdminProducts() {
    const container = document.getElementById('admin-products-list');
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Hình</th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Giá</th>
                    <th>Đánh giá</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${products.map(p => `
                    <tr>
                        <td><img src="${p.image}" alt="${p.name}" class="admin-product-img"></td>
                        <td>${p.name}</td>
                        <td>${getCategoryName(p.category)}</td>
                        <td><strong>${formatPrice(p.price)}</strong></td>
                        <td>${renderStars(p.rating)} (${p.reviews})</td>
                        <td>
                            <button class="admin-action-btn edit" onclick="openEditImageModal(${p.id})" title="Đổi hình ảnh">
                                <i class="fas fa-image"></i>
                            </button>
                            <button class="admin-action-btn delete" onclick="deleteProduct(${p.id})" title="Xóa sản phẩm">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Delete product function
function deleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Không tìm thấy sản phẩm!', 'error');
        return;
    }

    if (!confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?\n\nHành động này không thể hoàn tác!`)) {
        return;
    }

    // Remove from products array
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }

    // Remove from custom products in localStorage
    const customProducts = JSON.parse(localStorage.getItem('kitchenpro_custom_products') || '[]');
    const customIndex = customProducts.findIndex(p => p.id === productId);
    if (customIndex !== -1) {
        customProducts.splice(customIndex, 1);
        localStorage.setItem('kitchenpro_custom_products', JSON.stringify(customProducts));
    }

    // Remove stock data
    const stockData = JSON.parse(localStorage.getItem('kitchenpro_stock') || '{}');
    if (stockData[productId]) {
        delete stockData[productId];
        localStorage.setItem('kitchenpro_stock', JSON.stringify(stockData));
    }

    // Remove product images from localStorage
    const productImages = JSON.parse(localStorage.getItem('kitchenpro_product_images') || '{}');
    if (productImages[productId]) {
        delete productImages[productId];
        localStorage.setItem('kitchenpro_product_images', JSON.stringify(productImages));
    }

    // Reload products display
    renderProducts();
    loadAdminProducts();

    showNotification(`Đã xóa sản phẩm "${product.name}" thành công!`, 'success');
}

// Load admin users
function loadAdminUsers() {
    const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
    const container = document.getElementById('admin-users-list');
    
    if (users.length === 0) {
        container.innerHTML = '<p style="padding: 2rem; text-align: center; color: var(--gray);">Chưa có người dùng nào</p>';
        return;
    }
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Vai trò</th>
                    <th>Ngày tạo</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(u => `
                    <tr>
                        <td>${u.id}</td>
                        <td>${u.name}</td>
                        <td>${u.email}</td>
                        <td>${u.phone || '-'}</td>
                        <td><span class="admin-badge ${u.email === ADMIN_EMAIL ? 'admin' : 'user'}">${u.email === ADMIN_EMAIL ? 'Admin' : 'User'}</span></td>
                        <td>${u.createdAt ? formatDate(u.createdAt) : '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Update order status
function updateOrderStatus(orderId) {
    const orders = getAllOrders();
    const order = orders.find(o => o.id === orderId);
    
    if (!order) return;
    
    const statuses = ['pending', 'completed', 'cancelled'];
    const currentIndex = statuses.indexOf(order.status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    order.status = statuses[nextIndex];
    
    localStorage.setItem('kitchenpro_orders', JSON.stringify(orders));
    loadAdminOrders();
    showNotification(`Đã cập nhật trạng thái đơn #${orderId}`, 'success');
}

// Update user UI for admin
function updateUserUIWithAdmin() {
    const userArea = document.getElementById('user-area');
    const initial = currentUser.name.charAt(0).toUpperCase();
    const isAdminUser = isAdmin();
    const hasSocialAvatar = currentUser.avatar && currentUser.provider;
    const providerIcon = currentUser.provider === 'google' ? 'fab fa-google' : currentUser.provider === 'facebook' ? 'fab fa-facebook-f' : '';
    
    // Avatar display
    let avatarHtml;
    if (hasSocialAvatar) {
        avatarHtml = `<img src="${currentUser.avatar}" alt="${currentUser.name}" class="user-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                      <div class="user-avatar" style="display:none;">${initial}</div>`;
    } else {
        avatarHtml = `<div class="user-avatar" style="${isAdminUser ? 'background: linear-gradient(135deg, #e74c3c, #c0392b);' : ''}">${initial}</div>`;
    }
    
    userArea.innerHTML = `
        <div class="user-profile">
            ${avatarHtml}
            <span class="user-name">
                ${currentUser.name.split(' ')[0]} 
                ${isAdminUser ? '👑' : ''}
                ${providerIcon ? `<i class="${providerIcon}" style="font-size: 0.7rem; margin-left: 3px; opacity: 0.7;"></i>` : ''}
            </span>
            <i class="fas fa-chevron-down" style="font-size: 0.8rem; color: var(--gray);"></i>
            <div class="user-dropdown">
                ${isAdminUser ? '<a href="javascript:void(0)" id="admin-panel-link"><i class="fas fa-shield-alt"></i> Admin Panel</a>' : ''}
                <a href="javascript:void(0)"><i class="fas fa-user"></i> Tài khoản</a>
                <a href="javascript:void(0)" id="order-history-link"><i class="fas fa-history"></i> Lịch sử đơn hàng</a>
                <a href="javascript:void(0)"><i class="fas fa-heart"></i> Yêu thích</a>
                <a href="javascript:void(0)"><i class="fas fa-cog"></i> Cài đặt</a>
                <a href="javascript:void(0)" id="logout-link"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
            </div>
        </div>
    `;
    
    // Add event listeners
    const orderHistoryLink = document.getElementById('order-history-link');
    if (orderHistoryLink) {
        orderHistoryLink.addEventListener('click', function(e) {
            e.preventDefault();
            openOrderHistory();
        });
    }
    
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
    
    if (isAdminUser) {
        const adminPanelLink = document.getElementById('admin-panel-link');
        if (adminPanelLink) {
            adminPanelLink.addEventListener('click', function(e) {
                e.preventDefault();
                openAdminPanel();
            });
        }
    }
}

// Override updateUserUI
updateUserUI = updateUserUIWithAdmin;

// Override checkout to open checkout modal
const originalCheckout = checkout;
checkout = function() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để thanh toán!', 'error');
        toggleCart();
        openAuthModal('login');
        return;
    }
    
    // Open checkout modal
    openCheckoutModal();
};

// ==================== CHECKOUT WITH ADDRESS ====================

// Open checkout modal
function openCheckoutModal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Render cart items
    document.getElementById('checkout-items').innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="checkout-item-info">
                <span class="checkout-item-name">${item.name}</span>
                <span class="checkout-item-qty">x${item.quantity}</span>
            </div>
            <span class="checkout-item-price">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    document.getElementById('checkout-total-amount').textContent = formatPrice(total);
    
    // Pre-fill user info
    document.getElementById('checkout-name').value = currentUser.name || '';
    document.getElementById('checkout-phone').value = currentUser.phone || '';
    document.getElementById('checkout-address').value = '';
    document.getElementById('checkout-note').value = '';
    document.getElementById('map-container').style.display = 'none';
    
    toggleCart(); // Close cart sidebar
    
    document.getElementById('checkout-modal').classList.add('open');
    document.getElementById('checkout-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Close checkout modal
function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.remove('open');
    document.getElementById('checkout-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Open map picker (show Google Maps embed)
function openMapPicker() {
    const address = document.getElementById('checkout-address').value.trim();
    const mapContainer = document.getElementById('map-container');
    const mapIframe = document.getElementById('google-map');
    
    if (mapContainer.style.display === 'none') {
        mapContainer.style.display = 'block';
        
        // Create Google Maps embed URL with address
        let mapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';
        
        if (address) {
            mapUrl += '&q=' + encodeURIComponent(address + ', Vietnam');
        } else {
            // Default to Ho Chi Minh City
            mapUrl += '&q=Ho+Chi+Minh+City,Vietnam';
        }
        
        mapIframe.src = mapUrl;
    } else {
        mapContainer.style.display = 'none';
    }
}

// Update map when address changes
onReady(function() {
    const addressInput = document.getElementById('checkout-address');
    if (addressInput) {
        let debounceTimer;
        addressInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const mapContainer = document.getElementById('map-container');
                if (mapContainer && mapContainer.style.display !== 'none') {
                    openMapPicker();
                }
            }, 1000);
        });
    }
});

// Confirm order
function confirmOrder() {
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const note = document.getElementById('checkout-note').value.trim();
    
    if (!name) {
        showNotification('Vui lòng nhập họ tên người nhận!', 'error');
        return;
    }
    
    if (!phone) {
        showNotification('Vui lòng nhập số điện thoại!', 'error');
        return;
    }
    
    if (!address) {
        showNotification('Vui lòng nhập địa chỉ giao hàng!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create order
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        userName: name,
        userEmail: currentUser.email,
        userPhone: phone,
        address: address,
        note: note,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        })),
        total: total,
        status: 'pending',
        date: new Date().toISOString()
    };
    
    saveOrder(order);
    
    showNotification(`🎉 Đặt hàng thành công! Mã đơn: #${order.id}`, 'success');
    cart = [];
    updateCart();
    closeCheckoutModal();
}

// Create default admin account if not exists
function ensureAdminAccount() {
    const users = JSON.parse(localStorage.getItem('kitchenpro_users') || '[]');
    const adminExists = users.find(u => u.email === ADMIN_EMAIL);
    
    if (!adminExists) {
        const adminUser = {
            id: 1,
            name: 'Administrator',
            email: ADMIN_EMAIL,
            phone: '0123456789',
            password: ADMIN_PASSWORD,
            preferences: [],
            viewedProducts: [],
            purchasedCategories: [],
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(adminUser);
    } else {
        adminExists.password = ADMIN_PASSWORD;
        adminExists.isAdmin = true;
    }
    localStorage.setItem('kitchenpro_users', JSON.stringify(users));
}

// Load admin messages
function loadAdminMessages() {
    const messages = getContactMessages();
    const container = document.getElementById('admin-messages-list');
    
    if (messages.length === 0) {
        container.innerHTML = '<p style="padding: 2rem; text-align: center; color: var(--gray);">Chưa có tin nhắn nào</p>';
        return;
    }
    
    // Sort by date descending
    messages.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = `
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Trạng thái</th>
                    <th>Người gửi</th>
                    <th>Email</th>
                    <th>SĐT</th>
                    <th>Tin nhắn</th>
                    <th>Ngày gửi</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${messages.map(msg => `
                    <tr class="${msg.read ? '' : 'unread-row'}">
                        <td>
                            <span class="msg-status ${msg.read ? 'read' : 'unread'}">
                                <i class="fas fa-${msg.read ? 'envelope-open' : 'envelope'}"></i>
                                ${msg.read ? 'Đã đọc' : 'Chưa đọc'}
                            </span>
                        </td>
                        <td><strong>${msg.userName}</strong></td>
                        <td>${msg.userEmail}</td>
                        <td>${msg.userPhone || '-'}</td>
                        <td class="msg-content" title="${msg.message}">${msg.message.substring(0, 50)}${msg.message.length > 50 ? '...' : ''}</td>
                        <td>${formatDate(msg.date)}</td>
                        <td>
                            <button class="admin-action-btn edit" onclick="viewMessage(${msg.id})" title="Xem chi tiết">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="admin-action-btn delete" onclick="deleteMessage(${msg.id})" title="Xóa">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    updateUnreadBadge();
}

// View message detail
function viewMessage(msgId) {
    const messages = getContactMessages();
    const msg = messages.find(m => m.id === msgId);
    
    if (!msg) return;
    
    // Mark as read
    msg.read = true;
    localStorage.setItem('kitchenpro_messages', JSON.stringify(messages));
    
    // Show message in alert/modal
    alert(`📧 Tin nhắn từ ${msg.userName}\n\nEmail: ${msg.userEmail}\nSĐT: ${msg.userPhone || 'Không có'}\nNgày: ${formatDate(msg.date)}\n\n${msg.message}`);
    
    loadAdminMessages();
}

// Delete message
function deleteMessage(msgId) {
    if (!confirm('Bạn có chắc muốn xóa tin nhắn này?')) return;
    
    let messages = getContactMessages();
    messages = messages.filter(m => m.id !== msgId);
    localStorage.setItem('kitchenpro_messages', JSON.stringify(messages));
    
    showNotification('Đã xóa tin nhắn!', 'success');
    loadAdminMessages();
}

// Update unread badge
function updateUnreadBadge() {
    const messages = getContactMessages();
    const unreadCount = messages.filter(m => !m.read).length;
    const badge = document.getElementById('unread-badge');
    
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'inline-flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Initialize admin on page load
ensureAdminAccount();

// ==================== EDIT PRODUCT IMAGE ====================

let editingProductId = null;

// Open edit image modal
function openEditImageModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    editingProductId = productId;
    
    // Show current image
    document.getElementById('preview-current-image').src = product.image;
    document.getElementById('new-image-url').value = '';
    document.getElementById('preview-new-image').style.display = 'none';
    document.getElementById('preview-placeholder').style.display = 'flex';
    
    document.getElementById('edit-image-modal').classList.add('open');
    document.getElementById('edit-image-overlay').classList.add('open');
}

// Close edit image modal
function closeEditImageModal() {
    document.getElementById('edit-image-modal').classList.remove('open');
    document.getElementById('edit-image-overlay').classList.remove('open');
    editingProductId = null;
}

// Handle paste event for image URL
function handleImagePaste(event) {
    setTimeout(() => {
        const url = document.getElementById('new-image-url').value.trim();
        previewNewImage(url);
    }, 100);
}

// Preview new image
function previewNewImage(url) {
    const previewImg = document.getElementById('preview-new-image');
    const placeholder = document.getElementById('preview-placeholder');
    
    if (!url) {
        previewImg.style.display = 'none';
        placeholder.style.display = 'flex';
        return;
    }
    
    // Test if image loads
    const testImg = new Image();
    testImg.onload = function() {
        previewImg.src = url;
        previewImg.style.display = 'block';
        placeholder.style.display = 'none';
    };
    testImg.onerror = function() {
        previewImg.style.display = 'none';
        placeholder.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Link không hợp lệ';
        placeholder.style.display = 'flex';
        placeholder.style.color = '#e74c3c';
    };
    testImg.src = url;
}

// Add input event listener for URL field
onReady(function() {
    const urlInput = document.getElementById('new-image-url');
    if (urlInput) {
        urlInput.addEventListener('input', function() {
            previewNewImage(this.value.trim());
        });
    }
});

// Save product image
function saveProductImage() {
    if (!editingProductId) return;
    
    const newUrl = document.getElementById('new-image-url').value.trim();
    
    if (!newUrl) {
        showNotification('Vui lòng nhập link hình ảnh!', 'error');
        return;
    }
    
    // Find and update product
    const product = products.find(p => p.id === editingProductId);
    if (product) {
        product.image = newUrl;
        
        // Save to localStorage for persistence
        saveProductImages();
        
        // Refresh displays
        renderProducts(currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter));
        loadAdminProducts();
        if (currentUser) showRecommendations();
        
        showNotification(`Đã cập nhật hình ảnh cho "${product.name}"!`, 'success');
        closeEditImageModal();
    }
}

// Save product images to localStorage
function saveProductImages() {
    const imageData = products.map(p => ({ id: p.id, image: p.image }));
    localStorage.setItem('kitchenpro_product_images', JSON.stringify(imageData));
}

// Save custom products to localStorage
function saveCustomProducts() {
    const savedProducts = JSON.parse(localStorage.getItem('kitchenpro_custom_products') || '[]');
    const customProductIds = new Set(savedProducts.map(p => p.id));
    const customProducts = products.filter(p => p.isCustom && !customProductIds.has(p.id));
    const allCustomProducts = savedProducts.concat(customProducts);
    localStorage.setItem('kitchenpro_custom_products', JSON.stringify(allCustomProducts));
}

function loadSavedProducts() {
    const savedProducts = JSON.parse(localStorage.getItem('kitchenpro_custom_products') || '[]');
    savedProducts.forEach(product => {
        const exists = products.find(p => p.id === product.id);
        if (!exists) {
            products.push(product);
        }
    });
}

// Load saved product images from localStorage
function loadSavedProductImages() {
    const savedImages = localStorage.getItem('kitchenpro_product_images');
    if (savedImages) {
        const imageData = JSON.parse(savedImages);
        imageData.forEach(data => {
            const product = products.find(p => p.id === data.id);
            if (product) {
                product.image = data.image;
            }
        });
    }
}

function openAddProductModal() {
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-price').value = '';
    document.getElementById('new-product-stock').value = '';
    document.getElementById('new-product-category').value = 'noi-chao';
    document.getElementById('new-product-description').value = '';
    document.getElementById('new-product-image-file').value = '';
    document.getElementById('add-product-modal').classList.add('open');
    document.getElementById('add-product-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeAddProductModal() {
    document.getElementById('add-product-modal').classList.remove('open');
    document.getElementById('add-product-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

async function uploadProductImage(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = function() {
            reject(new Error('Không thể đọc file ảnh')); 
        };
        reader.readAsDataURL(file);
    });
}

async function handleAddProduct() {
    const name = document.getElementById('new-product-name').value.trim();
    const price = Number(document.getElementById('new-product-price').value);
    const stock = Number(document.getElementById('new-product-stock').value);
    const category = document.getElementById('new-product-category').value;
    const description = document.getElementById('new-product-description').value.trim();
    const fileInput = document.getElementById('new-product-image-file');

    if (!name || !price || !fileInput.files.length) {
        showNotification('Vui lòng nhập đầy đủ tên, giá và chọn ảnh sản phẩm.', 'error');
        return;
    }

    const file = fileInput.files[0];
    let imageUrl;

    try {
        imageUrl = await uploadProductImage(file);
    } catch (error) {
        showNotification(`Tải ảnh lên thất bại: ${error.message}`, 'error');
        return;
    }

    const newProduct = {
        id: Date.now(),
        name,
        price,
        oldPrice: null,
        category,
        badge: 'new',
        rating: 4,
        reviews: 0,
        image: imageUrl,
        stock,
        description,
        isCustom: true
    };

    products.push(newProduct);
    saveCustomProducts();
    saveProductImages();

    // Render products with current filter
    const filteredProducts = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    renderProducts(filteredProducts);
    
    // Scroll to the new product if it's visible
    setTimeout(() => {
        const newProductCard = document.querySelector(`[data-category="${newProduct.category}"]:last-child`);
        if (newProductCard) {
            newProductCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            newProductCard.style.boxShadow = '0 0 20px rgba(255, 193, 7, 0.8)';
            setTimeout(() => {
                newProductCard.style.boxShadow = '';
            }, 2000);
        }
    }, 100);
    
    loadAdminProducts();
    if (currentUser) showRecommendations();

    showNotification('Đã thêm sản phẩm mới và lưu ảnh trong trình duyệt!', 'success');
    closeAddProductModal();
}

// ==================== STOCK MANAGEMENT ====================

// Get product stock (from localStorage or default)
function getProductStock(productId) {
    const savedStock = localStorage.getItem('kitchenpro_stock');
    if (savedStock) {
        const stockData = JSON.parse(savedStock);
        if (stockData[productId] !== undefined) {
            return stockData[productId];
        }
    }
    // Return default stock from product
    const product = products.find(p => p.id === productId);
    return product ? product.stock : 0;
}

// Save stock to localStorage
function saveStock(productId, quantity) {
    let stockData = {};
    const savedStock = localStorage.getItem('kitchenpro_stock');
    if (savedStock) {
        stockData = JSON.parse(savedStock);
    }
    stockData[productId] = quantity;
    localStorage.setItem('kitchenpro_stock', JSON.stringify(stockData));
}

// Decrease stock
function decreaseStock(productId, quantity) {
    const currentStock = getProductStock(productId);
    const newStock = Math.max(0, currentStock - quantity);
    saveStock(productId, newStock);
}

// Increase stock (when removing from cart)
function increaseStock(productId, quantity) {
    const currentStock = getProductStock(productId);
    const product = products.find(p => p.id === productId);
    const maxStock = product ? product.stock : 100;
    const newStock = Math.min(maxStock, currentStock + quantity);
    saveStock(productId, newStock);
}

// ==================== PRODUCT DETAIL MODAL ====================

// Open product detail modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const stock = getProductStock(productId);
    const isOutOfStock = stock <= 0;
    
    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('product-detail-content');
    
    content.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x400/e67e22/ffffff?text=${encodeURIComponent(product.name.substring(0,15))}'">
                ${product.badge ? `<span class="badge ${getBadgeClass(product.badge)}">${getBadgeText(product.badge)}</span>` : ''}
                ${isOutOfStock ? '<span class="badge out-of-stock-badge">Hết hàng</span>' : ''}
            </div>
            <div class="product-detail-info">
                <span class="category">${getCategoryName(product.category)}</span>
                <h2>${product.name}</h2>
                <div class="rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviews} đánh giá)</span>
                </div>
                <div class="price-row">
                    <span class="price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    ${product.oldPrice ? `<span class="discount">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>` : ''}
                </div>
                <div class="stock-status ${isOutOfStock ? 'out' : stock <= 5 ? 'low' : 'in'}">
                    <i class="fas fa-${isOutOfStock ? 'times-circle' : 'check-circle'}"></i>
                    ${isOutOfStock ? 'Hết hàng' : `Còn ${stock} sản phẩm`}
                </div>
                <div class="product-description">
                    <h4><i class="fas fa-info-circle"></i> Mô tả sản phẩm</h4>
                    <p>${product.description || 'Sản phẩm chất lượng cao, đảm bảo uy tín.'}</p>
                </div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button onclick="decreaseDetailQty()">-</button>
                        <input type="number" id="detail-quantity" value="1" min="1" max="${stock}">
                        <button onclick="increaseDetailQty(${stock})">+</button>
                    </div>
                    <button class="btn-add-cart-detail ${isOutOfStock ? 'disabled' : ''}" onclick="${isOutOfStock ? '' : `addToCartFromDetail(${product.id})`}" ${isOutOfStock ? 'disabled' : ''}>
                        <i class="fas fa-${isOutOfStock ? 'times' : 'cart-plus'}"></i>
                        ${isOutOfStock ? 'Hết hàng' : 'Thêm vào giỏ'}
                    </button>
                </div>
                <div class="product-features">
                    <div class="feature"><i class="fas fa-truck"></i> Miễn phí vận chuyển đơn từ 500K</div>
                    <div class="feature"><i class="fas fa-undo"></i> Đổi trả trong 30 ngày</div>
                    <div class="feature"><i class="fas fa-shield-alt"></i> Bảo hành chính hãng</div>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('open');
    document.getElementById('product-detail-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Track product view
    trackProductView(productId);
}

// Close product detail modal
function closeProductDetail() {
    document.getElementById('product-detail-modal').classList.remove('open');
    document.getElementById('product-detail-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Quantity controls in detail modal
function decreaseDetailQty() {
    const input = document.getElementById('detail-quantity');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function increaseDetailQty(maxStock) {
    const input = document.getElementById('detail-quantity');
    if (parseInt(input.value) < maxStock) {
        input.value = parseInt(input.value) + 1;
    }
}

// Add to cart from detail modal
function addToCartFromDetail(productId) {
    const quantity = parseInt(document.getElementById('detail-quantity').value) || 1;
    const stock = getProductStock(productId);
    
    if (quantity > stock) {
        showNotification(`Chỉ còn ${stock} sản phẩm trong kho!`, 'error');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity + quantity > stock + existingItem.quantity) {
            showNotification(`Chỉ còn ${stock} sản phẩm trong kho!`, 'error');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }
    
    // Decrease stock
    decreaseStock(productId, quantity);
    
    updateCart();
    showNotification(`Đã thêm ${quantity} "${product.name}" vào giỏ hàng!`);
    
    // Refresh products display
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    renderProducts(filtered);
    
    closeProductDetail();
    toggleCart();
}


// ==================== SITE REVIEW SYSTEM ====================

let selectedRating = 0;

// Open review modal
function openReviewModal() {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập để đánh giá!', 'error');
        openAuthModal('login');
        return;
    }
    
    // Check if user already reviewed
    const reviews = getSiteReviews();
    const existingReview = reviews.find(r => r.userId === currentUser.id);
    
    if (existingReview) {
        selectedRating = existingReview.rating;
        document.getElementById('review-comment').value = existingReview.comment || '';
        updateStarDisplay(selectedRating);
    } else {
        selectedRating = 0;
        document.getElementById('review-comment').value = '';
        resetStarDisplay();
    }
    
    document.getElementById('review-modal').classList.add('open');
    document.getElementById('review-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Close review modal
function closeReviewModal() {
    document.getElementById('review-modal').classList.remove('open');
    document.getElementById('review-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Get site reviews
function getSiteReviews() {
    return JSON.parse(localStorage.getItem('kitchenpro_site_reviews') || '[]');
}

// Save site reviews
function saveSiteReviews(reviews) {
    localStorage.setItem('kitchenpro_site_reviews', JSON.stringify(reviews));
}

// Update star display
function updateStarDisplay(rating) {
    const stars = document.querySelectorAll('#star-rating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
    
    const ratingTexts = ['', 'Rất tệ 😞', 'Tệ 😕', 'Bình thường 😐', 'Tốt 😊', 'Tuyệt vời 🤩'];
    document.getElementById('rating-text').textContent = ratingTexts[rating] || 'Chọn số sao';
}

// Reset star display
function resetStarDisplay() {
    const stars = document.querySelectorAll('#star-rating i');
    stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
    });
    document.getElementById('rating-text').textContent = 'Chọn số sao';
}

// Initialize star rating events
onReady(function() {
    const starContainer = document.getElementById('star-rating');
    if (starContainer) {
        starContainer.addEventListener('click', function(e) {
            if (e.target.tagName === 'I') {
                selectedRating = parseInt(e.target.dataset.rating);
                updateStarDisplay(selectedRating);
            }
        });
        
        starContainer.addEventListener('mouseover', function(e) {
            if (e.target.tagName === 'I') {
                const hoverRating = parseInt(e.target.dataset.rating);
                const stars = starContainer.querySelectorAll('i');
                stars.forEach((star, index) => {
                    if (index < hoverRating) {
                        star.classList.remove('far');
                        star.classList.add('fas');
                    } else {
                        star.classList.remove('fas');
                        star.classList.add('far');
                    }
                });
            }
        });
        
        starContainer.addEventListener('mouseout', function() {
            updateStarDisplay(selectedRating);
        });
    }
});

// Submit review
function submitReview() {
    if (!currentUser) {
        showNotification('Vui lòng đăng nhập!', 'error');
        return;
    }
    
    if (selectedRating === 0) {
        showNotification('Vui lòng chọn số sao!', 'error');
        return;
    }
    
    const comment = document.getElementById('review-comment').value.trim();
    const reviews = getSiteReviews();
    
    // Check if user already reviewed
    const existingIndex = reviews.findIndex(r => r.userId === currentUser.id);
    
    const reviewData = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        rating: selectedRating,
        comment: comment,
        date: new Date().toISOString()
    };
    
    if (existingIndex !== -1) {
        reviews[existingIndex] = { ...reviews[existingIndex], ...reviewData };
        showNotification('Đã cập nhật đánh giá của bạn!', 'success');
    } else {
        reviews.push(reviewData);
        showNotification('Cảm ơn bạn đã đánh giá! ⭐', 'success');
    }
    
    saveSiteReviews(reviews);
    closeReviewModal();
    updateReviewButton();
}

// Update review button to show average rating
function updateReviewButton() {
    const reviews = getSiteReviews();
    const btn = document.getElementById('review-btn');
    
    if (reviews.length > 0) {
        const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
        btn.innerHTML = `<i class="fas fa-star"></i><span>${avgRating} (${reviews.length})</span>`;
    }
    
    // Also update testimonials section
    renderTestimonials();
}

// Render testimonials from real reviews
function renderTestimonials() {
    const reviews = getSiteReviews();
    const grid = document.getElementById('testimonials-grid');
    const summary = document.getElementById('testimonials-summary');
    
    if (!grid) return;
    
    // Default testimonials if no reviews yet
    const defaultTestimonials = [
        { userName: 'Nguyễn Thị Mai', rating: 5, comment: 'Sản phẩm chất lượng tuyệt vời, giao hàng nhanh. Tôi rất hài lòng với bộ nồi inox đã mua!', role: 'Đầu bếp tại gia', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { userName: 'Trần Văn Hùng', rating: 5, comment: 'Đã mua nhiều lần ở đây, lần nào cũng ưng ý. Nhân viên tư vấn nhiệt tình, giá cả hợp lý.', role: 'Chủ nhà hàng', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { userName: 'Lê Thị Hương', rating: 4.5, comment: 'Bộ dao tôi mua sắc bén, thiết kế đẹp. Đóng gói cẩn thận, sẽ ủng hộ shop dài dài!', role: 'Food Blogger', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' }
    ];
    
    // Combine real reviews with defaults, prioritize real reviews
    let displayReviews = [];
    
    if (reviews.length > 0) {
        // Sort by rating and date
        const sortedReviews = [...reviews].sort((a, b) => {
            if (b.rating !== a.rating) return b.rating - a.rating;
            return new Date(b.date) - new Date(a.date);
        });
        
        // Take top reviews with comments
        displayReviews = sortedReviews
            .filter(r => r.comment && r.comment.trim())
            .slice(0, 6)
            .map(r => ({
                ...r,
                role: 'Khách hàng',
                avatar: null
            }));
    }
    
    // Fill with defaults if not enough
    if (displayReviews.length < 3) {
        const needed = 3 - displayReviews.length;
        displayReviews = [...displayReviews, ...defaultTestimonials.slice(0, needed)];
    }
    
    // Show summary if there are real reviews
    if (reviews.length > 0) {
        const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
        summary.innerHTML = `
            <div class="testimonials-stats">
                <div class="stat-big">
                    <span class="stat-number">${avgRating}</span>
                    <div class="stat-stars">${renderStars(parseFloat(avgRating))}</div>
                </div>
                <div class="stat-info">
                    <span>${reviews.length} đánh giá</span>
                    <span>từ khách hàng thực</span>
                </div>
            </div>
        `;
        summary.style.display = 'flex';
    } else {
        summary.style.display = 'none';
    }
    
    // Render cards
    grid.innerHTML = displayReviews.slice(0, 3).map(review => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${renderStars(review.rating)}
            </div>
            <p>"${review.comment}"</p>
            <div class="testimonial-author">
                ${review.avatar 
                    ? `<img src="${review.avatar}" alt="${review.userName}">`
                    : `<div class="testimonial-avatar">${review.userName.charAt(0).toUpperCase()}</div>`
                }
                <div>
                    <h4>${review.userName}</h4>
                    <span>${review.role || 'Khách hàng'}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open site reviews modal
function openSiteReviewsModal() {
    document.getElementById('site-reviews-modal').classList.add('open');
    document.getElementById('site-reviews-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderSiteReviews();
}

// Close site reviews modal
function closeSiteReviewsModal() {
    document.getElementById('site-reviews-modal').classList.remove('open');
    document.getElementById('site-reviews-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// Render site reviews
function renderSiteReviews() {
    const reviews = getSiteReviews();
    const summaryContainer = document.getElementById('reviews-summary');
    const listContainer = document.getElementById('reviews-list');
    
    if (reviews.length === 0) {
        summaryContainer.innerHTML = '';
        listContainer.innerHTML = `
            <div class="empty-reviews">
                <i class="fas fa-star"></i>
                <p>Chưa có đánh giá nào</p>
                <button class="btn-primary" onclick="closeSiteReviewsModal(); openReviewModal();">
                    Đánh giá ngay
                </button>
            </div>
        `;
        return;
    }
    
    // Calculate stats
    const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
    const ratingCounts = [0, 0, 0, 0, 0];
    reviews.forEach(r => ratingCounts[r.rating - 1]++);
    
    summaryContainer.innerHTML = `
        <div class="rating-overview">
            <div class="rating-big">
                <span class="rating-number">${avgRating}</span>
                <div class="rating-stars">${renderStars(parseFloat(avgRating))}</div>
                <span class="rating-count">${reviews.length} đánh giá</span>
            </div>
            <div class="rating-bars">
                ${[5,4,3,2,1].map(star => `
                    <div class="rating-bar-row">
                        <span>${star} <i class="fas fa-star"></i></span>
                        <div class="rating-bar">
                            <div class="rating-bar-fill" style="width: ${(ratingCounts[star-1] / reviews.length * 100)}%"></div>
                        </div>
                        <span>${ratingCounts[star-1]}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Sort by date descending
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    listContainer.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-user">
                    <div class="review-avatar">${review.userName.charAt(0).toUpperCase()}</div>
                    <div>
                        <strong>${review.userName}</strong>
                        <span class="review-date">${formatDate(review.date)}</span>
                    </div>
                </div>
                <div class="review-rating">${renderStars(review.rating)}</div>
            </div>
            ${review.comment ? `<p class="review-comment">${review.comment}</p>` : ''}
        </div>
    `).join('');
}

// Initialize review button on page load
onReady(function() {
    updateReviewButton();
    
    // Make review button also open reviews list on right-click
    const reviewBtn = document.getElementById('review-btn');
    if (reviewBtn) {
        reviewBtn.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            openSiteReviewsModal();
        });
    }
});
