'use client';

import Link from 'next/link';
import { Instagram, Phone, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer" className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">

                <Link href="/" className="text-3xl font-bold text-[var(--foreground)]">
                    May Cake
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://www.instagram.com/May.ben.harush"
                        target="_blank"
                        className="p-3 bg-pink-50 rounded-full text-pink-600 hover:bg-pink-100 transition-colors"
                    >
                        <Instagram size={24} />
                    </Link>
                    <Link
                        // Provide accurate phone number when available
                        href="https://wa.me/972527432899"
                        target="_blank"
                        className="p-3 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-colors"
                    >
                        {/* WhatsApp Icon placeholder - using Phone for now or need specific WA icon if lucide has one (it doesn't usually, checking...) */}
                        {/* Lucide doesn't have official 'whatsapp' in all versions, using Phone as fallback or custom svg if needed. User asked for WA link. */}
                        <Phone size={24} />
                    </Link>
                </div>

                <div className="text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} May Ben Harush. כל הזכויות שמורות.</p>
                    <p className="flex items-center justify-center gap-1 mt-2">
                        נבנה באהבה <Heart size={12} className="fill-red-400 text-red-400" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
