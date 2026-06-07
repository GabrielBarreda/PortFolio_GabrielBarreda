import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import AccomplishmentDetail from '@/pages/AccomplishmentDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ExPro from '@/pages/ExPro';
import ExProDetail from '@/pages/ExProDetail';
import type { PageName, SpiralItem, ExperienceDetail } from '@/types';
import '@/styles/global.css';

export default function App() {
    const [page, setPage] = useState<PageName>('home');
    const [selectedProject, setSelectedProject] = useState<SpiralItem | null>(null);
    const [selectedAccomplishment, setSelectedAccomplishment] = useState<SpiralItem | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<ExperienceDetail | null>(null);

    const handleNavigate = (p: PageName) => setPage(p);

    const handleOpenProject = (item: SpiralItem) => {
        if (item.kind === 'accomplishment') {
            setSelectedAccomplishment(item);
            setPage('accomplishment');
        } else {
            setSelectedProject(item);
            setPage('project');
        }
    };

    const handleOpenExperience = (exp: ExperienceDetail) => {
        setSelectedExperience(exp);
        setPage('expro-detail');
    };

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--white)' }}>
            <Nav
                currentPage={page}
                onNavigate={handleNavigate}
                shrink={page !== 'home'}
            />

            {page === 'home' && (
                <Home onNavigate={handleNavigate} onOpenProject={handleOpenProject} />
            )}

            {page === 'project' && selectedProject && (
                <ProjectDetail project={selectedProject} onBack={() => setPage('home')} />
            )}

            {page === 'accomplishment' && selectedAccomplishment && (
                <AccomplishmentDetail
                    accomplishment={selectedAccomplishment}
                    onBack={() => setPage('home')}
                    onNavigateToExPro={() => setPage('expro')}
                />
            )}

            {page === 'about' && <About />}

            {page === 'contact' && <Contact />}

            {page === 'expro' && (
                <ExPro onNavigate={handleNavigate} onOpenDetail={handleOpenExperience} onOpenProject={handleOpenProject} />
            )}

            {page === 'expro-detail' && selectedExperience && (
                <ExProDetail
                    experience={selectedExperience}
                    onBack={() => setPage('expro')}
                />
            )}
        </div>
    );
}
