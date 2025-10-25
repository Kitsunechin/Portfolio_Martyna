interface ProjectHeaderProps {
  title: string;
  description: string;
  role?: string;
  team?: string;
  timeline?: string;
}

const ProjectHeader = ({
  title,
  description,
  role,
  team,
  timeline,
}: ProjectHeaderProps) => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 relative py-16 px-6 md:px-10 overflow-hidden shadow-2xl" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl relative z-20 text-white">
          {title}
        </h1>

        <div className="flex flex-col md:flex-row gap-16 relative">
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-lg md:text-xl font-medium mb-4 max-w-md relative z-20 text-white">
              {description}
            </h2>
          </div>

          <div className="md:w-1/2 relative z-10">
            {(role || team || timeline) && (
              <div className="space-y-3 text-sm md:text-base relative z-20 text-white">
                {role && (
                  <div>
                    <span className="font-medium">Role:</span> {role}
                  </div>
                )}
                {team && (
                  <div>
                    <span className="font-medium">Team:</span> {team}
                  </div>
                )}
                {timeline && (
                  <div>
                    <span className="font-medium">Timeline:</span> {timeline}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
