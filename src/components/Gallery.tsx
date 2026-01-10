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
    'בנטו קוטר 10': 'עוגות בנטו',
    'קוטר 12': 'קוטר 12',
    'קוטר 14 נמוך': 'קוטר 14 נמוך',
    'קוטר 14 גבוה': 'קוטר 14 גבוה',
    'קוטר 16 נמוך': 'קוטר 16 נמוך',
    'קוטר 16 גבוה': 'קוטר 16 גבוה',
    'קוטר 20 נמוך': 'קוטר 20 נמוך',
    'קוטר 20 גבוה': 'קוטר 20 גבוה',
    'קוטר 22': 'קוטר 22',
    'עוגות מספרים': 'עוגת מספרים ואותיות בצק שקדים',
    'עוגות קומות': 'עוגות חתן כלה וקומות',
    'עוגת גן': 'עוגות גן',
    'עוגיות ועוגות לסופש וחגים': 'עוגיות ועוגות לסופש וחגים',
    'זרי פרחים אכילים': 'זרי פרחים אכילים',
    'סדנאות אפיה ליום הולדת או כל חגיגה': 'סדנאות אפיה ליום הולדת או כל חגיגה',
    'שולחנות קינוחים': 'שולחנות קינוחים',
    'מאי קייק כללי': 'צילומי תדמית',
};

// Helper function to filter images by filename pattern
const filterImagesByPattern = (images: string[], pattern: string[]): string[] => {
    return images.filter(img => pattern.some(p => img.toLowerCase().includes(p.toLowerCase())));
};

// Create virtual categories by filtering images from base folders
const createVirtualCategories = (manifest: Record<string, string[]>): Record<string, string[]> => {
    const virtual: Record<string, string[]> = {};
    
    // קוטר 14 נמוך - filter images containing "נמוך" or "נמוכה"
    if (manifest['קוטר 14']) {
        virtual['קוטר 14 נמוך'] = filterImagesByPattern(manifest['קוטר 14'], ['נמוך', 'נמוכה']);
    }
    
    // קוטר 14 גבוה - filter images containing "גבוה" or "גבוהה", plus specific images
    if (manifest['קוטר 14']) {
        const highImages = filterImagesByPattern(manifest['קוטר 14'], ['גבוה', 'גבוהה']);
        // Add specific images that should appear in גבוה category
        const specificHighImages = manifest['קוטר 14'].filter(img => 
            img.includes('1c5a6238-c293-4976-860e-ca255010a590') || 
            img.includes('2bcce2d9-9c29-410e-a7dc-1753936cfe09') ||
            img.includes('5a343e01-26d3-47ef-b987-bb7ad9224fc5') ||
            img.includes('5ba5e0a9-17bf-4921-bb14-45117e2260eb')
        );
        virtual['קוטר 14 גבוה'] = [...highImages, ...specificHighImages];
    }
    
    // קוטר 16 נמוך - if there are low images (currently only high exists)
    if (manifest['קוטר 16']) {
        virtual['קוטר 16 נמוך'] = filterImagesByPattern(manifest['קוטר 16'], ['נמוך', 'נמוכה']);
    }
    
    // קוטר 16 גבוה - filter images containing "גבוה" or "גבוהה"
    if (manifest['קוטר 16']) {
        virtual['קוטר 16 גבוה'] = filterImagesByPattern(manifest['קוטר 16'], ['גבוה', 'גבוהה']);
    }
    
    // קוטר 20 נמוך - filter images containing "נמוך" or "נמוכה"
    if (manifest['קוטר 20']) {
        virtual['קוטר 20 נמוך'] = filterImagesByPattern(manifest['קוטר 20'], ['נמוך', 'נמוכה']);
    }
    
    // קוטר 20 גבוה - filter images containing "גבוה" or "גבוהה"
    if (manifest['קוטר 20']) {
        virtual['קוטר 20 גבוה'] = filterImagesByPattern(manifest['קוטר 20'], ['גבוה', 'גבוהה']);
    }
    
    return virtual;
};

// Define the order of categories
const CATEGORY_ORDER = [
    'בנטו קוטר 10',
    'קוטר 12',
    'קוטר 14 נמוך',
    'קוטר 14 גבוה',
    'קוטר 16 נמוך',
    'קוטר 16 גבוה',
    'קוטר 20 נמוך',
    'קוטר 20 גבוה',
    'קוטר 22',
    'עוגות מספרים',
    'עוגות קומות',
    'עוגת גן',
    'עוגיות ועוגות לסופש וחגים',
    'זרי פרחים אכילים',
    'סדנאות אפיה ליום הולדת או כל חגיגה',
    'שולחנות קינוחים',
    'מאי קייק כללי',
];

export default function Gallery({ manifest }: GalleryProps) {
    // Create virtual categories for filtered views
    const virtualCategories = createVirtualCategories(manifest);
    // Merge manifest with virtual categories
    const extendedManifest = { ...manifest, ...virtualCategories };
    
    // Get all categories that exist in manifest or virtual categories
    const allCategories = Object.keys(extendedManifest).filter(cat => {
        // Check if category has label and has images
        return CATEGORY_LABELS[cat] && extendedManifest[cat] && extendedManifest[cat].length > 0;
    });
    
    // Sort categories according to CATEGORY_ORDER
    const categories = CATEGORY_ORDER.filter(cat => allCategories.includes(cat));
    const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');

    // Flatten images for current category
    const images = activeCategory ? extendedManifest[activeCategory] || [] : [];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">הגלריה שלי</h2>
                    <p className="text-gray-500">טעימה קטנה מהיצירות שלי</p>
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
