export function LikeComponent({width = 16, height = 16,...props}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.333 5.333h-3.74l.747-2.246a1.348 1.348 0 00-.18-1.2 1.339 1.339 0 00-1.08-.554H8.007c-.2 0-.387.087-.514.24L4.36 5.333H2.673c-.733 0-1.333.6-1.333 1.334v6c0 .733.6 1.333 1.333 1.333h8.873a1.334 1.334 0 001.247-.867l1.84-4.9a.688.688 0 00.04-.233V6.667c0-.734-.6-1.334-1.333-1.334h-.007zM4 12.667H2.667v-6H4v6zm9.333-4.787l-1.793 4.787H5.333V6.24l2.98-3.573h.767l-1.04 3.12a.673.673 0 00.633.88h4.667V7.88h-.007z"
        fill="#fff"
      />
    </svg>
  )
}


export function TheMovieDBLogo(props) {
  return (
    <svg
      width={145}
      height={12}
      viewBox="0 0 424 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1520)">
        <path
          d="M227.5 0h8.9l8.75 23.2h.1l8.9-23.2h8.35l-14.6 35.4h-6.25L227.5 0zm46.6 0h7.8v35.4h-7.8V0zm22.2 0h24.05v7.2H304.1v6.6h15.35V21H304.1v7.2h17.15v7.2H296.3V0zm55 0H363c2.721.005 5.431.34 8.07 1a18.548 18.548 0 016.68 3 15.104 15.104 0 014.52 5.53A18.498 18.498 0 01384 17.8a16.912 16.912 0 01-1.63 7.58 16.382 16.382 0 01-4.37 5.5 19.522 19.522 0 01-6.35 3.37A24.586 24.586 0 01364 35.4h-12.71L351.3 0zm7.81 28.2h4c1.682.012 3.36-.172 5-.55a10.873 10.873 0 004-1.83 8.693 8.693 0 002.67-3.34 11.91 11.91 0 001-5.08 9.866 9.866 0 00-1-4.52 9.008 9.008 0 00-2.62-3.18 11.674 11.674 0 00-3.88-1.88 17.425 17.425 0 00-4.67-.62h-4.6l.1 21zM395.24 0h13.2c1.549.002 3.096.11 4.63.32 1.454.193 2.864.633 4.17 1.3a7.883 7.883 0 013 2.73A8.335 8.335 0 01421.39 9a7.42 7.42 0 01-1.67 5 9.28 9.28 0 01-4.43 2.82v.1c1.108.153 2.183.491 3.18 1a8.377 8.377 0 012.45 1.85 7.786 7.786 0 011.57 2.62 9.163 9.163 0 01.55 3.2 8.521 8.521 0 01-1.2 4.68 9.421 9.421 0 01-3.1 3 13.376 13.376 0 01-4.27 1.65c-1.555.329-3.14.496-4.73.5h-14.5V0zM403 14.15h5.65a8.154 8.154 0 001.78-.2 4.778 4.778 0 001.57-.65c.471-.3.859-.712 1.13-1.2a3.626 3.626 0 00.42-1.8 3.22 3.22 0 00-.47-1.82 3.33 3.33 0 00-1.23-1.13 5.776 5.776 0 00-1.7-.58c-.611-.11-1.23-.167-1.85-.17H403v7.55zm0 14.65h7a8.907 8.907 0 001.83-.2 4.782 4.782 0 001.67-.7c.503-.335.923-.78 1.23-1.3.342-.61.505-1.302.47-2a3.131 3.131 0 00-.62-2 4 4 0 00-1.58-1.15 7.827 7.827 0 00-2-.55 15.134 15.134 0 00-2.05-.15H403v8.05zm-199 6.53h1a17.66 17.66 0 0012.488-30.151A17.668 17.668 0 00205 0h-.91a17.67 17.67 0 00-12.518 30.157 17.66 17.66 0 0012.488 5.173H204zM10.1 6.9H0V0h28v6.9H17.9v28.5h-7.8V6.9zM39 0h7.8v13.2h15.1V0h7.8v35.4h-7.8V20.1H46.75v15.3H39V0zm41.2 0h24v7.2H88v6.6h15.35V21H88v7.2h17.15v7.2h-25L80.2 0zm55 0H147l8.15 23.1h.1l8.2-23.1h11.75v35.4h-7.8V8.25h-.1L158 35.4h-5.95l-9-27.15H143V35.4h-7.8V0z"
          fill="url(#paint0_linear_1_1520)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_1520"
          x1={0}
          y1={17.7}
          x2={423.04}
          y2={17.7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#90CEA1" />
          <stop offset={0.56} stopColor="#3CBEC9" />
          <stop offset={1} stopColor="#00B3E5" />
        </linearGradient>
        <clipPath id="clip0_1_1520">
          <path fill="#fff" d="M0 0H423.04V35.4H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Tvcomponent(props) {
  return (
    <svg
      width={281}
      height={281}
      viewBox="0 0 281 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M145.183 208.405a4.683 4.683 0 00-4.683-4.683h-4.683a4.684 4.684 0 00-4.684 4.683v11.179c0 2.534-2.016 4.604-4.548 4.724a245.651 245.651 0 00-24.9 2.448l-25.8 3.869a9.368 9.368 0 00-7.977 9.264v2.47a2.342 2.342 0 002.342 2.342h135.817a2.342 2.342 0 002.341-2.342v-2.47a9.367 9.367 0 00-7.977-9.264l-25.8-3.869a245.623 245.623 0 00-24.9-2.448c-2.531-.12-4.548-2.19-4.548-4.724v-11.179z"
        fill="url(#paint0_radial_16_1316)"
      />
      <path
        d="M72.592 237.05c0-1.983 1.4-3.679 3.357-4.011 9.989-1.692 40.192-6.48 62.209-6.48 22.018 0 52.221 4.788 62.21 6.48 1.957.332 3.357 2.028 3.357 4.011 0 .637-.556 1.124-1.184 1.021-6.926-1.145-42.643-6.867-64.383-6.867-21.74 0-57.456 5.722-64.383 6.867a1.021 1.021 0 01-1.183-1.021z"
        fill="url(#paint1_radial_16_1316)"
      />
      <path
        d="M245.875 46.833H35.125a7.025 7.025 0 00-7.025 7.025v147.525a7.025 7.025 0 007.025 7.025h210.75a7.025 7.025 0 007.025-7.025V53.858a7.025 7.025 0 00-7.025-7.025z"
        fill="url(#paint2_linear_16_1316)"
      />
      <path
        d="M245.875 46.833H35.125a7.025 7.025 0 00-7.025 7.025v147.525a7.025 7.025 0 007.025 7.025h210.75a7.025 7.025 0 007.025-7.025V53.858a7.025 7.025 0 00-7.025-7.025z"
        fill="url(#paint3_radial_16_1316)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.125 49.175h210.75a4.682 4.682 0 014.683 4.683V196.7H30.441V53.858a4.683 4.683 0 014.684-4.683zM28.1 196.7V53.858a7.025 7.025 0 017.025-7.025h210.75a7.025 7.025 0 017.025 7.025v147.525a7.025 7.025 0 01-7.025 7.025H35.125a7.025 7.025 0 01-7.025-7.025V196.7z"
        fill="url(#paint4_radial_16_1316)"
      />
      <path
        d="M138.158 206.067c3.88 0 7.025-1.573 7.025-3.513s-3.145-3.512-7.025-3.512c-3.879 0-7.025 1.572-7.025 3.512s3.146 3.513 7.025 3.513z"
        fill="url(#paint5_radial_16_1316)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_16_1316"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(118.526 40.918 154.742) scale(215.269 180.648)"
        >
          <stop stopColor="#000B80" />
          <stop offset={0.333333} stopColor="#183B6F" />
          <stop offset={0.666667} stopColor="#13455B" />
          <stop offset={1} stopColor="#1D1945" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_16_1316"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-118.52397 47.60789 -61.41488 -152.89766 187.754 209.239)"
        >
          <stop stopColor="#1D4499" />
          <stop offset={0.333333} stopColor="#2E1699" />
          <stop offset={0.666667} stopColor="#18477D" />
          <stop offset={1} stopColor="#34216E" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_16_1316"
          x1={40.8726}
          y1={58.3746}
          x2={219.24}
          y2={200.92}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A1699" />
          <stop offset={0.245283} stopColor="#00CAC0" />
          <stop offset={0.346698} stopColor="#47E3FF" />
          <stop offset={0.46934} stopColor="#4AB9F1" />
          <stop offset={0.735849} stopColor="#1A1DBC" />
          <stop offset={1} stopColor="#734FF5" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_16_1316"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 101.305 -100.904 0 150.718 92.998)"
        >
          <stop stopColor="#1C0E20" stopOpacity={0} />
          <stop offset={1} stopColor="#1C0E20" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_16_1316"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-149.86579 107.71726 -102.09914 -142.04936 210.75 78.812)"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_16_1316"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(135 29.764 129.739) scale(17.9034)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCFCFF" />
          <stop offset={0.333333} stopColor="#BDDFFF" />
          <stop offset={0.666667} stopColor="#9DCCF8" />
          <stop offset={1} stopColor="#B1A1FA" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function FaceError({width = 53, height = 53, ...props}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props, props.width, props.height}
    >
      <path
        d="M1.2 6A4.8 4.8 0 016 1.2h25.2A4.8 4.8 0 0136 6v25.2a4.8 4.8 0 01-4.8 4.8H6a4.8 4.8 0 01-4.8-4.8V6z"
        fill="url(#paint0_radial_25_365)"
      />
      <path
        d="M0 4.8A4.8 4.8 0 014.8 0H30a4.8 4.8 0 014.8 4.8V30a4.8 4.8 0 01-4.8 4.8H4.8A4.8 4.8 0 010 30V4.8z"
        fill="url(#paint1_radial_25_365)"
      />
      <path
        d="M14.071 23.047a.9.9 0 11-.917-1.549c1.071-.635 4.015-1.775 7.884-1.775 3.868 0 6.812 1.14 7.883 1.776a.9.9 0 11-.917 1.548c-.785-.465-3.41-1.524-6.966-1.524-3.557 0-6.182 1.059-6.967 1.524z"
        fill="url(#paint2_linear_25_365)"
      />
      <path
        opacity={0.35}
        d="M9.6 34.8h9L22.8 18a8.72 8.72 0 00-5.108 3.804L9.6 34.8z"
        fill="url(#paint3_radial_25_365)"
      />
      <path
        d="M18 22.8a4.8 4.8 0 014.8-4.8H48a4.8 4.8 0 014.8 4.8V48a4.8 4.8 0 01-4.8 4.8H22.8A4.8 4.8 0 0118 48V22.8z"
        fill="url(#paint4_radial_25_365)"
      />
      <path
        d="M42.359 31.5l5.29-5.037a.609.609 0 01.84.882l-5.29 5.036a.609.609 0 11-.84-.882z"
        fill="#D9D9D9"
      />
      <path
        d="M43.347 26.357l5.036 5.29a.609.609 0 01-.882.84l-5.036-5.29a.609.609 0 01.882-.84zM24.71 31.942l4.425-5.811a.609.609 0 01.968.737L25.68 32.68a.609.609 0 11-.969-.738z"
        fill="#D9D9D9"
      />
      <path
        d="M24.87 26.709l5.811 4.424a.609.609 0 11-.737.969l-5.812-4.425a.609.609 0 11.738-.968zM6.683 13.768l3.455-4.537a.475.475 0 01.756.576l-3.455 4.537a.475.475 0 01-.756-.576z"
        fill="#D9D9D9"
      />
      <path
        d="M6.683 13.768l3.455-4.537a.475.475 0 01.756.576l-3.455 4.537a.475.475 0 01-.756-.576z"
        fill="url(#paint5_linear_25_365)"
      />
      <path
        d="M6.808 9.682l4.537 3.454a.475.475 0 01-.575.757l-4.538-3.455a.475.475 0 11.576-.756z"
        fill="#D9D9D9"
      />
      <path
        d="M6.808 9.682l4.537 3.454a.475.475 0 01-.575.757l-4.538-3.455a.475.475 0 11.576-.756z"
        fill="url(#paint6_linear_25_365)"
      />
      <path
        d="M23.226 13.007l4.828-3.035a.475.475 0 01.506.804l-4.828 3.035a.475.475 0 01-.506-.804z"
        fill="url(#paint7_linear_25_365)"
      />
      <path
        d="M24.778 9.224l3.035 4.829a.475.475 0 11-.805.505L23.973 9.73a.475.475 0 11.805-.506z"
        fill="url(#paint8_linear_25_365)"
      />
      <path
        d="M32.221 41.2a.9.9 0 11-.917-1.55c1.071-.634 4.015-1.775 7.884-1.775 3.868 0 6.812 1.14 7.883 1.776a.9.9 0 11-.917 1.548c-.785-.465-3.41-1.524-6.967-1.524-3.556 0-6.181 1.06-6.966 1.524z"
        fill="url(#paint9_radial_25_365)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_25_365"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-56 54.4998 -74.2887 -38.8671 59.6 -18.902)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A1699" />
          <stop offset={0.269231} stopColor="#47E3FF" />
          <stop offset={0.514423} stopColor="#00CAC0" />
          <stop offset={0.927885} stopColor="#1A1DBC" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_25_365"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="scale(-44.3444 -88.6886) rotate(-45 -.413 .73)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCFCFF" />
          <stop offset={0.333333} stopColor="#BDDFFF" />
          <stop offset={0.666667} stopColor="#9DCCF8" />
          <stop offset={1} stopColor="#B1A1FA" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_25_365"
          x1={14.4783}
          y1={19.0347}
          x2={14.5354}
          y2={22.5603}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_25_365"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(135 11.21 15.363) scale(23.3345)"
        >
          <stop stopColor="#84EDFF" />
          <stop offset={0.333333} stopColor="#789EFF" />
          <stop offset={0.666667} stopColor="#5F89F4" />
          <stop offset={1} stopColor="#4A6BF1" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_25_365"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(-56 54.5 -74.2887 -38.8672 76.4 -2.102)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A1699" />
          <stop offset={0.269231} stopColor="#47E3FF" />
          <stop offset={0.514423} stopColor="#00CAC0" />
          <stop offset={0.927885} stopColor="#1A1DBC" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_25_365"
          x1={6.62671}
          y1={15.6256}
          x2={7.06236}
          y2={10.0503}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_25_365"
          x1={6.62671}
          y1={15.6256}
          x2={7.06236}
          y2={10.0503}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_25_365"
          x1={23.6163}
          y1={15.9331}
          x2={24.075}
          y2={10.0623}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_25_365"
          x1={23.6163}
          y1={15.9331}
          x2={24.075}
          y2={10.0623}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44EFEF" />
          <stop offset={0.333333} stopColor="#091BE5" />
          <stop offset={0.666667} stopColor="#0D22A7" />
          <stop offset={1} stopColor="#2A5895" />
        </linearGradient>
        <radialGradient
          id="paint9_radial_25_365"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-137.146 41.496 28.548) scale(73.6614 60.3576)"
        >
          <stop stopColor="#FFDCCC" />
          <stop offset={0.333333} stopColor="#FDF6F6" />
          <stop offset={0.666667} stopColor="#FADCE9" />
          <stop offset={1} stopColor="#E4A1FA" />
        </radialGradient>
      </defs>
    </svg>
  )
}



