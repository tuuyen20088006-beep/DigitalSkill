import '../styles.css';

export const metadata = {
  title: 'KitchenPro - Dụng Cụ Làm Bếp Cao Cấp',
  description: 'KitchenPro - Dụng cụ làm bếp cao cấp, giữ nguyên giao diện khi chuyển sang Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
