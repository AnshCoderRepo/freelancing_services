"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Download,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Check,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  Minus,
  Laptop,
  MessageSquare,
  Terminal,
  Folder,
  Code2,
  Wifi,
  Battery,
  Volume2,
  Search,
  MousePointer,
} from "lucide-react";

const DoubleCheckIcon = ({
  className = "w-3.5 h-3.5",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 16 11"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.045 0.584961L11.9883 1.52829L5.85833 7.65829L2.55833 4.35829L3.50167 3.41496L5.85833 5.77163L11.045 0.584961ZM14.345 0.584961L15.2883 1.52829L9.15833 7.65829L8.215 6.71496L14.345 0.584961ZM9.15833 9.54496L5.85833 6.24496L6.80167 5.30163L9.15833 7.65829L14.345 2.47163L15.2883 3.41496L9.15833 9.54496Z" />
  </svg>
);

const SearchIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const FilterIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const MoreVerticalIcon = ({
  className = "w-4 h-4",
}: {
  className?: string;
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

const StatusCircleIcon = ({
  className = "w-4 h-4",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
  </svg>
);

const NewChatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="12" y1="8" x2="12" y2="14" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

const PaperclipIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

const MicrophoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const EmojiIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
  </svg>
);

const LockIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export interface ChatAttachment {
  fileName: string;
  fileSize: string;
  title: string;
  issuer: string;
  date: string;
  role: string;
  company: string;
  cin?: string;
  signatory: string;
  signatoryTitle: string;
  signatoryContact?: string;
  summary: string;
  breakdown?: string;
  location: string;
}

export interface ChatMessage {
  id: number;
  sender: string;
  avatarInitial?: string;
  text: string;
  isCurrentUser: boolean;
  timestamp: string;
  isAudio?: boolean;
  audioDuration?: string;
  reaction?: string;
  attachment?: ChatAttachment;
}

export interface InternshipChatThread {
  id: string;
  name: string;
  subtitle: string;
  initial: string;
  avatarUrl?: string;
  badge: string;
  lastMsg: string;
  time: string;
  unreadCount?: number;
  messages: ChatMessage[];
}

export const ALL_CHAT_THREADS: InternshipChatThread[] = [
  {
    id: "euroasiann",
    name: "Euroasiann Marine Spares",
    subtitle: "online • Sreenu Kambala (Executive Director)",
    initial: "E",
    badge: "01 Oct 2025 – 10 May 2026",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    lastMsg: "Official Euroasiann Experience Certificate attached!",
    time: "10:44 AM",
    messages: [
      {
        id: 1,
        sender: "Sreenu Kambala (Executive Director)",
        avatarInitial: "S",
        text: "Hello Ansh! Can you summarize your key responsibilities and technical deliverables during your Front-End Developer Internship with Euroasiann Marine Spares?",
        isCurrentUser: false,
        timestamp: "10:40 AM",
      },
      {
        id: 2,
        sender: "Ansh Adarsh (Front-End Developer Intern)",
        avatarInitial: "A",
        text: "Hello Sir! In the Software Development Department, I led frontend and application development for PartFinder using Next.js & React with SSR/SSG (+35–40% SEO discoverability, -2s initial load time) and designed reusable component architectures that lowered maintenance effort by ~25%.",
        isCurrentUser: true,
        timestamp: "10:41 AM",
      },
      {
        id: 3,
        sender: "Ansh Adarsh (Front-End Developer Intern)",
        avatarInitial: "A",
        text: "I also architected the complete 10+ page EuroasiannIT corporate platform across services and subsidiaries, cutting LCP by ~35%, shrinking page turnaround to <3 hours, and maintaining 100% Git-based code review coverage across all commits.",
        isCurrentUser: true,
        timestamp: "10:42 AM",
        reaction: "🚀 10+ Pages",
      },
      {
        id: 4,
        sender: "Sreenu Kambala (Executive Director)",
        avatarInitial: "S",
        text: "Excellent technical knowledge, problem-solving, and dedication throughout both your unpaid (Oct–Dec 2025) and paid (Jan–May 2026) tenure. Here is your official Internship Experience Certificate:",
        isCurrentUser: false,
        timestamp: "10:43 AM",
      },
      {
        id: 5,
        sender: "Ansh Adarsh (Front-End Developer Intern)",
        avatarInitial: "A",
        text: "Thank you so much Sir! Attaching the official verified Euroasiann Marine Spares Pvt. Ltd. Internship Experience Certificate below for verification:",
        isCurrentUser: true,
        timestamp: "10:44 AM",
        reaction: "🌟 Verified (CIN: U33121TS2024PTC190815)",
        attachment: {
          fileName: "Euroasiann_Marine_Spares_Internship_Certificate.pdf",
          fileSize: "1.4 MB",
          title: "INTERNSHIP EXPERIENCE CERTIFICATE",
          issuer: "Euroasiann Marine Spares Pvt. Ltd.",
          cin: "CIN: U33121TS2024PTC190815",
          date: "10 May 2026",
          role: "Front-End Developer Intern",
          company: "Euroasiann Marine Spares Pvt. Ltd.",
          location: "3rd Floor, A321, Master Mind 4, Royal Palms, Goregaon East, Mumbai – 400065",
          signatory: "Sreenu Kambala",
          signatoryTitle: "Executive Director",
          signatoryContact: "info@euroasianngroup.com | +91 9441115558",
          breakdown: "01 October 2025 to 31 December 2025 (Unpaid) • 01 January 2026 to 10th May 2026 (Paid)",
          summary:
            "Successfully completed internship in the Software Development Department as a Front-End Developer Intern. Involved in frontend and backend development, application development, database management, debugging, testing, and related software development tasks.",
        },
      },
    ],
  },
  {
    id: "lvpei",
    name: "LV Prasad Eye Institute",
    subtitle: "online • Dr. Alok Srivastava (Associate Director)",
    initial: "L",
    badge: "20 Feb 2024 – 20 May 2024",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    lastMsg: "Official LVPEI Data Science Certificate attached!",
    time: "10:15 AM",
    messages: [
      {
        id: 1,
        sender: "Dr. Alok Srivastava (Associate Director)",
        avatarInitial: "D",
        text: "Hello Ansh! Could you summarize your project work and research deliverables during your internship at LV Prasad Eye Institute under my supervision?",
        isCurrentUser: false,
        timestamp: "10:10 AM",
      },
      {
        id: 2,
        sender: "Ansh Adarsh (Data Science Intern)",
        avatarInitial: "A",
        text: "Hello Dr. Srivastava! At LVPEI, I completed the project entitled 'Movie Recommendation System Using Netflix Dataset' using collaborative filtering and predictive ML models, while also redesigning the patient appointment flow in Next.js & MUI for 1,000+ active users.",
        isCurrentUser: true,
        timestamp: "10:12 AM",
      },
      {
        id: 3,
        sender: "Ansh Adarsh (Data Science Intern)",
        avatarInitial: "A",
        text: "I applied data science pipelines to personalize scheduling recommendations, significantly improving suggestion accuracy over manual baselines and eliminating redundant booking steps.",
        isCurrentUser: true,
        timestamp: "10:13 AM",
        reaction: "🏥 Recommendation Engine",
      },
      {
        id: 4,
        sender: "Dr. Alok Srivastava (Associate Director)",
        avatarInitial: "D",
        text: "You exhibited a remarkable level of dedication, professionalism, and enthusiasm for your work, displaying a commendable grasp of technical concepts. Here is your official LVPEI certificate:",
        isCurrentUser: false,
        timestamp: "10:14 AM",
      },
      {
        id: 5,
        sender: "Ansh Adarsh (Data Science Intern)",
        avatarInitial: "A",
        text: "Thank you Dr. Srivastava! Attaching the official LV Prasad Eye Institute Certificate of Project Completion below:",
        isCurrentUser: true,
        timestamp: "10:15 AM",
        reaction: "⚡ Dr. Alok Srivastava Verified",
        attachment: {
          fileName: "LVPEI_Data_Science_Certificate_Ansh_Adarsh.pdf",
          fileSize: "1.2 MB",
          title: "CERTIFICATE OF INTERNSHIP & PROJECT COMPLETION",
          issuer: "LV Prasad Eye Institute",
          date: "20th May 2024",
          role: "Data Science & AI Intern (BTech CSE 6th Sem, LIET Greater Noida)",
          company: "LV Prasad Eye Institute",
          location: "Kallam Anji Reddy Campus, LV Prasad Marg, Banjara Hills, Hyderabad, Telangana, India - 500034",
          signatory: "Dr. Alok Srivastava",
          signatoryTitle: "Associate Director (AI, ML and Data Science)",
          signatoryContact: "Tel: 9985542836 | alok.srivastava@lvpei.org | foraloks@gmail.com",
          summary:
            "Certified that Mr. Ansh Adarsh of BTech Computer Science 6th Semester student at Lloyd Institute of Engineering and Technology, Greater Noida, carried out project work entitled 'Movie Recommendation System Using Netflix Dataset' from 20th Feb 2024 to 20th May 2024 under Dr. Alok Srivastava's supervision with remarkable dedication and technical excellence.",
        },
      },
    ],
  },
  {
    id: "certifications",
    name: "Verified Certifications",
    subtitle: "online • Microsoft & Oracle Credentials",
    initial: "M",
    badge: "AI & Java Certifications",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    lastMsg: "Official Microsoft Azure AI Certificate attached!",
    time: "9:30 AM",
    messages: [
      {
        id: 1,
        sender: "Technical Evaluator",
        avatarInitial: "M",
        text: "Hey Ansh! What verified cloud, AI, and software engineering certifications do you hold?",
        isCurrentUser: false,
        timestamp: "9:25 AM",
      },
      {
        id: 2,
        sender: "Ansh Adarsh",
        avatarInitial: "A",
        text: "I am certified in Microsoft Certified: Azure AI Fundamentals (AI-900) and Oracle Java Certified Associate (1Z0-808), demonstrating verified competencies in AI pipelines, cloud APIs, and object-oriented software engineering.",
        isCurrentUser: true,
        timestamp: "9:27 AM",
        reaction: "🎓 Certified",
      },
      {
        id: 3,
        sender: "Technical Evaluator",
        avatarInitial: "M",
        text: "Excellent credentials! Can you provide your Microsoft AI certificate for review?",
        isCurrentUser: false,
        timestamp: "9:29 AM",
      },
      {
        id: 4,
        sender: "Ansh Adarsh",
        avatarInitial: "A",
        text: "Here is my verified Microsoft Certified Azure AI Fundamentals credential document:",
        isCurrentUser: true,
        timestamp: "9:30 AM",
        reaction: "🛡️ Microsoft Verified",
        attachment: {
          fileName: "Microsoft_Azure_AI_Certification.pdf",
          fileSize: "850 KB",
          title: "Microsoft Certified: Azure AI Fundamentals",
          issuer: "Microsoft Corporation",
          date: "Verified Credential",
          role: "Cloud & AI Engineer",
          company: "Microsoft Certified",
          location: "Microsoft Worldwide Credential Network",
          signatory: "Satya Nadella",
          signatoryTitle: "Chief Executive Officer, Microsoft",
          summary:
            "Demonstrated foundational knowledge of machine learning, computer vision, natural language processing, and conversational AI workloads on Microsoft Azure.",
        },
      },
    ],
  },
];

function handleDownloadCertificate(attachment: ChatAttachment) {
  const isEuroasiann = attachment.company.includes("Euroasiann");
  const isLVPEI = attachment.company.includes("LV Prasad");

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${attachment.title} - ${attachment.company}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: #070a0f; color: #1e293b; padding: 30px; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .cert-sheet { background: #ffffff; border: 12px solid #0f172a; border-radius: 8px; padding: 48px 56px; max-width: 800px; width: 100%; box-shadow: 0 25px 60px rgba(0,0,0,0.6); position: relative; box-sizing: border-box; }
    .header-bar { border-bottom: 2px solid #0f172a; padding-bottom: 20px; margin-bottom: 28px; text-align: center; }
    .org-title { font-size: 24px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0; }
    .org-tagline { font-size: 13px; color: #64748b; margin-top: 4px; font-weight: 500; }
    .org-cin { font-size: 11px; color: #0284c7; font-family: monospace; margin-top: 4px; }
    .org-contact { font-size: 10.5px; color: #64748b; margin-top: 4px; }
    
    .cert-heading { text-align: center; margin: 24px 0 16px; }
    .cert-heading h1 { font-size: 20px; font-weight: 800; color: #0f172a; text-decoration: underline; margin: 0; text-transform: uppercase; letter-spacing: 1px; }
    .cert-date { font-size: 13px; color: #475569; font-weight: 600; text-align: right; margin-bottom: 12px; }
    .salutation { font-size: 14px; font-weight: 700; color: #0f172a; text-decoration: underline; margin-bottom: 16px; }
    
    .cert-body { font-size: 14px; line-height: 1.8; color: #334155; text-align: justify; margin-bottom: 24px; }
    .recipient-name { font-weight: 800; color: #0f172a; }
    .project-name { font-weight: 700; color: #0369a1; }
    
    .table-container { margin: 20px 0; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th { background: #f1f5f9; text-align: left; padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: 700; color: #0f172a; }
    td { padding: 10px 14px; border: 1px solid #cbd5e1; color: #334155; }
    
    .cert-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e2e8f0; }
    .signatory-box { text-align: left; }
    .sign-img { font-family: 'Brush Script MT', cursive, sans-serif; font-size: 26px; color: #0369a1; margin-bottom: 4px; }
    .sign-name { font-weight: 800; color: #0f172a; font-size: 14px; }
    .sign-title { font-size: 12.5px; color: #64748b; }
    
    .seal-badge { background: #0284c7; color: #ffffff; padding: 8px 18px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
    .btn-print { margin-top: 24px; background: #0f172a; color: #ffffff; border: none; padding: 12px 28px; font-size: 13px; font-weight: 600; border-radius: 6px; cursor: pointer; display: block; margin-left: auto; margin-right: auto; }
    
    @media print {
      body { background: #fff; padding: 0; }
      .cert-sheet { border: 4px solid #000; box-shadow: none; max-width: 100%; }
      .btn-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="cert-sheet">
    <div class="header-bar">
      <h2 class="org-title">${attachment.issuer}</h2>
      ${isEuroasiann ? '<div class="org-tagline">Optimizing Fleet Efficiency Through Smart Procurement</div>' : ''}
      ${isLVPEI ? '<div class="org-tagline">Centre for Excellence in Ophthalmic & Healthcare Data Science</div>' : ''}
      ${attachment.cin ? `<div class="org-cin">${attachment.cin}</div>` : ''}
      <div class="org-contact">${attachment.location}</div>
    </div>

    <div class="cert-date">Date: ${attachment.date}</div>
    <div class="salutation">To Whomsoever It May Concern,</div>

    <div class="cert-heading">
      <h1>${attachment.title}</h1>
    </div>

    <div class="cert-body">
      ${isEuroasiann ? `
        <p>This is to certify that <span class="recipient-name">Mr. Ansh Adarsh</span> has successfully completed his internship with <strong>Euroasiann Marine Spares Pvt Ltd</strong> in the <strong>Software Development Department</strong> as a <strong>Front-End Developer Intern</strong>.</p>
        <p>His internship tenure was from <strong>01st October 2025 to 10th May 2026</strong>.</p>
        <p>During the internship period, he was involved in various software development activities including frontend and backend development, application development, database management, debugging, testing, and other related software development tasks under the guidance of our technical team.</p>
        <div class="table-container">
          <table>
            <thead>
              <tr><th>Period</th><th>Internship Type</th></tr>
            </thead>
            <tbody>
              <tr><td>01 October 2025 to 31 December 2025</td><td>Unpaid Internship</td></tr>
              <tr><td>01 January 2026 to 10th May 2026</td><td>Paid Internship</td></tr>
            </tbody>
          </table>
        </div>
        <p>Throughout his internship, Mr. Ansh Adarsh demonstrated good technical knowledge, willingness to learn, problem-solving abilities, and a professional approach towards assigned responsibilities.</p>
        <p>We appreciate his contribution to our organization and wish him success in his future career endeavors.</p>
      ` : ''}

      ${isLVPEI ? `
        <p>This is to certify that <span class="recipient-name">Mr. Ansh Adarsh</span> of <strong>BTech Computer Science 6th Semester</strong> student at <strong>Lloyd Institute of Engineering and Technology, Greater Noida</strong>, has carried out the project work entitled <span class="project-name">“Movie Recommendation System Using Netflix Dataset”</span> under my supervision from <strong>20th Feb 2024 to 20th May 2024</strong>.</p>
        <p>Throughout his internship, Ansh exhibited a remarkable level of dedication, professionalism, and enthusiasm for his work. He displayed a commendable grasp of technical concepts and applied them effectively to the assigned project.</p>
        <p>I wish him all the best in his academic and professional pursuits.</p>
      ` : ''}

      ${!isEuroasiann && !isLVPEI ? `
        <p>This is to certify that <span class="recipient-name">Mr. Ansh Adarsh</span> has demonstrated verified proficiency and technical competence for <span class="project-name">${attachment.title}</span>.</p>
        <p>${attachment.summary}</p>
      ` : ''}
    </div>

    <div class="cert-footer">
      <div class="signatory-box">
        <div class="sign-img">Authorized Signature</div>
        <div class="sign-name">${attachment.signatory}</div>
        <div class="sign-title">${attachment.signatoryTitle}</div>
        <div class="sign-title">${attachment.company}</div>
        ${attachment.signatoryContact ? `<div class="sign-title" style="font-size:11px; margin-top:2px;">${attachment.signatoryContact}</div>` : ''}
      </div>

      <div class="seal-badge">
        ✓ Officially Authenticated
      </div>
    </div>

    <button class="btn-print" onclick="window.print()">Print / Save as PDF</button>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = attachment.fileName.replace(".pdf", "_Verified_Certificate.html");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export type MacStage = "closed" | "opening" | "desktop" | "app_launch" | "chat_active";

export interface MacbookMockupProps {
  initialChatId?: string;
  autoPlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MacbookMockup({
  initialChatId = "euroasiann",
  autoPlay = true,
  className,
  children,
}: MacbookMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bootTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // Staged opening flow: closed -> opening -> desktop (auto cursor click) -> app_launch -> chat_active
  const [stage, setStage] = useState<MacStage>("closed");
  const [showCursor, setShowCursor] = useState(false);
  const [cursorClicked, setCursorClicked] = useState(false);

  const [activeChatId, setActiveChatId] = useState<string>(initialChatId);
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [downloadedCert, setDownloadedCert] = useState<string | null>(null);
  const [cycleKey, setCycleKey] = useState(0);

  const activeThread =
    ALL_CHAT_THREADS.find((t) => t.id === activeChatId) || ALL_CHAT_THREADS[0];

  const messages = activeThread.messages;

  const clearAllBootTimeouts = () => {
    bootTimeoutsRef.current.forEach((t) => clearTimeout(t));
    bootTimeoutsRef.current = [];
  };

  // Staged automated sequence triggered when user scrolls to this section
  const startBootSequence = () => {
    clearAllBootTimeouts();
    setStage("closed");
    setShowCursor(false);
    setCursorClicked(false);
    setVisibleMessages([]);
    setShowTyping(false);

    // 1. Open Lid (3D Rotation)
    const tOpen = setTimeout(() => {
      setStage("opening");
    }, 250);
    bootTimeoutsRef.current.push(tOpen);

    // 2. Desktop loaded with wallpaper & Dock
    const tDesktop = setTimeout(() => {
      setStage("desktop");
      setShowCursor(true);
    }, 1100);
    bootTimeoutsRef.current.push(tDesktop);

    // 3. Simulated cursor moves and clicks the Experience.app icon
    const tClick = setTimeout(() => {
      setCursorClicked(true);
    }, 1800);
    bootTimeoutsRef.current.push(tClick);

    // 4. App Window Launches from Dock/Desktop
    const tAppLaunch = setTimeout(() => {
      setShowCursor(false);
      setStage("app_launch");
    }, 2200);
    bootTimeoutsRef.current.push(tAppLaunch);

    // 5. Chat conversation becomes active and starts streaming
    const tChatActive = setTimeout(() => {
      setStage("chat_active");
    }, 2800);
    bootTimeoutsRef.current.push(tChatActive);
  };

  // Trigger automatically when user enters section (isInView)
  useEffect(() => {
    if (!isInView) return;

    startBootSequence();
    return () => {
      clearAllBootTimeouts();
    };
  }, [isInView]);

  // Clean up all boot timeouts on component unmount
  useEffect(() => {
    return () => {
      clearAllBootTimeouts();
    };
  }, []);

  // Handle switching chats
  const handleSelectChat = (chatId: string) => {
    setActiveChatId(chatId);
    setVisibleMessages([]);
    setShowTyping(false);
    setCycleKey((prev) => prev + 1);
  };

  // Launch App directly from Desktop or Dock
  const handleOpenApp = (chatId?: string) => {
    if (chatId) setActiveChatId(chatId);
    setStage("app_launch");
    const t = setTimeout(() => {
      setStage("chat_active");
    }, 450);
    bootTimeoutsRef.current.push(t);
  };

  // Close/Minimize App window to Desktop
  const handleMinimizeApp = () => {
    setStage("desktop");
  };

  // Chat message animation stream (runs when stage is 'chat_active')
  useEffect(() => {
    if (stage !== "chat_active" || !autoPlay || children) {
      if (stage === "chat_active") setVisibleMessages(messages);
      return;
    }

    let isMounted = true;
    const timeouts: NodeJS.Timeout[] = [];

    const runSequence = () => {
      if (!isMounted) return;
      setVisibleMessages([]);
      setShowTyping(false);

      let accumulatedDelay = 400;

      messages.forEach((msg, idx) => {
        const tType = setTimeout(() => {
          if (!isMounted) return;
          setShowTyping(true);
        }, accumulatedDelay);
        timeouts.push(tType);

        accumulatedDelay += 1000;

        const tMsg = setTimeout(() => {
          if (!isMounted) return;
          setShowTyping(false);
          setVisibleMessages(messages.slice(0, idx + 1));
        }, accumulatedDelay);
        timeouts.push(tMsg);

        accumulatedDelay += 1300;
      });

      const tReset = setTimeout(() => {
        if (isMounted && stage === "chat_active") {
          setCycleKey((prev) => prev + 1);
        }
      }, accumulatedDelay + 5000);
      timeouts.push(tReset);
    };

    runSequence();

    return () => {
      isMounted = false;
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [stage, autoPlay, children, messages, cycleKey, activeChatId]);

  const displayMessages = !autoPlay || children ? messages : visibleMessages;

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center w-full space-y-4">
      
      {/* Interactive Controls Bar: Replay / Stage Indicators */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => startBootSequence()}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>Replay Automated Boot Sequence</span>
        </button>

        {stage === "desktop" && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono animate-pulse">
            <span>Automatically launching Experience.app...</span>
          </span>
        )}

        {stage === "chat_active" && (
          <button
            type="button"
            onClick={handleMinimizeApp}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-mono transition"
          >
            <Minimize2 className="w-3 h-3" />
            <span>Minimize to macOS Desktop</span>
          </button>
        )}
      </div>

      {/* Main 3D MacBook Container */}
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[480px] transform-gpu flex-col items-center justify-center py-4 select-none [perspective:1200px] sm:max-w-[640px] md:max-w-[780px]",
          className
        )}
      >
        {/* Screen Bezel & Lid */}
        <motion.div
          animate={
            stage === "closed"
              ? { rotateX: -75, opacity: 0.25, scale: 0.88 }
              : { rotateX: 0, opacity: 1, scale: 1 }
          }
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 18,
            mass: 0.85,
          }}
          style={{ transformOrigin: "bottom center" }}
          className="relative z-10 flex h-[350px] w-full transform-gpu flex-col overflow-hidden rounded-t-2xl bg-neutral-900 p-2 sm:h-[430px] sm:p-2.5 md:h-[480px] dark:bg-neutral-950 border border-white/10 shadow-[0_0_60px_-10px_rgba(6,182,212,0.3)]"
        >
          {/* Internal Screen Area */}
          <div className="relative isolate flex h-full w-full transform-gpu overflow-hidden rounded-t-[10px] bg-gradient-to-br from-[#0c1222] via-[#09152b] to-[#120e29] text-white">
            
            {/* Stage 1: Closed Lid / Opening Glow */}
            <AnimatePresence>
              {stage === "closed" && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 text-center space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 shadow-lg">
                    <Laptop className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-xs font-mono text-slate-400">Scroll to open MacBook...</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* macOS Top System Menu Bar */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black/40 backdrop-blur-md z-30 flex items-center justify-between px-3 text-[11px] font-medium text-slate-200 border-b border-white/5">
              <div className="flex items-center gap-3.5">
                <span className="font-bold text-xs"></span>
                <span className="font-semibold text-white">Experience Sync</span>
                <span className="hidden sm:inline text-slate-400">File</span>
                <span className="hidden sm:inline text-slate-400">Edit</span>
                <span className="hidden sm:inline text-slate-400">View</span>
                <span className="hidden sm:inline text-slate-400">Window</span>
                <span className="hidden sm:inline text-slate-400">Help</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 font-mono text-[10px]">
                <Wifi className="w-3 h-3 text-cyan-400" />
                <Volume2 className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
                <span>10:41 AM</span>
              </div>
            </div>

            {/* Simulated Automated Mouse Pointer Gliding & Clicking */}
            {showCursor && (
              <motion.div
                initial={{ opacity: 0, x: 260, y: 220 }}
                animate={
                  cursorClicked
                    ? { opacity: 1, x: 48, y: 64, scale: 0.85 }
                    : { opacity: 1, x: 48, y: 64, scale: 1 }
                }
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="pointer-events-none absolute z-40"
              >
                <svg
                  className="w-5 h-5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 3l7 18 3-7 7-3L3 3z"
                    fill="black"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                {cursorClicked && (
                  <motion.span
                    initial={{ scale: 0.4, opacity: 1 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-cyan-400 bg-cyan-400/30"
                  />
                )}
              </motion.div>
            )}

            {/* macOS Desktop Wallpaper & Icons (Visible in desktop stage or when app is minimized) */}
            <div className="absolute inset-0 pt-7 pb-14 px-5 z-10 flex flex-col justify-between">
              {/* Desktop Shortcut Icons */}
              <div className="grid grid-cols-4 gap-4 max-w-[280px]">
                <button
                  type="button"
                  onClick={() => handleOpenApp("euroasiann")}
                  className={cn(
                    "flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition group text-center cursor-pointer",
                    cursorClicked && "scale-105 bg-white/15 ring-2 ring-cyan-400"
                  )}
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-200 drop-shadow">Experience.app</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenApp("euroasiann")}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition group text-center cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-200 drop-shadow">PartFinder</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenApp("lvpei")}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition group text-center cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                    <Folder className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-200 drop-shadow">LVPEI AI</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenApp("certifications")}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition group text-center cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-200 drop-shadow">Credentials</span>
                </button>
              </div>

              {/* Floating Bottom macOS Glassmorphic Dock */}
              <div className="self-center flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl">
                <button
                  type="button"
                  onClick={() => handleOpenApp("euroasiann")}
                  className="relative p-1.5 rounded-xl hover:bg-white/15 transition group cursor-pointer"
                  title="Euroasiann SDE Chat"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:-translate-y-1 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-[9px] font-bold flex items-center justify-center text-white border border-black">
                    1
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenApp("lvpei")}
                  className="p-1.5 rounded-xl hover:bg-white/15 transition group cursor-pointer"
                  title="LV Prasad Eye Institute"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md group-hover:-translate-y-1 transition-transform">
                    <Folder className="w-4 h-4" />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenApp("certifications")}
                  className="p-1.5 rounded-xl hover:bg-white/15 transition group cursor-pointer"
                  title="Certifications"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:-translate-y-1 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>

            {/* Stage 3 & 4: The Experience App Window Launches / Active Chat */}
            <AnimatePresence>
              {(stage === "app_launch" || stage === "chat_active") && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, y: 120 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.3, y: 120 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                  className="absolute inset-0 pt-6 z-20 flex flex-col bg-[#111b21] shadow-2xl rounded-t-[10px] overflow-hidden"
                >
                  {/* macOS Window Top Control Bar with Traffic Lights */}
                  <div className="h-7 bg-[#202c33] flex items-center justify-between px-3 border-b border-neutral-800 select-none">
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleMinimizeApp}
                        className="w-2.5 h-2.5 rounded-full bg-red-500 hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
                        title="Close App"
                      >
                        <X className="w-1.5 h-1.5 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                      <button
                        type="button"
                        onClick={handleMinimizeApp}
                        className="w-2.5 h-2.5 rounded-full bg-yellow-500 hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
                        title="Minimize"
                      >
                        <Minus className="w-1.5 h-1.5 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                      <button
                        type="button"
                        className="w-2.5 h-2.5 rounded-full bg-green-500 hover:opacity-80 transition cursor-pointer flex items-center justify-center group"
                        title="Maximize"
                      >
                        <Maximize2 className="w-1.5 h-1.5 text-black opacity-0 group-hover:opacity-100" />
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Experience Sync — {activeThread.name}</span>
                    </div>

                    <div className="w-10" />
                  </div>

                  {/* WhatsApp/macOS Two-Column App Window */}
                  <div className="relative isolate flex flex-1 w-full overflow-hidden bg-white text-neutral-900 dark:bg-[#111b21] dark:text-neutral-100">
                    
                    {/* Left Sidebar - Chat List / Internship Switcher */}
                    <div className="flex w-[165px] shrink-0 flex-col bg-[#f0f2f5] transition-colors sm:w-[220px] md:w-[250px] dark:bg-[#111b21] border-r border-neutral-200 dark:border-neutral-800">
                      
                      {/* Top User Bar */}
                      <div className="flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3 py-2 dark:bg-[#202c33]">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-cyan-600 text-xs font-bold text-white shadow-sm">
                            <span>A</span>
                          </div>
                          <span className="hidden sm:inline text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                            Internships
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                          <button
                            type="button"
                            title="Status"
                            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <StatusCircleIcon />
                          </button>
                          <button
                            type="button"
                            title="New Chat"
                            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <NewChatIcon />
                          </button>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="p-2">
                        <div className="flex items-center gap-2 rounded-lg bg-white px-2 py-1 text-xs text-neutral-400 dark:bg-[#202c33]">
                          <SearchIcon className="h-3 w-3 shrink-0 text-neutral-500 dark:text-neutral-400" />
                          <span className="truncate text-[10px]">Switch internship...</span>
                          <FilterIcon className="ml-auto h-3 w-3 shrink-0 text-neutral-400" />
                        </div>
                      </div>

                      {/* Chat Threads List */}
                      <div className="flex-1 [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                        {ALL_CHAT_THREADS.map((chat) => {
                          const isActive = chat.id === activeChatId;

                          return (
                            <button
                              key={chat.id}
                              type="button"
                              onClick={() => handleSelectChat(chat.id)}
                              className={cn(
                                "relative w-full text-left flex cursor-pointer items-center gap-2 px-2.5 py-2 transition-colors focus:outline-none",
                                isActive
                                  ? "bg-neutral-200/80 dark:bg-[#2a3942]"
                                  : "hover:bg-neutral-200/40 dark:hover:bg-[#202c33]/60"
                              )}
                            >
                              {isActive && (
                                <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#00a884]" />
                              )}

                              <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-xs font-bold text-white sm:h-8 sm:w-8 dark:bg-emerald-900">
                                {chat.avatarUrl ? (
                                  <img
                                    src={chat.avatarUrl}
                                    alt={chat.name}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <span>{chat.initial}</span>
                                )}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="truncate text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">
                                    {chat.name}
                                  </span>
                                  <span className="shrink-0 text-[8.5px] text-neutral-400 dark:text-neutral-400">
                                    {chat.time}
                                  </span>
                                </div>
                                <p className="mt-0.5 truncate text-[9.5px] text-neutral-500 dark:text-neutral-400">
                                  {chat.lastMsg}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Main Chat Window */}
                    <div className="relative flex min-w-0 flex-1 flex-col bg-[#efeae2] transition-colors dark:bg-[#0b141a]">
                      {/* Chat Top Header */}
                      <div className="z-10 flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3 py-1.5 dark:bg-[#202c33] border-b border-neutral-200 dark:border-neutral-800">
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-xs font-bold text-white dark:bg-emerald-900">
                            {activeThread.avatarUrl ? (
                              <img
                                src={activeThread.avatarUrl}
                                alt={activeThread.name}
                                className="h-full w-full rounded-full object-cover"
                              />
                            ) : (
                              <span>{activeThread.initial}</span>
                            )}
                          </div>
                          <div className="flex min-w-0 flex-col">
                            <span className="truncate text-xs leading-tight font-semibold text-neutral-900 dark:text-neutral-100">
                              {activeThread.name}
                            </span>
                            <span className="text-[9.5px] font-medium text-emerald-600 dark:text-emerald-400">
                              {activeThread.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400">
                          <button
                            type="button"
                            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <SearchIcon />
                          </button>
                          <button
                            type="button"
                            className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                          >
                            <MoreVerticalIcon />
                          </button>
                        </div>
                      </div>

                      {/* Messages Scroll Area */}
                      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end space-y-2 overflow-hidden p-3">
                        {children ? (
                          <div className="h-full w-full [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                            {children}
                          </div>
                        ) : (
                          <>
                            <div className="mx-auto my-0.5 flex max-w-[90%] items-center justify-center gap-1 rounded-md bg-[#ffeebd] px-2.5 py-0.5 text-center text-[8.5px] text-amber-900 dark:bg-[#182229] dark:text-amber-200/80">
                              <LockIcon className="h-2.5 w-2.5 shrink-0 text-amber-700 dark:text-amber-400" />
                              <span>Live conversation & verified credentials encryption.</span>
                            </div>

                            <div className="mx-auto my-0.5 rounded-md bg-white/80 px-2 py-0.5 text-[8px] font-semibold tracking-wider text-neutral-500 uppercase dark:bg-[#182229]/90 dark:text-neutral-400">
                              {activeThread.badge}
                            </div>

                            <div className="flex flex-1 [scrollbar-width:none] flex-col justify-end space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                              <AnimatePresence mode="sync">
                                {displayMessages.map((msg) => (
                                  <motion.div
                                    key={`${cycleKey}-${msg.id}`}
                                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 400,
                                      damping: 25,
                                    }}
                                    className={`flex flex-col ${
                                      msg.isCurrentUser ? "items-end" : "items-start"
                                    }`}
                                  >
                                    <div
                                      className={cn(
                                        "relative max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-1.5 text-xs transition-colors shadow-sm",
                                        msg.isCurrentUser
                                          ? "rounded-tr-none bg-[#dcf8c6] text-neutral-900 dark:bg-[#005c4b] dark:text-neutral-100"
                                          : "rounded-tl-none bg-white text-neutral-900 dark:bg-[#202c33] dark:text-neutral-100"
                                      )}
                                    >
                                      {!msg.isCurrentUser && (
                                        <p className="mb-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                                          {msg.sender}
                                        </p>
                                      )}

                                      <p className="xs:text-xs text-[11px] leading-relaxed">
                                        {msg.text}
                                      </p>

                                      {/* Downloadable Certificate Document Card */}
                                      {msg.attachment && (
                                        <div className="mt-2 rounded-xl bg-black/20 p-2 border border-white/10 space-y-2 backdrop-blur-md">
                                          <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-lg bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                                              <FileText className="w-3.5 h-3.5" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                              <p className="text-[10.5px] font-bold truncate text-white leading-tight">
                                                {msg.attachment.fileName}
                                              </p>
                                              <p className="text-[9px] text-emerald-300 font-mono flex items-center gap-1">
                                                <ShieldCheck className="w-3 h-3" />
                                                <span>{msg.attachment.fileSize} • Verified</span>
                                              </p>
                                            </div>
                                          </div>

                                          <button
                                            type="button"
                                            onClick={() => {
                                              handleDownloadCertificate(msg.attachment!);
                                              setDownloadedCert(msg.attachment!.fileName);
                                              setTimeout(() => setDownloadedCert(null), 3000);
                                            }}
                                            className="w-full flex items-center justify-center gap-1.5 py-1 px-2.5 rounded-lg bg-[#00a884] hover:bg-[#00a884]/90 text-white font-mono text-[9.5px] font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                                          >
                                            {downloadedCert === msg.attachment.fileName ? (
                                              <>
                                                <Check className="w-3 h-3" />
                                                <span>Downloaded Document!</span>
                                              </>
                                            ) : (
                                              <>
                                                <Download className="w-3 h-3" />
                                                <span>Download Official Certificate</span>
                                              </>
                                            )}
                                          </button>
                                        </div>
                                      )}

                                      <div className="mt-0.5 flex items-center justify-end gap-1">
                                        <span
                                          className={cn(
                                            "text-[8px]",
                                            msg.isCurrentUser
                                              ? "text-emerald-800/70 dark:text-emerald-200/60"
                                              : "text-neutral-400 dark:text-neutral-400"
                                          )}
                                        >
                                          {msg.timestamp}
                                        </span>
                                        {msg.isCurrentUser && (
                                          <DoubleCheckIcon className="h-3 w-3 text-[#53bdeb]" />
                                        )}
                                      </div>

                                      {msg.reaction && (
                                        <div className="absolute right-2 -bottom-2 rounded-full bg-white px-1.5 py-0.2 text-[8.5px] shadow-sm border border-neutral-200 dark:bg-[#182229] dark:border-neutral-700">
                                          {msg.reaction}
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}

                                {showTyping && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-start"
                                  >
                                    <div className="flex items-center gap-1.5 rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 dark:bg-[#202c33]">
                                      <span className="text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                                        typing
                                      </span>
                                      <div className="flex items-center gap-0.5">
                                        {[0, 1, 2].map((dotIndex) => (
                                          <motion.span
                                            key={dotIndex}
                                            className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                            animate={{
                                              y: [0, -3, 0],
                                              opacity: [0.4, 1, 0.4],
                                            }}
                                            transition={{
                                              duration: 0.6,
                                              repeat: Infinity,
                                              delay: dotIndex * 0.15,
                                            }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bottom Input Bar */}
                      <div className="z-10 flex shrink-0 items-center gap-2 bg-[#f0f2f5] p-2 dark:bg-[#111b21]">
                        <button
                          type="button"
                          className="p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                        >
                          <EmojiIcon />
                        </button>
                        <button
                          type="button"
                          className="p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                        >
                          <PaperclipIcon />
                        </button>
                        <div className="flex-1 rounded-lg bg-white px-2.5 py-1 text-xs text-neutral-400 dark:bg-[#2a3942] dark:text-neutral-400">
                          Type a message or click sidebar
                        </div>
                        <button
                          type="button"
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white transition-colors hover:bg-emerald-600"
                        >
                          <MicrophoneIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* MacBook Bottom Base & Keyboard Notch */}
        <div className="relative z-20 flex h-3.5 w-full max-w-[500px] items-start justify-center rounded-b-xl bg-neutral-300 sm:h-4 sm:max-w-[660px] md:max-w-[800px] dark:bg-neutral-800 shadow-2xl">
          <div className="h-1.5 w-14 rounded-b-md bg-neutral-400/90 sm:w-20 dark:bg-neutral-700/90" />
        </div>
      </div>
    </div>
  );
}

export default MacbookMockup;
