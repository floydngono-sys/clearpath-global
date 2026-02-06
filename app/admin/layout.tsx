import Header from '@/components/header';
import Footer from '@/components/footer';
import { ProtectedRoute } from '@/components/protected-route';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <Header />
      <main>{children}</main>
      <Footer />
    </ProtectedRoute>
  );
}
