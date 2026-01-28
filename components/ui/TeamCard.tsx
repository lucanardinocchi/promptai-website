'use client';

import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export default function TeamCard({ name, role, bio, imageUrl }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="card text-center group"
    >
      {/* Avatar */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl font-display text-white">
            {name.charAt(0)}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-display text-charcoal-900 mb-1">{name}</h3>

      {/* Role */}
      <p className="text-orange-500 font-medium text-sm mb-4">{role}</p>

      {/* Bio */}
      <p className="text-charcoal-700 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  );
}

