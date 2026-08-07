import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, Share2, Check, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 shadow-2xl bg-white text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 border border-slate-300 shadow-md transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FF6B00] text-xs font-bold text-white uppercase tracking-widest shadow-sm">
                {post.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {post.title}
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Meta & Author Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover border border-slate-300" />
                <div>
                  <div className="text-sm font-bold text-slate-900 font-heading">{post.author.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B00]" />
                  {post.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  {post.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-xs text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Link Copied' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {post.content}
            </div>

            {/* Tags */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-[#FF6B00]" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Newsletter CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 space-y-3 shadow-sm">
              <div className="text-sm font-bold text-slate-900 font-heading flex items-center gap-2">
                Subscribe to TOP GROUP Executive Briefings
              </div>
              <p className="text-xs text-slate-600 font-normal">
                Receive monthly Eurasian trade intelligence, quantitative market reports, and AI architecture updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter executive email..."
                  className="flex-1 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#FF6B00]"
                />
                <button className="px-5 py-2 rounded-full text-xs font-bold text-white btn-orange-gradient shadow-sm">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
