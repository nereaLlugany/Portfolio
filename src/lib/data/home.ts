import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nerea Wenting';

export const lastName = 'Llugany Montoya';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

export const links: Array<{ platform: Platform; link: string }> = [

];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
