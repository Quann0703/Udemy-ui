export const HeartIcon = ({ width = '2.5rem', height = '2.5rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
    </svg>
);

export const CartIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
    >
        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
);
export const SearchIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        aria-label="Gửi cụm từ tìm kiếm"
        role="img"
        focusable="false"
        // class="ud-icon ud-icon-medium ud-icon-color-neutral"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
    </svg>
);
export const UploadIcon = ({ width = '1.9rem', height = '2.1rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        aria-hidden="true"
        focusable="false"
        dataPrefix="fas"
        dataIcon="bell"
        class="svg-inline--fa fa-bell NavBar_action-icon__l9MxX"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
    >
        <path
            fill="currentColor"
            d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"
        ></path>
    </svg>
);
export const ArrowIcon = ({ width = '3.6rem', height = '8rem', classNames }) => (
    <svg
        width={width}
        height={height}
        className={classNames}
        viewBox="0 0 36 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8h6.686a8 8 0 0 0 5.657-2.343l4.95-4.95a1 1 0 0 1 1.414 0l4.95 4.95A8 8 0 0 0 29.314 8H36 0z"
            fill="#545454"
            fillOpacity=".92"
        />
    </svg>
);

export const ArrowNextIcon = ({ width = '3.6rem', height = '8rem', classNames }) => {
    <svg
        width={width}
        height={height}
        className={classNames}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <symbol id="icon-next" viewBox="0 0 24 24">
            <path d="M8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6-6-6-1.41 1.41z"></path>
        </symbol>
    </svg>;
};

export const PlayIcon = ({ width = '5.1rem', height = '5.1rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <circle cy="12" cx="12" fill="#1e1e1c" r="10"></circle>
            <path d="M0 12A12 12 0 1012 0 12 12 0 000 12zm18 .137L8.4 16.8V7.2l9.6 4.937z"></path>
        </svg>
    );
};

export const NewIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
        </svg>
    );
};

export const LanguageIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
        </svg>
    );
};

export const SubTitle = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
        </svg>
    );
};

export const PlayOverlayIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <circle cy="12" cx="12" fill="#1e1e1c" r="10"></circle>
            <path d="M0 12A12 12 0 1012 0 12 12 0 000 12zm18 .137L8.4 16.8V7.2l9.6 4.937z"></path>
        </svg>
    );
};

export const WishListIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
    );
};

export const VideoIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z"></path>
        </svg>
    );
};

export const ArticlesIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path>
        </svg>
    );
};

export const DownloadAbleIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M11.17 8l-2-2H4v12h16V8h-8.83zM4 4h6l2 2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2zm6.55 9v-3h2.9v3H16l-4 4-4-4h2.55z"></path>
        </svg>
    );
};

export const MobileIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
        </svg>
    );
};

export const LifeTimeIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2A5.37 5.37 0 005.4 6.62C2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12a5.386 5.386 0 003.82 1.57c2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"></path>
        </svg>
    );
};

export const TrophyIcon = ({ width = '3rem', height = '3rem', classNames }) => {
    return (
        <svg
            width={width}
            height={height}
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
        >
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z"></path>
        </svg>
    );
};
