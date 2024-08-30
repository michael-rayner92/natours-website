/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'koadcwxhzvnkmycuuhxf.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/cabin-images/**'
			}
		]
	}
	// output: 'export' // Enable for full static generation
};

export default nextConfig;
