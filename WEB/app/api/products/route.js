import { createProduct, getProducts } from '../../../lib/products-store';

export async function GET() {
  const products = getProducts();

  return Response.json({
    success: true,
    count: products.length,
    data: products,
  });
}

export async function POST(request) {
  const payload = await request.json();
  const result = createProduct(payload);

  if (result.error) {
    return Response.json(
      {
        success: false,
        message: result.error,
      },
      { status: 400 }
    );
  }

  return Response.json(
    {
      success: true,
      message: 'Đã thêm sản phẩm',
      data: result.product,
    },
    { status: 201 }
  );
}
