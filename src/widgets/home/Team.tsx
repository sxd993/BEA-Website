import { User } from 'lucide-react';
import { teamMembers, type TeamMember } from '../../shared/lib/teamMembers';
import { getSocialIcon, handleSocialClick } from '../../shared/lib/utils/teamUtils';

export const Team = () => {
  const renderSocialIcon = (platform: string) => {
    const IconComponent = getSocialIcon(platform);
    if (!IconComponent) return null;
    
    return <IconComponent className="w-5 h-5" strokeWidth={1.5} />;
  };

  const renderMember = (member: TeamMember, index: number) => (
    <div
      key={`${member.name}-${index}`}
      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200/50 hover:shadow-xl hover:shadow-gray-300/30 hover:bg-gradient-to-br hover:from-[#b76ec7]/5 hover:to-white transition-all duration-500 group hover:-translate-y-2 hover:border-[#b76ec7]/30"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl">
          {member.photo ? (
            <img
              src={member.photo}
              alt={`${member.name} фото`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-primary/10 flex items-center justify-center">
                    <svg class="w-8 h-8 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                `;
              }}
            />
          ) : (
            <User className="w-8 h-8 text-muted-foreground" />
          )}
        </div>
      </div>

      <div className="text-center space-y-3">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#8e24aa] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-xs md:text-sm text-[#b76ec7] font-medium">
            {member.role}
          </p>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {member.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={`${skill}-${skillIndex}`}
              className="px-3 py-1.5 bg-gradient-to-r from-[#b76ec7]/10 to-[#8e24aa]/10 text-[#b76ec7] text-xs rounded-full border border-[#b76ec7]/20 shadow-sm"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-xs rounded-full border border-gray-300/50 shadow-sm">
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex justify-center space-x-3 pt-3">
          {Object.entries(member.social).map(([platform, url]) => (
            url && (
              <button
                key={platform}
                onClick={() => handleSocialClick(platform as keyof TeamMember['social'], url)}
                className="p-2.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-[#b76ec7] hover:to-[#8e24aa] hover:text-white text-gray-600 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                title={`Связаться через ${platform}`}
              >
                {renderSocialIcon(platform)}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-200/20 p-8 md:p-12 hover:shadow-3xl hover:shadow-gray-300/30 transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#8e24aa] to-gray-900 bg-clip-text text-transparent">
              Наша команда
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Профессионалы с многолетним опытом, готовые воплотить любую вашу идею в жизнь
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-8">
              {teamMembers.map((member, index) => renderMember(member, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
