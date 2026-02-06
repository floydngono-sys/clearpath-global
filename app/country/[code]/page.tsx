import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CountryPage({ params }: { params: { code: string } }) {
  const code = params.code.toUpperCase();

  const countries: Record<string, any> = {
    US: { name: 'United States', flag: '🇺🇸', desc: 'The largest economy with diverse immigration pathways.' },
    UK: { name: 'United Kingdom', flag: '🇬🇧', desc: 'Leading destination with points-based visa system.' },
    CA: { name: 'Canada', flag: '🇨🇦', desc: 'Popular choice with Express Entry system.' },
  };

  const country = countries[code];

  if (!country) {
    return (
      <>
        <Header />
        <main className="py-20"><div className="max-w-4xl mx-auto px-4"><h1>Country not found</h1></div></main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-6xl mb-4">{country.flag}</div>
            <h1 className="text-4xl font-bold mb-2">{country.name}</h1>
            <p className="text-lg text-gray-600">{country.desc}</p>
          </div>

          <Tabs defaultValue="visas">
            <TabsList>
              <TabsTrigger value="visas">Visas</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            <TabsContent value="visas" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Visa Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader><CardTitle>Employment Visa</CardTitle></CardHeader>
                  <CardContent>For skilled workers and professionals</CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Student Visa</CardTitle></CardHeader>
                  <CardContent>For international students</CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="work" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Work Permissions</h2>
              <Card>
                <CardHeader><CardTitle>Right to Work</CardTitle></CardHeader>
                <CardContent>Full work authorization with extended hours</CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stats" className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Key Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card><CardHeader><CardTitle>Processing Time</CardTitle></CardHeader><CardContent>2-8 weeks</CardContent></Card>
                <Card><CardHeader><CardTitle>Cost of Living</CardTitle></CardHeader><CardContent>$20K-$35K/year</CardContent></Card>
                <Card><CardHeader><CardTitle>Pass Rate</CardTitle></CardHeader><CardContent>72%</CardContent></Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}
