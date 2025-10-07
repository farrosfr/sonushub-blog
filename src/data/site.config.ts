interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog.sonushub.id/',
	author: 'SonusHUB',
	title: 'Blog SonusHUB', // Judul lebih deskriptif untuk SEO
	description:
		'Wawasan terbaru seputar material kelistrikan, efisiensi energi, dan teknologi energi terbarukan.', // Deskripsi sesuai konteks bisnis Anda
	lang: 'id-ID', // Ganti ke Bahasa Indonesia
	ogLocale: 'id_ID', // Ganti ke locale Indonesia
	shareMessage: 'Bagikan artikel ini', // Pesan saat berbagi di media sosial
	paginationSize: 6
}
