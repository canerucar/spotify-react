import React from 'react'
import Section from 'components/Section'

function Home() {

  const items = [
    {
      id: 1,
      title: 'Farklı Düşün',
      description: 'Seyfeddin Başsaraç, Mert Bulan',
      image: 'https://i.scdn.co/image/ab67656300005f1f05682596cb2c249d2664d0e4',
      type: 'podcast',
    },
    {
      id: 2,
      title: 'Talkcast',
      description: 'Talkcast',
      image: 'https://i.scdn.co/image/ab67656300005f1f9e2c6b5043187ac0072937af',
      type: 'podcast',
    },
    {
      id: 3,
      title: 'Akustik Travma',
      description: 'Yüzyüzeyken Konuşuruz',
      image: 'https://i.scdn.co/image/ab67616d00001e022de642b64eadaeff4697f156',
      type: 'album',
    },
    {
      id: 4,
      title: 'Istanbul Trip',
      description: 'Artist',
      image: 'https://i.scdn.co/image/ab676161000051747b0e908ec148cf93ab7fd940',
      type: 'artist',
    },
    {
      id: 5,
      title: 'Dur Daha Yeni Başladık',
      description: 'Grogi',
      image: 'https://i.scdn.co/image/ab67616d00001e02fca25f9a85fbcf7f5c8439eb',
      type: 'album',
    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Programların" more="/vs" items={items} />
      <Section title="Caner Uçar İçin Derlendi" more="/vs" items={items} />
      <Section title="Yakınlarda Çalınanlar" more="/vs" items={items} />
    </div>
  );
}

export default Home
