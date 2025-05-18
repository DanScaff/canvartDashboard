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
              transformation: [{ angle: 'auto' }],
            },
            uploadStream: {
              folder: 'fromStrapi',
              transformation: [{ angle: 'auto' }],
            },
                  actionParams: {
        transformation: [{ angle: 'auto' }],    // oppure: { effect: 'auto_orientation' }
      },
            delete: {},
        },
      },
    },
    'schemas-to-ts': {
        enabled: true,
      },
  });