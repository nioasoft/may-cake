'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[var(--primary)] mb-8">
                        נעים להכיר, מאי בן הרוש
                    </h2>
                    <div className="text-lg leading-relaxed text-[var(--foreground)] space-y-4">
                        <p>
                            היי, אני מאי, קונדיטורית שאוהבת את המטבח ואת היצירה שבו.
                            התחלתי את העסק שלי ממכירת עוגיות אמסטרדם - מתכון שמלווה אותי כבר 4 שנים והפך לסימן ההיכר שלי.
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
        </section>
    );
}
