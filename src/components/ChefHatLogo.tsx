export default function ChefHatLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <style>
        {`
          .chef-hat-logo {
            animation: chef-sway 3s ease-in-out infinite;
            transform-origin: bottom center;
          }
          .chef-steam {
            animation: chef-steam 2s ease-out infinite;
            opacity: 0;
          }
          .chef-steam-2 { animation-delay: 0.5s; }
          .chef-steam-3 { animation-delay: 1s; }
          @keyframes chef-sway {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
          @keyframes chef-steam {
            0% { opacity: 0; transform: translateY(2px) scale(0.8); }
            30% { opacity: 0.55; }
            100% { opacity: 0; transform: translateY(-7px) scale(1.1); }
          }
          @media (prefers-reduced-motion: reduce) {
            .chef-hat-logo,
            .chef-steam { animation: none; }
          }
        `}
      </style>

      {/* Steam puffs */}
      <circle className="chef-steam chef-steam-1" cx="11" cy="9" r="1.5" fill="currentColor" />
      <circle className="chef-steam chef-steam-2" cx="16" cy="7" r="1.5" fill="currentColor" />
      <circle className="chef-steam chef-steam-3" cx="21" cy="9" r="1.5" fill="currentColor" />

      {/* Hat */}
      <g className="chef-hat-logo">
        <path
          d="M10 24 h12 a1 1 0 0 1 1 1 v3 a1 1 0 0 1 -1 1 h-12 a1 1 0 0 1 -1 -1 v-3 a1 1 0 0 1 1 -1 z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 24 c-3 -7, 3 -12, 7 -12 c0 -5, 8 -5, 8 0 c4 0, 10 5, 7 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
