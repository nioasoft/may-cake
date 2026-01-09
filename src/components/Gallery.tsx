'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

type GalleryProps = {
    manifest: Record<string, string[]>;
};

// Map folder names to display names
const CATEGORY_LABELS: Record<string, string> = {
    'בנטו קוטר 10': 'בנטו',
    'מארזים': 'מארזים',
    'עוגות כללי': 'מיוחדות',
    'עוגות מספרים': 'מספרים',
    'עוגות קומות': 'קומות',
    'עוגת גן': 'גן',
    'קוטר 14': 'קוטר 14',
    'קוטר 16': 'קוטר 16',
    'קוטר 20': 'קוטר 20',
    'מאי קייק כללי': 'אווירה',
    'שולחנות קינוחים': 'שולחנות קינוחים',
};

export default function Gallery({ manifest }: GalleryProps) {
    const categories = Object.keys(manifest).filter(cat => CATEGORY_LABELS[cat]);
    const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');

    // Flatten images for current category
    const images = activeCategory ? manifest[activeCategory] || [] : [];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">הגלריה שלי</h2>
                    <p className="text-gray-500">טעימות קטנות מהיצירות שלי</p>
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12" dir="rtl">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? 'primary' : 'outline'}
                            onClick={() => setActiveCategory(cat)}
                            className="rounded-full px-6"
                            size="sm"
                        >
                            {CATEGORY_LABELS[cat]}
                        </Button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode='popLayout'>
                        {images.map((src, index) => (
                            <motion.div
                                key={src}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer group"
                            >
                                <Image
                                    src={src}
                                    alt={CATEGORY_LABELS[activeCategory] || 'Cake'}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {images.length === 0 && (
                    <p className="text-center text-gray-400">אין תמונות בקטגוריה זו כרגע.</p>
                )}
            </div>
        </section>
    );
}
