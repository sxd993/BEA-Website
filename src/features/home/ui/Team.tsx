import { teamMembers } from '../const/teamMembers';

// Define the interface for a team member
interface TeamMember {
  name: string;
  role: string;
  description: string;
  experience: string;
  skills: string[];
  social: string[];
  photo: string;
}

export const Team = () => {
  return (
    <div className="flex flex-col items-center bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Наша команда
        </h1>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Профессионалы с многолетним опытом, готовые воплотить любую вашу идею в жизнь
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {teamMembers.map((member: TeamMember, index: number) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <img src={member.photo || ""} alt={`${member.name} photo`} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{member.role}</p>
            <p className="text-gray-500 text-xs mb-2">{member.description}</p>
            <p className="text-gray-500 text-xs mb-2">{member.experience}</p>
            <div className="flex justify-center space-x-2">
              {member.social.includes("github") && (
                <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
                </svg>
              )}
              {member.social.includes("linkedin") && (
                <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
                </svg>
              )}
              {member.social.includes("email") && (
                <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2zm0 8h-2v-2h2z"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};