# Darshan Jariwala — Personal Portfolio & WMS Case Study

A production-grade, dark-themed personal portfolio web application built for **Darshan Jariwala** (Software Developer & First-Year MCA Student at Veer Narmad South Gujarat University - VNSGU).

Designed specifically for job applications and software engineering opportunities, this portfolio communicates practical industry experience—most notably full-stack development work on an enterprise **Warehouse Management System (WMS)** at **Digital Dreams Infotech**.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18-cyan.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4.svg)

---

## 🌟 Key Features

### 1. **Dark Visual System & Editorial Aesthetics**
- Engineered with a deep charcoal background palette (`#07090e`, `#0d111a`, `#111622`), off-white typography (`#F8FAFC`), and a restrained emerald/teal accent system (`#10b981`).
- Strictly avoids generic AI clichés (no glowing blobs, neon cyberpunk styling, cartoon vectors, or fake metrics).

### 2. **Interactive System Architecture Visualization**
- Features a live client-server data pipeline graphic (`SystemArchitectureVisual.tsx`) simulating data packet flow between the **React + TS Client**, **FastAPI Backend Services**, and **PostgreSQL Database Engine**.
- Interactive node inspection cards detail state management, UOM conversion logic, and database schemas.

### 3. **Featured WMS Case Study Deep-Dive**
- Large hero case study card detailing the **Warehouse Management System (WMS)** built at Digital Dreams Infotech.
- Comprehensive interactive modal structured into 9 core sections:
  1. **Overview & Scope**
  2. **Problem Statement** (Legacy operational friction & manual inventory discrepancies)
  3. **Engineered Solution** (Deterministic task automation)
  4. **Architecture Diagram** (React Client → REST APIs → FastAPI Microservice → PostgreSQL)
  5. **Core WMS Modules** (Inbound: ASN, GRN, Inspection, Directed Putaway; Outbound & Storage: Inventory, Replenishment, Pick lists, Packing)
  6. **6 Operator Roles & Workflows** (Admin, GRN Manager, Inspection Worker, Putaway Worker, Picker, Packer)
  7. **Technical Challenges** (UOM unit conversions, optimistic UI updates vs database transaction locks)
  8. **Exact Engineering Deliverables & Contributions**
  9. **Production Outcome**

### 4. **ATS Arial Resume Modal & PDF Print Support**
- Interactive online resume viewer formatted in the exact single-column **ATS resume template** in **Arial font**.
- Integrated `@media print` stylesheet so clicking **"Print / Download PDF"** prints a clean, single-page white resume document without browser clutter.

### 5. **Categorized Stack & Engineering Pillars**
- Categorized technical capabilities (Frontend, Backend, Database, Engineering Tools).
- 4 Core Engineering Pillars (Full-Stack Applications, Backend Services, Business Software, Problem Solving & Debugging).
- Clean Academic section highlighting ongoing **MCA studies at VNSGU** and completed **BCA**.

### 6. **Direct Contact Integration**
- Minimal contact form with input validation and submission feedback.
- One-click "Copy Email" action button with toast notification feedback.

---

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Icons**: Lucide React (`lucide-react`) & Custom SVG Icons
- **Fonts**: Inter (Body/UI) & JetBrains Mono (Code/Nodes) & Arial (ATS Resume)
- **State & Data**: Structured TypeScript interfaces & data controllers (`src/data/portfolioData.ts`)

---

## 📁 Repository Structure

```
portfolio/
├── index.html                           # SEO meta tags, title, Open Graph metadata, fonts
├── package.json                         # Dependencies & scripts
├── vite.config.ts                       # Vite configuration with @tailwindcss/vite
├── src/
│   ├── main.tsx                         # React root entry point
│   ├── App.tsx                          # App container & modal state management
│   ├── index.css                        # Design system tokens, print stylesheet, grid patterns
│   ├── data/
│   │   └── portfolioData.ts             # Structured content for bio, experience, WMS, skills, certs
│   ├── types/
│   │   └── index.ts                     # TypeScript definitions for projects, modules, roles
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky responsive header with mobile drawer
│   │   ├── Footer.tsx                   # Clean footer with quick links & copyright
│   │   ├── SystemArchitectureVisual.tsx # Interactive Hero architecture data-flow graphic
│   │   ├── CaseStudyModal.tsx           # 9-section WMS deep-dive case study modal
│   │   ├── ResumeViewerModal.tsx        # ATS Arial Resume previewer & PDF print renderer
│   │   ├── SocialIcons.tsx              # Clean SVG icons for GitHub and LinkedIn
│   │   └── ToastNotification.tsx        # Toast feedback component
│   └── sections/
│       ├── HeroSection.tsx              # Hero headline, tech pills, CTAs, architecture diagram
│       ├── AboutSection.tsx             # Professional intro & VNSGU MCA background
│       ├── ExperienceSection.tsx        # Digital Dreams Infotech WMS developer history
│       ├── ProjectsSection.tsx          # Featured WMS hero card & secondary projects grid
│       ├── SkillsSection.tsx            # Categorized tech stack grid
│       ├── EngineeringFocusSection.tsx  # 4 core engineering focus pillars
│       ├── EducationSection.tsx         # VNSGU MCA & BCA details + Google UX Cert
│       └── ContactSection.tsx           # Contact form, direct links, and copy email action
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darshan090/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready static assets will be compiled into the `dist/` directory.

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## ✏️ Customization & Updating Content

All portfolio content is data-driven and stored in [`src/data/portfolioData.ts`](file:///c:/Users/darsh/OneDrive/Desktop/portfolio/src/data/portfolioData.ts):

- **Hero & Contact**: Update `HERO_DATA` (Name, headline, email, LinkedIn/GitHub links).
- **Work Experience**: Update `EXPERIENCE_DATA` array (Role, company, location, achievements).
- **WMS Project**: Update `FEATURED_WMS_PROJECT` (Overview, modules, user roles, contributions).
- **Skills**: Edit `SKILL_CATEGORIES` (Frontend, Backend, Database, Tools).
- **Education & Certifications**: Edit `EDUCATION_DATA` and `CERTIFICATIONS_DATA`.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 👤 Author

**Darshan Jariwala**
- **Role**: Software Developer · WMS Developer
- **Education**: Master of Computer Applications (MCA) — 1st Year at Veer Narmad South Gujarat University (VNSGU)
- **Location**: Surat, Gujarat, India
- **Email**: [darshanjariwala090@gmail.com](mailto:darshanjariwala090@gmail.com)
- **LinkedIn**: [linkedin.com/in/darshan-jariwala-901541317](https://www.linkedin.com/in/darshan-jariwala-901541317)
- **GitHub**: [github.com/darshan090](https://github.com/darshan090)
