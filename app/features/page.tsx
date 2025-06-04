'use client';

import Link from 'next/link';
import FeatureToggle from '../../components/FeatureToggle';

export default function Features() {
  return (
    <main style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2> Features</h2>
      <p>This page shows a toggle feature with conditional rendering.</p>
      <FeatureToggle />
      <br /><br />
      <Link href="/">Back to Home</Link>
    </main>
  );
}
