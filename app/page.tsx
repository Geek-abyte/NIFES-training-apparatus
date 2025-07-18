import Hero from '@/components/Hero'
import CourseOverview from '@/components/CourseOverview'
import WeeklyBreakdown from '@/components/WeeklyBreakdown'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseOverview />
      <WeeklyBreakdown />
      <CTA />
    </div>
  )
}
