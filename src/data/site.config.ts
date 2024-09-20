interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Cebollitas', // Site author
	title: 'Blog', // Site title.
	description: 'Blog para el curso de Ingeniería de Software', // Description to display in the meta tags
	lang: 'es-MX',
	ogLocale: 'en_MX',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
