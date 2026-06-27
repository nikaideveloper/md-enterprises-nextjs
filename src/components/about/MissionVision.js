import React from 'react';
import { aboutPageData } from '@/config/about';
import { Eye, Target } from 'lucide-react';

export default function MissionVision() {
  const { missionVision } = aboutPageData;

  const iconMap = {
    'vision-eye': Eye,
    'mission-target': Target,
  };

  return (
    <section className="w-full  py-12 md:py-10 bg-white px-6">
      <div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#a5d332]">
        
        {missionVision.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          const isDark = item.theme === 'dark';

          return (
            <div
              key={index}
              className={`
                relative p-10 m-2 md:p-14 flex flex-col justify-between min-h-[280px]
                ${isDark 
                  ? 'bg-[#1a3636] text-white' 
                  : 'bg-[#dde8c0] text-[#1a1a1a]'
                }
                ${index === 0 ? 'border-r border-[#a5d332]' : ''}
              `}
            >
              {/* Top Row: Icon + Title */}
              <div>
                <div className="flex items-center gap-5 mb-4">
                  {/* Icon Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0
                    ${isDark 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white border border-gray-200'
                    }
                  `}>
                    {IconComponent && (
                      <IconComponent
                        size={26}
                        className={isDark ? 'text-white' : 'text-[#1a3636]'}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-2xl md:text-3xl font-bold
                    ${isDark ? 'text-white' : 'text-[#1a1a1a]'}
                  `}>
                    {item.title}
                  </h3>
                </div>

                {/* Divider Under Title */}
                <div className={`
                  w-12 h-[3px] mb-6 ml-[76px]
                  ${isDark ? 'bg-[#a5d332]' : 'bg-[#1a3636]'}
                `}></div>

                {/* Description */}
                <p className={`
                  text-sm md:text-base leading-relaxed font-normal
                  ${isDark ? 'text-gray-300' : 'text-gray-700'}
                `}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}