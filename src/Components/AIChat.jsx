import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiX, FiSend, FiCpu } from 'react-icons/fi'
import './AIChat.css'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Namaste! I'm Sachin's AI assistant. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const detectHindi = (text) => {
    const hindiRegex = /[\u0900-\u097F]/;
    const lowerText = text.toLowerCase();
    const hindiPhrases = [
      'sachin kaun hai', 'bare mein batao', 'kya karta hai', 'projects dikhao', 
      'contact number do', 'email address do', 'kahan rehta hai', 'kya janta hai',
      'kaise ho', 'namaste', 'bataiye', 'puchna hai', 'hunar', 'kaam', 'milna'
    ];
    // Only detect as Hindi if it has Devanagari or matches specific phrases
    return hindiRegex.test(text) || hindiPhrases.some(phrase => lowerText.includes(phrase));
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMsg = { role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    const currentInput = input;
    setInput('')
    setIsTyping(true)

    const isHindi = detectHindi(currentInput);

    // Mock AI response
    setTimeout(() => {
      const lowerInputStr = currentInput.toLowerCase();
      let aiResponse = "";

      const sachinInfo = {
        name: "Sachin Kumar (Bhaskar)",
        role: "Senior MERN Stack Developer",
        experience: "1.5+ years of professional experience (plus learning since 2022)",
        projects: [
          "E-Commerce Platform (MERN)",
          "Real Estate Platform (Next.js & Prisma)",
          "Task Management System (TypeScript & Firebase)",
          "Social Media Analytics Dashboard",
          "Weather Analytics Dashboard",
          "AI Chat Application"
        ],
        email: "skraj0451@gmail.com",
        phone: "+91 91353-21898",
        location: "Lucknow, India",
        skills: "React.js, Node.js, MongoDB, Express.js, TypeScript, Next.js, AWS, Docker, Redis, and Tailwind CSS",
        linkedin: "http://linkedin.com/in/sachin-bhaskar-659b1226a",
        github: "github.com/sachinkr-2003"
      };

      // 1. Contact Info Intent
      if (lowerInputStr.includes('contact') || lowerInputStr.includes('number') || lowerInputStr.includes('email') || 
          lowerInputStr.includes('phone') || lowerInputStr.includes('whatsapp') || lowerInputStr.includes('mobile') ||
          lowerInputStr.includes('sampark') || lowerInputStr.includes('milega') || lowerInputStr.includes('bija') || 
          lowerInputStr.includes('mail') || lowerInputStr.includes('linkedin') || lowerInputStr.includes('github')) {
        
        aiResponse = isHindi 
          ? `Aap Sachin se yahan sampark kar sakte hain:\n📧 Email: ${sachinInfo.email}\n📱 Whatsapp/Phone: ${sachinInfo.phone}\n🔗 LinkedIn: ${sachinInfo.linkedin}\n💻 GitHub: ${sachinInfo.github}`
          : `You can connect with Sachin via:\n📧 Email: ${sachinInfo.email}\n📱 Whatsapp/Phone: ${sachinInfo.phone}\n🔗 LinkedIn: ${sachinInfo.linkedin}\n💻 GitHub: ${sachinInfo.github}`;

      } 
      // 2. Projects Intent
      else if (lowerInputStr.includes('project') || lowerInputStr.includes('kaam') || lowerInputStr.includes('work') || 
               lowerInputStr.includes('portfolio') || lowerInputStr.includes('dikhao')) {
        
        const projectsList = sachinInfo.projects.join('\n• ');
        aiResponse = isHindi
          ? `Sachin ne 20 se zyada projects banaye hain. Kuch khaas projects ye hain:\n• ${projectsList}\n\nAap "Projects" section mein inka live demo bhi dekh sakte hain.`
          : `Sachin has built over 20 projects. Some of his top work includes:\n• ${projectsList}\n\nYou can see the live demos in the "Projects" section.`;

      } 
      // 3. Skills/Tech Intent
      else if (lowerInputStr.includes('skill') || lowerInputStr.includes('tech') || lowerInputStr.includes('hunar') || 
               lowerInputStr.includes('stack') || lowerInputStr.includes('know') || lowerInputStr.includes('janta')) {
        
        aiResponse = isHindi
          ? `Sachin MERN Stack specialist hain. Unka tech stack hai:\n🚀 ${sachinInfo.skills}.\n\nWo performant aur scalable web apps banane mein mahir hain.`
          : `Sachin is a MERN Stack specialist. His core technical stack includes:\n🚀 ${sachinInfo.skills}.\n\nHe excels at building performant and scalable web applications.`;

      } 
      // 4. Experience/About Intent (specific)
      else if (lowerInputStr.includes('experience') || lowerInputStr.includes('exp') || lowerInputStr.includes('junior') || 
               lowerInputStr.includes('senior') || lowerInputStr.includes('years') || lowerInputStr.includes('kab se')) {
        
        aiResponse = isHindi
          ? `Sachin ke paas ${sachinInfo.experience} hai. Unhone Freelance aur Enterprise clients ke liye Senior MERN Developer ke roop mein kaam kiya hai.`
          : `Sachin has ${sachinInfo.experience}. He has worked as a Senior MERN Developer for Freelance and Enterprise clients.`;

      }
      // 5. General "Who is Sachin?" or Broad "About"
      else if (lowerInputStr.includes('sachin') || lowerInputStr.includes('who') || lowerInputStr.includes('kau') || 
               lowerInputStr.includes('about') || lowerInputStr.includes('bare mein')) {
        
        aiResponse = isHindi
          ? `Sachin Kumar ek ${sachinInfo.role} hain jo Delhi se hain. Wo 2022 se web development mein hain aur ab tak 20+ clients ke liye behtareen solutions bana chuke hain.`
          : `Sachin Kumar is a ${sachinInfo.role} based in Delhi. Active in web development since 2022, he has delivered 20+ creative digital solutions for global clients.`;

      } 
      // 6. Greetings
      else if (lowerInputStr.includes('hi') || lowerInputStr.includes('hello') || lowerInputStr.includes('namaste') || 
               lowerInputStr.includes('hey') || lowerInputStr.includes('kaise ho')) {
        
        aiResponse = isHindi
          ? "Namaste! Main Sachin ka AI assistant hoon. Main unke projects, skills, aur contact details ke bare mein bata sakta hoon. Aap kya puchna chahenge?"
          : "Hello! I'm Sachin's AI assistant. I can help you with details about his projects, skills, and contact information. What would you like to know?";

      }
      // Fallback
      else {
        aiResponse = isHindi 
          ? "Maafi chahunga, mujhe samajh nahi aaya. Kya aap Sachin ke projects, skills, ya contact ke bare mein kuch puchna chahenge?"
          : "I'm sorry, I didn't quite catch that. Would you like to know about Sachin's projects, technical skills, or how to contact him?";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="ai-chat-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="ai-chat-window"
          >
            <div className="ai-chat-header">
              <div className="header-info">
                <div className="ai-avatar">
                  <FiCpu />
                </div>
                <div className="header-text">
                  <h3>AI Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="status-dot"></div>
                    <span className="text-[10px] text-gray-400">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-chat">
                <FiX size={20} />
              </button>
            </div>

            <div className="ai-chat-messages">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'ai' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`msg ${msg.role === 'ai' ? 'msg-ai' : 'msg-user'}`}
                >
                  {msg.content}
                </motion.div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-chat-input-area">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="send-btn">
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-bubble"
      >
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </motion.button>
    </div>
  )
}

export default AIChat
