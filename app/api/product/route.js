import {
  deleteProduct,
  getProductById,
  updateProduct,
} from '../../../lib/products-store';

function getProductId(request) {
  return new URL(request.url).searchParams.get('id');
}

function notFoundResponse() {
  return Response.json(
    {
      success: false,
      message: 'Không tìm thấy sản phẩm',
    },
    { status: 404 }
  );
}

export async function GET(request) {
  const product = getProductById(getProductId(request));

  if (!product) {
    return notFoundResponse();
  }

  return Response.json({
    success: true,
    data: product,
  });
}

export async function PATCH(request) {
  const payload = await request.json();
  const result = updateProduct(getProductId(request), payload);

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

export async function DELETE(request) {
  const result = deleteProduct(getProductId(request));

  if (result.error) {
    return notFoundResponse();
  }

  return Response.json({
    success: true,
    message: 'Đã xóa sản phẩm',
    data: result.product,
  });
}
