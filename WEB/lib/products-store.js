import { products as seedProducts } from '../data/products';

if (!globalThis.__kitchenproProducts) {
  globalThis.__kitchenproProducts = seedProducts.map((product) => ({ ...product }));
}

const products = globalThis.__kitchenproProducts;

function getNextId() {
  return Math.max(0, ...products.map((product) => Number(product.id) || 0)) + 1;
}

function normalizeProductPayload(payload) {
  return {
    name: String(payload.name || '').trim(),
    price: Number(payload.price),
    oldPrice: payload.oldPrice ? Number(payload.oldPrice) : null,
    category: String(payload.category || '').trim(),
    badge: payload.badge || 'new',
    rating: payload.rating === undefined ? 4 : Number(payload.rating),
    reviews: payload.reviews === undefined ? 0 : Number(payload.reviews),
    image: String(payload.image || '').trim(),
    stock: payload.stock === undefined ? 0 : Number(payload.stock),
    description: String(payload.description || '').trim(),
  };
}

function validateProduct(product) {
  if (!product.name) return 'Tên sản phẩm không được để trống';
  if (!Number.isFinite(product.price) || product.price <= 0) return 'Giá sản phẩm không hợp lệ';
  if (!product.category) return 'Danh mục không được để trống';
  if (!product.image) return 'Ảnh sản phẩm không được để trống';
  if (!Number.isFinite(product.stock) || product.stock < 0) return 'Số lượng tồn kho không hợp lệ';
  return null;
}

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

export function createProduct(payload) {
  const product = {
    id: getNextId(),
    ...normalizeProductPayload(payload),
    isCustom: true,
  };
  const error = validateProduct(product);
  if (error) {
    return { error };
  }

  products.push(product);
  return { product };
}

export function updateProduct(id, payload) {
  const product = getProductById(id);
  if (!product) {
    return { error: 'Không tìm thấy sản phẩm' };
  }

  const updated = {
    ...product,
    ...normalizeProductPayload({ ...product, ...payload }),
    id: product.id,
  };
  const error = validateProduct(updated);
  if (error) {
    return { error };
  }

  Object.assign(product, updated);
  return { product };
}

export function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) {
    return { error: 'Không tìm thấy sản phẩm' };
  }

  const [product] = products.splice(index, 1);
  return { product };
}
