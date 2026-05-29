import {
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../../../../lib/products-store';

export function generateStaticParams() {
  return getProducts().map((product) => ({
    id: String(product.id),
  }));
}

export async function GET(_request, { params }) {
  const product = getProductById(params.id);

  if (!product) {
    return Response.json(
      {
        success: false,
        message: 'Không tìm thấy sản phẩm',
      },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
    data: product,
  });
}

export async function PATCH(request, { params }) {
  const payload = await request.json();
  const result = updateProduct(params.id, payload);

  if (result.error) {
    return Response.json(
      {
        success: false,
        message: result.error,
      },
      { status: result.error.includes('Không tìm thấy') ? 404 : 400 }
    );
  }

  return Response.json({
    success: true,
    message: 'Đã cập nhật sản phẩm',
    data: result.product,
  });
}

export async function DELETE(_request, { params }) {
  const result = deleteProduct(params.id);

  if (result.error) {
    return Response.json(
      {
        success: false,
        message: result.error,
      },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,
    message: 'Đã xóa sản phẩm',
    data: result.product,
  });
}
