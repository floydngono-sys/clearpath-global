import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const NEWS = [
  { id: '1', slug: 'us-policy-2024', title: 'US Visa Policy Updates', category: 'Policy', country: 'US', summary: 'New processing timelines announced.' },
  { id: '2', slug: 'uk-expansion', title: 'UK Points-Based Expansion', category: 'News', country: 'UK', summary: 'Expanded pathways for skilled workers.' },
  { id: '3', slug: 'canada-draws', title: 'Canada Express Entry Draws', category: 'Update', country: 'CA', summary: 'New draws targeting skilled workers.' },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Immigration News</h1>
          <p className="text-gray-600 mb-12">Latest policy changes and announcements</p>

          <div className="space-y-6">
            {NEWS.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex gap-2 mb-3">
                    <Badge>{item.category}</Badge>
                    <Badge variant="outline">{item.country}</Badge>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <Link href={`/news/${item.slug}`}>
                    <Button variant="outline">Read More</Button>
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
