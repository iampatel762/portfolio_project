import  { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Code, GraduationCap, Download, ChevronRight, Star } from 'lucide-react';
import profile from "./../public/IMG20250613125116.jpg"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'C++', 'C'],
    backend: ['Spring Boot', 'FastAPI', 'Django', 'Express'],
    frontend: ['React', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    databases: ['MySQL'],
    tools: ['Redux', 'Postman', 'VS Code', 'IntelliJ', 'GitHub', 'Git', 'JUnit'],
    libraries: ['NumPy', 'Pandas', 'Matplotlib']
  };

  const projects = [
    {
      title: 'Lingo-Test',
      subtitle: 'AI-based Language Learning Platform',
      period: 'Present',
      description: 'Seamless language learning through AI virtual communication',
      highlights: [
        'Built RESTful APIs for question banks and vocabulary systems',
        'Integrated Redux Toolkit for centralized state management',
        'Real-time calling with Whisper, ElevenLabs, and Groq APIs'
      ],
      tech: ['React', 'Node.js', 'Spring Boot', 'Redux', 'AI APIs']
    },
    {
      title: 'Ecommerce Electronics',
      subtitle: 'Full-stack E-commerce Application',
      period: '2024 - 2025',
      description: 'Complete online electronics store with payment integration',
      highlights: [
        'Complete frontend with cart, checkout, and authentication',
        'JWT authentication and role-based access control',
        'Integrated Razorpay/Stripe payment gateways'
      ],
      tech: ['React', 'Spring Boot', 'JWT', 'Razorpay', 'Stripe']
    },
    {
      title: 'Real-time Chat Application',
      subtitle: 'WebSocket-based Communication Platform',
      period: 'Present',
      description: 'Application with room and direct chatting features',
      highlights: [
        'Socket.io/WebSocket-based real-time communication',
        'Secure messaging with online presence updates',
        'Chat groups functionality'
      ],
      tech: ['Socket.io', 'WebSocket', 'Node.js', 'React']
    }
  ];

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                &lt;/&gt; Suraj Babu Patel
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative hover:text-cyan-400 transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* animating background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <Star size={16} className="text-cyan-400" />
                <span className="text-sm text-cyan-400">Available for Freelance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                  Suraj Babu Patel
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Full Stack Web Developer
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                I craft beautiful, scalable web applications with modern technologies. 
                Specializing in React, Spring Boot, and AI-powered solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center gap-2"
                >
                  View My Work
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all flex items-center gap-2">
                  <Download size={20} />
                  <a href='https://drive.google.com/file/d/14Krjq6Ob3BcdRPcEA71t5f2UQE790kOv/view?usp=sharing'>
                    Download CV
                  </a>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <a href="https://www.github.com/iampatel762" target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/suraj-b-patel-35860524b/" target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" color='skyblue' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://x.com/SurajbabuPatel2" target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" color='skyblue' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://www.instagram.com/_iampatel762" target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color='red' stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Glowing Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Profile Picture Container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                  {/* Placeholder for profile picture */}
                  
                  <img 
                    src={profile} 
                    alt="Suraj Babu Patel" 
                    className="w-full h-full object-cover"
                  />
                  
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-bounce">
                  <Code size={32} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-cyan-400">Full Stack Developer & Problem Solver</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Self-disciplined and results-driven Full Stack Web Developer with strong experience in designing, 
                developing, and deploying scalable web applications. I thrive on turning complex problems into 
                elegant solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Skilled in both frontend and backend technologies with the ability to lead teams, manage tasks 
                efficiently, and deliver quality software solutions. Strong communication, leadership, and 
                problem-solving abilities with a passion for writing clean, maintainable code.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={18} className="text-cyan-400" />
                    <span className="text-sm">Email</span>
                  </div>
                  <p className="text-white text-sm">patelsurajbabu762@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone size={18} className="text-cyan-400" />
                    <span className="text-sm">Phone</span>
                  </div>
                  <p className="text-white text-sm">+977-9706405772</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={18} className="text-cyan-400" />
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="text-white text-sm">Birgunj, Nepal</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <GraduationCap size={18} className="text-cyan-400" />
                    <span className="text-sm">Education</span>
                  </div>
                  <p className="text-white text-sm">Parul University</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Education</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white">Parul University</h5>
                    <p className="text-gray-400 text-sm">Computer Science and Engineering</p>
                    <p className="text-cyan-400 text-sm">CGPA: 7.78/10 • 2022 - 2026</p>
                  </div>
                  <div className="h-px bg-white/10"></div>
                  <div>
                    <h5 className="font-semibold text-white">Nepal Police School, Sanga</h5>
                    <p className="text-gray-400 text-sm">+2 (PCM)</p>
                    <p className="text-cyan-400 text-sm">GPA: 3.43/4.0 • 2019 - 2021</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Languages</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['English', 'Hindi', 'Nepali', 'Bhojpuri'].map((lang) => (
                    <div key={lang} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{lang} - Fluent</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-2xl p-6 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize text-cyan-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-lg text-sm transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-2xl p-8 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 italic">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <ChevronRight size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <Github size={24} />
              More Projects on GitHub
            </h3>
            <p className="text-gray-400 mb-4">Check out my other projects including:</p>
            <div className="flex flex-wrap gap-2">
              {['Task Manager', 'Microservices', 'Mental Health Counselling', 'Image Background Change', 
                'QR Code Generator', 'Blog Website', 'Weather Card', 'Quiz Contest', 'Password Generator', 
                'Text to Voice', 'To-Do List'].map((proj) => (
                <span key={proj} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-gray-300">
                  {proj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
            Let's create something amazing together!
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:patelsurajbabu762@gmail.com"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-2xl p-8 transition-all hover:transform hover:scale-105"
            >
              <Mail size={40} className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Email Me</h3>
              <p className="text-gray-400 text-sm">patelsurajbabu762@gmail.com</p>
            </a>

            <a
              href="tel:+977-9706405772"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 rounded-2xl p-8 transition-all hover:transform hover:scale-105"
            >
              <Phone size={40} className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Call Me</h3>
              <p className="text-gray-400 text-sm">+977-9706405772</p>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.github.com/iampatel762" className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/suraj-b-patel-35860524b/" className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://www.x.com/surajbabupatel2" className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/_iampatel762" className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/iampatel762" className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full transition-all transform hover:scale-110">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
