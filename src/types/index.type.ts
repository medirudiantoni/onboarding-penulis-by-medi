export interface Genre {
    label: string,
    value: string
}

export interface Profile {
    fullname: string,
    username: string,
    email: string,
    bio: string,
    writingLevel: 'Pemula' | 'Jarang' | 'Sering' | 'Profesional' | '',
    imageUrl: string,
}