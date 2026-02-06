import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const GUIDES = [
  { id: '1', title: 'US H-1B Visa Guide', category: 'Work', difficulty: 'Intermediate', rating: 4.8, reviews: 245 },
  { id: '2', title: 'UK Skilled Worker', category: 'Work', difficulty: 'Beginner', rating: 4.9, reviews: 312 },
  { id: '3', title: 'Canada Express Entry', category: 'Immigration', difficulty: 'Intermediate', rating: 4.7, reviews: 456 },
  { id: '4', title: 'Startup Visas', category: 'Business', difficulty: 'Advanced', rating: 4.6, reviews: 178 },
];

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Immigration Guides</h1>
          <p className="text-gray-600 mb-12">Expert-written guides for immigration pathways</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((g) => (
              <Card key={g.id} className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="flex gap-2 mb-3">
                      <Badge>{g.category}</Badge>
                      <Badge variant="outline">{g.difficulty}</Badge>
                    </div>
                    <CardTitle>{g.title}</CardTitle>
                  </CardHeader>
                </div>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span>{g.rating}</span>
                    <span className="text-gray-500">({g.reviews})</span>
                  </div>
                  <Button className="w-full bg-blue-600">Read Guide</Button>
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
