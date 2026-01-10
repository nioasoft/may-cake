'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Workshop() {
    return (
        <section id="workshop" className="py-20 bg-[#FFF0F5] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <motion.div
                    className="flex-1 text-center md:text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[var(--foreground)] mb-6">
                        הסדנה הדיגיטלית שלי
                    </h2>
                    <h3 className="text-2xl font-medium text-[var(--primary)] mb-4">
                        עוגיות אמסטרדם ומגולגלות קינדר
                    </h3>
                    <p className="text-lg text-[var(--foreground)] mb-8 leading-relaxed">
                        רוצים ללמוד להכין את עוגיות האמסטרדם המושלמות עם פרלין שנשאר נוזלי?
                        ומגולגלות קינדר משורטטות שנמסות בפה?
                        <br />
                        בסדנה הזו אני מלמדת את כל הסודות, הטיפים והטכניקות שצברתי במשך שנים.
                        <br />
                        מתאים גם למתחילים ללא ידע קודם!
                    </p>

                    <ul className="text-right space-y-2 mb-8 inline-block text-[var(--foreground)]">
                        <li>✨ מתכון מקורי ומנצח</li>
                        <li>✨ עבודה נכונה עם בצק פריך</li>
                        <li>✨ טכניקות הקפאה ושימור</li>
                        <li>✨ גישה לכל החיים</li>
                    </ul>

                    <div className="block">
                        <Link href="https://my.schooler.biz/s/86460/1734345036844" target="_blank">
                            <Button size="lg" className="animate-pulse shadow-xl hover:shadow-2xl transition-all">
                                לרכישת הסדנה ופרטים נוספים
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Image Placeholder - Could use a specific workshop image if known, otherwise generic sweet image */}
                <motion.div
                    className="flex-1 relative aspect-video w-full md:w-auto rounded-2xl overflow-hidden shadow-2xl skew-y-3 bg-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Using one of the "Pack" or "General" images as placeholder for workshop */}
                    <div className="absolute inset-0 bg-[url('/images/מאי%20קייק%20כללי/5d234727-21f7-48b8-b5aa-79a9ab01a735.JPG.webp')] bg-cover bg-top"></div>
                </motion.div>
            </div>
        </section>
    );
}
