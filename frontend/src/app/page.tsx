import Header from '@/components/Header/Header';
import './globals.scss';
import Intro from '@/components/Intro/Intro';

import dynamic from 'next/dynamic';

const Mastering = dynamic(() => import('@/components/Mastering/Mastering'), {
  loading: () => null,
});

const Suitable = dynamic(() => import('@/components/Suitable/Suitable').then((m) => m.Suitable), {
  loading: () => null,
});

const HowCourseGo = dynamic(
  () => import('@/components/HowCourseGo/HowCourseGo').then((m) => m.HowCourseGo),
  { loading: () => null },
);

const Need = dynamic(() => import('@/components/Need/Need'), {
  loading: () => null,
});

const Join = dynamic(() => import('@/components/Join/Join').then((m) => m.Join), {
  loading: () => null,
});

const Form = dynamic(() => import('@/components/Form/Form').then((m) => m.Form), {
  loading: () => null,
});

const Footer = dynamic(() => import('@/components/Footer/Footer').then((m) => m.Footer), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <Header />
      <Intro />

      <Mastering />
      <Suitable />
      <HowCourseGo />
      <Need />
      <Join />
      <Form />
      <Footer />
    </>
  );
}
