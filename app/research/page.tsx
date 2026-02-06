import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';

const PRODUCTS = [
  { id: '1', title: 'Global Trends Report 2024', category: 'Research', price: '$99', downloads: 1247 },
  { id: '2', title: 'Immigration Policy Database', category: 'Data', price: '$149', downloads: 892 },
  { id: '3', title: 'Visa Salary Benchmarks', category: 'Data', price: '$79', downloads: 2156 },
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research & Data Products</h1>
          <p className="text-gray-600 mb-12">Data-driven insights for informed decisions</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <Badge>{p.category}</Badge>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{p.price}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Download className="w-4 h-4" /> {p.downloads}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600">Purchase</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
