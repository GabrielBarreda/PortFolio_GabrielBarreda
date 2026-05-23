import AboutIntro from '@/components/apropos/AboutIntro';
import SkillsSection from '@/components/apropos/SkillsSection';
import ParcourSection from '@/components/apropos/ParcourSection';

export default function About() {
  return (
    <div
      className="page-in"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        padding: '90px 48px 60px',
        overflowY: 'scroll',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <AboutIntro />
        <SkillsSection />
        <ParcourSection />
      </div>
    </div>
  );
}
