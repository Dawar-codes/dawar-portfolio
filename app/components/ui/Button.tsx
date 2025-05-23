import { ClipLoader } from 'react-spinners';

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  title: string;
  handleClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  loading,
  title,
  handleClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-zinc-900 rounded-lg p-px text-sm font-semibold leading-6  text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
  className={`relative flex items-center justify-center z-10 rounded-lg bg-zinc-950 text-accent hover:text-emerald-200 transition-colors py-2 px-4 sm:px-6 md:px-7 ring-1 ring-white/10 text-xs sm:text-sm md:text-base ${className}`}
  style={{ minWidth: '170px' }} // ← Set based on the width of the loading state
>

        {loading ? (
          <div className="flex items-center justify-center gap-2 w-full">
            <ClipLoader color="#fff" loading={true} size={16} />
            <span>Sending...</span>
          </div>
        ) : (
          <>
            <span>{title}</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </>
        )}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default Button;
