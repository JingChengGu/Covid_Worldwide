import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
   		paths: {
      	// if your repo is named 'my-repo', your base path would be '/my-repo'
      	base: '/Covid_Worldwide',
    },
	}
};

export default config;
