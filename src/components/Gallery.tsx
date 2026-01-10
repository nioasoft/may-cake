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
    
    // קוטר 14 נמוך - filter images containing "נמוך" or "נמוכה", plus specific images
    if (manifest['קוטר 14']) {
        const lowImages = filterImagesByPattern(manifest['קוטר 14'], ['נמוך', 'נמוכה']);
        // Add specific images that should appear in נמוך category
        const specificLowImages = manifest['קוטר 14'].filter(img => 
            img.includes('WhatsApp Image 2026-01-05 at 22.46.01')
        );
        virtual['קוטר 14 נמוך'] = [...lowImages, ...specificLowImages];
    }
    
    // קוטר 14 גבוה - filter images containing "גבוה" or "גבוהה", plus specific images
    if (manifest['קוטר 14']) {
        const highImages = filterImagesByPattern(manifest['קוטר 14'], ['גבוה', 'גבוהה']);
        // Add specific images that should appear in גבוה category
        const specificHighImages = manifest['קוטר 14'].filter(img => 
            img.includes('1c5a6238-c293-4976-860e-ca255010a590') || 
            img.includes('2bcce2d9-9c29-410e-a7dc-1753936cfe09') ||
            img.includes('5a343e01-26d3-47ef-b987-bb7ad9224fc5') ||
            img.includes('5ba5e0a9-17bf-4921-bb14-45117e2260eb') ||
            img.includes('61570eb7-ca8d-419e-b175-d29a99b6c815') ||
            img.includes('8fc9a160-1e05-4fb4-b4f7-764d8dc3ff1b') ||
            img.includes('97753073-5d3a-4fce-9251-cf1d50b1f119') ||
            img.includes('ac310840-dd67-4c83-91ce-2f967c098507') ||
            img.includes('b6e98a5c-fdbe-4b9c-b5c0-d335f3b80a29') ||
            img.includes('c29cfaef-472b-4762-bdb3-75d3f2343936') ||
            img.includes('c5cce317-422e-4f92-83c0-2af2d10eadf8') ||
            img.includes('dba38229-097b-4f04-89cb-e430d1197467') ||
            img.includes('dd7311ef-7e12-40ce-ba3a-5d518a490dad') ||
            img.includes('f64468a8-35a5-425c-a49a-1bbcdff87b13')
        );
        virtual['קוטר 14 גבוה'] = [...highImages, ...specificHighImages];
    }
    
    // קוטר 16 נמוך - if there are low images (currently only high exists)
    if (manifest['קוטר 16']) {
        const lowImages = filterImagesByPattern(manifest['קוטר 16'], ['נמוך', 'נמוכה']);
        // Add specific images that should appear in נמוך category
        const specificLowImages = manifest['קוטר 16'].filter(img => 
            img.includes('1064dff9-63c6-4fb3-a64f-c4b7d885e443')
        );
        virtual['קוטר 16 נמוך'] = [...lowImages, ...specificLowImages];
    }
    
    // קוטר 16 גבוה - filter images containing "גבוה" or "גבוהה", plus specific images
    if (manifest['קוטר 16']) {
        const highImages = filterImagesByPattern(manifest['קוטר 16'], ['גבוה', 'גבוהה']);
        // Add specific images that should appear in גבוה category
        const specificHighImages = manifest['קוטר 16'].filter(img => 
            img.includes('2085f2bc-9de7-4d8e-bc15-ce9ecfc82d9f') ||
            img.includes('3e9fa625-709b-4372-8fef-f3e5bf3f908c') ||
            img.includes('6f48bade-57ea-49ae-bde6-f49ed4df3b0b') ||
            img.includes('73960505-a54c-4b8f-bd56-88b86f2f00c0') ||
            img.includes('f188558e-d869-4210-a5d9-23ed1b61e854') ||
            img.includes('ffae7bca-f778-4f69-93ea-bea6b3b55132') ||
            img.includes('WhatsApp Image 2026-01-05 at 22.46.08')
        );
        virtual['קוטר 16 גבוה'] = [...highImages, ...specificHighImages];
    }
    
    // קוטר 20 נמוך - filter images containing "נמוך" or "נמוכה", plus specific images
    if (manifest['קוטר 20']) {
        const lowImages = filterImagesByPattern(manifest['קוטר 20'], ['נמוך', 'נמוכה']);
        // Add specific images that should appear in נמוך category
        const specificLowImages = manifest['קוטר 20'].filter(img => 
            img.includes('WhatsApp Image 2026-01-05 at 22.46.00')
        );
        virtual['קוטר 20 נמוך'] = [...lowImages, ...specificLowImages];
    }
    
    // קוטר 20 גבוה - filter images containing "גבוה" or "גבוהה", plus specific images
    if (manifest['קוטר 20']) {
        const highImages = filterImagesByPattern(manifest['קוטר 20'], ['גבוה', 'גבוהה']);
        // Add specific images that should appear in גבוה category
        const specificHighImages = manifest['קוטר 20'].filter(img => 
            img.includes('20 גבוהה') ||
            img.includes('מוס קוטר 20 לב') ||
            img.includes('מוס קוטר 20 שוקולדים') ||
            img.includes('עוגה קוטר 20 גבוהה') ||
            img.includes('קוטר 20 - 2')
        );
        virtual['קוטר 20 גבוה'] = [...highImages, ...specificHighImages];
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
    
    // Ensure all categories from CATEGORY_LABELS exist in extendedManifest (even if empty)
    Object.keys(CATEGORY_LABELS).forEach(cat => {
        if (!extendedManifest[cat]) {
            extendedManifest[cat] = [];
        }
    });
    
    // Get all categories that exist in manifest or virtual categories and have a label
    const allCategories = Object.keys(extendedManifest).filter(cat => {
        // Check if category has label and exists (can be empty)
        return CATEGORY_LABELS[cat] && extendedManifest[cat] !== undefined;
    });
    
    // Sort categories according to CATEGORY_ORDER
    const categories = CATEGORY_ORDER.filter(cat => allCategories.includes(cat));
    const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '');

    // Get all images from all base categories (excluding virtual categories to avoid duplicates)
    const getAllImages = (): string[] => {
        const allImages: string[] = [];
        // Get all images from original manifest (not virtual categories)
        Object.keys(manifest).forEach(cat => {
            if (manifest[cat] && manifest[cat].length > 0) {
                allImages.push(...manifest[cat]);
            }
        });
        return allImages;
    };

    // Flatten images for current category
    const images = activeCategory === 'הכל' 
        ? getAllImages() 
        : (activeCategory ? extendedManifest[activeCategory] || [] : []);

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
                    <Button
                        variant={activeCategory === 'הכל' ? 'primary' : 'outline'}
                        onClick={() => setActiveCategory('הכל')}
                        className="rounded-full px-6"
                        size="sm"
                    >
                        הכל
                    </Button>
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
                                    alt={activeCategory === 'הכל' ? 'תמונה מהגלריה' : (CATEGORY_LABELS[activeCategory] || 'Cake')}
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
