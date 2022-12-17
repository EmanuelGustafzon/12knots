import client from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export default client ({
    projectId: '5rs20zvd',
    dataset: 'production',
    apiVersion: '2022-12-14', 
    token: process.env.PULIC_SANITY_TOKEN,
    useCdn: true

})

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(300).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(580).url();
}

export { urlForThumbnail, urlFor };