import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';
import StickyNote from '../components/UI/StickyNote';
import { FiCheckSquare } from 'react-icons/fi';

// ==========================================
// 100% AUTHENTIC OFFICIAL MULTI-COLOR BRAND SVGS
// ==========================================

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#387EB8" d="M63.5 6.7c-7.9 0-14.8.7-20.1 2-13.6 3.4-16.1 10.4-16.1 23.4v17.2h32.7v4.9H22.4c-12.7 0-22.4 8.7-22.4 25.1 0 16.5 9.1 24.8 22.4 24.8h9.9V91.2c0-11.6 9.8-21.4 21.4-21.4h32.7V42.1c0-12.8-7.7-22.5-22.9-22.5-1.9 0-3.8.1-5.6.3v-6.5c0-4.4 3.7-6.7 13-6.7h19.5V6.7H63.5zm-11.4 8.2c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2-6.2-2.8-6.2-6.2 2.8-6.2 6.2-6.2z"/>
    <path fill="#FFE052" d="M64.5 121.3c7.9 0 14.8-.7 20.1-2 13.6-3.4 16.1-10.4 16.1-23.4V78.7H68v-4.9h37.6c12.7 0 22.4-8.7 22.4-25.1 0-16.5-9.1-24.8-22.4-24.8h-9.9v12.9c0 11.6-9.8 21.4-21.4 21.4H41.6v27.7c0 12.8 7.7 22.5 22.9 22.5 1.9 0 3.8-.1 5.6-.3v6.5c0 4.4-3.7 6.7-13 6.7H37.6v6.5h26.9zm11.4-8.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z"/>
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#EA2D2E" d="M47.5 98.4c-4.7 0-9.4-.3-14-.9 6.2 3.1 14.8 4.7 23.4 4.7 18.7 0 32.8-6.2 32.8-15.6 0-1.6-.3-3.1-.9-4.7-4.7 9.4-21.9 16.5-41.3 16.5z"/>
    <path fill="#5382A1" d="M89.7 78.1c4.7-4.7 7.8-10.9 7.8-17.2 0-9.4-7.8-17.2-18.7-20.3 3.1 3.1 4.7 7.8 4.7 12.5 0 9.4-7.8 17.2-18.7 21.9 10.9-1.6 20.3-3.1 24.9 3.1zM38.1 43.8c-3.1 6.2-4.7 12.5-4.7 18.7 0 17.2 12.5 31.2 29.7 34.4-12.5-4.7-20.3-15.6-20.3-28.1 0-7.8 3.1-17.2 9.4-25-4.7 4.7-10.9 12.5-14.1 20z"/>
    <path fill="#007396" d="M63.1 0C42.8 0 31.9 12.5 31.9 23.4c0 12.5 12.5 21.9 23.4 29.7 9.4 6.2 17.2 12.5 17.2 20.3 0 7.8-6.2 14.1-15.6 14.1-7.8 0-15.6-4.7-20.3-9.4 1.6 9.4 9.4 17.2 20.3 17.2 14.1 0 25-10.9 25-23.4 0-12.5-10.9-21.9-21.9-29.7-9.4-6.2-17.2-12.5-17.2-18.7 0-6.2 4.7-10.9 12.5-10.9 6.2 0 12.5 3.1 17.2 7.8C70.9 4.7 66.2 0 63.1 0z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
    <path fill="#000" d="M67.3 100c1.7 2.8 4.2 4.9 8.5 4.9 4.3 0 7-2.1 7-7.2V48.1h15.2v49.8c0 13.9-8.1 20.1-21.4 20.1-11.7 0-18.7-5.9-22.3-14.1l13-3.9zm37.8-1.5c2.4 4 6.4 7.2 13 7.2 5.5 0 9-2.8 9-6.7 0-4.6-3.7-6.3-9.9-9-9.9-4.3-16.3-9.8-16.3-20.9 0-11.4 8.7-20.1 22.1-20.1 9.6 0 16.4 3.4 20.9 11.5l-11.9 7.6c-2.4-4.2-5-5.9-9-5.9-3.9 0-6.4 2.4-6.4 5.5 0 3.7 2.4 5.3 8.3 7.8 11.7 5.1 18.1 10.4 18.1 22.3 0 12.8-10.1 20.7-24.3 20.7-13.7 0-21.9-6.7-26.2-15.6l12.6-7.4z"/>
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#659AD2" d="M115.4 30.7L66.7 2.5a5.4 5.4 0 0 0-5.4 0L12.6 30.7a5.4 5.4 0 0 0-2.7 4.7v57.2a5.4 5.4 0 0 0 2.7 4.7l48.7 28.2a5.4 5.4 0 0 0 5.4 0l48.7-28.2a5.4 5.4 0 0 0 2.7-4.7V35.4a5.4 5.4 0 0 0-2.7-4.7z"/>
    <path fill="#00599C" d="M64 16.7c-26.1 0-47.3 21.2-47.3 47.3S37.9 111.3 64 111.3c19.3 0 36-11.5 43.4-28.1l-18.7-7.8C84.3 84.7 74.8 90.7 64 90.7c-14.7 0-26.7-12-26.7-26.7s12-26.7 26.7-26.7c10.8 0 20.3 6 24.7 15.3l18.7-7.8C100 28.2 83.3 16.7 64 16.7z"/>
  </svg>
);

const CplusplusIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#659AD2" d="M115.4 30.7L66.7 2.5a5.4 5.4 0 0 0-5.4 0L12.6 30.7a5.4 5.4 0 0 0-2.7 4.7v57.2a5.4 5.4 0 0 0 2.7 4.7l48.7 28.2a5.4 5.4 0 0 0 5.4 0l48.7-28.2a5.4 5.4 0 0 0 2.7-4.7V35.4a5.4 5.4 0 0 0-2.7-4.7z"/>
    <path fill="#00599C" d="M53.3 26.7c-20.6 0-37.3 16.7-37.3 37.3s16.7 37.3 37.3 37.3c15.2 0 28.4-9.1 34.2-22.1l-14.7-6.1c-3.5 7.4-11 12.2-19.5 12.2-11.8 0-21.3-9.5-21.3-21.3s9.5-21.3 21.3-21.3c8.5 0 16 4.8 19.5 12.2l14.7-6.1C81.7 35.8 68.5 26.7 53.3 26.7zM88 56v8h-8v8h8v8h8v-8h8v-8h-8v-8h-8zm24 0v8h-8v8h8v8h8v-8h8v-8h-8v-8h-8z"/>
  </svg>
);

const FastAPIIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#059669"/>
    <path fill="#fff" d="M68.5 18L32 70h26l-6.5 40L96 58H70l6.5-40h-8z"/>
  </svg>
);

const PyTorchIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#EE4C2C" d="M72.2 16.2c-1.3 1.3-1.8 3.1-1.3 4.9l1.8 6.5C64.6 30 57.5 35.4 52.8 42.4L44 33.6c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l8.8 8.8C43.5 54.4 41 63 41 72c0 23.7 19.3 43 43 43s43-19.3 43-43c0-20.7-14.7-38-34.5-41.9l-1.8-6.5c-.5-1.8-2-3.1-3.9-3.1s-3.4 1.3-4.6 2.7zm11.8 22.8c18.2 0 33 14.8 33 33s-14.8 33-33 33-33-14.8-33-33c0-7.3 2.4-14.1 6.5-19.6l10.3 10.3c1.3 1.3 3.4 1.3 4.7 0s1.3-3.4 0-4.7L65.2 47.7c5.5-5.4 12.8-8.7 20.8-8.7z"/>
    <circle cx="95" cy="30" r="5" fill="#EE4C2C"/>
  </svg>
);

const ScikitLearnIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <ellipse cx="45" cy="64" rx="35" ry="42" fill="#3499CD"/>
    <ellipse cx="83" cy="64" rx="35" ry="42" fill="#F89939"/>
    <ellipse cx="64" cy="64" rx="20" ry="32" fill="#2E5A88" opacity="0.6"/>
    <text x="64" y="70" fill="#fff" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">scikit</text>
  </svg>
);

const HuggingFaceIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#FFD21E"/>
    {/* Eyes */}
    <ellipse cx="46" cy="50" rx="6" ry="8" fill="#000"/>
    <ellipse cx="82" cy="50" rx="6" ry="8" fill="#000"/>
    {/* Cheeks */}
    <circle cx="34" cy="68" r="8" fill="#FF5722" opacity="0.4"/>
    <circle cx="94" cy="68" r="8" fill="#FF5722" opacity="0.4"/>
    {/* Smile */}
    <path d="M42 68 Q64 92 86 68" stroke="#000" strokeWidth="6" fill="none" strokeLinecap="round"/>
    {/* Hugging Hands */}
    <path d="M16 66 Q28 54 40 68 Q28 82 16 66" fill="#FFB74D" stroke="#000" strokeWidth="2"/>
    <path d="M112 66 Q100 54 88 68 Q100 82 112 66" fill="#FFB74D" stroke="#000" strokeWidth="2"/>
  </svg>
);

const NLPIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#8B5CF6" d="M64 12C35.3 12 12 35.3 12 64c0 22.6 14.4 41.8 34.7 48.9 2.6.5 3.5-1.1 3.5-2.5v-9.6c-14.1 3.1-17-6.8-17-6.8-2.3-5.9-5.6-7.4-5.6-7.4-4.6-3.1.3-3.1.3-3.1 5.1.4 7.8 5.2 7.8 5.2 4.5 7.7 11.8 5.5 14.7 4.2 1.5-3.3 2.8-5.5 4.3-6.8-11.2-1.3-23-5.6-23-25 0-5.5 2-10 5.2-13.5-.5-1.3-2.3-6.4.5-13.3 0 0 4.2-1.3 13.9 5.2 4-1.1 8.4-1.7 12.7-1.7s8.7.6 12.7 1.7c9.6-6.6 13.8-5.2 13.8-5.2 2.8 6.9 1 12 1.7 1.2 3.2 5.8 5.2 13.5 5.2 19.4 0 19.4-11.8 23.7-23.1 24.9 1.8 1.6 3.4 4.6 3.4 9.3v13.8c0 1.4.9 3.1 3.6 2.5C101.7 105.7 116 86.6 116 64c0-28.7-23.3-52-52-52z"/>
    <circle cx="48" cy="55" r="4" fill="#fff"/>
    <circle cx="80" cy="55" r="4" fill="#fff"/>
    <path d="M50 78 Q64 90 78 78" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

const LangChainIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#1C3C3C"/>
    <path fill="#22C55E" d="M64 24c-22.1 0-40 17.9-40 40 0 13.3 6.5 25.1 16.5 32.4l-4.5 13.6 14.2-4.5C54.4 102.5 59.1 104 64 104c22.1 0 40-17.9 40-40s-17.9-40-40-40zm-12 30c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm24 0c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"/>
  </svg>
);

const MetaFAISSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#0668E1" d="M64 45.4C52.8 28.5 40.5 20 28.3 20 12.6 20 0 33.3 0 52.8c0 23.3 18.9 44.8 38.6 63.8 7.6 7.3 16.5 14.6 25.4 21.4 8.9-6.8 17.8-14.1 25.4-21.4C109.1 97.6 128 76.1 128 52.8 128 33.3 115.4 20 99.7 20c-12.2 0-24.5 8.5-35.7 25.4zM32 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
  </svg>
);

const PromptEngIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#9333EA"/>
    <path fill="#fff" d="M64 18l7.5 28.5L100 54 71.5 61.5 64 90l-7.5-28.5L28 54l28.5-7.5L64 18zm32 50l3.8 14.2L114 86l-14.2 3.8L96 104l-3.8-14.2L78 86l14.2-3.8L96 68z"/>
  </svg>
);

const OpenCVIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    {/* Red Top Circle */}
    <circle cx="64" cy="38" r="26" fill="#EE2C2C"/>
    <circle cx="64" cy="38" r="12" fill="#0B0F14"/>
    {/* Green Bottom-Left Circle */}
    <circle cx="38" cy="84" r="26" fill="#22C55E"/>
    <circle cx="38" cy="84" r="12" fill="#0B0F14"/>
    {/* Blue Bottom-Right Circle */}
    <circle cx="90" cy="84" r="26" fill="#3B82F6"/>
    <circle cx="90" cy="84" r="12" fill="#0B0F14"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <ellipse cx="64" cy="64" rx="18" ry="48" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 64 64)"/>
    <ellipse cx="64" cy="64" rx="18" ry="48" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 64 64)"/>
    <ellipse cx="64" cy="64" rx="18" ry="48" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 64 64)"/>
    <circle cx="64" cy="64" r="10" fill="#61DAFB"/>
  </svg>
);

const NextJSIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#000" stroke="#333" strokeWidth="4"/>
    <path fill="#fff" d="M84.5 92L47.2 44H38v40h8V56.8l33.8 43.4c1.6-1.2 3.1-2.6 4.7-4.2zM80 44h8v28h-8z"/>
  </svg>
);

const HTML5Icon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#E34F26" d="M19.1 113.6L7.3 0h113.4l-11.8 113.5L64 128z"/>
    <path fill="#EF652A" d="M64 117.8l38.2-11.5 9.7-93.5H64z"/>
    <path fill="#ECECEC" d="M64 48.7H46.1l-1.3-14.8H64V20H28.7l3.8 42.6H64zm0 37.3l-.2.1-16.1-4.3-1-11.6H33.8l2.1 23.3 28.1 7.8V86z"/>
    <path fill="#fff" d="M64 48.7h17.9l-1.7 18.9-16.2 4.4v14.1l28.1-7.8 3.3-37.1.6-6.4.7-7.4.7-7.4H64zm0-28.7v13.9h32.7l.7-7.5.6-6.4z"/>
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#1572B6" d="M19.1 113.6L7.3 0h113.4l-11.8 113.5L64 128z"/>
    <path fill="#33A9DC" d="M64 117.8l38.2-11.5 9.7-93.5H64z"/>
    <path fill="#ECECEC" d="M64 48.7H46.1l-1.3-14.8H64V20H28.7l3.8 42.6H64zm0 37.3l-.2.1-16.1-4.3-1-11.6H33.8l2.1 23.3 28.1 7.8V86z"/>
    <path fill="#fff" d="M64 48.7h17.9l-1.7 18.9-16.2 4.4v14.1l28.1-7.8 3.3-37.1.6-6.4.7-7.4.7-7.4H64zm0-28.7v13.9h32.7l.7-7.5.6-6.4z"/>
  </svg>
);

const ZustandIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#4338CA"/>
    {/* Cute Brown Bear Face */}
    <circle cx="34" cy="38" r="14" fill="#92400E"/>
    <circle cx="94" cy="38" r="14" fill="#92400E"/>
    <circle cx="64" cy="68" r="40" fill="#B45309"/>
    {/* Snout */}
    <ellipse cx="64" cy="76" rx="20" ry="16" fill="#FDE68A"/>
    <ellipse cx="64" cy="70" rx="8" ry="6" fill="#1F2937"/>
    {/* Eyes */}
    <circle cx="48" cy="58" r="5" fill="#1F2937"/>
    <circle cx="80" cy="58" r="5" fill="#1F2937"/>
  </svg>
);

const RechartsIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#1F2937"/>
    <path d="M28 92 L48 64 L72 78 L100 36" fill="none" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="92" r="6" fill="#22C55E"/>
    <circle cx="48" cy="64" r="6" fill="#22C55E"/>
    <circle cx="72" cy="78" r="6" fill="#22C55E"/>
    <circle cx="100" cy="36" r="6" fill="#22C55E"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#F05032" d="M124.9 57.3L70.7 3.1a8.5 8.5 0 0 0-12 0L3.1 58.7a8.5 8.5 0 0 0 0 12l54.2 54.2a8.5 8.5 0 0 0 12 0l55.6-55.6a8.5 8.5 0 0 0 0-12z"/>
    <path fill="#fff" d="M84.2 56.4a8.5 8.5 0 0 0-6.7 3.3L64.8 47V45a8.5 8.5 0 1 0-7 0v27.4a8.5 8.5 0 1 0 7 0V56.8l11.4 11.4a8.5 8.5 0 1 0 8-11.8z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#fff" d="M64 4C28.7 4 0 32.7 0 68c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1v-10.8c-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3 1.9-4.2 3.5-7 5.4-8.6-14.2-1.6-29.2-7.1-29.2-31.7 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.7 6.6 5.1-1.4 10.6-2.1 16.1-2.1 5.5 0 11 1.7 16.1 2.1 12.3-8.3 17.7-6.6 17.7-6.6 3.5 8.9 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.7-15 30.1-29.3 31.7 2.3 2 4.3 5.9 4.3 11.8V125c0 1.7 1.2 3.7 4.4 3.1 25.5-8.5 43.8-32.5 43.8-60.8 0-35.3-28.7-64-64-64z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#2496ED" d="M120 54.8c-2.4-.7-9.6-1.5-15.1 2.4-3.8-5.3-9.5-8.6-16-9.1l-1.3-.1c-1.2-8.3-7.5-15.1-15.8-17.2l-2.4-.6-1.6 1.9c-4.6 5.5-6.6 12.8-5.5 20H4.3C2 72.1 0 74.5 0 77.2c0 28.1 22.8 50.8 50.8 50.8 41.5 0 75.7-30.8 77.2-72.2.1-1 .2-1.9.2-2.9 0-3.9-3.7-7-8.2-7.1zM28.4 46.1h12.3v12.3H28.4zm16.4 0h12.3v12.3H44.8zm16.4 0h12.3v12.3H61.2zm-32.8 16.4h12.3v12.3H28.4zm16.4 0h12.3v12.3H44.8zm16.4 0h12.3v12.3H61.2zm16.4 0h12.3v12.3H77.6z"/>
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="60" fill="#FF6C37"/>
    {/* Postman Space Icon */}
    <path fill="#fff" d="M88.5 42.5c-4.2-4.2-11-4.2-15.2 0l-28 28c-4.2 4.2-4.2 11 0 15.2 4.2 4.2 11 4.2 15.2 0l28-28c4.2-4.2 4.2-11 0-15.2zm-23 23l-10-10 12-12 10 10-12 12z"/>
    <path fill="#fff" d="M38 90l14-4-10-10-4 14zm52-52l-4 14 10 10 14-4-20-20z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#fff" d="M64 16l56 96H8z"/>
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#00758F" d="M112 72c-2.4-7.2-7.2-12.8-14.4-16-9.6-4.8-21.6-4.8-31.2 0-7.2 3.2-12.8 8.8-15.2 16-2.4 7.2-1.6 15.2 2.4 21.6 4.8 8 13.6 12.8 23.2 12.8 9.6 0 18.4-4.8 23.2-12.8 4-6.4 4.8-14.4 2-21.6z"/>
    <path fill="#F29111" d="M86 44c4.8 2.4 8.8 6.4 11.2 11.2 2.4-4.8 6.4-8.8 11.2-11.2-4.8-2.4-8.8-6.4-11.2-11.2-2.4 4.8-6.4 8.8-11.2 11.2z"/>
    <text x="64" y="96" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SQL</text>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#336791"/>
    {/* Official Slonik Elephant Silhouette */}
    <path fill="#fff" d="M64 26c-18.8 0-34 15.2-34 34 0 13.6 8 25.3 19.5 30.6v15.4c0 3.3 2.7 6 6 6s6-2.7 6-6V94h5v12c0 3.3 2.7 6 6 6s6-2.7 6-6V90.6C86 85.3 94 73.6 94 60c0-18.8-15.2-34-34-34zm-14 36c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm28 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#FFA611" d="M18.8 90.7l23.5-44.5 12.3-23.3c1.7-3.2 6.4-2.8 7.5.7l12.7 41.5z"/>
    <path fill="#F57C00" d="M74.8 65.1L62.1 23.6c-1.1-3.5-5.8-3.9-7.5-.7L18.8 90.7l46 25.8 44.4-25.8z"/>
    <path fill="#FFCA28" d="M109.2 90.7L97.5 18.2c-.6-3.8-5.7-4.8-7.7-1.5L18.8 90.7l46 25.8 44.4-25.8z"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#13AA52" d="M64 8c-2.4 0-41.6 30.4-41.6 68.8 0 25.6 17.6 47.2 41.6 51.2 24-4 41.6-25.6 41.6-51.2C105.6 38.4 66.4 8 64 8z"/>
    <path fill="#116149" d="M64 8v120c24-4 41.6-25.6 41.6-51.2C105.6 38.4 66.4 8 64 8z"/>
    <path fill="#fff" d="M64 36v64c3.2-1.6 6.4-4.8 8-9.6s1.6-11.2-1.6-19.2c-1.6-4.8-4.8-12.8-6.4-35.2z" opacity="0.4"/>
  </svg>
);

const EspressifIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#E7352C"/>
    {/* Espressif Flame/Chip Emblem */}
    <path fill="#fff" d="M64 24c-12 16-24 24-24 40 0 13.3 10.7 24 24 24s24-10.7 24-24c0-16-12-24-24-40zm0 64c-8.8 0-16-7.2-16-16 0-8.8 8-16 16-24 8 8 16 15.2 16 24 0 8.8-7.2 16-16 16z"/>
    <text x="64" y="112" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ESP32</text>
  </svg>
);

const ArduinoIcon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#00979D"/>
    {/* Arduino Infinity */}
    <path fill="#fff" d="M42 48c-8.8 0-16 7.2-16 16s7.2 16 16 16c6.4 0 12-3.8 14.6-9.3L64 64l-7.4-6.7C54 51.8 48.4 48 42 48zm44 0c-6.4 0-12 3.8-14.6 9.3L64 64l7.4 6.7c2.6 5.5 8.2 9.3 14.6 9.3 8.8 0 16-7.2 16-16s-7.2-16-16-16z"/>
    <rect x="36" y="62" width="12" height="4" fill="#00979D"/>
    <rect x="80" y="62" width="12" height="4" fill="#00979D"/>
    <rect x="84" y="58" width="4" height="12" fill="#00979D"/>
  </svg>
);

const AES128Icon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <path fill="#0284C7" d="M64 12L20 28v36c0 30 18.8 58 44 68 25.2-10 44-38 44-68V28L64 12z"/>
    <path fill="#fff" d="M64 42c-7.7 0-14 6.3-14 14v10h-4v24h36V66h-4V56c0-7.7-6.3-14-14-14zm8 24H56V56c0-4.4 3.6-8 8-8s8 3.6 8 8v10z"/>
  </svg>
);

const SHA256Icon = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8 sm:w-10 sm:h-10">
    <circle cx="64" cy="64" r="58" fill="#7C3AED"/>
    {/* Cryptographic Key */}
    <path fill="#fff" d="M82 32c-12.1 0-22 9.9-22 22 0 3.1.6 6 1.8 8.7L32 92v16h16v-8h8v-8h8l6.3-6.3c2.7 1.2 5.6 1.8 8.7 1.8 12.1 0 22-9.9 22-22s-9.9-21.5-19-21.5zm6 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
  </svg>
);

// ==========================================
// SKILLS DATA REGISTRY WITH OFFICIAL BRAND SVGS
// ==========================================

const skills = [
  // Languages
  { name: "Python", category: "Languages", icon: <PythonIcon /> },
  { name: "Java", category: "Languages", icon: <JavaIcon /> },
  { name: "JavaScript", category: "Languages", icon: <JavaScriptIcon /> },
  { name: "C", category: "Languages", icon: <CIcon /> },
  { name: "C++", category: "Languages", icon: <CplusplusIcon /> },
  
  // AI & ML  
  { name: "FastAPI", category: "AI & ML", icon: <FastAPIIcon /> },
  { name: "PyTorch", category: "AI & ML", icon: <PyTorchIcon /> },
  { name: "Scikit-Learn", category: "AI & ML", icon: <ScikitLearnIcon /> },
  { name: "Hugging Face", category: "AI & ML", icon: <HuggingFaceIcon /> },
  { name: "NLP", category: "AI & ML", icon: <NLPIcon /> },
  { name: "RAG Systems", category: "AI & ML", icon: <LangChainIcon /> },
  { name: "Vector (FAISS)", category: "AI & ML", icon: <MetaFAISSIcon /> },
  { name: "Prompt Eng.", category: "AI & ML", icon: <PromptEngIcon /> },
  { name: "OpenCV", category: "AI & ML", icon: <OpenCVIcon /> },
  
  // Web & Frontend
  { name: "React.js", category: "Web & Frontend", icon: <ReactIcon /> },
  { name: "Next.js", category: "Web & Frontend", icon: <NextJSIcon /> },
  { name: "HTML5", category: "Web & Frontend", icon: <HTML5Icon /> },
  { name: "CSS3", category: "Web & Frontend", icon: <CSS3Icon /> },
  { name: "Zustand", category: "Web & Frontend", icon: <ZustandIcon /> },
  { name: "Recharts", category: "Web & Frontend", icon: <RechartsIcon /> },
  
  // Cloud & DevOps
  { name: "Git", category: "Cloud & DevOps", icon: <GitIcon /> },
  { name: "GitHub", category: "Cloud & DevOps", icon: <GitHubIcon /> },
  { name: "Docker", category: "Cloud & DevOps", icon: <DockerIcon /> },
  { name: "REST APIs", category: "Cloud & DevOps", icon: <PostmanIcon /> },
  { name: "Vercel", category: "Cloud & DevOps", icon: <VercelIcon /> },
  
  // Databases
  { name: "SQL", category: "Databases", icon: <MySQLIcon /> },
  { name: "PostgreSQL", category: "Databases", icon: <PostgreSQLIcon /> },
  { name: "Firebase", category: "Databases", icon: <FirebaseIcon /> },
  { name: "MongoDB", category: "Databases", icon: <MongoDBIcon /> },
  
  // Hardware & Security
  { name: "ESP32", category: "Hardware & Security", icon: <EspressifIcon /> },
  { name: "Arduino", category: "Hardware & Security", icon: <ArduinoIcon /> },
  { name: "Embedded C", category: "Hardware & Security", icon: <CIcon /> },
  { name: "AES-128", category: "Hardware & Security", icon: <AES128Icon /> },
  { name: "SHA-256", category: "Hardware & Security", icon: <SHA256Icon /> },
];

