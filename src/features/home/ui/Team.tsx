import { Github, Linkedin, Mail, User } from 'lucide-react';
import { teamMembers, type TeamMember } from '../const/teamMembers';

export const Team = () => {
  const getSocialIcon = (platform: string) => {
    const iconProps = { className: "w-5 h-5", strokeWidth: 1.5 };

    switch (platform) {
      case 'github':
        return <Github {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'email':
        return <Mail {...iconProps} />;
      default:
        return null;
    }
  };

  const handleSocialClick = (platform: keyof TeamMember['social'], url?: string) => {
    if (!url) return;

    if (platform === 'email') {
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const renderMember = (member: TeamMember, index: number) => (
    <div
      key={`${member.name}-${index}`}
      className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
    >
      {/* Фото участника */}
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
          {member.photo ? (
            <img
              src={member.photo}
              alt={`${member.name} фото`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback при ошибке загрузки изображения
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

      {/* Информация о участнике */}
      <div className="text-center space-y-3">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="text-xs md:text-sm text-primary font-medium">
            {member.role}
          </p>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {member.description}
        </p>

        {/* Навыки */}
        <div className="flex flex-wrap gap-1 justify-center text-[#b76ec7]">
          {member.skills.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={`${skill}-${skillIndex}`}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{member.skills.length - 3}
            </span>
          )}
        </div>

        {/* Социальные сети */}
        <div className="flex justify-center space-x-3 pt-2">
          {Object.entries(member.social).map(([platform, url]) => (
            url && (
              <button
                key={platform}
                onClick={() => handleSocialClick(platform as keyof TeamMember['social'], url)}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200 hover:scale-110"
                title={`Связаться через ${platform}`}
              >
                {getSocialIcon(platform)}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
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