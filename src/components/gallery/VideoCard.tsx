import React from "react";
import { Play, Clock, MapPin } from "lucide-react";
import { GalleryVideo } from "../../data/gallery";
import { motion } from "motion/react";

interface VideoCardProps {
  video: GalleryVideo;
  onPlay: (video: GalleryVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => onPlay(video)}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#002247]/10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col text-left"
    >
      {/* 16:9 Thumbnail Viewport */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play Icon Pulse Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 text-[#002247] flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 group-hover:bg-[#C2A03E] group-hover:text-white transition-all duration-300">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-medium flex items-center gap-1 border border-white/10">
          <Clock className="w-3 h-3 text-[#C2A03E]" />
          <span>{video.duration}</span>
        </div>

        {/* Location Tag */}
        {video.locationTag && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#002247]/80 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1 border border-[#C2A03E]/30">
            <MapPin className="w-3 h-3 text-[#C2A03E]" />
            <span>{video.locationTag}</span>
          </div>
        )}
      </div>

      {/* Content Meta */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-[#002247] group-hover:text-[#007FF0] transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>
          <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#007FF0] font-bold">
          <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Watch Full Video &rarr;
          </span>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
            HD Travel Feature
          </span>
        </div>
      </div>
    </motion.div>
  );
};

