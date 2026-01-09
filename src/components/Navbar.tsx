'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { cn } from '@/components/ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ראשי', href: '#hero' },
        { name: 'אודות', href: '#about' },
        { name: 'גלריה', href: '#gallery' },
        { name: 'סדנאות', href: '#workshop' },
        { name: 'צור קשר', href: '#footer' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Mobile Menu Button - Moved to start for Right alignment in RTL */}
                <button
                    className="md:hidden p-2 text-[var(--foreground)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors text-lg font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link href="/" className="text-3xl font-bold tracking-wider text-[var(--foreground)] font-dancing">
                    May Cake
                </Link>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-[var(--foreground)] text-center py-2 border-b border-gray-100 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
