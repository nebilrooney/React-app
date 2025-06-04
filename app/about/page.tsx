'use client';

import Link from 'next/link';
import Counter from '../../components/Counter';

export default function About() {
  return (
    <main style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2> About This App</h2>
      <p>This page includes a counter to demonstrate state and conditional rendering.</p>
      <Counter />
      <br /><br />
      <Link href="/">Back to Home</Link>
    </main>
  );
}