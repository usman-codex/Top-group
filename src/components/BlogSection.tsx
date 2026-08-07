import React from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, onNavigateSection }) => {
  return (
    <section id="blog" className="py-24 bg-[#FFF6EE] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Insights & Thought Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Executive <span className="text-[#FF6B00]">Blog</span> & Resources
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Deep technical analyses, Eurasian economic trends, and agentic AI benchmarks published by TOP GROUP leaders.
          </p>

          {onNavigateSection && (
            <div className="mt-6">
              <button
                onClick={() => onNavigateSection('resources')}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1B365D] hover:bg-[#112440] text-white text-xs font-bold shadow-md hover:shadow-blue-900/30 transition-all cursor-pointer"
              >
                <span>Explore Full Knowledge Hub & Whitepapers</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B00]" />
              </button>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:shadow-blue-900/20 hover:border-[#1B365D] overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300"
              onClick={() => onSelectPost(post)}
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-[#FF6B00] shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF6B00]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#1B365D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-3 pt-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{post.author.role}</div>
                  </div>
                </div>

                <div className="relative overflow-hidden w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 group-hover:border-[#FF6B00] text-xs font-bold text-slate-900 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:shadow-orange-500/30">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8800] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
