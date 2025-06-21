# NIFES Web Development Course Website

A comprehensive Next.js website for a 4-week web development course curriculum, featuring detailed lessons, step-by-step guides, examples, and student showcase.

## Features

- **Complete Course Curriculum**: 4-week structured program from beginner to portfolio-ready
- **Interactive Lessons**: Step-by-step tutorials with code examples and practical exercises
- **Student Showcase**: Gallery of completed projects from course graduates
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Professional UI/UX**: Clean, elegant design focused on user experience

## Course Structure

### Week 1: HTML & CSS Foundations
- Day 1: HTML Essentials (Tags, elements, structure)
- Day 2: CSS Basics (Styling, box model, selectors)
- Day 3: Flexbox Layout (Layout with Flexbox)
- **Project**: Profile Homepage

### Week 2: JavaScript Basics
- Day 1: Syntax & Variables (DOM intro, console.log)
- Day 2: Events & Functions (Event listeners, if-else logic)
- Day 3: Loops & Objects (Arrays, DOM manipulation)
- **Project**: Interactive About Me

### Week 3: Responsive Design + Git
- Day 1: Media Queries (Mobile responsiveness)
- Day 2: Git & GitHub (Push code, deploy site)
- Day 3: Multi-Page Sites (Link HTML pages)
- **Project**: Responsive Multi-Page Portfolio

### Week 4: Forms + Final Project
- Day 1: Forms (Input, validation)
- Day 2: Polish with JS & CSS (Validation, transitions)
- Day 3: Final Integration (Review, deploy)
- **Project**: Complete Portfolio Website

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Code Highlighting**: React Syntax Highlighter

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── curriculum/          # Course curriculum page
│   ├── lessons/            # All lesson pages
│   │   ├── week-1/        # Week 1 lessons
│   │   ├── week-2/        # Week 2 lessons
│   │   ├── week-3/        # Week 3 lessons
│   │   └── week-4/        # Week 4 lessons
│   ├── showcase/          # Student project showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── CourseOverview.tsx
│   ├── WeeklyBreakdown.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── public/               # Static assets
```

## Key Features

### Homepage
- Hero section with course overview
- Weekly breakdown of curriculum
- Student testimonials
- Call-to-action sections

### Curriculum Page
- Detailed course overview
- Learning objectives for each week
- Daily lesson breakdowns
- Project descriptions

### Lessons
- Interactive lesson pages
- Code examples with syntax highlighting
- Practical exercises
- Step-by-step instructions
- Navigation between lessons

### Showcase
- Student project gallery
- Live project previews
- GitHub repository links
- Success stories

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Lessons

1. Create a new folder in `app/lessons/week-x/day-x/`
2. Add a `page.tsx` file with the lesson content
3. Include code examples, exercises, and navigation
4. Update the lesson index pages as needed

### Customization

The website is built with Tailwind CSS for easy customization:

- **Colors**: Update the color palette in `tailwind.config.js`
- **Typography**: Modify font settings and text styles
- **Components**: Customize component styles in individual files

## Final Deliverables

Upon completion of the course, students will have:

- ✅ **Hosted responsive portfolio** - Live website deployed on GitHub Pages
- ✅ **Understanding of HTML, CSS, JS, Git** - Solid foundation in core technologies
- ✅ **Confident foundation in web development** - Ready for advanced topics and frameworks

## Support

For questions or support, please contact:
- Email: contact@nifes.edu
- GitHub: [NIFES Training Repository](https://github.com/nifes)

---

Built with ❤️ for aspiring web developers
