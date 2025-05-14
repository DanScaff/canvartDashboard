export default {
    async afterCreate(event) {
      const { result } = event;
  
      if (result.image && result.image.provider_metadata) {
        const publicId = result.image.provider_metadata.public_id;
  
        await strapi.entityService.update('api::image.image', result.id, {
          data: {
            cloudinaryPublicId: publicId,
          },
        });
  
        console.log(`✅ cloudinaryPublicId saved: ${publicId}`);
      }
    },
  };