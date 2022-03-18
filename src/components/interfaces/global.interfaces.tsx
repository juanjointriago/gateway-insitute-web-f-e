export interface linkComponent {
    path: string,
    content: string | JSX.Element | undefined
}

export interface navLinkComponent {
    path: string,
    content: string | JSX.Element | undefined
}

export interface roleInterface {
    role: 'teacher' | 'student',
}