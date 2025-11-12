import { useNavigate } from 'react-router-dom';

export const useProjectCard = (projectId: number) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/projects/${projectId}`);
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  return {
    handleViewDetails,
    handleOpenLink,
  };
};

