'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[var(--background)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative flex justify-center"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/may.webp"
                                alt="May Ben Harush"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-center md:text-right"
                    >
                        <h2 className="text-4xl font-bold text-[var(--primary)] mb-8 font-dancing">
                            נעים להכיר,<br />מאי בן הרוש
                        </h2>
                        <div className="text-lg leading-relaxed text-[var(--foreground)] space-y-4">
                            <p>
                                היי, אני מאי, קונדיטורית שאוהבת את המטבח ואת היצירה שבו.
                                התחלתי את העסק שלי ממכירת עוגיות אמסטרדם בתקופת הקורונה - מתכון שמלווה אותי כבר שש שנים והפך לסימן ההיכר שלי.
                            </p>
                            <p>
                                לאחר המון ניסיונות ודיוקים, הגעתי לתוצאות שאני הכי גאה בהן.
                                היום אני יוצרת עוגות מעוצבות, מארזים מתוקים ועוגות לכל חגיגה.
                            </p>
                            <p>
                                מעבר לאפייה, אני מעבירה סדנאות דיגיטליות ומלמדת את הסודות שלי -
                                כדי שגם אתם תצליחו להכין בבית קינוחים מושלמים, בדיוק כמו בקונדיטוריה.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
