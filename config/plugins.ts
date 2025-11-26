export default ({ env }) => ({
	// ...
	upload: {
		config: {
			provider: 'cloudinary',
			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),
				api_key: env('CLOUDINARY_KEY'),
				api_secret: env('CLOUDINARY_SECRET'),
				secure: true,
			},
			actionOptions: {
				upload: {
					folder: 'strapi-uploads',
					resource_type: 'image',
					transformation: [
						{ width: 250, height: 250, crop: 'limit' },
					],
				},
				delete: {},
			},
		},
	},
	// ...
});
