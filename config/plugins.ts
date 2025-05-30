export default ({ env }: { env: (key: string) => string }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key:    env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
            upload: {
              folder: 'fromStrapi',
            },
            uploadStream: {
              folder: 'fromStrapi',
            },
            delete: {},
        },
      },
    },
    'schemas-to-ts': {
        enabled: true,
      },
  });