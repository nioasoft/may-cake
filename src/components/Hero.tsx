'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    // Using one of the general images as background - ensure this file exists or swap it
                    backgroundImage: "url('/images/מאי קייק כללי/0621683e-3f2e-4cb9-a3aa-15e6220d4f38.JPG.webp')"
                }}
            >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold text-[var(--foreground)] mb-6 drop-shadow-sm font-dancing">
                        May Ben Harush
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] mb-8 tracking-wide">
                        קונדיטורית | עוגות מעוצבות | סדנאות אפייה
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#gallery">
                            <Button size="lg" className="shadow-lg hover:scale-105 transition-transform">
                                לגלרייה
                            </Button>
                        </Link>
                        <Link href="#workshop">
                            <Button variant="outline" size="lg" className="bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 shadow-lg border-none hover:scale-105 transition-transform">
                                לסדנאות
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
