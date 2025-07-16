# Product Requirements Document (PRD) for Seasons International Education Consultancy Website

## 1. Overview
This PRD outlines the requirements for a responsive static website for Seasons International Education Consultancy, built using pure HTML, CSS, and JavaScript. The website will consist of three pages—Home, About, and Contact—featuring reusable navbar and footer components, parallax effects, and engaging motion animations. The design will be inspired by [Step by Step Nepal](https://stepbystepnepal.com/) but enhanced with modern aesthetics, improved usability, and dynamic visual effects. The site will prioritize responsiveness, accessibility, and a professional look aligned with the consultancy’s brand identity.

## 2. Objectives
- Create a visually appealing and luxurious looking, responsive static website to showcase Seasons International Education Consultancy’s services.
- Implement reusable navbar and footer components using vanilla JavaScript for consistency across pages.
- Incorporate parallax scrolling and smooth motion animations to enhance user engagement.
- Ensure the website is fully responsive across devices (mobile, tablet, desktop).
- Provide a user-friendly contact page with contact details, a Google Map, and a functional contact form.
- Align the design with the provided color palette and brand identity, improving upon the inspiration site’s aesthetics.

## 3. Target Audience
- Prospective students seeking international education opportunities.
- Parents and guardians exploring consultancy services.
- Educational institutions and partners looking for collaboration.
- General visitors seeking information about the consultancy.

## 4. Functional Requirements

### 4.1 Pages
The website will consist of three pages:
1. **Home Page**
   - Hero section with a full-width background image, parallax scrolling, and a call-to-action (CTA) button (e.g., "Explore Services").
   - Overview of services with animated card components that slide in on scroll.
   - Testimonials section with a carousel effect for client reviews.
   - Brief introduction to the consultancy with a CTA linking to the About page.
2. **About Page**
   - Mission and vision statement with a parallax background.
   - Team section with animated profile cards (e.g., fade-in effect on scroll).
   - Company history timeline with motion effects (e.g., elements slide in from the side).
3. **Contact Page**
   - Contact details (phone, email, address) displayed prominently.
   - Embedded Google Map showing the consultancy’s office location.
   - Contact form with fields for name, email, phone, subject, and message.
   - Form submission handled via JavaScript (e.g., basic validation and console logging for static site purposes).

### 4.2 Components
- **Navbar Component** (JavaScript-based Web Component)
  - Sticky navigation bar with links to Home, About, and Contact.
  - Responsive design: hamburger menu for mobile devices.
  - Smooth scroll behavior for internal links.
  - Highlight active page link with a subtle animation (e.g., underline effect).
- **Footer Component** (JavaScript-based Web Component)
  - Includes company logo, contact information, social media links, and quick links to main pages.
  - Consistent across all pages with a responsive layout.
- **Parallax and Motion Effects**
  - Parallax scrolling on hero sections and backgrounds using CSS (e.g., `background-attachment: fixed` or JavaScript-based scroll offset).
  - Smooth animations for cards, buttons, and other elements using CSS transitions and keyframe animations (e.g., slide-in, fade-in, scale effects).
  - Intersection Observer API for triggering animations when elements enter the viewport.

### 4.3 Technical Requirements
- **Technologies**: Pure HTML, CSS, and JavaScript (no frameworks like React).
- **Responsiveness**: Fully responsive design using CSS media queries, flexbox, and grid.
- **Browser Compatibility**: Compatible with modern browsers (Chrome, Firefox, Safari, Edge).
- **Accessibility**: Follow WCAG 2.1 guidelines (e.g., proper ARIA labels, keyboard navigation, sufficient color contrast).
- **Performance**: Optimize images, minify CSS/JavaScript, and ensure fast load times.
- **SEO**: Include meta tags, alt text for images, and semantic HTML for better search engine visibility.

## 5. Design Requirements

### 5.1 Color Palette
- **Primary Color**: #142D53 (used for headers, buttons, and accents)
- **Secondary Shades**:
  - Darker: #132B4F (backgrounds, hover states)
  - Lighter: #1D4076 (subtle accents, secondary buttons)
- **Alternate Gray**: #C5CBD3 (text, backgrounds)
- **Lighter Gray**: #EAEBEC (margins, section dividers)

### 5.2 Typography
- Use Google Fonts (e.g., Roboto or Open Sans) for clean, professional typography.
- Font sizes:
  - Headings: 2.5rem (h1), 2rem (h2), 1.5rem (h3)
  - Body: 1rem
  - Small text (footer, captions): 0.875rem
- Ensure sufficient contrast against background colors.

### 5.3 Visual Style
- **Parallax Effects**: Smooth scrolling backgrounds in hero and section dividers, inspired by modern designs but more refined than the inspiration site.
- **Motion Animations**:
  - Slide-in effects for cards and images on scroll.
  - Hover animations for buttons (e.g., scale up, color transition).
  - Fade-in transitions for text and testimonials.
- **Layout**: Clean, modern design with ample white space, inspired by but more polished than Step by Step Nepal.

## 6. Content Requirements
- **Home Page**:
  - Hero: High-quality image of students or an educational setting with a tagline (e.g., “Your Path to Global Education”).
  - Services: 3–4 cards highlighting key services (e.g., university applications, visa assistance).
  - Testimonials: 3–5 client quotes in a carousel.
- **About Page**:
  - Mission/Vision: Brief text with a parallax background.
  - Team: 3–4 team member cards with photos, names, and roles.
  - Timeline: 4–5 milestones with animated entries.
- **Contact Page**:
  - Details: Phone, email, physical address.
  - Google Map: Embedded map with a pin at the consultancy’s location.
  - Form: Fields for name, email, phone, subject, message; basic client-side validation.

## 7. Inspiration Analysis
The inspiration site (Step by Step Nepal) has a clean layout but lacks dynamic animations and modern design elements. Improvements include:
- Smoother parallax effects with better performance.
- More engaging motion animations (e.g., staggered card animations).
- Cleaner typography and color consistency.
- Enhanced mobile experience with a responsive hamburger menu.
- Simplified navigation and more intuitive contact form layout.

## 8. Deliverables
- Three HTML files: `index.html` (Home), `about.html`, `contact.html`.
- CSS file: `styles.css` with responsive design, parallax, and animations.
- JavaScript file: `components.js` for navbar and footer Web Components.
- Assets folder: Images, icons, and fonts.
- Documentation: Brief setup instructions and code comments.

9. Success Metrics
Usability: 90% of users can navigate to all pages and submit the contact form without errors.
Performance: Page load time under 2 seconds on a standard 4G connection.
Engagement: Average session duration of at least 2 minutes.
Responsiveness: No layout issues across devices (tested on Chrome, Firefox, Safari).

10. Assumptions and Constraints
Assumptions:
High-quality images and content will be provided by the client.
Google Maps API key will be available for embedding the map.
Constraints:
No server-side processing (static site only).
Limited to pure HTML, CSS, and JavaScript.
Integrate a third-party form service (Web3Forms) for contact form submissions.