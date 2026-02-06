import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

const POSTS = [
  { id: '1', slug: 'trends-2024', title: 'Immigration Trends 2024', category: 'Trends', author: 'Sarah J.', date: '2024-01-20' },
  { id: '2', slug: 'digital-nomad', title: 'Digital Nomad Visas', category: 'Work', author: 'Emma R.', date: '2024-01-15' },
  { id: '3', slug: 'family-sponsorship', title: 'Family Sponsorship Guide', category: 'Family', author: 'David P.', date: '2024-01-10' },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Immigration Blog</h1>
          <p className="text-gray-600 mb-12">Expert insights and success stories</p>

          <div className="space-y-6">
            {POSTS.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <Badge className="w-fit mb-3">{p.category}</Badge>
                  <Link href={`/blog/${p.slug}`}>
                    <CardTitle className="hover:text-blue-600">{p.title}</CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {p.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {p.date}
                    </div>
                  </div>
                  <Link href={`/blog/${p.slug}`}>
                    <Button variant="outline">Read Article</Button>
                  </Link>
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