const categories = ["All", "Languages", "AI & ML", "Web & Frontend", "Cloud & DevOps", "Databases", "Hardware & Security"];
const domains = ["DSA", "Web Development", "AI/ML", "Generative AI", "API Integration", "Computer Vision"];

const softSkills = [
  "System Design Thinking",
  "Rapid Prototyping",
  "Technical Documentation",
  "Cross-domain Problem Solving",
  "Debugging Under Constraints",
  "Independent Research",
  "Iterative Building"
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-28 lg:pl-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header with side note on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-dark-border/40">
          <div>
            <ScrollReveal>
              <SectionHeader number="02" title="Skills & Tools" annotation="always learning" />
              <p className="text-blue-gray text-xs sm:text-base mt-1 sm:mt-2 max-w-xl">
                Official tools and technologies I use to build real-world systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="hidden lg:block">
            <StickyNote rotation={2} className="py-2 px-4">
              <span className="font-heading font-bold text-xs text-dark flex items-center gap-1.5">
                <FiCheckSquare className="text-dark" />
                Always Learning · Always Building
              </span>
            </StickyNote>
          </div>
        </div>

        {/* Filter Tab Bar (Smooth horizontal scroll on mobile) */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-2.5 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 font-mono text-xs sm:text-sm transition-all rounded-full cursor-pointer shrink-0 ${
                  activeTab === cat
                    ? 'bg-lime text-dark font-bold shadow-md shadow-lime/20'
                    : 'bg-dark-card text-blue-gray border border-dark-border hover:border-lime/40 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid with Authentic Official Logos */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-12">
          <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2.5 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.25 }}
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 group p-3 sm:p-4 rounded-card-lg bg-dark-card/70 border border-dark-border/80 hover:border-lime/40 hover:bg-dark-card transition-all shadow-sm"
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0"
                      title={skill.name}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-blue-gray-light text-center leading-tight group-hover:text-cream transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Core Domains */}
        <ScrollReveal delay={0.2}>
          <div className="pt-5 sm:pt-6 border-t border-dark-border/40">
            <h4 className="font-mono text-[11px] sm:text-xs text-lime uppercase tracking-widest mb-2.5 sm:mb-3">
              // Core Domains
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {domains.map((domain) => (
                <span 
                  key={domain}
                  className="bg-dark-card border border-dark-border text-cream text-[11px] sm:text-xs font-mono px-3 sm:px-3.5 py-1.5 rounded-full hover:border-lime/40 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Soft Skills */}
        <ScrollReveal delay={0.3}>
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-dark-border/40">
            <h4 className="font-mono text-[11px] sm:text-xs text-cream-dark uppercase tracking-widest mb-2.5 sm:mb-3">
              // Engineering Approach & Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {softSkills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-dark-card/80 text-blue-gray-light text-[11px] sm:text-xs font-mono px-3 sm:px-3.5 py-1.5 rounded-md border border-dark-border hover:text-cream transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Skills;
