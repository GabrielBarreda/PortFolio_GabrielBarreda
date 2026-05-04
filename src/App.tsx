import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import type { PageName, SpiralItem } from '@/types';
import '@/styles/global.css';

export default function App() {
    const [page, setPage] = useState<PageName>('home');
    const [selectedProject, setSelectedProject] = useState<SpiralItem | null>(null);

    const handleNavigate = (p: PageName) => setPage(p);

    const handleOpenProject = (item: SpiralItem) => {
        setSelectedProject(item);
        setPage('project');
    };

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--white)' }}>
            <Nav currentPage={page} onNavigate={handleNavigate} />

            {page === 'home' && (
                <Home onNavigate={handleNavigate} onOpenProject={handleOpenProject} />
            )}

            {page === 'project' && selectedProject && (
                <ProjectDetail project={selectedProject} onBack={() => setPage('home')} />
            )}

            {page === 'about' && <About />}

            {page === 'contact' && <Contact />}
        </div>
    );
}
