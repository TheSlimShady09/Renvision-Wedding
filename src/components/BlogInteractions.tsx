"use client";

import { useState, useEffect, FormEvent } from "react";
import { Heart, Eye, MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Comment = {
  id: string;
  name: string;
  date: string;
  text: string;
};

const INITIAL_COMMENTS: Record<string, Comment[]> = {
  "find-the-perfect-wedding-videographer": [
    {
      id: "c1",
      name: "Sarah Jenkins",
      date: "Jan 03, 2023",
      text: "This advice is spot on! We hired our videographer based on their raw audio capability and it made our ceremony film so much more emotional."
    },
    {
      id: "c2",
      name: "David M.",
      date: "Jan 12, 2023",
      text: "Love this. Paying attention to lighting is so critical during late evening receptions!"
    }
  ],
  "the-importance-of-a-personal-connection": [
    {
      id: "c1",
      name: "Martina K.",
      date: "Jan 02, 2023",
      text: "We felt like Renis was a close friend on our wedding day. It really made all the difference in how comfortable we looked in front of the camera!"
    },
    {
      id: "c2",
      name: "Julian P.",
      date: "Jan 15, 2023",
      text: "Yes! If you are stiff, it shows. Trusting your filmmaker is key."
    }
  ],
  "why-creative-input-is-important": [
    {
      id: "c1",
      name: "Christine R.",
      date: "Jan 04, 2023",
      text: "Our pre-wedding call was so collaborative. We felt heard and the final film matched our aesthetic perfectly!"
    },
    {
      id: "c2",
      name: "Liam Henderson",
      date: "Jan 19, 2023",
      text: "Such a good reminder to share visual references early!"
    }
  ],
  "the-importance-of-style-and-aesthetic": [
    {
      id: "c1",
      name: "Sophia L.",
      date: "Jan 05, 2023",
      text: "The fine art editorial style is what drew us to Renivision. Timeless color grading > trendy filter edits any day!"
    },
    {
      id: "c2",
      name: "Marcus Davis",
      date: "Jan 22, 2023",
      text: "I'm so glad we chose a documentary style for the reception, it captured the energy perfectly!"
    }
  ]
};

const BASELINE_STATS: Record<string, { likes: number; views: number }> = {
  "find-the-perfect-wedding-videographer": { likes: 78, views: 342 },
  "the-importance-of-a-personal-connection": { likes: 92, views: 418 },
  "why-creative-input-is-important": { likes: 65, views: 295 },
  "the-importance-of-style-and-aesthetic": { likes: 114, views: 512 }
};

export default function BlogInteractions({ slug }: { slug: string }) {
  // Load baseline stats or defaults
  const stats = BASELINE_STATS[slug] || { likes: 12, views: 45 };
  
  const [likes, setLikes] = useState(stats.likes);
  const [hasLiked, setHasLiked] = useState(false);
  
  const [views, setViews] = useState(stats.views);
  const [comments, setComments] = useState<Comment[]>([]);
  
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

  // Populate comments and increment views on mount
  useEffect(() => {
    setComments(INITIAL_COMMENTS[slug] || []);
    // Simulate updating views count by 1 on view mount
    const timer = setTimeout(() => {
      setViews(prev => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [slug]);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newCommentObj: Comment = {
      id: `custom_${Date.now()}`,
      name: newCommentName.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }),
      text: newCommentText.trim()
    };

    setComments(prev => [...prev, newCommentObj]);
    setNewCommentName("");
    setNewCommentText("");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="mt-16 pt-10 border-t editorial-border font-sans max-w-2xl mx-auto">
      
      {/* Stats Counter Row */}
      <div className="flex items-center justify-between py-4 border-b border-neutral-200/60 mb-10 text-sm">
        <div className="flex items-center gap-6">
          {/* Likes */}
          <button 
            onClick={handleLike}
            className="flex items-center gap-2 group transition-colors duration-300 text-neutral-600 hover:text-[var(--color-renivision-accent)] cursor-pointer"
            aria-label={hasLiked ? "Unlike post" : "Like post"}
          >
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Heart 
                size={18} 
                className={`transition-colors duration-300 ${hasLiked ? "fill-[var(--color-renivision-accent)] text-[var(--color-renivision-accent)]" : "text-neutral-500 group-hover:text-[var(--color-renivision-accent)]"}`}
              />
            </motion.div>
            <span className={hasLiked ? "text-[var(--color-renivision-accent)] font-semibold" : ""}>
              {likes} {likes === 1 ? "Like" : "Likes"}
            </span>
          </button>

          {/* Views */}
          <div className="flex items-center gap-2 text-neutral-500">
            <Eye size={18} />
            <span>{views.toLocaleString()} Views</span>
          </div>
        </div>

        {/* Comment Count */}
        <div className="flex items-center gap-2 text-neutral-500">
          <MessageSquare size={18} />
          <span>{comments.length} {comments.length === 1 ? "Comment" : "Comments"}</span>
        </div>
      </div>

      {/* Comments List */}
      <div className="mb-12">
        <h3 className="font-serif text-xl sm:text-2xl mb-8 text-[var(--color-renivision-text)] font-medium">
          Discussion ({comments.length})
        </h3>
        
        <div className="space-y-6">
          <AnimatePresence initial={false}>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex gap-4 p-5 bg-neutral-50/60 rounded-2xl border border-neutral-100"
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[var(--color-renivision-bg)] border border-neutral-200 flex items-center justify-center text-xs font-semibold text-[var(--color-renivision-accent)] shrink-0 select-none">
                  {getInitials(comment.name) || "U"}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-medium text-sm text-[var(--color-renivision-text)] truncate">
                      {comment.name}
                    </span>
                    <span className="text-xs text-neutral-400 font-light ml-2">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                    {comment.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Comment Submission Form */}
      <div className="bg-neutral-50 p-6 sm:p-8 rounded-[2rem] border border-neutral-100">
        <h4 className="font-serif text-lg mb-6 text-[var(--color-renivision-text)] font-medium">
          Share your thoughts
        </h4>
        
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="commenter-name" className="text-xs uppercase tracking-widest mb-2 opacity-70">
              Name
            </label>
            <input
              type="text"
              id="commenter-name"
              required
              value={newCommentName}
              onChange={(e) => setNewCommentName(e.target.value)}
              className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm"
              placeholder="Your name"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="commenter-text" className="text-xs uppercase tracking-widest mb-2 opacity-70">
              Comment
            </label>
            <textarea
              id="commenter-text"
              required
              rows={3}
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors resize-none text-sm leading-relaxed"
              placeholder="Join the conversation..."
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-renivision-text)] text-white uppercase tracking-widest text-xs hover:bg-[var(--color-renivision-accent)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Send size={12} />
              Post Comment
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
